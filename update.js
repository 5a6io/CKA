import { Client } from '@notionhq/client';
import { writeFileSync } from 'node:fs';
import dotenv from 'dotenv';

dotenv.config();
const notion = new Client({auth : process.env.NOTION_API_KEY});
const databaseId = process.env.DATABASE_ID;
  
(async () => {
    const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: 'Name',
                direction: 'ascending',
            },
        ],
    });

    let mdContent = `# 🌟CKA(Certified Kubernetes Administrator)
    
    ✍🏻I summarized the lecture with watching videos on 'Certified Kubernetes Administrator(CKA) with Practice Test.
    
    `;

    const pages = response.results.map(page => {
    const name = page.properties?.Name?.title?.[0]?.text?.content;
    const checkbox = page.properties?.Checkbox?.checkbox;
      
    return {
            name: name,
            checkbox: checkbox
        };
    });

    mdContent += `<table><thead><tr><th>Section</th><th>:white_check_mark:</th></tr></thead><tbody>`

    for (let page of pages){
        const name = page.name;
        let parts = name.split(":");
        mdContent += `<tr><td>${parts[0]}-${parts[1]}</td>`;
        mdContent += (page.checkbox == true) ? `<td>:white_check_mark:</td></tr>` : `<td></td></tr>`;
    }

    mdContent += `</tbody></table>`;
      
    writeFileSync("README.md", mdContent, "utf8", (e) => {
        console.log(e);
    });
})();