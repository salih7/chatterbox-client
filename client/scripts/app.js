// YOUR CODE HERE:
// Server: http://parse.sfm8.hackreactor.com/


// -------------- Example Requests and Messages --------------------------
// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   url: 'http://parse.CAMPUS.hackreactor.com/chatterbox/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });

// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };

class App {
  constructor() {
    this.server = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
    this.username = window.location.search.match(/\w+$/) ? window.location.search.match(/\w+$/)[0] : '';
    this.roomname = 'lobby';
    this.friendList = {};
    this.text = '';
  }

  init() {
    this.fetch();
    // setInterval(() => {
    //   this.fetch();
    // }, 3000);
    // this.send();
  }

  send(message) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent', data);
        location.reload();
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }

  fetch() {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'GET',
      // data: {'order': '-createdAt'},
      data: {'order': '-createdAt'},
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent', data);
     
        data.results.forEach(function(result) {
          // if (app.friendList.hasOwnProperty(result.username)) {
          //   $('.username').addClass('friend');
          // }
          app.renderMessage(result.username + ' says: <br> ' + result.text);
        });

      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }

  renderMessage(message) {
    console.log('MESSAGE', message);
    $('#chats').append('<div class="username chat">' + message + '</div>');
  }

  clearMessages() {
    console.log('MESSAGE CLEARED');
    $('#chats').empty();
  }

  renderRoom(room) {
    console.log('RENDERING A ROOM YO!');
    $('#roomSelect').append('<div>' + room + '</div>');
  }

  handleSubmit(inputValue) {
    var message = {
      username: this.username,
      text: inputValue,
      roomname: this.roomname
    };
    app.send(message);
  }

  handleRooms(roomName) {
    this.roomname = roomName;
    $('.roomChange').append('<option value="' + roomName + '">' + roomName + '</option>');
  }

  handleUsernameClick(username) {
    var parseUsername = username.match(/^\w+/);
    this.friendList[parseUsername[0]] = parseUsername[0];
  }
}

var app = new App;




