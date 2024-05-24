/*

The Fetch API is a JavaScript function that you can use to send a request to any Web API URL and get a response.

The Fetch API always returns a Promise object, so you need to handle it using the then() and catch() methods as shown below:

            fetch('<Your API URL>')
            .then(response => console.log(response))
            .catch(error => console.log(error));

If you run a fetch() function and assign the result to a variable, the variable will contain a Promise object:


*/


fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log("Error" , err);
})


/*


        The global fetch() method starts the process of fetching a resource from the network, returning a promise 
        that is fulfilled once the response is available.

        A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL 
        or a network error. 
        A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.).


        The fetch() method is controlled by the connect-src directive of Content Security Policy rather than the directive of 
        the resources it's retrieving.

        Return value
        A Promise that resolves to a Response object.


        HEADERS :=======================================================================================================
        The Headers interface of the Fetch API allows you to perform various actions on HTTP request and response headers. 
        These actions include retrieving, setting, adding to, and removing headers from the list of the request's headers.

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/xml");
        myHeaders.get("Content-Type"); // should return 'text/xml'


        REQUEST : ========================================================================================================
        The Request interface of the Fetch API represents a resource request.

        const request = new Request("https://example.com", {
                        method: "POST",
                        body: '{"foo": "bar"}',
                    });

        const url = request.url;
        const method = request.method;

        RESPONSE : =========================================================================================================
        The Response interface of the Fetch API represents the response to a request.

        const image = document.querySelector(".my-image");
                        fetch("flowers.jpg")
                        .then((response) => response.blob())
                        .then((blob) => {
                            const objectURL = URL.createObjectURL(blob);
                            image.src = objectURL;
                        });

*/

