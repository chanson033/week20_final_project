//Cate Hanson's final project

var myDataRef = new Firebase("https://fiery-inferno-6944.firebaseIO.com/");


$(document).ready(function() {



  // Set up a submit handler so that data is passed when the form is submitted
  $("form.dailyscore").submit(function() {


    // ************************************************************
    // Push each object to Firebase, Firebase will create the array
    // ************************************************************
      // array[] = {
          // date: "12/04/2014"
          // nutrition: 5,
          // workout: 2,
          // stretch: 2,
          // supplements: 1,
          // water: 1,
          // other: 1,
          // comment_pts: 1,
          // dailyTotal: 13,
          // comments: "dd"
      // }
      

      // assigning values to variables
      var date = $( "#datepicker").val ();
      var nutrition = parseInt($( "select.nutrition" ).val() ,10);
      var workout = parseInt($( "select.workout" ) .val() ,10); 
      var stretch = parseInt($( "select.stretch" ) .val() ,10); 
      var supplements = parseInt($( "select.supplements" ) .val() ,10);
      var water = parseInt($( "select.water" ) .val() ,10);
      var other = parseInt($( "select.other" ) .val() ,10); 
      var comments = $( "input.comments" ).val();
      var comment_pts;
        if ($( "input.comments" ).val() === "") {
          comment_pts = 0;
        } else {
          comment_pts = 1;
        };
      var dailyTotal = (nutrition + workout + stretch + supplements + water + other + comment_pts);

      myDataRef.push({
        date: date, 
        nutrition: nutrition, 
        workout: workout,
        stretch: stretch, 
        supplements: supplements,
        water: water, 
        other: other, 
        comments: comments,
        comment_pts: comment_pts,
        dailyTotal: dailyTotal,
      });

     //  // date key 
     //  scores.date = $( "#datepicker").val ();
     //    console.log (scores);

     //  // nutrition key
     //  var nutrition_points = parseInt($( "select.nutrition" ).val() ,10);
     //    scores.nutrition = nutrition_points;
     //    console.log (scores);
     //    // display 
     //    $( ".day1 td:nth-of-type(2)" )
     //    .replaceWith ("<td>" + nutrition_points + "</td>");
     //    //.addClass( "nada" ); // could use this if I want to remove the color for a td with zero points

     //  // workout key
     //  var workout_pts = parseInt($( "select.workout" ) .val() ,10); 
     //      scores.workout = workout_pts;
     //      console.log (scores);
     //      //display
     //      $( ".day1 td:nth-of-type(3)" )
     //      .replaceWith ("<td>" + workout_pts + "</td>");

     //  // stretch key
     //  var stretch_pts = parseInt($( "select.stretch" ) .val() ,10); 
     //      scores.stretch = stretch_pts;
     //      console.log (scores);
     //      //display
     //      $( ".day1 td:nth-of-type(4)" )
     //      .replaceWith ("<td>" + stretch_pts + "</td>");

     //  // supplments key
     //  var supplements_pts = parseInt($( "select.supplements" ) .val() ,10);
     //      scores.supplements = supplements_pts;
     //      console.log (scores);
     //      //display
     //       $( ".day1 td:nth-of-type(5)" )
     //      .replaceWith ("<td>" + supplements_pts + "</td>");

     //  // water key
     //  var water_pts = parseInt($( "select.water" ) .val() ,10); 
     //      scores.water = water_pts;
     //      console.log (scores);
     //      //display
     //       $( ".day1 td:nth-of-type(6)" )
     //      .replaceWith ("<td>" + water_pts + "</td>");

     //  // other key
     //  var other_pts = parseInt($( "select.other" ) .val() ,10);
     //      scores.other = other_pts;
     //      console.log (scores);
     //      // display
     //      $( ".day1 td:nth-of-type(7)" )
     //      .replaceWith ("<td>" + other_pts + "</td>");

     //  //comments key
     //  var comments = $( "input.comments" ).val();
     //    scores.comments = comments;
     //    console.log (scores);
     //    // display
     //    $( ".day1 td:nth-of-type(10)" )
     //    .append (comments);

     //  // comment points key
     //  var comment_pts;
     //    if ($( "input.comments" ).val() === "") {
     //      comment_pts = 0;
     //    } else {
     //      comment_pts = 1;
     //    };

     //    scores.comment_pts = comment_pts;
     //    console.log (scores);
     //    // display
     //    $( ".day1 td:nth-of-type(8)" )
     //    .replaceWith ("<td>" + comment_pts + "</td>");
      

     //  // daily total key
     //  dailyTotal = (nutrition_points + workout_pts + stretch_pts + supplements_pts + water_pts + other_pts + comment_pts);
     //    scores.dailyTotal = dailyTotal;
     //    console.log (scores);
     //    // display
     //    $( ".day1 td:nth-of-type(9)" )
     //    .replaceWith ("<td>" + dailyTotal + "</td>");
        
      

     // // display grand total - move to call back area 
     //  $(".myTotal").append ("<strong>" + "&nbsp" + nutrition_points + "</strong>"); 

    //reset the form fields 
    // can't do $('.commentsInput').val(''); with all - use return? 


    // after 28 days have been entered, give some text and a start over button 


 return dailyTotal; // I WANT it to return to refresh the form, yes?
    });
  });

    // **********************************************
    // Call back from firebase and update scoreboard
    // **********************************************

  function updateScore (da, nu, wo, st, su, wa, ot, co_pts, dT, co ) { 

    // add a row for each new object into the table
    $( "#scoreboard tbody" ).append ("<tr><td>" + 
          da + "</td><td>" + 
          nu + "</td><td>" + 
          wo + "</td><td>" + 
          st + "</td><td>" + 
          su + "</td><td>" + 
          wa + "</td><td>" + 
          ot + "</td><td>" + 
          co_pts + "</td><td>" + 
          dT + "</td><td>" + 
          co + "</td><td>" +  
          "</td></tr>");

     // calc grandTotal and update page
  };

    // call the function
    myDataRef.on('child_added', function(snapshot) {
        var scores = snapshot.val();
        updateScore(scores.date, scores.nutrition, scores.workout, scores.stretch, scores.supplements, scores.water, scores.other, scores.comment_pts, scores.dailyTotal, scores.comments);
    });
  
  

//start again button
// on submit, clear array?
// start at day = 1 again

