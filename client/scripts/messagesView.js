// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    for (let msg of Messages._data) {
      MessagesView.renderMessage(msg);
    }
  },

  renderMessage: function(message) {
    var html = '';
    html += MessageView.render(message);
    MessagesView.$chats.append(html);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};