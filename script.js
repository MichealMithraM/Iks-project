document.addEventListener('DOMContentLoaded',()=>{
	const sideNav=document.querySelector('.side-nav');
	const btnNav=document.querySelector('#btnNav');
	const overlayScreen=document.querySelector('.nav-overlay');
	
	btnNav.addEventListener('click',()=>{
		sideNav.classList.add('open');
	});
	overlayScreen.addEventListener('click',()=>{
		sideNav.classList.remove('open');
	});
	
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const parallax = document.querySelector('.parallax-clip');
    parallax.style.backgroundPositionX = (scrollPosition * 0.5) + 'px'; // Adjust the speed here
});

