// by Ender Smith, Editor-in-Chief, AurekFonts

const fonts = [
  {
    query: 'Ataribesh',
    name: 'Ataribesh',
    exampleImage: './Ataribesh/images/Ataribesh-example-3.png',
    script: 'Aurebesh',
    foundry: 'AurekFonts',
    artistNote: '',
    description: 'An 8-bit Aurebesh font based on classic videogame fonts; 4 styles',
    downloadUrl: './Ataribesh/Ataribesh-4Pack.zip',
    downloadType: '.ZIP',
    license: 'This font is free for everyone, forever.',
    licenseTag: 'Free',
    year: '2020',
    charactersImage: './Ataribesh/images/Ataribesh-charset.png',
    class: 'Ataribesh',
    textSize: '1rem',
    pangram: pangrams.JediWisdom,
  },
  {
    query: 'AurebeshPixelSagas2000',
    name: 'Aurebesh (Pixel Sagas, 2000)',
    exampleImage: undefined,
    script: 'Aurebesh',
    foundry: 'Pixel Sagas',
    artistNote: '',
    description: 'Aurebesh font; capitals for digraphs; incorrect tech numerals',
    downloadUrl: './Aurebesh%20(Pixel%20Sagas%202000)/aurebesh-old.ttf',
    downloadType: '.TTF',
    license: 'Free for all personal and commercial uses.',
    licenseTag: 'Free',
    year: '2000',
    charactersImage: undefined,
    class: 'AurebeshPixelSagas2000',
    textSize: '1rem',
    pangram: pangrams.JediWisdom,
  },
  {
    query: 'AurebeshPixelSagas',
    name: 'Aurebesh (Pixel Sagas)',
    exampleImage: undefined,
    script: 'Aurebesh',
    foundry: 'Pixel Sagas',
    artistNote: '',
    description: 'Popular Aurebesh font at a lighter weight; inverted capitals',
    downloadUrl: './Aurebesh%20(Pixel%20Sagas)/aurebesh.zip',
    downloadType: '.ZIP',
    license: 'Free for personal, non-commercial use.',
    licenseTag: 'Free Non-Commercial',
    year: '2013',
    charactersImage: undefined,
    class: 'AurebeshPixelSagas',
    textSize: '1rem',
    pangram: pangrams.Podracing,
  },
  {
    query: 'AurebeshCalligraphy',
    name: 'Aurebesh Calligraphy',
    exampleImage: './Aurebesh%20Calligraphy/AurebeshCalligraphy-example.png',
    script: 'Aurebesh',
    foundry: 'Convallarias Art',
    artistNote: '"I didn’t find any sort of things like Aurebesh cursive, so decided to do one myself c:"',
    description: 'Brush-stroke calligraphic Aurebesh font',
    downloadUrl: './Aurebesh%20Calligraphy/AurebeshCalligraphy.ttf',
    downloadType: '.TTF',
    license: 'This font is "Free for all personal and commercial use."',
    licenseTag: 'Free',
    year: '2018',
    charactersImage: './Aurebesh%20Calligraphy/AurebeshCalligraphy-charset.png',
    class: 'AurebeshCalligraphy',
    textSize: '1.5rem',
    pangram: pangrams.JediWisdom,
  },
  {
    query: 'AurebeshRodian',
    name: 'Aurebesh Rodian',
    exampleImage: './Aurebesh%20Rodian/Aurebesh_Rodian-oblique-outline-example.png',
    script: 'Aurebesh',
    foundry: 'AurekFonts',
    artistNote: '',
    description: 'A curvy and friendly Aurebesh font; 4 styles',
    downloadUrl: './Aurebesh%20Rodian/Aurebesh_Rodian.zip',
    downloadType: '.ZIP',
    license: 'This font is free for everyone, forever.',
    licenseTag: 'Free',
    year: '2020',
    charactersImage: './Aurebesh%20Rodian/Aurebesh_Rodian-charset.png',
    class: 'AurebeshRodian',
    textSize: '1.5rem',
    pangram: pangrams.JediWisdom,
  },
  {
    query: 'AurebeshTycho',
    name: 'Aurebesh Tycho',
    exampleImage: undefined,
    script: 'Aurebesh',
    foundry: 'Tycho Ordo',
    artistNote: '',
    description: 'A robust Aurebesh font; ligature-digraphs; optional inverted capitals and tech numerals',
    downloadUrl: './Aurebesh%20(Tycho%20Ordo)/AurebeshTycho.zip',
    downloadType: '.ZIP',
    license: 'Free for personal, non-commercial use.',
    licenseTag: 'Free Non-Commercial',
    year: '2012, 2015, 2020',
    charactersImage: undefined,
    class: 'AurebeshTycho',
    textSize: '1.5rem',
    pangram: pangrams.BlackholeDigraphs,
  },
  {
    query: 'Nirvanabesh',
    name: 'Nirvanabesh',
    exampleImage: './Nirvanabesh/Nirvanabesh-example.png',
    script: 'Aurebesh',
    foundry: 'Vamplify',
    artistNote: `(with kerning by <a href="${pathname}?foundry=AurekFonts">AurekFonts</a>).`,
    description: `A serif Aurebesh font based on the band Nirvana's logotype; no nums; no symbols`,
    downloadUrl: './Nirvanabesh/Nirvanabesh.otf',
    downloadType: '.OTF',
    license: 'Free for all personal and commercial uses.',
    licenseTag: 'Free',
    year: '2020',
    charactersImage: './Nirvanabesh/Nirvanabesh-charset.png',
    class: 'Nirvanabesh',
    textSize: '5rem',
    pangram: pangrams.short,
  },
]