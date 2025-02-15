const fs = require('fs');
const { Client } = require('@notionhq/client');
const execSync = require('child_process').execSync;
const { NotionToMarkdown } = require('notion-to-md');

require('dotenv').config();
const notion = new Client({auth : "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"});
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

    const pages = response.results.map(page => {
        const pageId = page.id;
        const name = page.properties?.Name?.title?.[0]?.text?.content;
      
        return {
          pageId: pageId,
          name: name
        };
      });

      for (let page of pages){
        const mdblocks = await n2m.pageToMarkdown(page.pageId);
        const mdString = n2m.toMarkdownString(mdblocks);
        const filePath = `${saveDirectory}/${page.name}.md`;
        let mdContent = mdString.parent;
        
        console.log(mdString);
        fs.writeFileSync(filePath, mdContent, "utf8");
        console.log(`파일 ${filePath}이 저장되었습니다.`)
      }
    } catch (error){
        console.error("다음과 같은 오류 발생:", error);
    }
})();