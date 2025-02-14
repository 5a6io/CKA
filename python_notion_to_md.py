import os
from dotenv import load_dotenv
from tkinter import image_names
import requests
import re
import json

load_dotenv()

NOTION_TOKEN = os.getenv("NOTION_TOKEN")
DATABASE_ID = os.getenv("NOTION_DATABASE_ID")
README_FILE = "README.md"

HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
}

def fetch_notion_database():
    url = f"https://api.notion.com/v1/database/{DATABASE_ID}/query"
    response = requests.post(url, headers=HEADERS)

    if response.status_code != 200:
        print("Error:", response.status_code, response.text)
        return []

    return response.json()

def fetch_notion_pages(page_id):
    url = f"https://api.notion.com/v1/blocks/{page_id}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        print(f"Notion 페이지 요청 실패: {response.text}")

    return response.json()

def download_image(image_url, folder_name):
    IMAGE_DIR = f"CKA/{folder_name}/images"
    os.makedirs(IMAGE_DIR, exist_ok=True)

    image_name = os.path.basename(image_url.split("?")[0])
    image_path = os.path.join(IMAGE_DIR, image_name)

    response = requests.get(image_url)
    if response.status_code == 200:
        with open(image_path, "wb") as img_file:
            img_file.write(response.content)
        print(f"✅ 이미지 저장 완료: {image_path}")
        return f"{folder_name}/{image_name}"  # Markdown에서 참조할 경로
    else:
        print(f"❌ 이미지 다운로드 실패: {image_url}")
        return None


def convert_to_md(title, blocks, folder_name):
    md_content = f"# 📕 {title}\n"

    for block in blocks:
        block_type = block["type"]

        if block_type == "bookmark":
            url = block[block_type]['url']
            md_content += f"[{url}]{url}"
        elif block_type == "embed":
            md_content += f"![]({block[block_type]['url']})"

        elif block_type == "bulleted_list_item":
            items = block[block_type]['rich_text']
            for i in range(len(items)):
                md_content += f"- {items[i]['text']['content']}\n"
                if block['has_children']:
                    md_content += f"    * {items['children'][0]['paragraph']['rich_text'][0]['text']['content']}\n"

        elif block_type == "callout":
            icon = block[block_type]['icon']['emoji']
            items = block[block_type]['rich_text']
            md_content += f'> {icon}\n>\n>'
            for i in range(len(items)):
                md_content += f"{items[i]['text']['content']}"

        elif block_type == "code":
            lang = block[block_type]
            codes = block[block_type]['rich_text']
            code = ""
            for i in range(len(codes)):
                code += codes[i]['text']['content']
            md_content += f"```{lang}\n{code}\n```\n"

        elif block_type == "divider":
            md_content += "---\n"

        elif block_type == "heading_1":
            text_content = block[block_type]
            if block['is_toggleable']:
                md_content += f"<details><summary># {text_content['text']['content']}</summary></details>\n"
            md_content += f"# {text_content}\n"

        elif block_type == "heading_2":
            text_content = block[block_type]
            if block['is_toggleable']:
                md_content += f"<details><summary>## {text_content['text']['content']}</summary></details>\n"
            md_content += f"## {text_content}\n"

        elif block_type == "heading_3":
            text_content = block[block_type]
            if block['is_toggleable']:
                md_content += f"<details><summary>### {text_content['text']['content']}</summary></details>\n"
            md_content += f"### {text_content}\n"

        elif block_type == "image":
            image_url = block['image']['external']['url']
            image_path = download_image(image_url, folder_name)
            if image_path:
                md_content += f"![이미지]({image_path})\n"

        elif block_type =="numbered_list_item":
            items = block[block_type]['rich_text']
            for i in range(len(items)):
                md_content += f"{i+1}. {items[i]['text']['content']}\n"
                if block['has_children']:
                    md_content += f"    {i+1}. {items['children'][0]['paragraph']['rich_text'][0]['text']['content']}\n"

        elif block_type == "paragraph":
            text_content = block[block_type]['rich_text'][0]['text']['content']
            md_content += f"{text_content}\n"

        elif block_type == "quote":
            md_content += f"> {block[block_type]['rich_text'][0]['text']['content']}\n"

        elif block_type == "to_do":
            md_content += "- [x]" if block[block_type]['checked'] else "- [ ]"
            md_content += f"{block[block_type]['rich_text'][0]['text']['content']}\n"

        elif block_type == "toggle":
            md_content += f"<details><summary>{block[block_type]['rich_text'][0]['text']['content']}</summary>{block[block_type]['rich_text'][0]['text']['content']}</details>"

    return md_content


def update_readme():
    # README.md 읽기
    pages = fetch_notion_database()

    summary_section = """
        # 🌟 CKA (Certified Kubernetes Administrator)

        ## ✍🏻 Summarize Lecture

        I summarized the lecture with watching videos on 'Certified Kubernetes Administrator(CKA) with Practice Test'.
        """
    table_rows = "| Section | Done |\n|:------|:--------:|\n"
    for page in pages:
        title = page["properties"]["title"]["text"]["content"]
        status = page["properties"]["Task completed"]["checkbox"]
        status_icon = "✅" if status == True else "❌"

        table_rows += f"| {title} | {status_icon} |\n"

    # 기존 테이블을 찾아 업데이트
    updated_content = summary_section + table_rows
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
    update_readme()

    pages = fetch_notion_database()
    for page in pages:
        page_id = page["id"]
        title = page["name"]
        folder_name = f"CKA/{title.replace(' ', '_')}"  # 폴더명 설정
        filename = f"{title.replace(' ', '_')}.md"  # 파일명 설정

        blocks = fetch_notion_pages(page_id)
        if blocks:
            md_content = convert_to_md(title, blocks, folder_name)
            save_markdown_file(folder_name, filename, md_content)
