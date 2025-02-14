import os
import requests
from dotenv import load_dotenv

# 환경 변수 로드
load_dotenv()

NOTION_TOKEN = os.getenv("NOTION_TOKEN")
PAGE_ID = os.getenv("NOTION_PAGE_ID")

HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
}

def fetch_notion_page(page_id):
    url = f"https://api.notion.com/v1/blocks/{page_id}/children"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        return response.json()
    else:
        print("Error:", response.status_code, response.text)
        return None

def parse_notion_to_md(notion_data):
    md_content = "# Notion Page Content\n\n"

    for block in notion_data.get("results", []):
        if block["type"] == "paragraph":
            text = "".join([t["plain_text"] for t in block["paragraph"]["rich_text"]])
            md_content += text + "\n\n"

    return md_content

def save_to_markdown(content, filename="notion_page.md"):
    with open(filename, "w", encoding="utf-8") as file:
        file.write(content)

if __name__ == "__main__":
    notion_data = fetch_notion_page(PAGE_ID)
    if notion_data:
        markdown_content = parse_notion_to_md(notion_data)
        save_to_markdown(markdown_content)
        print("Markdown 파일 저장 완료!")
