
// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: render out the list of rooms
  },

  renderRoom: function(roomname) {

    // TODO: Render out a single room.
    var holderObject = {'roomname': roomname};
    var html = '';
    html += _.template(
      "<div class= <%-roomname%>>" +
      "</div>"
    )(holderObject);
    RoomsView.$select.append(html);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
