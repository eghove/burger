// Client-side javascript logic

$(document).ready(function () {

    // console.log("logic.js loaded");


    // Add-A-Burger Submit Button Listener
    $(".add-a-burger").on("submit", function (event) {

        // prevent the default action for the submit button
        event.preventDefault();

        // create a variable to store the new burger in
        let newBurger = {
            burger_name: $("#addBurger").val().trim()
        };

        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // reload the page
                location.reload();
            }
        );
    });



}); //end of on-load