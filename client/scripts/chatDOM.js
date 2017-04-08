$(document).ready(() => {
  app.init();

  $('.chatSubmit').on('click', function(event) {
    // do some stuff.
    var msg = $('.chatMessage').val();
    app.send({
      username: 'Google',
      text: msg,
      roomname: '4chan'
    });
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