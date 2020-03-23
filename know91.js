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

    if (question1=="Du Tử Lê") {correct++;}
    if (question2=="Bụi phấn") {correct++;}
    if (question3=="XX") {correct++;}
    if (question4=="Có") {correct++;}
    if (question5=="C. 30%") {correct++;}
    if (question6=="Sai") {correct++;}
    if (question7=="Phan Huỳnh Điểu") {correct++;}
    if (question8=="Ít") {correct++;}
    if (question9=="Bánh trôi nước") {correct++;}
    if (question10=="Dựa theo chủ đề bài thơ") {correct++;}

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