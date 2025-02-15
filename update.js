const fs = require('fs');
const { Client } = require('@notionhq/client');
const execSync = require('child_process').execSync;

require('dotenv').config();
const notion = new Client({auth : process.env.NOTION_API_KEY});
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

      let mdContent = `# 🌟CKA(Certified Kubernetes Administrator)\n
      ## ✍🏻Summarize Lecture
      I summarized the lecture with watching videos on 'Certified Kubernetes Administrator(CKA) with Practice Test.
      
      <table>
      <thead>
        <tr>
            <th>Section</th>
            <th>:black_square_button:</th>
        </tr>
      </thead>
      <tbody>
      `;

      const pages = response.results.map(page => {
        const name = page.properties?.Name?.title?.[0]?.text?.content;
        const checkbox = page.properties?.Checkbox?.checkbox;
      
        return {
          name: name,
          checkbox: checkbox
        };
      });

      for (let page of pages){
        mdContent += `<tr><td>${page.name}</td>`;
        mdContent += (page.checkbox == true) ? `<td><p>U+2705</p></td></tr>` : `<td></td></tr>`;
      }
      mdContent += `</tbody></table>`;
      
      fs.writeFileSync("README.md", mdContent, "utf8");
    } catch (error){
        console.error("다음과 같은 오류 발생:", error);
    }
})();