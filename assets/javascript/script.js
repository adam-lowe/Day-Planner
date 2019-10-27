$(".third").click(function () {
 var block = $(this).parent('tr').prop('id')
 var textInput = $(this).parent('tr').children('.second').html();
 localStorage.setItem(block, textInput);
});