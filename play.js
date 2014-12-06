//Cate Hanson's final project

var myDataRef = new Firebase("https://fiery-inferno-6944.firebaseIO.com/");
var grandTotal = 0;
var counter = 0;




$(document).ready(function() {

  // Set up a submit handler so that data is passed when the form is submitted
  $("form.dailyscore").submit(function(e) {

    // prevent the default return/refresh form behavior
    e.preventDefault(); 

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
      var comment_pts; // this has no parseInt but it works
        if ($( "input.comments" ).val() === "") {
          comment_pts = 0;
        } else {
          comment_pts = 1;
        };
      var dailyTotal = parseInt(nutrition + workout + stretch + supplements + water + other + comment_pts);
      //console.log(dailyTotal);

      
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
        dailyTotal: dailyTotal
      });

      // reset the form without using return
      $("form")[0].reset();
      $( "#datepicker").datepicker('setDate', "");

   
    // No return used, not passing anything out into another function
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
  };

    // get data from firebase
    myDataRef.on('child_added', function(snapshot) {
        var scores = snapshot.val();
        updateScore(scores.date, scores.nutrition, scores.workout, scores.stretch, scores.supplements, scores.water, scores.other, scores.comment_pts, scores.dailyTotal, scores.comments);
         addGrandTotal(scores.dailyTotal);
         // if more than 28 days/rows, don't display entry form (only working on submit so far)
        countRows();
    });
  

  function addGrandTotal (dailyTotal) {
       grandTotal += dailyTotal;
       $(".myTotal").html("Total Points: " + grandTotal); 
  };

  function countRows () {
    var rowCount = $('#scoreboard').children('tbody').children('tr').length;
    console.log(rowCount + " rows");
    //if the counter is greater than 28, hide the entry form, and display <button>Start Over</button> and some explanation text.
    if (rowCount > 28) {
      $(".enterScore").hide ();
      $(".intro").html("You've completed the 28 day challenge.");
      $(".startOver").show ();
    // } else {
    //   return counter;
    }
    
  };

// Define what happens when the user clicks the start again button, create a loop and .remove everything in Firebase to start over?