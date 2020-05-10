// by Ender Smith, Editor-in-Chief, AurekFonts

const queryStringParts = window.location.search.split('=');
const pathname = window.location.pathname;

const linkHeader = `<p><a href="${pathname}">[AurekFonts Home]</a> <a href="${pathname}?sort=script">[Fonts by Script]</a> <a href="${pathname}?sort=license">[Fonts by License]</a></p>`;
const homeBanner = `<p><a href="${pathname}"><img src="./AurekFontsBanner.png" alt="AurekFonts Home" title="AurekFonts Home"/></a></p>`;

const routeByQueryString = () => {

  switch(queryStringParts[0]) {
    case '?script':
      document.getElementById('main').innerHTML = generateScriptScreen(scripts.find(script => script.query === queryStringParts[1]));
      break;
    case '?sort':
      document.getElementById('main').innerHTML = queryStringParts[1] === 'script' ? scriptSortScreen : queryStringParts[1] === 'license' ? generateLicenseSortScreen() : homeScreen;
      break;
    case '?font':
      document.getElementById('main').innerHTML = generateFontScreen(fonts.find(font => font.query === queryStringParts[1]));
      break;
    case '?foundry':
      document.getElementById('main').innerHTML = generateFoundryScreen(foundries.find(foundry => foundry.query === queryStringParts[1]));
      break;
    default:
      document.getElementById('main').innerHTML = homeScreen;
      break;
  };
};

window.onload = () => routeByQueryString();

const generateScriptScreen = (script) => {
  if (!script) return homeScreen;

  const freeFontsByFoundry = fonts.filter(font => font.script === script.name && font.licenseTag === 'Free');
  const freeNCFontsByFoundry = fonts.filter(font => font.script === script.name && font.licenseTag === 'Free Non-Commercial');

  const banner = `<p><img src=${script.bannerImage} alt="${script.name}" title="${script.name}, font: ${script.bannerFont}"/></p>`;
  const title = `<h1>${script.name} Fonts</h1>`
  const freeFontHeader = `<h2>Free for All Personal and Commercial Uses</h2>`
  const freeFontListItems = freeFontsByFoundry.reduce((list, font) => list + `<li><a href="${pathname}?font=${font.query}">${font.name}</a> [ <span class="${font.class}">${font.name}</span> ] (${font.description})</li>`, '');
  const freeFontList = `<ul>${freeFontListItems}</ul>`;
  const freeNCFontHeader = `<h2>Free for Personal Non-Commercial Use</h2>`
  const freeNCFontListItems = freeNCFontsByFoundry.reduce((list, font) => list + `<li><a href="${pathname}?font=${font.query}">${font.name}</a> [ <span class="${font.class}">${font.name}</span> ] (${font.description})</li>`, '');
  const freeNCFontList = `<ul>${freeNCFontListItems}</ul>`;

  return linkHeader + 
    banner +
    title + 
    freeFontHeader +
    freeFontList +
    freeNCFontHeader +
    freeNCFontList
}

const generateFontScreen = (font) => {
  if (!font) return homeScreen;
  
  const year = font.year ? ` in ${font.year}` : ``;

  const exampleImage = font.exampleImage ? `<p><img src=${font.exampleImage} alt="${font.name}" title="${font.name} Example"/></p>` : ``;
  const name = `<h1>${font.name} (${font.licenseTag})</h1>`;
  const credit = `<p><a href="${pathname}?script=${font.script}">${font.script}</a> font created by <a href=${pathname}?foundry=${font.foundry}>${font.foundry}</a>${year}.</p>`;
  const artistNote = font.artistNote ? `<p>${font.artistNote}</p>` : ``;
  const description = `<p>${font.description}</p>`;
  const license = `<p>${font.license}</p>`;
  const download = font.downloadUrl ? `<p><a href="${font.downloadUrl}">Download (${font.downloadType})</a></p>` : ``;
  const demo = font.class ? `<h2>Demo</h2><div class="${font.class}" style="font-size: ${font.textSize}" id="editText" contenteditable spellcheck="false">${font.pangram}</div>` : '';
  const characters = font.charactersImage ? `<h2>Characters</h2><p><img src=${font.charactersImage} alt="${font.name} characters" title="${font.name} characters"></p>`: ``;

  return linkHeader + 
    exampleImage + 
    name +  
    credit + 
    artistNote +
    description + 
    license + 
    download + 
    demo + 
    characters;
};

const generateFoundryScreen = (foundry) => {
  if (!foundry) return homeScreen;
  
  const fontsByFoundry = fonts.filter(font => font.foundry === foundry.name);

  const banner = foundry.bannerImage ?`<p><img src=${foundry.bannerImage} alt="${foundry.name}" title="${foundry.name}, font: ${foundry.bannerFont}"/></p>` : ``;
  const name = `<h1>${foundry.licenseTag} fonts by ${foundry.name}</h1>`;
  const supportLink = foundry.supportLink ? `<p>Support ${foundry.name} at <a href="${foundry.supportLink}">${foundry.supportText ? foundry.supportText : foundry.supportLink}</a></p>` : ``;
  const listItems = fontsByFoundry.reduce((list, font) => list + `<li><a href="${pathname}?font=${font.query}">${font.name}</a> [<span class="${font.class}">${font.name}</span>] (${font.description})</li>`, '');
  const fontList = `<ul>${listItems}</ul>`;

  return linkHeader +
    banner +
    supportLink +
    name +
    fontList;
};




