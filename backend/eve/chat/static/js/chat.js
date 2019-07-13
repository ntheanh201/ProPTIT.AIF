function run () {
  endpoint = 'ws://' + window.location.host + '/message/'
  var socket = new ReconnectingWebSocket(endpoint)
  $('form').submit(function () {
    let data = $('#m').val();
    $('#messages').append($('<li style="color:red" class="me">').text("Me: " + data));
    socket.send(JSON.stringify({ "new_message": data }));
    $('#m').val('');
    return false;
  });

  socket.onmessage = function (e) {
    console.log(e)
    var responseData = JSON.parse(e.data)
    $('#messages').append($('<li style="color:blue" class="bot">').text("Bot: " + responseData.translatedText));
  }
};
run();
