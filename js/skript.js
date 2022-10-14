window.onload = function(){
	document.querySelector("#aboutDugme").addEventListener("click", check);
}
//about regexp
function check(){
	var ime = document.querySelector("#ime").value.trim();
	var prezime = document.querySelector("#prezime").value.trim();
	var email = document.querySelector("#email").value.trim();
	var span = document.querySelector("#prvi");

	var reIme = /^[A-ZŠĐČĆŽ]\w{2,12}(\s[A-ZŠĐČĆŽ]\w{2,12})*$/
	var rePrezime = /^[A-ZŠĐČĆŽ]\w{2,12}(\s[A-ZŠĐČĆŽ]\w{2,12})*$/
	var reEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

	if(!reIme.test(ime)){
		span.classList.remove("hidden");
		
	}else{
		span.classList.add("hidden");
	}
	if(!rePrezime.test(prezime)){
		span2.classList.remove("hidden");
		
	}else{
		span2.classList.add("hidden");
	}
	if(!reEmail.test(email)){
		span3.classList.remove("hidden");
		
	}else{
		span3.classList.add("hidden");
	}
}
//dinamicki register
var lista = [
{
	tip:'text',
	place:'First Name',
	id:'indexPrvi'
},
{
	tip:'text',
	place:'Last Name',
	id:'indexDrugi'
},
{
	tip:'email',
	place:'E-mail',
	id:'indexTreci'
},
{
	tip:'password',
	place:'Password',
	id:'indexCetiri'
},
{
	tip:'password',
	place:'Confirm Password',
	id:'indexPet'
}
];
function register(){
	var blok = document.querySelector('#register');
	blok.innerHTML = "<h4> Not a member? Register now! </h4>";
	for(var i = 0; i < lista.length; i++){
		blok.innerHTML += `<input type="${lista[i].tip}" class="logForma"  placeholder="${lista[i].place}" value="" id="${lista[i].id}"/><br/>`
	}
	blok.innerHTML += "<input type='button' value='Register' id='logBtn'>"
}
register();
document.querySelector('#logBtn').addEventListener("click", function(){
	var prvi = document.querySelector('#indexPrvi');
	var drugi = document.querySelector('#indexDrugi');
	var treci = document.querySelector('#indexTreci');
	var cetiri = document.querySelector('#indexCetiri');
	var pet = document.querySelector('#indexPet');

	var reIme = /^[A-ZŠĐČĆŽ]\w{2,12}(\s[A-ZŠĐČĆŽ]\w{2,12})*$/
	var reEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
		if(!reIme.test(prvi.value)){
			prvi.classList.add('warning');
		}else{
			prvi.classList.remove('warning');
		}
		if(!reIme.test(drugi.value)){
			drugi.classList.add('warning');
		}else{
			drugi.classList.remove('warning');
		}
		if(!reEmail.test(treci.value)){
			treci.classList.add('warning');
		}else{
			treci.classList.remove('warning');
		}
		if(pet.value != cetiri.value){
			cetiri.classList.add('warning');
			pet.classList.add('warning');
		}else{
			cetiri.classList.remove('warning');
			pet.classList.remove('warning');
		}
});
//dinamicki cb&rb
var cbLista = [
{
	value:"tomato",
	ispis:"Tomato"
},
{
	value:"mozarella",
	ispis:"Mozarella"
},
{
	value:'pepperoni',
	ispis:'Pepperoni'
},
{
	value:'basil',
	ispis:"Fresh Basil"
},
{
	value:'olive',
	ispis:'Olives'
}
];
var blokovi = document.getElementsByClassName('bord');
for(var j = 0; j < blokovi.length; j++){
	for(var i = 0; i < cbLista.length; i++){
		blokovi[j].innerHTML += "<input type='checkbox' value='${cbLista[i].value}' class='pomeri'/>" + cbLista[i].ispis + "<br/>";
	}
}
var velicine = [
{
	value:'s',
	ispis:'Small'
},
{
	value:'m',
	ispis:'Medium'
},
{
	value:'l',
	ispis:'Large'
}
];

var size = document.getElementsByClassName('rbSize');
for(var j = 0; j < size.length; j++){
	for(var i = 0; i < velicine.length; i++){
		size[j].innerHTML += "<input type='radio' value='${velicine[i].value}' name='rbSize'/>" + velicine[i].ispis;
	}
}
// jQuery

$(document).ready(function(){
	slideShow();
	$('img').parent().zoom();
});
function slideShow(){
	var current = $('.show');
	var next = current.next().length ? current.next() : current.parent().children(':first');
	current.removeClass('show');
	next.addClass('show');
	setTimeout(slideShow, 1000);
}
$('#search i').click(function(){
	if($('#search input').is(":visible")){
		$('#search input:visible').fadeOut('slow');
	}else{
		$('#search input').fadeIn('slow');		
	}
});
	
$('#login').click(function(){
	$('#log').css('display', 'block');
	$('#log').animate({
		height:'600px'
	}
		,300)
});
$('#gore').click(function(){
	$('html body').animate({
		scrollTop:0
	}, 1000, function(){
				$('#log').css('display', 'block');
				$('#log').animate({
					height:'600px'
				}
					,300)
});
});