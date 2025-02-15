const fs = require('fs');
const { Client } = require('@notionhq/client');
const execSync = require('child_process').execSync;
const { NotionToMarkdown } = require('notion-to-md');

require('dotenv').config();
const notion = new Client({auth : process.env.NOTION_API_KEY});
const n2m = new NotionToMarkdown({ 
    notionClient: notion
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

      const mdContent = `# 🌟CKA(Certified Kubernetes Administrator)\n
      ## ✍🏻Summarize Lecture\n
      I summarized the lecture with watching videos on 'Certified Kubernetes Administrator(CKA) with Practice Test.\n
      |**Section**|**:black_square_button:**|\n
      |:----------|:------:|\n`;
      const properties = response.results.map(page => ({
        properties: page.properties
    }));
      for (let property of properties){
        const name = property.Name.title[0].text.context;
        const checkbox = property.Checkbox.checkbox;
        mdContent += `|${name}|`;
        mdContent += (checkbox == true) ? `:white_check_mark:|\n` : `|\n`;
      }
      
      fs.writeFileSync("README.md", mdContent);
    } catch (error){
        console.error("다음과 같은 오류 발생:", error);
    }
})();