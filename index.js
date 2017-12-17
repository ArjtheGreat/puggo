$(document).ready(function(){
  $('#doggyform').on('submit', function(event) {
    event.preventDefault()

    var input = $('#doggyinput').val()
    var newELement = '<li>'+ input + '</li>'
    $('#doggylist').append(newELement)
  })
})
