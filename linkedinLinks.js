function getFilteredUniqueLinksArray() {
  // Find all anchor tags with class 'app-aware-link'
  const anchorTags = document.querySelectorAll("a.app-aware-link");

  // Create an array to store filtered unique links
  const filteredUniqueLinksArray = [];

//   const excludedLinkedInUrls = [
//     "https://www.linkedin.com/feed/",
//     "https://www.linkedin.com/mynetwork/",
//     "https://www.linkedin.com/jobs/",
//     "https://www.linkedin.com/messaging/",
//     "https://www.linkedin.com/notifications/",
//     "https://www.linkedin.com/sales",
//     "https://www.linkedin.com/search/results/people/",
//     "https://www.linkedin.com/talent/job-posting-redirect",
//     "https://www.linkedin.com/premium/products/",
//     "https://www.linkedin.com/company/98046425/admin/inbox",
//     "https://www.linkedin.com/search/results/people/headless",
//   ];

  // Regex to match LinkedIn profile links in the form 'https://www.linkedin.com/in/username' (username without 'ACoA' format)
  const linkedinProfileRegex =
    /^https:\/\/www\.linkedin\.com\/in\/[a-z0-9\-]+$/;

  anchorTags.forEach((anchor) => {
    let link = anchor.getAttribute("href");

    link = link ? link.split("?")[0] : null;

    if (
      link &&
      linkedinProfileRegex.test(link) && // Match only LinkedIn profile URLs with valid usernames
      !filteredUniqueLinksArray.includes(link) // Ensure uniqueness
    ) {
      filteredUniqueLinksArray.push(link);
    }
  });

  return filteredUniqueLinksArray;
}
