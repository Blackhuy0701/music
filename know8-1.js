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

    if (question1=="Một mùa xuân nho nhỏ" || question1=="Một mùa xuân nho nhỏ.") {correct++;}
    if (question2=="Quảng Trị") {correct++;}
    if (question3=="1928") {correct++;}
    if (question4=="Văn hoá thông tin" || question4=="Văn hoá thông tin.") {correct++;}
    if (question5=="C. Thanh Hải") {correct++;}
    if (question6=="9" || question6=="Lớp 9") {correct++;}
    if (question7=="2003") {correct++;}
    if (question8=="Nho nhỏ lặng lẽ dâng cho đời" || question8=="Nho nhỏ lặng lẽ dâng cho đời.") {correct++;}
    if (question9=="Nguyễn Tăng Hích" || question9=="Nguyễn Tăng Hích.") {correct++;}
    if (question10=="Lời ru trên nương") {correct++;}

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