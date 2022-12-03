// View.js
// The script for view.html
// Handles the display of saved chat logs

// Get all the keys from local storage

console.log("view script loaded");
chrome.storage.local.get(null, function (items) {
    console.log("got items");
    // For each key


    // Create a div for the chat log list
    var chatLogListDiv = document.createElement("div");
    // Set the class to 'chat-log-list'
    chatLogListDiv.className = "chat-log-list";
    // Add the div to the document
    document.body.appendChild(chatLogListDiv);

    for (var key in items) {
        // If the key ends with '-chatlog'
        if (key.endsWith("-chatlog")) {
            // Create a new div to hold the chat log list item
            var chatLogListItemDiv = document.createElement("div");
            // Set the class to 'chat-log-list-item'
            chatLogListItemDiv.className = "chat-log-list-item";

            // Create a new div to hold the chat log list item title
            var chatLogListItemTitleDiv = document.createElement("div");
            // Set the class to 'chat-log-list-item-title'
            chatLogListItemTitleDiv.className = "chat-log-list-item-title";
            // Set the inner text to the key
            chatLogListItemTitleDiv.innerText = getDateStringFromKey(key);
            // Add the div to the document
            chatLogListItemDiv.appendChild(chatLogListItemTitleDiv);


            // Get the chat log from the value
            var chatLog = items[key];

            // For each message in the chat log
            chatLog.chatLog.forEach((message) => {
                // Create a new div to hold the message
                var newMessageDiv = document.createElement("div");
                // Set the class to 'message-item'
                newMessageDiv.className = "message-item";
                // Set the innerHTML of the div to the message
                newMessageDiv.innerText = message.text;
                // Add the div to the document
                chatLogListItemDiv.appendChild(newMessageDiv);
            });

            // Add the div to the document
            chatLogListDiv.appendChild(chatLogListItemDiv);

        }
    }
});



// Split the key into the timestamp and the suffix
// convert the timestamp to a date and return
// the date as a string
function getDateStringFromKey(key) {
    var splitKey = key.split("-");
    var timestamp = splitKey[0];
    var date = new Date(parseInt(timestamp));
    return date.toString();
}