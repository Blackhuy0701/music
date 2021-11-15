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

    if (question1=="11/11/1924" || question1=="11/11/1924.") {correct++;}
    if (question2=="1971") {correct++;}
    if (question3=="Đà Nẵng") {correct++;}
    if (question4=="Huy Quang" || question4=="Huy Quang.") {correct++;}
    if (question5=="C. Ngọc Anh") {correct++;}
    if (question6=="Hrê" || question6=="Hrê") {correct++;}
    if (question7=="2015") {correct++;}
    if (question8=="Bóng cây Kơ-nia" || question8=="Bóng cây Kơ-nia.") {correct++;}
    if (question9=="Đội kèn tí hon" || question9=="Đội kèn tí hon.") {correct++;}
    if (question10=="Trầu cau") {correct++;}

    var messages=["Tuyệt vời", "Khá", "Cần cố gắng hơn", "Xem lại bài", ];
    var pictures=["Grade8/venuswin.webp", "Grade8/saliormars.webp", "Grade8/luna.webp", "Grade8/sailorlose.webp"];

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