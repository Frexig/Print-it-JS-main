const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrow_left = document.getElementById("arrow_left")
arrow_left.addEventListener("click", () => { 
 console.log("J'ai cliqué sur la flèche left")

 if  (currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1; 
    } else {
        currentSlideIndex--;
    }
    goToSlide(currentSlideIndex);
})

let arrow_right = document.getElementById("arrow_right")
arrow_right.addEventListener("click", () => { 
 console.log("J'ai cliqué sur la flèche right")

  if (currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0; 
    } else {
        currentSlideIndex++;
    }
    goToSlide(currentSlideIndex);
})

const nombredeslides = slides.length

let currentSlideIndex = 0;


const banner = document.getElementById("banner");
const tagLineElement = banner.querySelector("p");
const dotsContainer = banner.querySelector(".dots");


slides.forEach((slide, index) => {
	const img = document.createElement("img");
	img.classList.add("banner-img");
	img.src = `./assets/images/slideshow/${slide.image}`;
	img.style.display = index === 0 ? "block" : "none";
	img.alt = `slide ${index + 1}`;
	banner.insertBefore(img, tagLineElement); 
});

const bannerImages = document.querySelectorAll(".banner-img");

function initializeSlides() {
	bannerImages.forEach((img, index) => {
		img.style.display = index === 0 ? "block" : "none";
	});
	tagLineElement.innerHTML = slides[0].tagLine;
}

function createDots() {
	dotsContainer.innerHTML = ""; 
	slides.forEach((_, index) => {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if (index === 0) dot.classList.add("dot_selected");
		dot.addEventListener("click", () => goToSlide(index));
		dotsContainer.appendChild(dot);
	});
}

function goToSlide(index) {
	bannerImages[currentSlideIndex].style.display = "none";
	dotsContainer.children[currentSlideIndex].classList.remove("dot_selected");

	currentSlideIndex = index;

	bannerImages[currentSlideIndex].style.display = "block";
	dotsContainer.children[currentSlideIndex].classList.add("dot_selected");
	
	tagLineElement.innerHTML = slides[currentSlideIndex].tagLine;
}
createDots();
initializeSlides();
