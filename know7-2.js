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

    if (question1=="6" || question1=="6." || question1=="Sáu thể loại" || question1=="Sáu" || question1=="Sáu.") {correct++;}
    if (question2=="Lao động") {correct++;}
    if (question3=="2/4") {correct++;}
    if (question4=="Nghi lễ, nghi thức" || question4=="Nghi lễ, nghi thức." || question4=="Nghi lễ" || question4=="Nghi lễ." || question4=="Nghi thức" || question4=="Nghi thức.") {correct++;}
    if (question5=="D. A, B đúng") {correct++;}
    if (question6=="Đội ca" || question6=="Đội ca.") {correct++;}
    if (question7=="D. Tất cả đều đúng") {correct++;}
    if (question8=="Tiến mau ra sa trường" || question8=="Tiến mau ra sa trường.") {correct++;}
    if (question9=="Tiến quân ca" || question9=="Tiến quân ca.") {correct++;}
    if (question10=="Lí kéo chài" || question10=="Lí kéo chài.") {correct++;}

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