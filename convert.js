import { writeFileSync } from 'node:fs';
import { Client } from '@notion-sdk/client';
import { execSync } from 'child_process';
import notion2md from 'notion2md';
import dotenv from 'dotenv';

dotenv.config();
const notion = new Client({auth : process.env.NOTION_API_KEY});

async function getDatabasePages(databaseId) {
    const response = await notion.databases.query({
        database_id: databaseId,
    })

    return response.results;
}

async function convertNotionPageToMD(pageId) {
    try {
      const markdownContent = await notion2md(pageId);
      return markdownContent;
    } catch (error) {
      console.error('Error converting page to MD:', error);
      return null;
    }
}

function getPageTitle(page){
    const titleProperty = page.properties.title;
    return titleProperty ? titleProperty.title[0].text.content : 'Untitled';
}
  
// 데이터베이스 내 페이지들을 순차적으로 변환
async function convertDatabaseToMarkdown(databaseId) {
const pages = await getDatabasePages(databaseId);
  
    for (const page of pages) {
      const pageId = page.id;
      const pageTitle = getPageTitle(page);
      const markdownContent = await convertNotionPageToMD(pageId);
  
      if (markdownContent) {
        writeFileSync(`./markdown_pages/${pageTitle}.md`, markdownContent);
      }
    }
  
    console.log('모든 페이지를 Markdown으로 변환 완료!');
}
  
// 실행: 데이터베이스 ID를 입력하세요
const databaseId = process.env.DATABASE_ID; // 여기에 데이터베이스 ID 입력
convertDatabaseToMarkdown(databaseId).then(() => uploadToGitHub());