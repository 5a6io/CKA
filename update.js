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

    let mdContent = `# 🌟CKA(Certified Kubernetes Administrator)\n\n✍🏻I summarized the lecture with watching videos on 'Certified Kubernetes Administrator(CKA) with Practice Test.\n\n`;

    const pages = response.results.map(page => {
    const name = page.properties?.Name?.title?.[0]?.text?.content;
    const checkbox = page.properties?.Checkbox?.checkbox;
      
    return {
            name: name,
            checkbox: checkbox
        };
    });

    mdContent += `<table>\n<thead>\n<tr>\n<th>Section</th>\n<th>Checkbox</th>\n</tr>\n</thead>\n<tbody>\n`

    for (let page of pages){
        const name = page.name;
        let parts = name.split(":");
        mdContent += `<tr>\n<td>${parts[0]}-${parts[1]}</td>\n`;
        mdContent += (page.checkbox == true) ? `<td>:ballot_box_with_check:</td>\n</tr>\n` : `<td></td>\n</tr>\n`;
    }

    mdContent += `</tbody>\n</table>\n`;
      
    writeFileSync("README.md", mdContent, "utf8", (e) => {
        console.log(e);
    });
})();