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

    if (question1=="7" || question1=="Bảy" || question1=="7 bậc" || question1=="Bảy bậc") {correct++;}
    if (question2=="2") {correct++;}
    if (question3=="Không") {correct++;}
    if (question4=="Scale") {correct++;}
    if (question5=="C. 1-1-1/2-1-1-1-1/2") {correct++;}
    if (question6=="Đồ, Rê, Mi, Fa, Sol, La, Si, Đô" || question6=="Đồ, Rê, Mi, Fa, Sol, La, Si, Đố" || question6=="Đô, Rê, Mi, Fa, Sol, La, Si, Đô" || question6=="Đồ, Rê, Mi, Fa, Sol, La, Si, Đô") {correct++;}
    if (question7=="Đô trưởng") {correct++;}
    if (question8=="I" || question8=="1" || question8=="Bậc 1" || question8=="Bậc I") {correct++;}
    if (question9=="Major") {correct++;}
    if (question10=="Natural major") {correct++;}

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