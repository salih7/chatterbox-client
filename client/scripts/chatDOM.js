$(document).ready(() => {
  app.init();

  $('.chatSubmit').on('click', (event) => {
    // do some stuff.
    var msg = $('.chatMessage').val();
    app.send({
      username: 'shawndrost',
      text: msg,
      roomname: '4chan'
    });
    event.preventDefault();
  });

});