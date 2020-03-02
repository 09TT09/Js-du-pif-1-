let temps = 1;
let compteur = 0;
let rouge = 0, cyan = 0, lime = 0, magenta = 0, orange = 0, autre = 0;
let couleurs = ['red','blue','cyan','magenta','orange','yellow','lime','green','white'];
let couleurAleatoire;
let rougeCompteur = 0, blueCompteur = 0, cyanCompteur = 0, magentaCompteur = 0, orangeCompteur = 0, yellowCompteur = 0, limeCompteur = 0, greenCompteur = 0, whiteCompteur = 0;// Je sais c'est pas très correcte de faire ce genre de chose
let antiSpamFinProgramme = 1;

function classer(){	
  let Saut = document.getElementById('A');
  if (antiSpamFinProgramme >= 1){
    while (rougeCompteur >= 0) {let divcontainer = document.getElementsByClassName('red');document.getElementById('A').appendChild(divcontainer[0]);rougeCompteur--;}
    while (blueCompteur >= 0) {let divcontainer = document.getElementsByClassName('blue');document.getElementById('B').appendChild(divcontainer[0]);blueCompteur--;}
    while (cyanCompteur >= 0) {let divcontainer = document.getElementsByClassName('cyan');document.getElementById('C').appendChild(divcontainer[0]);cyanCompteur--;}
    while (magentaCompteur >= 0) {let divcontainer = document.getElementsByClassName('magenta');document.getElementById('D').appendChild(divcontainer[0]);magentaCompteur--;}
    while (orangeCompteur >= 0) {let divcontainer = document.getElementsByClassName('orange');document.getElementById('E').appendChild(divcontainer[0]);orangeCompteur--;}
    while (yellowCompteur >= 0) {let divcontainer = document.getElementsByClassName('yellow');document.getElementById('F').appendChild(divcontainer[0]);yellowCompteur--;}
    while (limeCompteur >= 0) {let divcontainer = document.getElementsByClassName('lime');document.getElementById('G').appendChild(divcontainer[0]);limeCompteur--;}
    while (greenCompteur >= 0) {let divcontainer = document.getElementsByClassName('green');document.getElementById('H').appendChild(divcontainer[0]);greenCompteur--;}
    while (whiteCompteur >= 0) {let divcontainer = document.getElementsByClassName('white');document.getElementById('I').appendChild(divcontainer[0]);whiteCompteur--;}
	antiSpamFinProgramme--;
	if (temps === 1){antiSpamFinProgramme = 1;} 
  }  	
} 

let interval = setInterval(function() { 
  if (temps <= 1) {
    let A = document.getElementById('container');


    function B(C) {
	  let D;
	  couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)];
	  
	  if (couleurAleatoire === 'red'){ D = 'red'; rougeCompteur++; }
	  if (couleurAleatoire === 'blue'){ D = 'blue'; blueCompteur++; }
	  if (couleurAleatoire === 'cyan'){ D = 'cyan'; cyanCompteur++; }
	  if (couleurAleatoire === 'magenta'){ D = 'magenta'; magentaCompteur++; }
	  if (couleurAleatoire === 'orange'){ D = 'orange'; orangeCompteur++; }
	  if (couleurAleatoire === 'yellow'){ D = 'yellow'; yellowCompteur++; }
	  if (couleurAleatoire === 'lime'){ D = 'lime'; limeCompteur++; }
	  if (couleurAleatoire === 'green'){ D = 'green'; greenCompteur++; }
	  if (couleurAleatoire === 'white'){ D = 'white'; whiteCompteur++; }
	  
      let E = '<div class="' + C + ' ' + D + '" id="red" style="background-color:'+ couleurAleatoire +'" ></div>';
	  return E;
    }

	if(rouge > cyan){document.getElementById('place').style.color= "red";document.getElementById('place').innerHTML = "+ de rouge que de cyan";}
    else if(rouge < cyan){document.getElementById('place').style.color= "cyan";document.getElementById('place').innerHTML = "+ de cyan que de rouge";}
    else if(rouge == cyan){document.getElementById('place').style.color= "white";document.getElementById('place').innerHTML = "cyan = rouge";}

    for (let i = 0; i < 1; i++) {
	  compteur = compteur + 1;
      A.innerHTML += B('div');
	  let F = document.getElementById('span').innerHTML = compteur;
	  
	  if (couleurAleatoire === 'red'){
		rouge = rouge + 1;
		document.getElementById('rouge').innerHTML = rouge;
	   }
	
	  else if (couleurAleatoire === 'cyan'){
	    cyan = cyan + 1;
		document.getElementById('cyan').innerHTML = cyan;
	  }
	
	  else if (couleurAleatoire === 'lime'){
		lime = lime + 1;
		document.getElementById('lime').innerHTML = lime;
	  }
	
	  else if (couleurAleatoire === 'magenta'){
		magenta = magenta + 1;
		document.getElementById('magenta').innerHTML = magenta;
	  }
	
	  else if (couleurAleatoire === 'orange'){
	    orange = orange + 1;
		document.getElementById('orange').innerHTML = orange;
	  }
	
	  else if (couleurAleatoire === 'blue' || couleurAleatoire === 'yellow' || couleurAleatoire === 'green' || couleurAleatoire === 'white'){
		autre = autre + 1;
		document.getElementById('autre').innerHTML = autre;
	  }
	  
	  if (compteur == 1000){
	    temps = 2;
		console.log('Fin programme');
	  }
	}
  } 
  
  else {
    clearInterval(interval);
  }
}
, 1);