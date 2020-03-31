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
    if (question3=="Quãng 3") {correct++;}
    if (question4=="Unison") {correct++;}
    if (question5=="C. Đồ - Đố") {correct++;}
    if (question6=="Octave" || question6=="octave") {correct++;}
    if (question7=="Interval") {correct++;}
    if (question8=="5" || question8=="Quãng 5" || question8=="q5" || question8=="Q5") {correct++;}
    if (question9=="4" || question9=="Quãng 4" || question9=="q4" || question9=="Q4") {correct++;}
    if (question10=="Cao độ") {correct++;}

    var messages=["Tuyệt vời", "Khá", "Cần cố gắng hơn", "Xem lại bài", ];
    var pictures=["Grade 7/gow.webp", "Grade 7/kratoskha.webp", "Grade 7/kratos.webp", "Grade 7/gowlose.webp"];

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