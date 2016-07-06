$(document).ready(function () {

  /* Your code goes here */
  $('#ajaxy').on('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET",
      data: { },
      dataType: "text"
    }).done(function(responseData){
      console.log('hello');
      $('body').append(responseData);
    });//.done function end
  }); //end click function for button
});//document function end
