/*

The Fetch API is a JavaScript function that you can use to send a request to any Web API URL and get a response.

The Fetch API always returns a Promise object, so you need to handle it using the then() and catch() methods as shown below:

            fetch('<Your API URL>')
            .then(response => console.log(response))
            .catch(error => console.log(error));

If you run a fetch() function and assign the result to a variable, the variable will contain a Promise object:


*/