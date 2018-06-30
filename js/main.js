function registerLedger() {
    console.log("processing...");
    var publicKey = document.getElementById("public-key-input").value;
    var period = document.getElementById("period-input").value;
    var currentHashBlock = document.getElementById("current-block-hash-input").value;
    var password = document.getElementById("password-input").value;

    var datatest = JSON.stringify({publickey: publicKey , timeperiod: period, currenthash: currentHashBlock,
                                    password: password});
    console.log(datatest);

    $.ajax({
        url: 'localhost:3000/register',
        type: 'POST',
        contentType:'application/json',
        data: datatest,
        dataType:'json'
    });
}



$(document).ready(function() {

     document.getElementById("register-button").onclick = function(){
         $('.home-tab').hide();
         $('.register-tab').show();
     };

     document.getElementById("register-button-mobile").onclick = function(){
        $('.home-tab-mobile').hide();
        $('.register-tab-mobile').show();
    };

    document.getElementById("submit-register-button").onclick = function(){
        registerLedger();
    };

    document.getElementById("submit-register-button-mobile").onclick = function(){
        registerLedger();
    };

    document.getElementById("go-back-button").onclick = function(){
        $('.home-tab').show();
        $('.register-tab').hide();
    };

    document.getElementById("go-back-button-mobile").onclick = function(){
        console.log("goback");
        $('.home-tab-mobile').show();
        $('.register-tab-mobile').hide();
    };

});
