//Cate Hanson's final project

var myDataRef = new Firebase("https://fiery-inferno-6944.firebaseIO.com/");
var grandTotal = 0;
var counter = 0;


$(document).ready(function() {


  // Set up a submit handler so that data is passed when the form is submitted
  $("form.dailyscore").submit(function(e) {
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
      var comment_pts; // this has no parseInt
        if ($( "input.comments" ).val() === "") {
          comment_pts = 0;
        } else {
          comment_pts = 1;
        };
      var dailyTotal = parseInt(nutrition + workout + stretch + supplements + water + other + comment_pts);
      console.log('here');
      console.log(dailyTotal);

      
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

      $("form")[0].reset()

     
    



    // after 28 days have been entered, give some text and a start over button 
    // counter ++; // ++ iterating by one


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
     // update
     addGrandTotal(scores.dailyTotal);
     addCounter();
    });
  
 

//start again button
// on submit, clear array?
// start at day = 1 again

function addGrandTotal (dailyTotal) {
  //console.log("hi");
     console.log("grandTotal is" +  grandTotal + "before");
     grandTotal += dailyTotal;
     console.log("grandTotal is" +  grandTotal + "now");
     $(".myTotal").html("Total Points: " + grandTotal); 
};

function addCounter () {
  counter ++;
  return counter;
};