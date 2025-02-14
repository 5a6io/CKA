import os
from dotenv import load_dotenv
from tkinter import image_names
import requests

load_dotenv()

NOTION_TOKEN = os.getenv("NOTION_TOKEN")
DATABASE_ID = os.getenv("NOTION_DATABASE_ID")
README_FILE = "README.md"

HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
}

IMAGE_DIR = "CKA/images"

def fetch_notion_database():
    url = f"https://api.notion.com/v1/database/{DATABASE_ID}/query"
    response = requests.post(url, headers=HEADERS)

    if response.status_code != 200:
        print("Error:", response.status_code, response.text)
        return []

    data = response.json()
    return data.get("results", [])

def fetch_notion_pages(page_id):
    url = f"https://api.notion.com/v1/blocks/{page_id}/children"
    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        print(f"Notion 페이지 요청 실패: {response.text}")

    return response.json().get("results", [])

def download_image(image_url, folder_name):
    os.makedirs(IMAGE_DIR, exist_ok=True)

    image_name = os.path.basename(image_url.split("?")[0])
    image_path = os.path.join(IMAGE_DIR, image_name)

    response = requests.get(image_url)
    if response.status_code == 200:
        with open(image_path, "wb") as img_file:
            img_file.write(response.content)
        print(f"✅ 이미지 저장 완료: {image_path}")
        return f"images/{image_name}"  # Markdown에서 참조할 경로
    else:
        print(f"❌ 이미지 다운로드 실패: {image_url}")
        return None


def convert_to_md(blocks, folder_name):
    md_content = ""

    for block in blocks:
        block_type = block["type"]

        if block_type == "paragraph":
            text_content = block[block_type].get("text", [{}])[0].get("plain_text", "")
            md_content += f"{text_content}\n\n"

        elif block_type == "heading_1":
            text_content = block[block_type].get("text", [{}])[0].get("plain_text", "")
            md_content += f"# {text_content}\n\n"

        elif block_type == "heading_2":
            text_content = block[block_type].get("text", [{}])[0].get("plain_text", "")
            md_content += f"## {text_content}\n\n"

        elif block_type == "heading_3":
            text_content = block[block_type].get("text", [{}])[0].get("plain_text", "")
            md_content += f"### {text_content}\n\n"

        elif block_type == "image":
            image_url = block["image"]["file"]["url"]
            image_path = download_image(image_url, folder_name)
            if image_path:
                md_content += f"![이미지]({image_path})\n\n"

    return md_content


def parse_notion_to_md(notion_data):
    """Notion 데이터에서 필요한 정보만 추출"""
    lectures = []
    for page in notion_data:
        properties = page.get("properties", {})
        name = properties.get("Name", {}).get("title", [{}])[0].get("text", {}).get("content", "No Title")
        url = page.get("url", "#")
        status = properties.get("Status", {}).get("select", {}).get("name", "Not Started")
        emoji = "✅" if status == "Completed" else "⏳" if status == "In Progress" else "❌"
        lectures.append(f"{emoji} [{name}]({url})")

    return lectures

def update_readme(lectures):
    # README.md 읽기
    with open("README.md", "r", encoding="utf-8") as f:
        content = f.read()

    pages = fetch_notion_pages()

    table_rows = "| 섹션 | 강의 제목 | 완료 여부 |\n|------|---------|--------|\n"
    for page in pages:
        title = page["properties"]["Name"]["title"][0]["text"]["content"]
        status = page["properties"]["Completed"]["checkbox"] if "Completed" in page["properties"] else False
        status_icon = "✅" if status.lower() == "completed" else "❌"

        table_rows += f"| {title} | {status_icon} |\n"

    # 기존 테이블을 찾아 업데이트
    updated_content = f"|{title}|{status_icon}|"
    # README.md 다시 저장
    with open("README.md", "w", encoding="utf-8") as f:
        f.write(updated_content)

def save_markdown_file(folder_name, filename, content):
    """Markdown 파일 저장"""
    os.makedirs(folder_name, exist_ok=True)  # 폴더 생성
    file_path = os.path.join(folder_name, filename)

    with open(file_path, "w", encoding="utf-8") as file:
        file.write(content)

    print(f"✅ 저장 완료: {file_path}")

if __name__ == "__main__":
    pages = fetch_notion_pages(DATABASE_ID)

    for page in pages:
        page_id = page["id"]
        title = page["properties"]["Name"]["title"][0]["text"]["content"]
        folder_name = f"CKA/{title.replace(' ', '_')}"  # 폴더명 설정
        filename = f"{title.replace(' ', '_')}.md"  # 파일명 설정

        blocks = fetch_notion_pages(page_id)
        if blocks:
            md_content = parse_notion_to_md(blocks, folder_name)
            save_markdown_file(folder_name, filename, md_content)
