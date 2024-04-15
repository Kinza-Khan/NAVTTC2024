$(document).ready(function(){
    $("#uName").keyup(function(){
        let userName = $(this).val();
        let userNameRE = /^[a-zA-z\s]{3,}$/;
        if(!userNameRE.test(userName)){
                $(this).css('border','2px solid red');
                $(this).next("small").show().text("please follow the matching pattern").css('color','red');
        }   
        else{
           $(this).css('border','2px solid green');
                $(this).next("small").hide();
        }

    })

    $("#uEmail").keyup(function(){
        let userEmail = $(this).val();
        let userEmailRE = /^[a-z0-9_]{3,}@[a-z]{5}.[a-z]{3}$/;
        // let passwordRE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9][a-zA-Z\d_\@]{8,})$/;
        if(!userEmailRE.test(userEmail)){
                $(this).css('border','2px solid red');
                $(this).next("small").show().text("please follow the matching pattern").css('color','red');
        }   
        else{
           $(this).css('border','2px solid green');
                $(this).next("small").hide();
        }

    })

    $("#uPassword").keyup(function(){
        let userPassword = $(this).val();
        let passwordRE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d_\@]{8,}$/;
        if(!passwordRE.test(userPassword)){
                $(this).css('border','2px solid red');
                $(this).next("small").show().text("please follow the matching pattern").css('color','red');
        }   
        else{
           $(this).css('border','2px solid green');
                $(this).next("small").hide();
        }

    })
    // click function
    $("#btnId").click(function(){
        let userName = $("#uName").val();
        let userEmail = $("#uEmail").val();
        let userPassword = $("#uPassword").val(); 
        let ucPassword = $("#ucPassword").val();
        console.log(userName);
    })
})