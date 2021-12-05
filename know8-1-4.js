function check() {

    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
    var question6=document.quiz.question6.value;
    var question7=document.quiz.question7.value;
    var question8=document.quiz.question8.value;
    var question9=document.quiz.question9.value;
    var question10=document.quiz.question10.value;
    var correct=0;

    if (question1=="Gõ" || question1=="Bộ gõ") {correct++;}
    if (question2=="60cm") {correct++;}
    if (question3=="Tây Nguyên") {correct++;}
    if (question4=="Gia Rai" || question4=="Gia Rai.") {correct++;}
    if (question5=="D. 12-16") {correct++;}
    if (question6=="Nam" || question6=="Nam.") {correct++;}
    if (question7=="Vị thần") {correct++;}
    if (question8=="Đàn đá" || question8=="Đàn đá.") {correct++;}
    if (question9=="1949" || question9=="1949.") {correct++;}
    if (question10=="Đá kêu như tiếng cồng") {correct++;}

    var messages=["Tuyệt vời", "Khá", "Cần cố gắng hơn", "Xem lại bài", ];
    var pictures=["Grade8/venuswin.webp", "Grade8/saliormars.webp", "Grade8/luna.webp", "Grade8/sailorlose.webp"];

    var range;
    if (correct < 5) {range = 3;}
    if (correct > 4 && correct < 7) {range = 2;}
    if (correct > 6 && correct < 9) {range = 1;}
    if (correct > 8) {range = 0;}

    
    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("message").innerHTML=messages[range];
    document.getElementById("number_correct").innerHTML="Bạn đã đúng " + correct + "/10 câu.";
    document.getElementById("picture").src=pictures[range];

}