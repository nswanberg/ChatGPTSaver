// Listen for a message from the popup script to save the chat log
// After the chat log is saved, send a message to the background script to save the response
// to local storage

console.log("content script loaded");

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "getChatLog") {
        console.log("sending response");
        // Extract the chat log from the document
        response = extractChatLogFromDocument(); 
        // Send the response to the background script
        sendResponse({ chatLog: response });
    }
}
);

function extractChatLogFromDocument() {
    return Array
    .from(document.querySelectorAll("div[class*='text-base']"))
    .map((i) => { return { "text": i.innerText, "html": i.innerHTML } });
}
