function check() {

    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
    var question6=document.quiz.question6.value;
    var question7=document.quiz.question7.value;
    var correct=0;

    if (question1=="Phạm Tuyên" || question1=="Phạm Tuyên.") {correct++;}
    if (question2=="Nhịp 3/4") {correct++;}
    if (question3=="Nga") {correct++;}
    if (question4=="Em" || question4=="Em." || question4=="Mi thứ") {correct++;}
    if (question5=="A. Móc đơn, đen, đen chấm dôi, trắng, trắng chấm dôi") {correct++;}
    if (question6=="G" || question6=="G." || question6=="G trưởng") {correct++;}
    if (question7=="Tất cả đều sai") {correct++;}

    var messages=["Tuyệt vời", "Khá", "Xem lại bài"];
    var pictures=["Grade 9/doom.webp", "Grade 9/doomf.webp", "Grade 9/dooml.webp"];

    var range;
    if (correct < 4) {range = 2;}
    if (correct > 3 && correct < 6) {range = 1;}
    if (correct > 5) {range = 0;}

    
    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("message").innerHTML=messages[range];
    document.getElementById("number_correct").innerHTML="Bạn đã đúng " + correct + "/7 câu.";
    document.getElementById("picture").src=pictures[range];

}