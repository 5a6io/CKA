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

    //   const pages = response.results.map(page => ({
    //     pageId: page.id,
    //     name: page.properties.Name.title?.[0].text.content
    //    }));
    
    const pages = response.results.map(page => {
        // page.id는 정상적으로 id를 가져올 수 있어야 합니다.
        const pageId = page.id;
        
        // page.properties.Name.title이 있을 경우 name을 가져옵니다.
        const name = page.properties?.Name?.title?.[0]?.text?.content;
      
        // 페이지 데이터를 콘솔로 출력해서 올바르게 추출되고 있는지 확인
        console.log("🔍 pageId:", pageId);
        console.log("🔍 Name:", name);
      
        return {
          pageId: pageId,
          name: name || "이름 없음" // name이 없으면 기본값을 "이름 없음"으로 처리
        };
      });

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