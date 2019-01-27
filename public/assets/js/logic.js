/* eslint-disable semi */
/* eslint-disable no-undef */
// Client-side javascript logic

$(document).ready(function () {
// Add-A-Burger Submit Button Listener
  $('.add-a-burger').on('submit', function (event) {
    // prevent the default action for the submit button
    event.preventDefault();

    // create a variable to store the new burger in
    let newBurger = {
      burger_name: $('#addBurger').val().trim()
    };

    // Send the POST request
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(
      function () {
        // reload the page
        location.reload();
      }
    );
  });

  // 'Devour This' Button Listener
  $('.devour').on('click', function (event) {
    // store the id of the button clicked
    var id = $(this).data('id');

    // turning devoured to true, making it an object the model can use
    var devoured = {
      devoured: 1
    };

    // Send the PUT request
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: devoured
    }).then(
      function () {
        // reload the page to get the updated list
        location.reload();
      }
    );
  });
}); // end of on-load
