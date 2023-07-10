const search_button = document.getElementById("searchbtn");
const input_bar = document.getElementById("inputbar");

websites = []

search_button.addEventListener("click", function() {
    websites.forEach(site => {
        //Create the url by using input_bar.value here
        chrome.tabs.create({ url: site}); 
    });
})
