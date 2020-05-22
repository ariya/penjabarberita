const cheerio = require('cheerio');
const tebakmasa = require('@ariya/tebakmasa');

const URL = require('url').URL;

const FRAGMENT_CANDIDATES = [
    'section#content article',
    '.main-content .col-md-8 article',
    '#main-content .item',
    'article',
    '.article__list',
    '.set_subkanal',
    'section li .card',
    '.news-list__item',
    '.recent-news .post-list__desc',
    '#load_berita .ket',
    '#load_content li',
    '.latest__item'
];

const BLOCK_CANDIDATES = [
    'h3:not([class*=news]) a',
    'a.news-list__link',
    'a h2',
    'h1 a',
    'h2 a',
    'h3 a',
    'h4 a',
    'a' // fallback, be careful
];

const TIMESTAMP_CANDIDATES = [
    'time span',
    'time',
    '.simple-share span',
    '.article__date',
    'h6',
    '.date',
    '.post-list__time',
    '.mh-meta',
    '.fs14',
    '.al-date',
    '.latest__date',
    '.suara-date-box'
];

function collect($, selectors) {
    const selector = selectors.find((s) => {
        const els = $(s);
        return els ? els.length > 0 : false;
    });
    if (selector) {
        const els = $(selector).map((i, el) => {
            return $(el).html();
        });
        return [].slice.call(els);
    }
    return [];
}

function identify($, selectors, transform) {
    transform = transform || ((x) => x);
    const selector = selectors.find((s) => {
        const el = $(s);
        return el.length > 0 ? transform(el.first()) : false;
    });
    return selector ? transform($(selector).first()) : null;
}

function getTitle(block) {
    const title = block.attr('title');
    const text = block.text();
    return typeof title === 'string' && title.length > 0
        ? title.trim()
        : typeof text === 'string' && text.length > 0
        ? text.trim()
        : null;
}

function getLink(block, a) {
    return block.attr('href') ? block.attr('href') : a.attr('href');
}

function getTimestamp($$) {
    const parseTime = (el) => tebakmasa(el.text().trim());
    const timestamp = identify($$, TIMESTAMP_CANDIDATES, parseTime);
    if (timestamp && timestamp > 0) return timestamp;
    if ($$('a').length < 3) return identify($$, ['span'], parseTime);
    return timestamp;
}

function findMeta($, meta) {
    const els = $('meta')
        .filter((i, el) => $(el).attr('property') === meta)
        .map((i, el) => $(el).attr('content'));
    return [].slice.call(els);
}

function penjabarBerita(content, baseURL) {
    const $ = cheerio.load(content || '');

    if (!baseURL)
        baseURL = findMeta($, 'og:url')
            .map((u) => 'http://' + new URL(u).hostname)
            .shift();

    return collect($, FRAGMENT_CANDIDATES)
        .map((html) => {
            return { $$: cheerio.load(html) };
        })
        .map(({ $$ }) => {
            return { $$, block: identify($$, BLOCK_CANDIDATES) };
        })
        .filter(({ block }) => block !== null && typeof block !== 'undefined')
        .map(({ $$, block }) => {
            return { $$, block, title: getTitle(block) };
        })
        .filter(({ title }) => typeof title === 'string' && title.length > 0)
        .map(({ $$, block, title }) => {
            return { $$, title, url: getLink(block, $$('a')) };
        })
        .filter(({ url }) => typeof url === 'string' && url.length > 0)
        .map(({ $$, title, url }) => {
            return { $$, title, url: url.startsWith('/') && baseURL ? baseURL + url : url };
        })
        .map(({ $$, title, url }) => {
            return { title, url, timestamp: getTimestamp($$) };
        })
        .filter(({ timestamp }) => typeof timestamp === 'number' && timestamp > 0);
}

module.exports = penjabarBerita;
