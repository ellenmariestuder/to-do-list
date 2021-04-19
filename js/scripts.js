
function newItem () {

  /* Add input value to list as list-item upon click */
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if(inputValue==='') {
    alert('Enter a list item!');
    } else {
      $('#list').append(li);
    }

  /* Add 'x' button to remove item from list */
  let crossOutButton = document.createElement('crossOutButton');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  $('crossOutButton').click(function () {
    $(this).closest('li').addClass('delete');
  });

  /* Add/ remove text strikeout on click */
  function strikeText() {
    li.toggleClass('strike');
  }

  li.on('click', function strikeText() {
    li.toggleClass('strike');
  }); 

  /* Make items re-orderable */
  $('#list').sortable();
}
