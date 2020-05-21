const fs = require('fs');

const penjabarBerita = require('../index');

const names = [];
names.push('antara');
names.push('bbcindonesia');
names.push('cnbcindonesia');
names.push('cnnindonesia');
names.push('intisari');
names.push('jawapos');
names.push('kompas');
names.push('kontan');
names.push('liputan6');
names.push('pikiranrakyat');
names.push('republika');
names.push('tempo');
names.push('theconversation');
names.push('turnbackhoax');
names.push('vivanews');

let allArticles = [];

names.forEach((name) => {
    const fname = `spec/fixtures/${name}-index.html`;
    const content = fs.readFileSync(fname, 'utf-8').toString();
    const start = Date.now();
    let articles = penjabarBerita(content);
    const elapsed = Date.now() - start;
    console.log(name, elapsed, 'ms');
    console.log(articles.length, 'articles:', articles);
    articles = articles.map((n) => {
        return { ...n, source: name };
    });
    allArticles = allArticles.concat(articles);
});

allArticles.sort((p, q) => q.timestamp - p.timestamp);

console.log();
console.log('All articles:');
allArticles.forEach((a) => console.log(`  ${new Date(a.timestamp).toUTCString()} ${a.title} [${a.source}]`));
