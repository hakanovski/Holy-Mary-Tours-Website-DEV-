async function getWikiImages(title) {
  const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=images&format=json`);
  const data = await res.json();
  const pages = data.query.pages;
  const pageId = Object.keys(pages)[0];
  const images = pages[pageId].images;
  
  if (!images) return;
  
  for (const img of images) {
    const imgTitle = img.title;
    const imgRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(imgTitle)}&prop=imageinfo&iiprop=url&format=json`);
    const imgData = await imgRes.json();
    const imgPages = imgData.query.pages;
    const imgPageId = Object.keys(imgPages)[0];
    const url = imgPages[imgPageId].imageinfo?.[0]?.url;
    if (url && (url.endsWith('.jpg') || url.endsWith('.JPG'))) {
      console.log(url);
    }
  }
}

getWikiImages('Library_of_Celsus');
getWikiImages('Crucifixion_of_Jesus');
