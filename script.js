$("button").click(function(){
     let questionOne = $(".question-one").val();
     let questionTwo = $(".question-two").val();
    let questionThree = $(".question-three").val();
    //alert(questionOne);
    let money = 28 * 52 * questionTwo * questionThree;
     // alert(money);
    let message = questionOne + " at the rate you're going by the year of 2050 you're going to spend " + money + " at Mcdonalds";
        $(".fortune-teller").hide();
    alert(message);


});