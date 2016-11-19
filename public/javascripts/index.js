function scrollAnimation(id){
    var position = $(id).offset(); // 위치값
    $('html,body').animate({ scrollTop : position.top }, 500);
}

$(document).ready(function() {
    var inputText = "",
        translatedText = "",
        sentiment = "";

    $('.card').hide();
    $('#noti').hide();
    
    $('#startBtn').click(function(){
        $('#section1').fadeIn('slow');
        scrollAnimation('#section1');
    });
    $('#btnTranslate').click(function(){
        if($('#txtInput').val() == ""){
            $('#noti').fadeIn('slow').delay(1200).fadeOut('slow')
        }
        else{
            $('#section2').fadeIn('slow');
            scrollAnimation('#section2');    
        }
        
    });
    $('#btnSentiment').click(function(){
        $('#section3').fadeIn('slow');
        scrollAnimation('#section3');
    });
    $('#btnCompare').click(function(){
        $("#sentiment_img").attr("src", "/images/" + sentiment + ".png");
        $('#section4').fadeIn('slow');
        $("#inputText").html(inputText);
        scrollAnimation('#section4');
    });


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
                 inputText = text;
            }
        })
    });


    $("#btnSentiment").click(function(){
        var text = $("#txtOutput").val(),
            translatedText = text;
        $.ajax({
            url: "/sentiment",
            type: "post",
            data: {
                text : text
            },
            success:function( html ) {
                $("#sentimentJsonOutput").val(html);
                sentiment = parseInt(JSON.parse(html)["documents"][0]["score"]*10);
            }
        })
    });
});