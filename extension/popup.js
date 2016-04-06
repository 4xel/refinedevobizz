document.addEventListener('DOMContentLoaded', function () {
    document
        .querySelector('#btnFill')
        .addEventListener('click', function () {

        var message = {
            hours: document.getElementById('hours').value,
            type: document.getElementById('type').value,
            comment: document.getElementById('comment').value
        };

        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, message);
        });
    });
});