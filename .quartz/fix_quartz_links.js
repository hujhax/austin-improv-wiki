const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'public');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith('.html')) {
      callback(filePath);
    }
  }
}

function main() {
  console.log("Fixing Quartz compiled file links to append .html for note navigation...");
  let filesProcessed = 0;
  let linksRewritten = 0;
  
  walkDir(PUBLIC_DIR, (filePath) => {
    filesProcessed++;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern 1: href=".../file/name.ext" (where ext is jpg, png, gif, jpeg, svg)
    const hrefRegex = /href="([^"]*?\/file\/[^"]+?\.(?:jpg|png|gif|jpeg|svg))(?!\.html)"/gi;
    
    // Pattern 2: data-slug="file/name.ext" (Quartz SPA routing)
    const slugRegex = /data-slug="([^"]*?file\/[^"]+?\.(?:jpg|png|gif|jpeg|svg))(?!\.html)"/gi;
    
    let modified = false;
    
    if (hrefRegex.test(content)) {
      content = content.replace(hrefRegex, (match, p1) => {
        linksRewritten++;
        modified = true;
        return `href="${p1}.html"`;
      });
    }
    
    if (slugRegex.test(content)) {
      content = content.replace(slugRegex, (match, p1) => {
        linksRewritten++;
        modified = true;
        return `data-slug="${p1}.html"`;
      });
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
  
  console.log(`Scan complete. Processed ${filesProcessed} HTML pages.`);
  console.log(`Appended .html suffix to ${linksRewritten} internal file links.`);
}

main();
