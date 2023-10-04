document.addEventListener("DOMContentLoaded", async () => {
  const recordButton = document.querySelector("#recordButton")
  recordButton
  .addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

     chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['./contentScript.js'],
    });

    chrome.scripting.insertCSS({
      target: {tabId: tab.id},
      files: ['style.css'],
    })

  });

})