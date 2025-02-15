const fs = require('fs');
const { Client } = require('@notionhq/client');
const execSync = require('child_process').execSync;
const { NotionToMarkdown } = require('notion-to-md');

require('dotenv').config();
const notion = new Client({auth : process.env.NOTION_API_KEY});
const n2m = new NotionToMarkdown({ 
    notionClient: notion,
    config: {
        seperateChildPage: true,
    }
});
const databaseId = process.env.DATABASE_ID;
  
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

      const pages = response.results.map(page => ({
        pageId: page.id,
        name: page.properties.Name.title[0].text.content
       }));
      for (let page of pages){
        const pageId = page.pageId;
        const name = page.name;
        const mdblocks = await n2m.pageToMarkdown(pageId);
        const mdString = n2m.toMarkdownString(mdblocks);
        const filePath = `${saveDirectory}/${name}.md`;
        let mdContent = mdString.parent;
        
        fs.writeFileSync(filePath, mdContent);
        console.log(`파일 ${filePath}이 저장되었습니다.`)
      }
    } catch (error){
        console.error("다음과 같은 오류 발생:", error);
    }
})();