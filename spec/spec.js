const fs = require('fs');

const penjabarBerita = require('../index');

function fixture(name) {
    const fname = `spec/fixtures/${name}-index.html`;
    const content = fs.readFileSync(fname, 'utf-8').toString();
    return content;
}

it('should return [] on empty content', function () {
    expect(penjabarBerita()).toEqual([]);
});

it('should extract indexes from Antara', function () {
    const articles = penjabarBerita(fixture('antara'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(10);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from BBC Indonesia', function () {
    const articles = penjabarBerita(fixture('bbcindonesia'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(10);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from CNBC Indonesia', function () {
    const articles = penjabarBerita(fixture('cnbcindonesia'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(12);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from CNN Indonesia', function () {
    const articles = penjabarBerita(fixture('cnnindonesia'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(7);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from Intisari', function () {
    const articles = penjabarBerita(fixture('intisari'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(18);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from Jawa Pos', function () {
    const articles = penjabarBerita(fixture('jawapos'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(15);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from Kompas', function () {
    const articles = penjabarBerita(fixture('kompas'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(15);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from Kontan', function () {
    const articles = penjabarBerita(fixture('kontan'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(10);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from Liputan6', function () {
    const articles = penjabarBerita(fixture('liputan6'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(21);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from Republika', function () {
    const articles = penjabarBerita(fixture('republika'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(40);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from Pikiran Rakyat', function () {
    const articles = penjabarBerita(fixture('pikiranrakyat'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(20);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from Tempo', function () {
    const articles = penjabarBerita(fixture('tempo'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(50);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from TheConversation', function () {
    const articles = penjabarBerita(fixture('theconversation'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(20);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from TurnBackHoax', function () {
    const articles = penjabarBerita(fixture('turnbackhoax'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(20);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});

it('should extract indexes from Viva News', function () {
    const articles = penjabarBerita(fixture('vivanews'));
    expect(articles).toBeDefined();
    expect(articles).not.toBeNull();
    expect(articles).toBeInstanceOf(Array);
    expect(articles.length).toEqual(12);

    articles.forEach(function (article) {
        expect(article.title).toBeInstanceOf(String);
        expect(article.url).toBeInstanceOf(String);
        expect(article.timestamp).toBeInstanceOf(Number);

        expect(article.title.length).toBeGreaterThan(0);
        expect(article.url.length).toBeGreaterThan(0);
        expect(article.timestamp).toBeGreaterThan(1588344660000);
    });
});
