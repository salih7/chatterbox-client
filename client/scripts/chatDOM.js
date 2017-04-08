$(document).ready(() => {
  app.init();

  $('.chatSubmit').on('click', function(event) {
    // do some stuff.
    var msg = $('.chatMessage').val();
    app.handleSubmit(msg);
    // app.send()
    event.preventDefault();
  });

  $('.roomChange').on('change', function(event) {
    // alert(this.value)
    if (this.value === 'newRoom') {
      $('.newRoomInput').css('visibility', 'visible');
    } else {
      $('.newRoomInput').css('visibility', 'hidden');
    }
  });

});