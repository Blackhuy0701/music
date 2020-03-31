function check() {

    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
    var question6=document.quiz.question6.value;
    var question7=document.quiz.question7.value;
    var correct=0;

    if (question1=="Phạm Tuyên" || question1=="Phạm Tuyên.") {correct++;}
    if (question2=="Matvey Isaakovich Blanter") {correct++;}
    if (question3=="Mikhail Vasilyevich Isakovsky") {correct++;}
    if (question4=="Ý" || question4=="Ý." || question4==" tiếng Ý" || question4==" tiếng Ý.") {correct++;}
    if (question5=="B. 1938") {correct++;}
    if (question6=="Hay chăng tấm lòng" || question6=="Hay chăng tấm lòng.") {correct++;}
    if (question7=="D. Tất cả đều đúng") {correct++;}

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