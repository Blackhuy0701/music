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

    if (question1=="2" || question1=="2.") {correct++;}
    if (question2=="Mi - Fa") {correct++;}
    if (question3=="Số lượng") {correct++;}
    if (question4=="Unison") {correct++;}
    if (question5=="B. 0.5") {correct++;}
    if (question6=="Perfect" || question6=="Perfect.") {correct++;}
    if (question7=="0.5 cung") {correct++;}
    if (question8=="Quãng hoà âm" || question8=="Quãng hoà âm.") {correct++;}
    if (question9=="Quãng 8 đúng" || question9=="Quãng 8 đúng.") {correct++;}
    if (question10=="Quãng thuận") {correct++;}

    var messages=["Tuyệt vời", "Khá", "Cần cố gắng hơn", "Xem lại bài", ];
    var pictures=["Grade 9/captain.webp", "Grade 9/Valkyrie.webp", "Grade 9/cable.webp", "Grade 9/hulkthor.webp"];

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