$(function() {
    // variables
        var mode = 0; // app mode
        var timeCounter = 0; // time counter
        var lapCounter = 0; // lap counter
        var action = 0; // variable for setInterval
        var lapNumber = 0; // number of laps
        // minutes, seconds, centiseconds for time and lap
        var timeMinutes, timeSeconds, timeCentiseconds, lapMinutes, lapSeconds, lapCentiseconds;

    // on app load show start and lap buttons
    hideshowButtons('#startButton', '#lapButton');
    
    // click on start button
    $('#startButton').click(function() {
        // mode on
        mode = 1;

        // show stop and lap button
        hideshowButtons('#stopButton', '#lapButton');

        // start counter
        startAction();
    });        

    // click on stop button
        // show resume and reset buttons
        // stop counter

    // click on resume button
        // show stop and lap buttons
        // start action

    // click on reset button
        // reload the page

    // click on lap button
        // if mode is on
            // stop action
            // reset lap and print lap details
            // start action

    // functions
    // hideshowButtons function show two buttons
    function hideshowButtons(x, y) {
        $('.control').hide();
        $(x).show();
        $(y).show();
    }

    // start the counter
    function startAction() {
        action = setInterval(function(){
            timeCounter++;
            lapCounter++;
            updateTime();
       }, 10);
    }

    // update time: converts counters to min, sec, centisecond
    function updateTime() {
        // 1 minute = 60 * 100 centiseconds = 6000 centiseconds
        timeMinutes = Math.floor(timeCounter / 6000);
    }
});