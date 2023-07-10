const search_button = document.getElementById("searchbtn");
const input_bar = document.getElementById("inputbar");


websites = [];

input_bar.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      search_button.click();
    }})

search_button.addEventListener("click", function () {
    var query = input_bar.value;
    var new_window = document.getElementById("new_window_check");
    if (new_window.checked) {
        chrome.windows.create({ focused: true }, function (window) {
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
    }
    else {
        websites.forEach(site => {
            //Create the url by using input_bar.value here
            chrome.tabs.create({ url: site });
        })
    }

})
