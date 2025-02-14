import fs from 'fs';
import { Client } from '@notionhq/client';
import { execSync } from 'child_process';
import { NotionToMarkdown } from 'notion-to-md';
import dotenv from 'dotenv';

dotenv.config();
const notion = new Client({auth : process.env.NOTION_API_KEY});
const n2m = new NotionToMarkdown({ 
    notionClient: notion,
    config: {
        seperateChildPage: true,
    }
});
const databaseId = process.env.DATABASE_ID;
const email = process.env.EMAIL;
  
(async () => {
    try {
        const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: 'Name',
                direction: 'ascending',
            },
        ],
      });

      const saveDirectory = './summary';

      if (!fs.existsSync(saveDirectory)){
        fs.mkdirSync(saveDirectory);
        console.log(`디렉토리 "${saveDirectory}"가 생성되었습니다.`);
      }

      const pages = response.results.map(page => page.id);
      let i = 0
      for (const pageId of pages){
        const mdblocks = await n2m.pageToMarkdown(pageId);
        const mdString = n2m.toMarkdownString(mdblocks);
        console.log(mdString);
        i += 1;
        const mdHead = `# 📕 Section${i}\n`;
        const content = mdHead + mdString;
        const filePath = `${saveDirectory}/Section${i}.md`;
        
        fs.writeFileSync(filePath, content);
        console.log(`파일 ${filePath}이 저장되었습니다.`)

        execSync('git config --global user.name \'5a6io\'');
        execSync(`git config --global user.email \'${email}\'`);
        const token = process.env.GITHUB_TOKEN;
        execSync(`git remote set-url origin https://x-access-token:${token}@github.com/CKA.git`, {stdio: 'inherit'});
        execSync('git add .', { stdio: 'inherit' });
        execSync('git commit -m "Add markdown files from Notion"', { stdio: 'inherit' });
        execSync('git push -u origin main', { stdio: 'inherit' });  // 또는 main 브랜치 이름을 사용하는 경우
        console.log('변경 사항이 GitHub에 푸시되었습니다.');
      }
    } catch (error){
        console.error("다음과 같은 오류 발생:", error);
    }
})();