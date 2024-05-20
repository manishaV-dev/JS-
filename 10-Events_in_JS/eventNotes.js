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


/*

What is an event?
        In JavaScript, an event is an action or occurrence that happens in the browser, which the browser or user can respond to. 
        Events are fundamental to the dynamic nature of web pages, allowing for interaction between the user and the web application. 
        Common examples of events include:

        1. User Actions:
                
                i.   Mouse Events: Such as click, dblclick, mouseover, mouseout, mousemove, mousedown, and mouseup.
                ii.  Keyboard Events: Such as keydown, keyup, and keypress.
                iii. Form Events: Such as submit, focus, blur, change, and input.

        2. Document Events:
                
                i.  Load Events: Such as load (when the entire page has loaded) and DOMContentLoaded (when the DOM is fully loaded).
                ii. Unload Events: Such as unload (when the page is being unloaded).

        3. Window Events:

                i.  Resize Events: Such as resize (when the browser window is resized).
                ii. Scroll Events: Such as scroll (when the user scrolls the page).

        4. Touch Events: For touch devices, such as touchstart, touchmove, touchend, and touchcancel.

------------------------------------------------------------------------------------------------------------------------------------

Handling Events : - 
        To handle events in JavaScript, you typically define event listeners (or handlers) that execute specific functions 
        when the events occur. There are several ways to attach event listeners:

        1. Inline Event Handlers:- Directly in the HTML element.

        example : <button onclick="alert('Button clicked!')">Click me</button>


        2. DOM Level 2 Event Listeners:- Using addEventListener to attach events

        example :     document.querySelector('button').addEventListener('click', function() {
                                        alert('Button clicked!');
                                });

        3. Event Handler Properties: Assigning a function to an element's event property.

        example : var button = document.querySelector('button');
                        button.onclick = function() {
                                alert('Button clicked!');
                        };

------------------------------------------------------------------------------------------------------------------------------------

Event Object :- 
                When an event occurs, an event object is created, which contains information about the event. This object is 
                passed as an argument to the event handler. For example:

        example :       document.querySelector('button').addEventListener('click', function(event) {
                                        console.log('Event type:', event.type); // 'click'
                                        console.log('Element:', event.target); // the button element
                        });

------------------------------------------------------------------------------------------------------------------------------------

Event Propagation : 
                   Events in JavaScript propagate through the DOM in two phases:

        1. Capturing Phase: The event starts from the root and travels down to the target element.

        ex -           document.getElementById('images').addEventListener('click', function(e){
                                        console.log('Click inside the ul')
                                }, true) 

                        document.getElementById('freedom').addEventListener('click', function(e){
                                        console.log("freedom Clicked")
                                }, true)

        2. Bubbling Phase: The event bubbles up from the target element to the root.

        ex -            document.getElementById('images').addEventListener('click', function(e){
                                        console.log('Click inside the ul')
                                }, false) 

                        document.getElementById('freedom').addEventListener('click', function(e){
                                        console.log("freedom Clicked")
                                        e.stopPropagation();
                                }, false)

You can control event propagation using methods such as stopPropagation and stopImmediatePropagation to prevent further
propagation of the event.


------------------------------------------------------------------------------------------------------------------------------------

Here's a simple example of adding an event listener to a button:

<!DOCTYPE html>
<html>
<head>
  <title>Event Example</title>
</head>
<body>
  <button id="myButton">Click me</button>

  <script>
    document.getElementById('myButton').addEventListener('click', function() {
      alert('Button was clicked!');
    });
  </script>
</body>
</html>


*/

// ============================================================================================================================

/*

        When handling events in JavaScript, the event object provides various properties and methods that offer detailed 
        information about the event and allow you to interact with it. 
                                        Here are some of the most important properties and methods of the event object:

        Key Properties : 

                1. type : The type of event (e.g., click, keypress).
                ex -    element.addEventListener('click', function(event) {
                                console.log(event.type); // 'click'
                        });

                2. target : The element that triggered the event.
                ex:     element.addEventListener('click', function(event) {
                                console.log(event.target); // the element that was clicked
                        });

                3. currentTarget : The element to which the event handler is attached.
                ex:     element.addEventListener('click', function(event) {
                                console.log(event.currentTarget); // the element with the event listener
                        });

                4. bubble : A boolean indicating whether the event bubbles up through the DOM or not
                ex:     element.addEventListener('click', function(event) {
                                console.log(event.bubbles)); // true or false
                        });
                
                5. preventDefault : A boolean indicating whether preventDefault was called on the event.
                ex:     element.addEventListener('click', function(event) {
                                console.log(event.preventDefault)); // true if preventDefault() was called
                        });

                6. timeStamp : The time at which the event was created (in milliseconds since the epoch
                ex:     element.addEventListener('click', function(event) {
                                console.log(event.timeStamp)); 
                        });

        Key Methods : 

                1. preventDefault() : Prevents the default action associated with the event.
                ex:     element.addEventListener('click', function(event) {
                                event.preventDefault()); 
                        });

                2. stopPropogation() : Prevents the event from bubbling up the DOM tree.
                ex:     element.addEventListener('click', function(event) {
                                event.stopPropogation()); 
                        });

                3. stopImmediatePropagation() : Prevents other listeners of the same event from being called.
                ex:     element.addEventListener('click', function(event) {
                                event.stopImmediatePropagation()); 
                        });


        Properties Specific to Mouse Events : 

                1. clientX and clientY : The x and y coordinates of the mouse pointer relative to the viewport;
                ex:     element.addEventListener('click', function(event) {
                                console.log(event.clientX, event.clientY) 
                        });

                2. pageX and pageY : The x and y coordinates of the mouse pointer relative to the document
                ex:     element.addEventListener('click', function(event) {
                                console.log(event.pageX, event.pageY) 
                        }); 

                3. button : Indicates which mouse button was pressed (0 for left, 1 for middle, 2 for right)
                ex:     element.addEventListener('click', function(event) {
                                console.log(event.button) 
                        }); 


        Properties Specific to Keyboard Events : 

                1. key : The value of the key pressed (e.g., 'a', 'Enter').
                ex:     element.addEventListener('click', function(event) {
                                console.log(event.key) 
                        });

                2. code : The physical key on the keyboard (e.g., 'KeyA', 'ArrowRight'.
                ex:     element.addEventListener('click', function(event) {
                                console.log(event.code) 
                        });

                3. altKey, ctrlKey, shiftKey, metaKey : Booleans indicating whether the respective modifier key was pressed
                ex:     element.addEventListener('click', function(event) {
                                console.log(event.altKey) 
                        });


        Example Usage : 

        
<!DOCTYPE html>
<html>
<head>
        <title>Event Object Example</title>
</head>
<body>
        <button id="myButton">Click me</button>

        <script>
                        document.getElementById('myButton').addEventListener('click', function(event) {
                // Prevent the default action
                        event.preventDefault();

                // Log event type
                        console.log('Event type:', event.type);

                // Log target element
                        console.log('Event target:', event.target);

                // Log whether the event bubbles
                        console.log('Event bubbles:', event.bubbles);

                // Log mouse coordinates
                        console.log('Mouse position:', event.clientX, event.clientY);

                // Stop the event from propagating
                        event.stopPropagation();

                });
         </script>
</body>
</html>


*/



/*



        toElement : The toElement property of the event object in JavaScript was historically used to identify the element 
                    towards which the pointer moved during mouseover and mouseout events. 
                    However, it's non-standard and has been deprecated in favor of the standard 'relatedTarget' property.

        Since toElement is deprecated, you should use relatedTarget for cross-browser compatibility. 
        Here's the same example using relatedTarget:

<!DOCTYPE html>
<html>
<head>
  <title>relatedTarget Example</title>
</head>
<body>
  <div id="container" style="width: 300px; height: 300px; border: 1px solid black;">
    <div id="inner" style="width: 100px; height: 100px; background-color: lightblue; margin: 100px;">
      Inner Box
    </div>
  </div>

  <script>
    const container = document.getElementById('container');

    container.addEventListener('mouseover', function(event) {
      const toElement = event.relatedTarget;
      console.log('Mouse moved to:', toElement);
    });

    container.addEventListener('mouseout', function(event) {
      const toElement = event.relatedTarget;
      console.log('Mouse moved to:', toElement);
    });
  </script>
</body>
</html>

Explanation
                1. mouseover event: This event is fired when the pointer enters an element or one of its children. 
                                    The relatedTarget property refers to the element from which the pointer is moving.


                2. mouseout event: This event is fired when the pointer leaves an element or one of its children. 
                                   The relatedTarget property refers to the element to which the pointer is moving.

 ============================================================================================================================

        2. srcElement : The srcElement property of the event object in JavaScript was historically used to identify the 
                        element that triggered the event. 
                        It is an alias for the standard 'target' property and is primarily used in older versions of Internet Explorer. 
                        In modern web development, you should use 'target' for better compatibility and adherence to standards.


<!DOCTYPE html>
<html>
<head>
  <title>srcElement Example</title>
</head>
<body>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <script>
    const list = document.getElementById('list');

    list.addEventListener('click', function(event) {
//       const clickedElement = event.srcElement || event.target;
      const clickedElement = event.target;
      if (clickedElement.tagName === 'LI') {
        console.log('Clicked item:', clickedElement.textContent);
      }
    });


  </script>
</body>
</html>



*/
