const fs = require('fs');
const { Client } = require('@notionhq/client');
const execSync = require('child_process').execSync;

require('dotenv').config();
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

    ## ✍🏻Summarize Lecture

    I summarized the lecture with watching videos on 'Certified Kubernetes Administrator(CKA) with Practice Test.
      
    |Section|black_square_button:|
    |:------|:------------------:|
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
        mdContent += `|${page.name}|`;
        mdContent += (page.checkbox == true) ? `|:ballot_box_with_check:|
        ` : `||
        `;
    }
    mdContent += `
    </tbody>
    </table>`;
      
    fs.writeFileSync("README.md", mdContent, "utf8", (e) => {
        console.log(e);
    });
})();