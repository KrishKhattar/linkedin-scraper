function getUserProfilePairsAsJSON(namesArray, linksArray) {
    const pairsArray = [];
  
    // Create the array of name-link pairs as objects
    for (let i = 0; i < Math.min(namesArray.length, linksArray.length); i++) {
      pairsArray.push({
        name: namesArray[i],
        link: linksArray[i],
      });
    }
  
    // Convert the array of objects to JSON
    const jsonPairs = JSON.stringify(pairsArray, null, 2);
  
    // Print the JSON to the console
    console.log(jsonPairs);
  
    return jsonPairs;
  }
  