//Cate Hanson's final project

$(document).ready(function() {

	// var dailyTotal;
	// var grandTotal;
 //  var scores [];


  //var userData =  {
      //name: "Cate",
      // grandtotal: 24,
     //  scores: [ 
        // {
        //   day: 1, // this is implicit but I might want it later
        //   nutrition: "5",
        //   workout: 1,
        //   stretch: 0, // just true / false, or the points?
        //   supp: 1,
        //   water: 1,
        //   other: 1,
        //   comments: 1,
        //   commenttext: "that was easy",
        //   dailytotal: 11,
        // },
            //]
      //};


  // Set up a submit handler so that data is passed when the form is submitted
  $("form.dailyscore").submit(function() {


    // **********************************
    // Gather data 
    // **********************************
      // scores[0] = {
      //       day: 1;
      //       nutrition: 5,
      //       workout: 2,
      //       stretch: 2, 
      //       supp: 1,
      //       water: 1,
      //       other: 1,
      //       comments: 1,
      //       commenttext: "that was easy",
      //       dailytotal: 13
      // }

      //   console.log( scores[0].workout );

    // **********************************
    // Display data  - use the array to populate the screen
    // **********************************

      var nutrition_points = $( "select.nutrition" ).val();
        $( ".day1 td:nth-of-type(2)" )
    		.replaceWith ("<td>" + nutrition_points + "</td>");
        //.addClass( "nth" ); // could do this if I want to remove the color for zero points

      
      var workout_pts = $( "select.workout" ) .val() 
          $( ".day1 td:nth-of-type(3)" )
          .replaceWith ("<td>" + workout_pts + "</td>");


      var stretch_pts = $( "select.stretch" ) .val() 
          $( ".day1 td:nth-of-type(4)" )
          .replaceWith ("<td>" + stretch_pts + "</td>");


      var supplements_pts = $( "select.supplements" ) .val() 
          $( ".day1 td:nth-of-type(5)" )
          .replaceWith ("<td>" + stretch_pts + "</td>");

      var water_pts = $( "select.water" ) .val() 
          $( ".day1 td:nth-of-type(6)" )
          .replaceWith ("<td>" + water_pts + "</td>");

      var other_pts = $( "select.other" ) .val() 
          $( ".day1 td:nth-of-type(7)" )
          .replaceWith ("<td>" + other_pts + "</td>");


      var comments = $( "input.comments" ).val();
        $( ".day1 td:nth-of-type(10)" )
        .append (comments);
      

     // update grand total for 28 day period
      $(".myTotal").append ("<strong>" + nutrition_points + "</strong>"); 

    //reset the form fields 

    // the day number on the html page progresses

    // when day =29, display button to start over and hide form


    // **********************************
    // Save data - Firebase
    // **********************************

  

  
   return false; //NOT in my case - I WANT it to return to refresh the form
    });
  });

//start again button
// on submit, clear array?
// start at day = 1 again

