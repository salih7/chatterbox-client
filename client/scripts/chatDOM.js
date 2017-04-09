$(document).ready(function() {
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

  $('.roomButtonClick').on('click', function(event) {
    var msg = $('.roomNameInput').val();
    app.handleRooms(msg);
  });

  $('#send .submit').on('submit', function(event) {
    var msg = $('#message').val();
    app.handleSubmit(msg);
    event.preventDefault();
  });

  $(this).on('click', '.username', function(event) {
    var userName = $(event.target).text();
    $(event.target).addClass('friend');
    app.handleUsernameClick(userName);
    var friendsArr = Array.from($('div .username'));
    friendsArr.forEach(function(user) {
      if(app.friendList.hasOwnProperty($(user).text().match(/^\w+/))) {
        $(user).addClass('friend');
      }
    });
  });
/*
  $('.username').on('click', function(event) {
    var userName = $(event.target).text();
    $(event.target).addClass('friend');
    app.handleUsernameClick(userName);
    var friendsArr = Array.from($('div .username'));
    friendsArr.forEach(function(user) {
      if(app.friendList.hasOwnProperty($(user).text().match(/^\w+/))) {
        $(user).addClass('friend');
      }
    });
  });
*/
});