const search_button = document.getElementById("searchbtn");
const input_bar = document.getElementById("inputbar");

input_bar.focus();

websites = [];

input_bar.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      search_button.click();
    }})

search_button.addEventListener("click", function () {
    var query = input_bar.value;
    query = query.trim();
    query=query.replace(" ","+")
    var new_window = document.getElementById("new_window_check");
    if (new_window.checked) {
        chrome.windows.create({ focused: true }, function (window) {
            var initialTabCreated = false;
            websites.forEach(site => {
                full_url = site+query;
                if (!initialTabCreated) {
                    chrome.tabs.update(window.tabs[0].id, { url: full_url });
                    initialTabCreated = true;
                } else {
                    chrome.tabs.create({ url: full_url, windowId: window.id });
                }
            })
        });
    }
    else {
        websites.forEach(site => {
            full_url = site+query;
            chrome.tabs.create({ url: full_url });
        })
    }
})
