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

    if (question1=="Biết ơn Võ Thị Sáu" || question1=="Biết ơn Võ Thị Sáu.") {correct++;}
    if (question2=="Côn Đảo") {correct++;}
    if (question3=="1933") {correct++;}
    if (question4=="Đại tá" || question4=="Đại tá.") {correct++;}
    if (question5=="D. Hoạ sĩ") {correct++;}
    if (question6=="Hà Nội" || question6=="Hà Nội.") {correct++;}
    if (question7=="2016") {correct++;}
    if (question8=="Mùa xuân chị đã dâng cả cuộc đời" || question8=="Mùa xuân chị đã dâng cả cuộc đời.") {correct++;}
    if (question9=="1958" || question9=="1958." || question9=="Năm 1958" || question9=="Năm 1958.") {correct++;}
    if (question10=="Chiều trên bến cảng") {correct++;}

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