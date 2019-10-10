// Write your JavaScript code here.
// Remember to pay attention to page loading!

// add load event handler to window
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded

// LISTEN FOR BUTTON CLICKS
    let launch = document.getElementById("takeoff");
    launch.addEventListener("click", function (event) {
        if (window.confirm('Confirm that the shuttle is ready for takeoff.')) {
            document.getElementById('flightStatus').innerHTML = "Shuttle in flight.";
            document.getElementById('shuttleBackground').style.background = "blue";
            document.getElementById('spaceShuttleHeight').innerHTML = 10000;
            //document.getElementById('spaceShuttleHeight').textContent('miles') = 'kilometers';
            
        };
    });
    // When the "Take off" button is clicked, the following should happen:
    // A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." 
    // If the shuttle is ready for liftoff, then add steps 2-4.
    // The flight status should change to "Shuttle in flight."
    // The background color of the shuttle flight screen (id = "shuttleBackground") should change 
    // from green to blue.
    // The shuttle height should increase by 10,000 miles.

    let resting = document.getElementById("landing");
    resting.addEventListener("click", function (event) {
        console.log("Landing");
        });
    // When the "Land" button is clicked, the following should happen:
    // A window alert should let the user know 
    // "The shuttle is landing. Landing gear engaged."
    // The flight status should change to "The shuttle has landed."
    // The background color of the shuttle flight screen should change from blue to green.
    // The shuttle height should go down to 0.

    let runAway = document.getElementById("abort");
    runAway.addEventListener("click", function (event) {
        console.log("Abort!");
        });
    // When the "Abort Mission" button is clicked, the following should happen:
    // A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add steps 2-4.
    // The flight status should change to "Mission aborted."
    // The background color of the shuttle flight screen should change from blue to green.
    // The shuttle height should go do to 0.

    // When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
    // < Listen for onKeydown (37, 38, 39, 40) >
    // The rocket image should move 10 px in the direction of the button that was clicked.
    // If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles
    // 
    
});