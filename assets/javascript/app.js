$("#questions").hide();
$("#timer").hide();
$("#yourScore").hide();
var correct = 0
var incorrect = 0
var unanswered = 0

$("#start").click(function () {

    $("#questions").show();
    $("#start").hide();
    $("#timer").show();

    var timeLeft = 30;
    var elem = document.getElementById("timer");
    var timerId = setInterval(countdown, 1000);



    function countdown() {
        if (timeLeft === 0) {
            clearInterval(timerId);


            if (document.getElementById('customRadioInline3').checked) {
                correct++;
                console.log("if checker", correct);
            } else {
                incorrect++;
            }
            if(document.getElementById('customRadioInline6').checked){
                correct++;
            } else {incorrect++;
            }
            if(document.getElementById('customRadioInline7').checked){
                correct++;
            } else {incorrect++;
            }
            
            if (document.getElementById('customRadioInline3').checked=== false && document.getElementById('customRadioInline2').checked===false && document.getElementById('customRadioInline1').checked===false) {unanswered++;incorrect--;}

            if (document.getElementById('customRadioInline4').checked=== false && document.getElementById('customRadioInline5').checked===false && document.getElementById('customRadioInline6').checked===false) {unanswered++;incorrect--;}

            if (document.getElementById('customRadioInline7').checked=== false && document.getElementById('customRadioInline8').checked===false && document.getElementById('customRadioInline9').checked===false) {unanswered++;incorrect--;}

        


            $("#questions").hide();
            $("#timer").hide();

            $("#right").append(correct);
            $("#wrong").append(incorrect);
            $("#unanswered").append(unanswered);


            $("#yourScore").show();
        } else {
            elem.innerHTML = '00:' + timeLeft;
            timeLeft--;
        }
    };




});