$("#timeHere").html(moment().format('dddd, MMMM Do'))

$("tr").each(function() {
    var block = localStorage.getItem(this.id)
    $(this).children('.second').html(block);
  });

$(".third").click(function () {
 var block = $(this).parent('tr').prop('id')
 var textInput = $(this).parent('tr').children('.second').html();
 localStorage.setItem(block, textInput);
});