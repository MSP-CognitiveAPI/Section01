$(document).ready(function() {
    $("#btnTranslate").click(function(){
        var text = $("#txtInput").val();
        $.ajax({
            url: "/translate",
            type: "post",
            data: {
                text : text
            },
            success:function( html ) {
                 $("#txtOutput").val(html);
            }
        })
    });


    $("#btnSentiment").click(function(){
        var text = $("#txtOutput").val();
        $.ajax({
            url: "/sentiment",
            type: "post",
            data: {
                text : text
            },
            success:function( html ) {
                $("#sentimentJsonOutput").val(html);
            }
        })
    });
});