$(window).load(function() {


$.getJSON('https://morning-waters-7778.herokuapp.com/clubs',
  function (data) {
    var tr;
    for (var i = 0; i < data.length; i++) {
    var url = 'https://morning-waters-7778.herokuapp.com/clubs/' + data[i].id
        tr = $('<tr/>');
        tr.append("<td>" + data[i].name + "</td>");
        tr.append("<td>" + data[i].description + "</td>");
        tr.append("<a class='linked' link-id='" + data[i].id +"'href='" + url +"'>Details</a>");
        $('#clubTable').append(tr);
    }
  });

})
$(function() {
    $(document).on('click', '.linked', function(event) {
      event.preventDefault()
      $.ajax({
        url: this.href,
        method: 'GET',
        success: function(data){
          var clubDescription = data[0]
          $('#clubPic').attr('src', clubDescription.logo)
          $('#clubName').text(clubDescription.name)
          $('#address').text(clubDescription.address)
          $('#city').text(clubDescription.city + " " + clubDescription.state + ", " + clubDescription.zip)
          var drinksArray = data[1].drinks
          for (var i = 0; i < drinksArray.length; i++) {
            var tr = $('<tr/>');
            tr.append("<td>" + drinksArray[i].drink + "</td>");
            tr.append("<td>$" + drinksArray[i].price + "</td>");
            $('#drinkTable').append(tr);
           }

        }
    });
});
});
