let signUp = false;
$('#SignedUpCompleteId').hide();
$('#LoginpCompleteId').hide();
$('#signupBoxId').hide();
$('#signupBoxId .contents').hide();
$('.ballonbox').hide();
$('.imagestyle').hide();
$('input').css('outline', 'none');


$('#loginTabId').click(function () {
    $('#SignedUpCompleteId').hide();

    $('#loginNaviId').removeClass('navigation-bar-inactive');
    $('#loginNaviId').addClass('navigation-bar-active');
    $('#loginTextId').removeClass('text-inactive');
    $('#loginTextId').addClass('text-active');
    
    $('#signupNaviId').removeClass('navigation-bar-active');
    $('#signupNaviId').addClass('navigation-bar-inactive');
    $('#signupTextId').removeClass('text-active');
    $('#signupTextId').addClass('text-inactive');

    $('#signupBoxId').hide();
    $('#signupBoxId .contents').hide();
    $('#loginBoxId').show();
    $('#loginBoxId .contents').fadeIn(1500);
});
$('#signupTabId').click(function () {
    $('#SignedUpCompleteId').hide();

    $('#signupNaviId').removeClass('navigation-bar-inactive');
    $('#signupNaviId').addClass('navigation-bar-active');
    $('#signupTextId').removeClass('text-inactive');
    $('#signupTextId').addClass('text-active');
    
    $('#loginNaviId').removeClass('navigation-bar-active');
    $('#loginNaviId').addClass('navigation-bar-inactive');
    $('#loginTextId').removeClass('text-active');
    $('#loginTextId').addClass('text-inactive');
    $('#loginBoxId').hide();
    $('#loginBoxId .contents').hide();
    $('#signupBoxId').show();
    $('#signupBoxId .contents').fadeIn(1500);

    
});
$('#signupBoxId input').focus(function () {
    $(this).css('outline', 'none');
    // $('#signupBoxId input').css('border-color', 'red');
    // $('.ballonbox').show();
    // $('#signupBoxId :submit').css('border-color', '#2a5594');
});
let array = [false, false, false, false, false, false];
let pattern_num = /[0-9]/;
let pattern_eng = /^[a-z|A-Z]+$/;
let pattern_eng_cap = /^[A-Z]+$/;
var pattern_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
let pattern_pw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
$('#FirstnameInputId').keyup(function (e) {
    if (pattern_eng_cap.test(e.target.value[0])) { // capital
        if (!pattern_eng.test(e.target.value)) { // not allowed
            $('#FirstNameBallonBoxId').show();
            $('#FirstNameBallonBoxId').html("First name cannot contain any special characters or numbers!");
            $('#FirstNameCheckId').hide();
            $(this).css('border-color', 'red');
            array[0] = false;
        }
        else {
            $('#FirstNameBallonBoxId').hide();
            $('#FirstNameCheckId').show();
            $('#FirstNameBallonBoxId').html("Please enter your first name!");
            $(this).css('border-color', 'white');
            array[0] = true;
        }
    }
    else { // no capital
        $('#FirstNameBallonBoxId').show();
        $('#FirstNameBallonBoxId').html("First name should start with capital letter!");
        $('#FirstNameCheckId').hide();
        $(this).css('border-color', 'red');
        array[0] = false;
    }

    if (e.target.value == "") {
        $('#FirstNameBallonBoxId').show();
        $('#FirstNameBallonBoxId').html("Please enter your first name!");
        $('#FirstNameCheckId').hide();
        $(this).css('border-color', 'red');
        array[0] = false;
    }
});

$('#LastNameInputId').keyup(function (e) {
    if (pattern_eng_cap.test(e.target.value[0])) { // capital
        if (!pattern_eng.test(e.target.value)) { // not allowed
            $('#LastNameBallonBoxId').show();
            $('#LastNameBallonBoxId').html("Last name cannot contain any special characters or numbers!");
            $('#LastNameCheckId').hide();
            $(this).css('border-color', 'red');
            array[1] = false;
        }
        else {
            $('#LastNameBallonBoxId').hide();
            $('#LastNameCheckId').show();
            $('#LastNameBallonBoxId').html("Please enter your last name!");
            $(this).css('border-color', 'white');
            array[1] = true;
        }
    }
    else { // no capital
        $('#LastNameBallonBoxId').show();
        $('#LastNameBallonBoxId').html("Last name should start with capital letter!");
        $('#LastNameCheckId').hide();
        $(this).css('border-color', 'red');
        array[1] = false;
    }

    if (e.target.value == "") {
        $('#LastNameBallonBoxId').show();
        $('#LastNameBallonBoxId').html("Please enter your last name!");
        $('#LastNameCheckId').hide();
        $(this).css('border-color', 'red');
        array[1] = false;
    }
});



$('input:radio').click(function () {
    $('#GenderCheckId').show();
    $('#GenderBallonBoxId').hide();

    array[2] = true;
});



$('#EmailInputId').keyup(function (e) {
    if (pattern_email.test(e.target.value)) {
        $('#EmailBallonBoxId').hide();
        $('#EmailCheckId').show();
        $('#EmailBallonBoxId').html("Please enter your email!");
        $(this).css('border-color', 'white');
        array[3] = true;
    }
    else {
        $('#EmailBallonBoxId').show();
        $('#EmailBallonBoxId').html("Your email address is invalid!");
        $('#EmailCheckId').hide();
        $(this).css('border-color', 'red');
        array[3] = false;
    }

    if (e.target.value == "") {
        $('#EmailBallonBoxId').show();
        $('#EmailBallonBoxId').html("Please enter your email!");
        $('#EmailCheckId').hide();
        $(this).css('border-color', 'red');
        array[3] = false;
    }
});

$('#LoginEmailInputId').keyup(function (e) {
    if (pattern_email.test(e.target.value)) {
        $('#LoginEmailBallonBoxId').hide();
        $('#LoginEmailCheckId').show();
        $('#LoginEmailBallonBoxId').html("Please enter your email!");
        $(this).css('border-color', 'white');
    }
    else {
        $('#LoginEmailBallonBoxId').show();
        $('#LoginEmailBallonBoxId').html("Your email address is invalid!");
        $('#LoginEmailCheckId').hide();
        $(this).css('border-color', 'red');
    }

    if (e.target.value == "") {
        $('#LoginEmailBallonBoxId').show();
        $('#LoginEmailBallonBoxId').html("Please enter your email!");
        $('#LoginEmailCheckId').hide();
        $(this).css('border-color', 'red');
    }
});

$('#PWInputId').keyup(function (e) {
    
    if (pattern_pw.test(e.target.value)) {
        $('#PWBallonBoxId').hide();
        $('#PWCheckId').show();
        $('#PWBallonBoxId').html("Please enter your password!");
        $(this).css('border-color', 'white');
        array[4] = true;
    }
    else {
        $('#PWBallonBoxId').show();
        $('#PWBallonBoxId').html("Requirement : At least 6 characters, one capital letter, <br>one lowercase letter, at least one digit, and one special<br> character");
        $('#PWCheckId').hide();
        $(this).css('border-color', 'red');
        array[4] = false;
    }

    if (e.target.value == "") {
        $('#PWBallonBoxId').show();
        $('#PWBallonBoxId').html("Please enter your password");
        $('#PWCheckId').hide();
        $(this).css('border-color', 'red');
        array[4] = false;
    }

    let pwcheck = $('#PWCheckInputId').val();
    if (e.target.value == pwcheck) {
        $('#PWCheckBallonBoxId').hide();
        $('#PWCheckCheckId').show();
        $('#PWCheckBallonBoxId').html("Please re-enter your password!");
        $('#PWCheckInputId').css('border-color', 'white');
        array[5] = true;
    }
    else {
        $('#PWCheckBallonBoxId').show();
        $('#PWCheckBallonBoxId').html("Password does not match!");
        $('#PWCheckCheckId').hide();
        $('#PWCheckInputId').css('border-color', 'red');
        array[5] = false;
    }
    
});


$('#PWCheckInputId').keyup(function (e) {
    let pw = $('#PWInputId').val();
    if (e.target.value == pw) {
        $('#PWCheckBallonBoxId').hide();
        $('#PWCheckCheckId').show();
        $('#PWCheckBallonBoxId').html("Please re-enter your password!");
        $(this).css('border-color', 'white');
        array[5] = true;
    }
    else {
        $('#PWCheckBallonBoxId').show();
        $('#PWCheckBallonBoxId').html("Password does not match!");
        $('#PWCheckCheckId').hide();
        $(this).css('border-color', 'red');
        array[5] = false;
    }
    
    if (e.target.value == "") {
        $('#PWCheckBallonBoxId').show();
        $('#PWCheckBallonBoxId').html("Please re-enter your password");
        $('#PWCheckCheckId').hide();
        $(this).css('border-color', 'red');
        array[5] = false;
    }
});









$('#signupSubmitId').click(function () {
    let cnt = 0;
    for (let i = 0; i < 6; i++){
        if (array[i] == false) {
            if (i == 0) {
                $('#FirstNameBallonBoxId').show();
                $('#FirstnameInputId').css('border-color', 'red');   
            }
            if (i == 1) {
                $('#LastNameBallonBoxId').show();
                $('#LastNameInputId').css('border-color', 'red');   
            }
            if (i == 2) {
                $('#GenderBallonBoxId').show();
            }
            if (i == 3) {
                $('#EmailBallonBoxId').show();
                $('#EmailInputId').css('border-color', 'red');   
            }
            if (i == 4) {
                $('#PWBallonBoxId').show();
                $('#PWInputId').css('border-color', 'red');   
            }
            if (i == 5) {
                $('#PWCheckBallonBoxId').show();
                $('#PWCheckInputId').css('border-color', 'red');   
            }
            
        }
        else cnt++;
    }
    if (cnt == 6) {
        $('#signupBoxId').hide();
        $('#signupBoxId .contents').hide();
        $('#SignedUpCompleteId').show();
        signUp = true;
    }
});



$('#LoginPWInputId').keyup(function (e) {
    
    if (e.target.value == "") {
        $('#LoginPWBallonBoxId').show();
        $('#LoginPWBallonBoxId').html("Please enter your password");
        $('#LoginPWCheckId').hide();
        $(this).css('border-color', 'red');
    }
    else {
        $('#LoginPWBallonBoxId').hide();
        $('#LoginPWCheckId').show();
        $('#LoginPWBallonBoxId').html("Please enter your password!");
        $(this).css('border-color', 'white');
    }
});

$('#LoginSubmitId').click(function () {

    let E = ($('#LoginEmailInputId').val() == $('#EmailInputId').val());
    let P = ($('#LoginPWInputId').val() == $('#PWInputId').val());
    if (signUp) {
        if (E && P) {
            $('#loginBoxId').hide();
            $('#HeadId').hide();
            $('#loginBoxId .contents').hide();
            $('#LoginpCompleteId').show();
        }
    }
    else {
        $('#LoginFailId').html("Credential do not match!");
        $('#LoginFailId').css('color', 'red');
    }
    if ($('#LoginEmailInputId').val() == "") {
        $('#LoginEmailBallonBoxId').show();
        $('#LoginEmailBallonBoxId').html("Please enter your email!");
        $('#LoginEmailCheckId').hide();
        $('#LoginEmailInputId').css('border-color', 'red');
    }
    if ($('#LoginPWInputId').val() == "") {
        $('#LoginPWBallonBoxId').show();
        $('#LoginPWBallonBoxId').html("Please enter your password");
        $('#LoginPWCheckId').hide();
        $('#LoginPWInputId').css('border-color', 'red');
    }

    

});