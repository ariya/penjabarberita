# Penjabar Berita

![npm (scoped)](https://img.shields.io/npm/v/@ariya/penjabarberita)
[![GitHub license](https://img.shields.io/github/license/ariya/penjabarberita)](https://github.com/ariya/penjabarberita/blob/master/LICENSE)
![Tests](https://github.com/ariya/penjabarberita/workflows/Tests/badge.svg)


[Bahasa Indonesia](#indonesian) | [English](#english)

---

### <a name="indonesian"></a>Bahasa Indonesia

**Penjabar Berita**: [pustaka JavaScript](https://www.npmjs.com/package/@ariya/penjabarberita) untuk Node.js guna mendapatkan daftar artikel (judul, tautan, waktu) dari berkas HTML yang mewakili indeks berita tersebut.

Penjabar Berita dikhususkan untuk mengolah surat kabar daring Indonesia. Saat ini, yang bisa diproses adalah indeks berita dari Antara, BBC Indonesia, CNBC Indonesia, CNN Indonesia, Intisari, Jawa Pos, Kompas, Liputan 6, Republika, Tempo, The Conversations, TurnBackHoax.

Instalasi: `npm install @ariya/penjabarberita`.

Misalkan berkas `data.html` didapatkan dengan mengambil indeks berita dari laman surat kabar Kompas, katakanlah menggunakan cURL dengan langkah `curl -o data.html https://www.kompas.com/tag/virus-corona`, maka berkas tersebut bisa diproses seperti di bawah ini:

```js
const fs = require('fs');
const penjabarberita = require('@ariya/penjabarberita');

const buffer = fs.readFileSync('data.htm', 'utf-8');
const list = penjabarberita(buffer.toString());
console.log(list.map(n => n.title));
```

yang akan menghasilkan keluaran seperti:
```
[
  'Pentingnya Meningkatkan Sistem Kekebalan Tubuh dengan Vitamin',
  'Bisakah Virus Corona Bertahan di Rambut Manusia?',
  // dst...
]
```

Di samping judul artikel (`title`), bisa juga didapatkan tautan (`url`) dan tanggal/waktu (`timestamp`, sebagai Unix epoch).

---

### <a name="english"></a>English

**Penjabar Berita**: [a JavaScript library](https://www.npmjs.com/package/@ariya/penjabarberita) for Node.js to extract the article list (title, link, timestamp) from its HTML representation.

Penjabar Berita is geared towards processing the article index of online news sites in Indonesia, currently supporting Antara, BBC Indonesia, CNBC Indonesia, CNN Indonesia, Intisari, Jawa Pos, Kompas, Liputan 6, Republika, Tempo, The Conversations, TurnBackHoax.


Installation: `npm install @ariya/penjabarberita`.

Assuming `data.html` is obtained by retrieving the news index from Kompas, for instance (by using cURL) `curl -o data.html https://www.kompas.com/tag/virus-corona`, then the file can be processed as follows:

```js
const fs = require('fs');
const penjabarberita = require('@ariya/penjabarberita');

const buffer = fs.readFileSync('data.htm', 'utf-8');
const list = penjabarberita(buffer.toString());
console.log(list.map(n => n.title));
```

which will result in:
```
[
  'Pentingnya Meningkatkan Sistem Kekebalan Tubuh dengan Vitamin',
  'Bisakah Virus Corona Bertahan di Rambut Manusia?',
  // and so on...
]
```

In addition to the article title (`title`), the article link (`url`) and published date/time (`timestamp`, as Unix epoch) are available as well.