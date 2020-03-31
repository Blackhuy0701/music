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

    if (question1=="3" || question1=="3") {correct++;}
    if (question2=="Đô - Mi - Sol") {correct++;}
    if (question3=="Quãng 7") {correct++;}
    if (question4=="Triad") {correct++;}
    if (question5=="A. C") {correct++;}
    if (question6=="3" || question6=="3.") {correct++;}
    if (question7=="3") {correct++;}
    if (question8=="C7" || question8=="C7.") {correct++;}
    if (question9=="Mi thứ" || question9=="Mi thứ.") {correct++;}
    if (question10=="Đệm hát") {correct++;}

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