console.log("Content script loaded on LinkedIn");

function getInformation() {
  let names = getTextInsideSpan();
  let links = getFilteredUniqueLinksArray();
  console.log(names);
  console.log(links);
}
