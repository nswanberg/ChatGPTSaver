// The script for popup.html
// Handles clicks for the two buttons
// The first button is for saving the chat log to local storage
// The second button is for opening a new window to view saved chats


// The save button
document.getElementById("saveButton").addEventListener("click", () => {
    console.log("save button clicked");
    // This is the message that is sent to the content script.
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        // Send a message to the content script in the open tab

        chrome.tabs.sendMessage(tabs[0].id, { action: "getChatLog" }, function (response) {
            console.log("got response");
            console.log({ response });
            // the response is a json array of objects with text and html properties
            // save the response to a document in local storage whose key is the current timestamp plus the suffix '-chatlog'

            // get the current timestamp
            var timestamp = new Date().getTime();
            // create the key
            var key = timestamp + "-chatlog";
            // save the response to local storage if it is not null or empty
            if (response != null && response.chatLog.length > 0) {
                chrome.storage.local.set({ [key]: response }, function () {
                    console.log("saved");
                });
            }
        });
    });
});

// The view button
document.getElementById("viewButton").addEventListener("click", () => {
    console.log("view button clicked");
    // open a new window to view saved chats
    chrome.windows.create({ url: "view.html", type: "popup" });
});
