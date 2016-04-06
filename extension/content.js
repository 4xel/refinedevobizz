document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            putDefaultHours(request);
        });
});

function putDefaultHours(data) {
    "use strict";

    var inputNameHours = "EVOD";
    var inputNameType = "EVOE";
    var inputNameComment = "EVOC";

    var $tableRows =
        $('frame[name="loginscreen"]')
            .contents()
            .find('frame[name="body"]')
            .contents()
            .find('frame[name="prbody"]')
            .contents()
            .find('table tr')
            .not(':contains("Za")')
            .not(':contains("Zo")');

    $($tableRows).find('td input[name*='+inputNameHours+']').val(data.hours);
    $($tableRows).find('td select[name*='+inputNameType+']').val(data.type);
    $($tableRows).find('td input[name*='+inputNameComment+']').val(data.comment);
}