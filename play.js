
$(document).ready(function() {
  // Set up a submit handler so that data is passed when the form is submitted
  $("form.search").submit(function() {
    refresh();

  

    //return false; not in my case - I WANT it to return to refresh the form
  });



