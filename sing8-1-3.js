function check() {

    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
    var question6=document.quiz.question6.value;
    var question7=document.quiz.question7.value;
    var correct=0;

    if (question1=="Trương Quang Lục" || question1=="Trương Quang Lục.") {correct++;}
    if (question2=="Màu mực tím") {correct++;}
    if (question3=="Nhịp 4/4") {correct++;}
    if (question4=="Trái đất này là của chúng mình" || question4=="Trái đất này là của chúng mình." || question4=="Trái Đất này là của chúng mình" || question4=="Trái Đất này là của chúng mình.") {correct++;}
    if (question5=="C. 25/2/1933") {correct++;}
    if (question6=="Mùa xuân đang về trên cành lá" || question6=="Mùa xuân đang về trên cành lá." || question6=="Cây lá đâm chồi khi xuân đến." || question6=="Cây lá đâm chồi khi xuân đến") {correct++;}
    if (question7=="Hơn 300") {correct++;}

    var messages=["Tuyệt vời", "Khá", "Xem lại bài"];
    var pictures=["Grade8/giphy.webp", "Grade8/thanos.webp", "Grade8/hulk.webp"];

    var range;
    if (correct < 4) {range = 2;}
    if (correct > 3 && correct < 6) {range = 1;}
    if (correct > 5) {range = 0;}

    
    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("message").innerHTML=messages[range];
    document.getElementById("number_correct").innerHTML="Bạn đã đúng " + correct + "/7 câu.";
    document.getElementById("picture").src=pictures[range];

}