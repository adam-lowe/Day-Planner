$("#timeHere").html(moment().format('dddd, MMMM Do'))

$("tr").each(function() {
    var block = localStorage.getItem(this.id)
    $(this).children('.second').html(block);
    colorCode(this.id);
  });

$(".third").click(function () {
 var block = $(this).parent('tr').prop('id')
 var textInput = $(this).parent('tr').children('.second').html();
 localStorage.setItem(block, textInput);
});

function colorCode(blockId) {
    var block = $("#" + blockId).children('.second')
    if (((parseInt(moment().format('H'))) > (parseInt(blockId.slice(1))))) {
        // past #c0b9b9
        block.attr("style", "background-color: #c0b9b9;")
    }
    else if (((parseInt(moment().format('H'))) < (parseInt(blockId.slice(1))))) {
        // future #9ae591
        block.attr("style", "background-color: #9ae591;")
    }
    else {
        // current #f36060
        block.attr("style", "background-color: #f36060;")
    }
}