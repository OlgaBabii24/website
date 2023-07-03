
document.addEventListener('DOMContentLoaded', function(event) {
	console.log('DOM fully loaded');
});

window.addEventListener('load', function() {
	const loader = document.querySelector('.wrapper');
	loader.classList.add('hidden');
});