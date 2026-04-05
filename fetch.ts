async function fetchItinerary(url: string) {
  const res = await fetch(url);
  const text = await res.text();
  console.log(text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').substring(0, 3000));
}
fetchItinerary('https://www.azimtours.com/Seven-Churches-Of-Revelation-Tour');
fetchItinerary('https://www.azimtours.com/Foot-Steps-Of-St-Paul');
