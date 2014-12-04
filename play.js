//Cate Hanson's final project

$(document).ready(function() {

	var dailyTotal;
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

      var nutrition_points = parseInt($( "select.nutrition" ).val() ,10);
        $( ".day1 td:nth-of-type(2)" )
    		.replaceWith ("<td>" + nutrition_points + "</td>");
        //.addClass( "nada" ); // could do this if I want to remove the color for a td with zero points

      
      var workout_pts = parseInt($( "select.workout" ) .val() ,10); 
          $( ".day1 td:nth-of-type(3)" )
          .replaceWith ("<td>" + workout_pts + "</td>");


      var stretch_pts = parseInt($( "select.stretch" ) .val() ,10); 
          $( ".day1 td:nth-of-type(4)" )
          .replaceWith ("<td>" + stretch_pts + "</td>");


      var supplements_pts = parseInt($( "select.supplements" ) .val() ,10);
          $( ".day1 td:nth-of-type(5)" )
          .replaceWith ("<td>" + supplements_pts + "</td>");

      var water_pts = parseInt($( "select.water" ) .val() ,10); 
          $( ".day1 td:nth-of-type(6)" )
          .replaceWith ("<td>" + water_pts + "</td>");

      var other_pts = parseInt($( "select.other" ) .val() ,10);
          $( ".day1 td:nth-of-type(7)" )
          .replaceWith ("<td>" + other_pts + "</td>");

      var comments = $( "input.comments" ).val();
        $( ".day1 td:nth-of-type(10)" )
        .append (comments);

      var comment_pts = 1;
        // if comments = true { // this isn't working yet
        //   comment_pts = 1;
        // } 
        // else {
        //   comment_pts = 0;
        // }
        $( ".day1 td:nth-of-type(8)" )
          .replaceWith ("<td>" + comment_pts + "</td>");

      // daily total 
      dailyTotal = (nutrition_points + workout_pts + stretch_pts + supplements_pts + water_pts + other_pts + comment_pts);
      // need parseInt
        $( ".day1 td:nth-of-type(9)" )
        .replaceWith ("<td>" + dailyTotal + "</td>");
        
      

     // update grand total for 28 day period
      $(".myTotal").append ("<strong>" + "&nbsp" + nutrition_points + "</strong>"); 

    //reset the form fields 

    // the day number on the html page progresses

    // when day =29, display button to start over and hide form


    // **********************************
    // Save data - Firebase
    // **********************************

  

  
   return false; // once I have 2 pages, I WANT it to return to refresh the form, yes?
    });
  });

//start again button
// on submit, clear array?
// start at day = 1 again

