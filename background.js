console.log("this message is from background.js");

chrome.action.onClicked.addListener((tab) => {
  console.log("Extension icon clicked");

  // Check if the current tab is LinkedIn
  if (tab.url.includes("linkedin.com")) {
    console.log("Sending message to content script");

    // Send a message to content.js to trigger the extraction
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        function: triggerContentScript,
      },
      (result) => {
        console.log(result);
      }
    );
  } else {
    console.log("You must be on a LinkedIn page to extract data.");
  }
});

// This function is executed in the context of the content script
function triggerContentScript() {
  getInformation();
}
