let isFavorite = false;
let showShareIcon = false;

function updateFavor(){
    isFavorite = !isFavorite;

    // console.log("isFavorite: " + isFavorite)

    var classList = document.getElementById("favor-icon").classList;
    // console.log("before classList: " + classList)

    if(isFavorite){
        classList.remove("unfavor-icon");
        classList.add("favor-icon");
    } else{
        classList.remove("favor-icon");
        classList.add("unfavor-icon");
    }

    // console.log("background: " + document.getElementById("favor-icon").style.background)
}

function updateShareStatus(){
    showShareIcon = !showShareIcon;

    // console.log("showShareIcon: " + showShareIcon)

    var classList = document.getElementById("share-dialogue").classList;
    // console.log("before classList: " + classList)

    if(showShareIcon){
        classList.add("show-share-dialogue");
    } else{
        classList.remove("show-share-dialogue");
    }

    // console.log("share-dialogue: " + classList)
}

function showRemoveDialogue(streetName){
    let content = '<div class="popup-title dialogue-row">Remove Street?</div>' +
        '<div class="popup-headline-2 dialogue-row">' + streetName + '</div>' +
        '<div class="popup-button-row dialogue-row">' + 
            '<div onclick="closeDialogue();" class="yes-button remove-popup-button-text remove-popup-button">Yes</div>' +
            '<div onclick="closeDialogue();" class="no-button remove-popup-button-text remove-popup-button">No</div>' +
        '</div>';
    showDialogue(content);
    // console.log("share-dialogue: " + classList)
}

function showReminderDialogue(streetName){
    let content = 
        '<div class="popup-title dialogue-row">Set Reminder</div>' +
        '<div class="popup-headline dialogue-row">' + streetName + '</div>' +
        '<div class="hours-dropdown-row popup-dropdown-row dialogue-row">' +
            '<select name="hours-dropdown" id="hours" class="hours-dropdown">' +
                '<option value="1">1</option>' +
                '<option value="2">2</option>' +
                '<option value="3">3</option>' +
                '<option value="5">5</option>' +
                '<option value="7">7</option>' +
                '<option value="10">10</option>' +
                '<option value="24">24</option>' +
                '<option value="custom">Custom</option>' +
            '</select>' +
            'Hour(s) Ahead' +
        '</div>' +
        '<div class="repeat-dropdown-row popup-dropdown-row dialogue-row">' +
            'Repeat: ' +
            '<select name="repeat-dropdown" id="repeat" class="dropdown-right">' +
               '<option value="never">Never</option>' +
                '<option value="monthly">Monthly</option>' +
                '<option value="custom">Custom</option>' +
            '</select>' +
        '</div>' +
        '<div class="mode-dropdown-row popup-dropdown-row dialogue-row">' +
            'Mode:' +
            '<select name="mode-dropdown" id="mode" class="dropdown-right">' +
                '<option value="alarm">Alarm</option>' +
                '<option value="text">Text</option>' +
                '<option value="email">Email</option>' +
            '</select>' +
        '</div>' +
        '<div class="reminder-popup-button-row popup-button-row dialogue-row"> ' +
            '<div onclick="closeDialogue();" class="yes-button remove-popup-button-text remove-popup-button">Confirm</div>' +
            '<div onclick="closeDialogue();" class="no-button remove-popup-button-text remove-popup-button">Cancel</div>' +
        '</div>';
    showDialogue(content);
}

function showDialogue(content){
    document.getElementById('dialogue-placeholder').innerHTML = 
        '<div id="dialogue-container" class="dialogue-popup">' +
            content +
        '</div>';

    // console.log("share-dialogue: " + classList)
}

function closeDialogue(){
    console.log("Close dialogue !");
    document.getElementById('dialogue-container').remove();
}