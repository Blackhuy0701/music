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

    if (question1=="26/12/2019" || question1=="26/12/2019.") {correct++;}
    if (question2=="Màu áo chú bộ đội") {correct++;}
    if (question3=="5/3/1925") {correct++;}
    if (question4=="1975") {correct++;}
    if (question5=="D. Dáng đứng Bến Tre") {correct++;}
    if (question6=="Nguyễn Thị Bạch Lệ" || question6=="Nguyễn Thị Bạch Lệ.")  {correct++;}
    if (question7=="Nguyễn Văn Thương") {correct++;}
    if (question8=="Dư âm" || question8=="Dư âm.") {correct++;}
    if (question9=="Con có hay chăng" || question9=="Con có hay chăng.") {correct++;}
    if (question10=="Vợ và con gái lớn của ông") {correct++;}

    var messages=["Tuyệt vời", "Khá", "Cần cố gắng hơn", "Xem lại bài", ];
    var pictures=["Grade 9/dowin.webp", "Grade 9/dokha.webp", "Grade 9/doco.webp", "Grade 9/dolo.webp"];

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