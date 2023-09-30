chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.greeting) {
    // Do something with the message, e.g., display it on the webpage.
    alert(message.greeting);
  }
});