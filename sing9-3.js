function check() {

    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
    var question6=document.quiz.question6.value;
    var question7=document.quiz.question7.value;
    var correct=0;

    if (question1=="30/4/1975" || question1=="30/4/1975.") {correct++;}
    if (question2=="Barack Obama") {correct++;}
    if (question3=="Rừng núi dang tay...") {correct++;}
    if (question4=="Ta đi từ đồng hoang vu vượt hết núi đồi" || question4=="Ta đi từ đồng hoang vu vượt hết núi đồi.") {correct++;}
    if (question5=="D. Tất cả đều đúng") {correct++;}
    if (question6=="Richard Fuller" || question6=="Richard Fuller.") {correct++;}
    if (question7=="B. Hồ Quang Hiếu") {correct++;}

    var messages=["Tuyệt vời", "Khá", "Xem lại bài"];
    var pictures=["Grade 9/batwin.gif", "Grade 9/wwk.webp", "Grade 9/suplose.webp"];

    var range;
    if (correct < 4) {range = 2;}
    if (correct > 3 && correct < 6) {range = 1;}
    if (correct > 5) {range = 0;}

    
    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("message").innerHTML=messages[range];
    document.getElementById("number_correct").innerHTML="Bạn đã đúng " + correct + "/7 câu.";
    document.getElementById("picture").src=pictures[range];

}