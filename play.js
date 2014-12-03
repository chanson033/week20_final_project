
$(document).ready(function() {

	var day = 1; // start on day 1 and add to it
	var dailyTotal;


  // Set up a submit handler so that data is passed when the form is submitted
  $("form.dailyscore").submit(function() {
    refresh();

  

    //return false; not in my case - I WANT it to return to refresh the form
  });



