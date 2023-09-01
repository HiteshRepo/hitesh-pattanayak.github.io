import { Config } from "./config.js";

// Initialize Firebase
firebase.initializeApp(Config);

// Reference to the visitor count in the database
var visitorCountRef = firebase.database().ref('visitorCount');

// Function to increment the visitor count
function incrementVisitorCount() {
    visitorCountRef.transaction(function (currentCount) {
        // Increment the count by 1 or initialize to 1 if it doesn't exist
        return (currentCount || 0) + 1;
    });
}

// Function to display the visitor count
function displayVisitorCount() {
    visitorCountRef.on('value', function (snapshot) {
        var count = snapshot.val();
        document.getElementById('visitor_counter').textContent = count;
    });
}

// Call the incrementVisitorCount function when the page loads
window.onload = function () {
    incrementVisitorCount();
    displayVisitorCount();
};