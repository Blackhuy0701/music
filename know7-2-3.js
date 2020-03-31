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

    if (question1=="Huy Du" || question1=="Huy Du.") {correct++;}
    if (question2=="Kháng chiến chống Mỹ") {correct++;}
    if (question3=="Bắc Ninh") {correct++;}
    if (question4=="Huy Cầm" || question4=="Huy Cầm.") {correct++;}
    if (question5=="C. 3 đoạn") {correct++;}
    if (question6=="1/12/1926" || question6=="1/12/1926.") {correct++;}
    if (question7=="2007" || question7=="2007.") {correct++;}
    if (question8=="Tổ quốc chưa yên" || question8=="Tổ quốc chưa yên.") {correct++;}
    if (question9=="Nguyễn Huy Du" || question9=="Nguyễn Huy Du.") {correct++;}
    if (question10=="1969") {correct++;}

    var messages=["Tuyệt vời", "Khá", "Cần cố gắng hơn", "Xem lại bài", ];
    var pictures=["Grade 7/dmc.webp", "Grade 7/dmc4.webp", "Grade 7/dmc3.webp", "Grade 7/dmc5.webp"];

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