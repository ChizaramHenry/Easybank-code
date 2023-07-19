const togle = document.querySelector(".toggle-button");
const navBarContainer = document.querySelector(".navbar-container")
// console.log(togle);
// console.log(navBarContainer)
togle.addEventListener("click",handleClick);

function handleClick(e) {
	// console.log(navBarContainer)
	navBarContainer.classList.toggle("active");
	togle.innerHTML = "&#10005";
	if(navBarContainer.classList.contains("active")){
	togle.innerHTML = "&#10005";
	}
	else{
	togle.innerHTML = "&#9776"
	}
}