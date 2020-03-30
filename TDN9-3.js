function check() {

    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
    var question6=document.quiz.question6.value;
    var question7=document.quiz.question7.value;
    var correct=0;

    if (question1=="Hoàng Việt") {correct++;}
    if (question2=="Nhịp 2/4") {correct++;}
    if (question3=="1950") {correct++;}
    if (question4=="F") {correct++;}
    if (question5=="D. Móc đơn, đen, đen chấm dôi, trắng") {correct++;}
    if (question6=="Fm") {correct++;}
    if (question7=="Nhạc rừng") {correct++;}

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