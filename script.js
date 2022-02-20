function compute()
{
    
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;

    var year = new Date().getFullYear() + parseInt(years);

    amount = interest;



    if(principal <= 0) {
        alert("You must enter a positive amount");
        var resultstr = "Not valid input";
        document.getElementById("principal").focus();
    } else {
        var resultstr = "If you deposit \<span class=\"highlight-result\"\>" + principal + "\<\/span\>, \<br\>at an interest rate of \<span class=\"highlight-result\"\>" + rate + "%\<\/span\>\<br\>You will receive an amount of \<span class=\"highlight-result\"\>" + amount + ",\<\/span\>\<br\>in the year \<span class=\"highlight-result\"\>" + year +"\<\/span\>\<br\>";
        alert(resultstr);
    }
    //alert(resultstr);
    document.getElementById("result").innerHTML=resultstr;
    
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

        