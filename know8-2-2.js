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

    if (question1=="Đơn ca" || question1=="Đơn ca.") {correct++;}
    if (question2=="5") {correct++;}
    if (question3=="Bè phức điệu") {correct++;}
    if (question4=="Chỉ huy hợp xướng" || question4=="Chỉ huy hợp xướng.") {correct++;}
    if (question5=="C. Basse") {correct++;}
    if (question6=="Tenor" || question6=="Tenor.") {correct++;}
    if (question7=="4") {correct++;}
    if (question8=="7" || question8=="Bảy loại" || question8=="Bảy loại."|| question8=="Bảy" || question8=="7 loại." || question8=="7 loại" || question8=="7.") {correct++;}
    if (question9=="Alto" || question9=="Alto.") {correct++;}
    if (question10=="A cappella") {correct++;}

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