// Veriables globales
let compteur = 0;
let timer, slides , diaporama, slideLargeur;

window.onload = () => {

	const slider = document.querySelector(".slider")
	slides = document.querySelector(".slides")
	diaporama  = Array.from(slides.children)

	//Calcul de largeur du slide 

	slideLargeur = diaporama.getBoundingClientRect().width
	let suivant = document.querySelector(".fa-chevron-right")
	suivant.addEventlistener("click", slideSuivant)
}

function slideSuivant (){
	compteur++
	if (compteur == diaporama.length) {
		compteur = 0;
	}
	let decal = -slideLargeur * compteur
	slides.style.transform = 'translateX(${decal}px)'
}