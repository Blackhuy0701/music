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

    if (question1=="La thứ" || question1=="Am") {correct++;}
    if (question2=="Vòng tròn bậc 5") {correct++;}
    if (question3=="Giáng") {correct++;}
    if (question4=="Harmonic Minor") {correct++;}
    if (question5=="C. G") {correct++;}
    if (question6=="Giọng song song" || question6=="Giọng song song.") {correct++;}
    if (question7=="VII") {correct++;}
    if (question8=="Si thứ" || question8=="Bm") {correct++;}
    if (question9=="Nốt Sol" || question9=="Sol" || question9=="G") {correct++;}
    if (question10=="Thứ hoà thanh") {correct++;}

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