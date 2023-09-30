
try{
   
    //ON page change
    chrome.runtime.onClicked.addListener(async function(message, sender, response) {
      if(sender.status == 'complete'){
        const tab = message.tab
        console.log(tab.id)
      //if (changeInfo.url) {
      await  chrome.scripting.executeScript({
          files: ['contentScript.js'],
          target: {tabId: tab.id}
        });
      //}
      }
    });
  
  
  }catch(e){
    console.log(e);
  }