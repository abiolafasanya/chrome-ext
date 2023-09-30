// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting === "hello")
//       sendResponse({farewell: "goodbye"});
//   }
// );

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.greeting) {
    // Do something with the message, e.g., display it on the webpage.
    alert(message.greeting);
  }
});