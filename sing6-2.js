function check() {

    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
    var question6=document.quiz.question6.value;
    var question7=document.quiz.question7.value;
    var correct=0;

    if (question1=="Nguyễn Huy Hùng" || question1=="Nguyễn Huy Hùng.") {correct++;}
    if (question2=="Nhịp 2/4") {correct++;}
    if (question3=="Mẹ lên rẫy em đến trường") {correct++;}
    if (question4=="Uyên Phương" || question4=="Uyên Phương.") {correct++;}
    if (question5=="C. 1982") {correct++;}
    if (question6=="Ước mơ" || question6=="ước mơ" || question6=="Ước mơ." || question6=="ước mơ.") {correct++;}
    if (question7=="12/7/1954") {correct++;}

    var messages=["Tuyệt vời", "Khá", "Xem lại bài"];
    var pictures=["Grade 7/sc.webp", "Grade 7/raynor.webp", "Grade 7/sclose.webp"];

    var range;
    if (correct < 4) {range = 2;}
    if (correct > 3 && correct < 6) {range = 1;}
    if (correct > 5) {range = 0;}

    
    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("message").innerHTML=messages[range];
    document.getElementById("number_correct").innerHTML="Bạn đã đúng " + correct + "/7 câu.";
    document.getElementById("picture").src=pictures[range];

}