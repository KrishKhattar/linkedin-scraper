function getTextInsideSpan() {
  const mainSpans = document.querySelectorAll('span[dir="ltr"]');

  const filteredSpans = Array.from(mainSpans).filter((span) =>
    span.querySelector('span[aria-hidden="true"]')
  );

  const resultArray = Array.from(filteredSpans).map(
    (span) => span.querySelector('span[aria-hidden="true"]').innerText
  );
  if (resultArray.length !== 0) {
    return resultArray;
  } else {
    return "kuch nahi mila ";
  }
}
