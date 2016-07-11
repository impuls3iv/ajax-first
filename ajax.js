$(document).ready(function () {

  /* Your connnde goes here */
  $('#ajaxy').on('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET",
      data: { },
      dataType: "text"
    }).done(function(responseData){
      console.log('hello');
      $('body').append(responseData);
    }).always(function(){
      $('#step12').append("I dont know what happened. But it either worked or didnt");
    });//end of always
  }); //end click function for button

  $('#ajaxy2').on('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/pong",
      method: "GET",
      data: { },
      dataType: "text"
    }).done(function(responseData){
      $('#step3456').append(responseData);
      console.log("part 345 success");
    }).fail(function(){
      $('#step3456').append("FAILED");
      console.log("request failed");
    }).always(function(){
      $('#step3456').append("...but something happened")
    });//end of always function
  });//end of button


  $('#step7button').on('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/count",
      method: "GET",
      data: { },
      dataType: "text"
    }).done(function(responseData){
      $('#step7').append(responseData);
      console.log("step 7");
    });
  }); //end of button clicker

  $('#step8button').on('click', function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/time",
      method: "GET",
      data: { timezone: 'Europe/Sofia' },
      dataType: "text"
    }).done(function(responseData){
      $('#step8').append(responseData);
    });
  });//end of button click

  $('#step9button').on('click', function() {
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/a_car",
      method: "GET",
      data: { },
      dataType: "html"
    }).done(function(responseData){
      $('#list').append(responseData);
    });
  });

});//document function end
