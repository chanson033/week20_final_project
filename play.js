//Cate Hanson's final project

$(document).ready(function() {

	var days = [];
	var dailyTotal;
	var grandTotal;


  // Set up a submit handler so that data is passed when the form is submitted
  $("form.dailyscore").submit(function() {
  
  // take the form values and store as an object in an array, for workout and stretch yes=2, for supp, water, other, comments yes=1, no=0 (store points or just true false?)

  // add up the daily total and push to the array as a key value pair for this object

  //reset the form fields (this will happen automatically with return I think)

  // the day number on the html page progresses

  // push info to Firebase

  // display all form values on my scoreboard, including comments and grandTotal
      var x = $( "select.nutrition" ).val();
      $( ".day1 td:nth-of-type(2)" )
  		.replaceWith ("<td>" + x + "</td>");
		//.addClass( "nth" ); // could do this if I want to remove the color for zero points
      
      var comments = $( "input.comments" ).val();
      $( ".day1 td:nth-of-type(10)" )
      .replaceWith ("<td>" + comments + "</td>");
      


     // update grand total for 28 day period
    $(".myTotal").append ("<strong>" + x + "</strong>"); 

  // when day =29, display button to start over and hide form

  
   return false; //NOT in my case - I WANT it to return to refresh the form
    });
  });

//start again button
// on submit, clear array?
// start at day = 1 again

