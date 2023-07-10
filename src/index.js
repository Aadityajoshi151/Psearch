const search_button = document.getElementById("searchbtn");
const input_bar = document.getElementById("inputbar");

websites = [];

search_button.addEventListener("click", function() {
    chrome.windows.create({ focused: true }, function(window) {
        var initialTabCreated = false;
        websites.forEach(site => {
            //Create the url by using input_bar.value here
            if (!initialTabCreated) {
                chrome.tabs.update(window.tabs[0].id, { url: site });
                initialTabCreated = true;
              } else {
                chrome.tabs.create({ url: site, windowId: window.id });
              }
        })
      });
})
