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
    var inputExtraInfo = "EVOK";

    var $tableRows =
        $('frame[name="loginscreen"]')
            .contents()
            .find('frame[name="body"]')
            .contents()
            .find('frame[name="prbody"]')
            .contents()
            .find('table tr');

    $($tableRows).find('td input[name*='+inputNameHours+']').not(isDayOff).val(data.hours);
    $($tableRows).find('td select[name*='+inputNameType+']').not(isDayOff).val(data.type);
    $($tableRows).find('td input[name*='+inputNameComment+']').not(isDayOff).val(data.comment);
    if (data.type == 'OPL'){
    $($tableRows).find('td select[name*='+inputExtraInfo+']').not(isDayOff).val(data.extraInfo);
    $($tableRows).find('td select[name*='+inputExtraInfo+']').not(isDayOff).prop("disabled", false);
    } else {
    $($tableRows).find('td select[name*='+inputExtraInfo+']').not(isDayOff).val("");
    $($tableRows).find('td select[name*='+inputExtraInfo+']').not(isDayOff).prop("disabled", true);
    }

    function isDayOff(index,el){
        return $(el).css('background-color') === "rgb(255, 255, 102)";
    }
}
