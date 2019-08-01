
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener ("DOMContentLoaded", () => {

	// Opretter et array med 3 strings
	// De får pladserne 0, 1, 2  (index)
	let navne = [
		"Mickey",  // index 0
		"Anders",  // index 1
		"Fedtmule" // index 2
	];

	// Tager fat i <ul> elementet
	let listElement = document.querySelector ("#liste");

	// [Udenad?]: Du behøver ikke at kunne skrive forEach'en udenad,
	// men du skal kunne fortælle os, at det ville være oplagt at bruge
	// forEach til at gøre noget med hvert element inden i et array
	navne.forEach ((navn) => {
		// Husk at bruge += så den tilføjer et navn i stedet for at erstatte hele indholdet
		listElement.innerHTML += "<li>" + navn + "</li>";
	});


	// Følgende udskriver kun "Anders", da han har index 1
	// console.log (navne[1]);

}); // Afslutter: DOMContentLoaded