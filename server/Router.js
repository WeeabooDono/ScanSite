Router.route("test", {
    where: "server"
}).get(function () {
    // If a GET request is made, return the user's profile.
}).post(function () {
    // If a POST request is made, create the user's profile.
}).put(function () {
    // If a PUT request is made, either update the user's profile or
    // create it if it doesn't already exist.
}).delete(function () {
    // If a DELETE request is made, delete the user's profile.
});