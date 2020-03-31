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

    if (question1=="2/4, 3/4, 4/4" || question1=="2/4, 3/4, 4/4." || question1=="2/4,3/4,4/4" || question1=="2/4,3/4,4/4.") {correct++;}
    if (question2=="Móc đơn") {correct++;}
    if (question3=="Số phách trong một ô nhịp") {correct++;}
    if (question4=="6" || question4=="6.") {correct++;}
    if (question5=="D. 4/4") {correct++;}
    if (question6=="Đen" || question6=="Đen." || question6=="Nốt đen" || question6=="Nốt đen.") {correct++;}
    if (question7=="D. Tất cả đều đúng") {correct++;}
    if (question8=="2" || question8=="2.") {correct++;}
    if (question9=="2" || question9=="2.") {correct++;}
    if (question10=="D. Tất cả đều đúng") {correct++;}

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