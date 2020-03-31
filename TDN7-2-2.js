function check() {

    var question1=document.quiz.question1.value;
    var question2=document.quiz.question2.value;
    var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
    var question5=document.quiz.question5.value;
    var question6=document.quiz.question6.value;
    var question7=document.quiz.question7.value;
    var correct=0;

    if (question1=="Ukraina" || question1=="Ukraina.") {correct++;}
    if (question2=="Nhịp 3/4") {correct++;}
    if (question3=="Đông Âu") {correct++;}
    if (question4=="Không" || question4=="Không.") {correct++;}
    if (question5=="D. Móc đơn, đen, trắng, trắng chấm dôi") {correct++;}
    if (question6=="Là, Si, Đô, Rê, Mi, Fa, Sol, La, Si, Đố" || question6=="Là,Si,Đô,Rê,Mi,Fa,Sol,La,Si,Đố" || question6=="Là Si Đô Rê Mi Fa Sol La Si Đố") {correct++;}
    if (question7=="Ukraine") {correct++;}

    var messages=["Tuyệt vời", "Khá", "Xem lại bài"];
    var pictures=["Grade 7/han.webp", "Grade 7/obiwan.webp", "Grade 7/luke.webp"];

    var range;
    if (correct < 4) {range = 2;}
    if (correct > 3 && correct < 6) {range = 1;}
    if (correct > 5) {range = 0;}

    
    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("message").innerHTML=messages[range];
    document.getElementById("number_correct").innerHTML="Bạn đã đúng " + correct + "/7 câu.";
    document.getElementById("picture").src=pictures[range];

}