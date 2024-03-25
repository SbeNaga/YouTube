$(function() {

	new WOW().init();

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu_top').slideDown(300);
		}else{
			$('.mnu_top').slideUp(300);
		}
	});

});
var emailArray=[];
var passwordArray=[];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun(){
	event.preventDefault();

	regBox.style.visibility="visible";
	loginBox.style.visibility="hidden";
	forgetBox.style.visibility="hidden";

	regTab.style.backgroundColor="white";
	loginTab.style.backgroundColor="white";
}
function loginTabFun(){
	event.preventDefault();

	regBox.style.visibility="hidden";
	loginBox.style.visibility="visible";
	forgetBox.style.visibility="hidden";

	loginTab.style.backgroundColor="white";
	regTab.style.backgroundColor="white";
}
function forTabFun(){
	event.preventDefault();

	regBox.style.visibility="hidden";
	loginBox.style.visibility="hidden";
	forgetBox.style.visibility="visible";

	regTab.style.backgroundColor="white";
	loginTab.style.backgroundColor="white";

}


function register(){
	event.preventDefault();

	var email = document.getElementById("re").value;
	var password = document.getElementById("rp").value;
	var passwordRetype = document.getElementById("rrp").value;

	if (email == ""){
		alert("Требуется электронная почта.");
		return ;
	}
	else if (password == ""){
		alert("Требуется пароль.");
		return ;
	}
	else if (passwordRetype == ""){
		alert("Требуется пароль.");
		return ;
	}
	else if ( password != passwordRetype ){
		alert("Пароль не совпадает, введите пароль еще раз.");
		return;
	}
	else if(emailArray.indexOf(email) == -1){
		emailArray.push(email);
		passwordArray.push(password);

		alert(email + "  Спасибо за регистрацию. \nПопробуйте войти сейчас");

		document.getElementById("re").value ="";
		document.getElementById("rp").value="";
		document.getElementById("rrp").value="";
	}
	else{
		alert(email + " уже зарегистрирован.");
		return ;
	}
}
function login(){
	event.preventDefault();

	var email = document.getElementById("se").value;
	var password = document.getElementById("sp").value;

	var i = emailArray.indexOf(email);

	if(emailArray.indexOf(email) == -1){
		if (email == ""){
			alert("Требуется электронная почта.");
			return ;
		}
		alert("Электронная почта не существует.");
		return ;
	}
	else if(passwordArray[i] != password){
		if (password == ""){
			alert("Требуется пароль.");
			return ;
		}
		alert("Пароль не подходит.");
		return ;
	}
	else {
		alert(email + "вы вошли в систему Now \n welcome to our website.");

		document.getElementById("se").value ="";
		document.getElementById("sp").value="";
		return ;
	}

}
function forgot(){
	event.preventDefault();

	var email = document.getElementById("fe").value;

	if(emailArray.indexOf(email) == -1){
		if (email == ""){
			alert("Требуется электронная почта.");
			return ;
		}
		alert("Электронная почта не существует.");
		return ;
	}

	alert("Письмо было отправленно на вашу почту. \n Спасибо");
	document.getElementById("fe").value ="";
}