# Penjabar Berita

![npm (scoped)](https://img.shields.io/npm/v/@ariya/penjabarberita)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@ariya/penjabarberita.svg)
[![GitHub license](https://img.shields.io/github/license/ariya/penjabarberita)](https://github.com/ariya/penjabarberita/blob/master/LICENSE)
![Tests](https://github.com/ariya/penjabarberita/workflows/Tests/badge.svg)


[Bahasa Indonesia](#indonesian) | [English](#english)

---

### <a name="indonesian"></a>Bahasa Indonesia

**Penjabar Berita**: [pustaka](https://www.npmjs.com/package/@ariya/penjabarberita) JavaScript untuk mendapatkan daftar artikel (judul, tautan, waktu) dari berkas HTML yang mewakili indeks berita tersebut.

Penjabar Berita dikhususkan untuk mengolah surat kabar daring Indonesia. Saat ini, yang bisa diproses adalah indeks berita dari Antara, BBC Indonesia, CNBC Indonesia, CNN Indonesia, Intisari, Jawa Pos, Kompas, Liputan 6, Republika, Tempo, The Conversations, TurnBackHoax.

Instalasi: `npm install @ariya/penjabarberita`.

Misalkan berkas `data.html` didapatkan dengan mengambil indeks berita dari laman surat kabar Kompas, katakanlah menggunakan cURL dengan langkah `curl -o data.html https://www.kompas.com/tag/virus-corona`, maka berkas tersebut bisa diproses seperti di bawah ini:

```js
const fs = require('fs');
const penjabarberita = require('@ariya/penjabarberita');

const buffer = fs.readFileSync('data.htm', 'utf-8');
const list = penjabarberita(buffer.toString());
console.log(list);
```

yang akan menghasilkan keluaran seperti:
```
[
  {
    title: 'Pentingnya Meningkatkan Sistem Kekebalan Tubuh dengan Vitamin',
    url: 'http://www.kompas.com/sains/read/2020/05/18/034000423/pentingnya-meningkatkan-sistem-kekebalan-tubuh-dengan-vitamin',
    timestamp: 1589748000435
  },
  {
    title: 'Bisakah Virus Corona Bertahan di Rambut Manusia?',
    url: 'http://lifestyle.kompas.com/read/2020/05/17/211500320/bisakah-virus-corona-bertahan-di-rambut-manusia-',
    timestamp: 1589724900444
  },
  ...
]
```

---

### <a name="english"></a>English

**Penjabar Berita**: a JavaScript [library](https://www.npmjs.com/package/@ariya/penjabarberita) is used to extract the article list (title, link, timestamp) from its raw news HTML.

Penjabar Berita is geared towards processing the news index of online news sites in Indonesia, currently supporting Antara, BBC Indonesia, CNBC Indonesia, CNN Indonesia, Intisari, Jawa Pos, Kompas, Liputan 6, Republika, Tempo, The Conversations, TurnBackHoax.


Installation: `npm install @ariya/penjabarberita`.

Assuming `data.html` is obtained by retrieving the news index from Kompas, for instance (by using cURL) `curl -o data.html https://www.kompas.com/tag/virus-corona`, then the file can be processed as follows:

```js
const fs = require('fs');
const penjabarberita = require('@ariya/penjabarberita');

const buffer = fs.readFileSync('data.htm', 'utf-8');
const list = penjabarberita(buffer.toString());
console.log(list);
```

which will result in:
```
[
  {
    title: 'Pentingnya Meningkatkan Sistem Kekebalan Tubuh dengan Vitamin',
    url: 'http://www.kompas.com/sains/read/2020/05/18/034000423/pentingnya-meningkatkan-sistem-kekebalan-tubuh-dengan-vitamin',
    timestamp: 1589748000435
  },
  {
    title: 'Bisakah Virus Corona Bertahan di Rambut Manusia?',
    url: 'http://lifestyle.kompas.com/read/2020/05/17/211500320/bisakah-virus-corona-bertahan-di-rambut-manusia-',
    timestamp: 1589724900444
  },
  ...
]
```
