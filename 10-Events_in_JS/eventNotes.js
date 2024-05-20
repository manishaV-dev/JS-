/*

HTML events are "things" that happen to HTML elements.
When JavaScript is used in HTML pages, JavaScript can "react" on these events.

HTML Events
An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:
            1.  An HTML web page has finished loading
            2.  An HTML input field was changed
            3.  An HTML button was clicked

    <element event='some JavaScript'>
    <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

Common HTML Events

            Event	        Description
        1   onchange	    An HTML element has been changed
        2   onclick	        The user clicks an HTML element
        3   onmouseover	    The user moves the mouse over an HTML element
        4   onmouseout	    The user moves the mouse away from an HTML element
        5   onkeydown	    The user pushes a keyboard key
        6   onload	        The browser has finished loading the page
        and many more


Event handlers can be used to handle and verify user input, user actions, and browser actions:

Assign Events Using the HTML DOM
                    <script>
                            document.getElementById("myBtn").onclick = displayDate;
                    </script>
    In the example above, a function named displayDate is assigned to an HTML element with the id="myBtn".
    The function will be executed when the button is clicked.


DOM Events allow JavaScript to add event listener or event handlers to HTML elements.


*/