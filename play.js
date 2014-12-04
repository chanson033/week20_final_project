//Cate Hanson's final project

var scores = {};

$(document).ready(function() {

	var dailyTotal;
	// var grandTotal;
  // var scores [];
  

  

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
        
      


  // Set up a submit handler so that data is passed when the form is submitted
  $("form.dailyscore").submit(function() {


    // **********************************
    // Gather data 
    // **********************************
      // scores[0] = {
      //       datetime:   ,
      //       day: 1,
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
    // Display data  - use a function to make this more DRY, and use the array
    // **********************************

      
      scores.date = $( "#datepicker").val ();
        console.log (scores);


      var nutrition_points = parseInt($( "select.nutrition" ).val() ,10);
        $( ".day1 td:nth-of-type(2)" )
    		.replaceWith ("<td>" + nutrition_points + "</td>");
        //.addClass( "nada" ); // could do this if I want to remove the color for a td with zero points
        scores.nutrition = nutrition_points;
        console.log (scores);

      
      var workout_pts = parseInt($( "select.workout" ) .val() ,10); 
          $( ".day1 td:nth-of-type(3)" )
          .replaceWith ("<td>" + workout_pts + "</td>");
          scores.workout = workout_pts;
          console.log (scores);


      var stretch_pts = parseInt($( "select.stretch" ) .val() ,10); 
          $( ".day1 td:nth-of-type(4)" )
          .replaceWith ("<td>" + stretch_pts + "</td>");
          scores.stretch = stretch_pts;
          console.log (scores);


      var supplements_pts = parseInt($( "select.supplements" ) .val() ,10);
          $( ".day1 td:nth-of-type(5)" )
          .replaceWith ("<td>" + supplements_pts + "</td>");
          scores.supplements = supplements_pts;
          console.log (scores);

      var water_pts = parseInt($( "select.water" ) .val() ,10); 
          $( ".day1 td:nth-of-type(6)" )
          .replaceWith ("<td>" + water_pts + "</td>");
          scores.water = water_pts;
          console.log (scores);

      var other_pts = parseInt($( "select.other" ) .val() ,10);
          $( ".day1 td:nth-of-type(7)" )
          .replaceWith ("<td>" + other_pts + "</td>");
          scores.other = other_pts;
          console.log (scores);

      var comments = $( "input.comments" ).val();
        $( ".day1 td:nth-of-type(10)" )
        .append (comments);
        scores.comments = comments;
        console.log (scores);

      var comment_pts = 0;
      if ($( "input.comments" ).val() !== "") {
        comment_pts += 1;
        scores.comment_pts = comment_pts;
        console.log (scores);
        $( ".day1 td:nth-of-type(8)" )
        .replaceWith ("<td>" + comment_pts + "</td>");
      }


       
        
      


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

