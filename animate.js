window.addEventListener('load', ()=>{

	let gif = document.getElementById('profile-image')

	gif.style.backgroundImage = `url("./images/about.gif?${Math.random()}")`

	let drawerOpen = false

	let openDrawer = document.getElementById('open-drawer')

	let drawer = document.getElementById('drawer')

	let notDrawer = document.getElementById('not-drawer')

	notDrawer.addEventListener('click', () => {
		
		if(drawerOpen == true){
			var pos = 0;
			var id = setInterval(()=>{
				if (pos == -600) {
					clearInterval(id);
				} else {
					pos -= 4; 
					drawer.style.right = pos + 'px';
				}
			}, 0.1);

			drawerOpen = false
		}
		
	})

	openDrawer.addEventListener('click', () => {

		if(drawerOpen == false){
			var pos = -600;
			var id = setInterval(()=>{
				if (pos == 0) {
					clearInterval(id);
				} else {
					pos += 4; 
					drawer.style.right = pos + 'px';
				}
			}, 0.1);
		}
		drawerOpen = true
	})

	let autoScroll = 30

	let offset = 50

	let tablet = window.matchMedia("(min-width: 600px)")

	let bigTablet = window.matchMedia("(min-width: 900px)")

	let desktop = window.matchMedia("(min-width: 1200px)")

	let highRes = window.matchMedia("(min-width: 1800px)")

	if(tablet.matches) {
		autoscroll = 55
		offset = 70
		console.log('tablet')
	} else if(bigTablet.matches) {
		console.log('big tablet')
	} else if(desktop.matches) {
		console.log('desktop')
	} else if(highRes.matches) {
		console.log('highRes')
	} else {
		console.log('mobile')
	}

	let pages = Array.from(document.getElementsByClassName('page'))

	let headerTitle = document.getElementById('header-title')

	let profile = document.getElementById('profile')

	let portfolio = document.getElementById('portfolio')

	let resume = document.getElementById('resume')

	let arrow = document.getElementById('arrow')

	let currentLink = document.getElementById('current-project-link')

	let resumeLink = document.getElementById('resume-link')

	let scroll = (page, siderLink) => {

		if(siderLink){
			if(drawerOpen == true){
				var pos = 0;
				var id = setInterval(()=>{
					if (pos == -600) {
						clearInterval(id);
					} else {
						pos -= 4; 
						drawer.style.right = pos + 'px';
					}
				}, 0.1);

				drawerOpen = false
			}
		}

		window.scrollTo({
			top: pages[page].offsetTop - offset,
			left: 0,
			behavior: 'smooth'
		})

	}

	headerTitle.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	})

	profile.addEventListener('click', () => {
		scroll(0, true)
	})

	portfolio.addEventListener('click', () => {
		scroll(1, true)
	})

	resume.addEventListener('click', () => {
		scroll(2, true)
	})

	currentLink.addEventListener('click', () => {
		scroll(1, false)
	})

	resumeLink.addEventListener('click', () => {
		scroll(2, false)
	})

	window.addEventListener('scroll', function() {

		let title = document.getElementById('title-container')

		let images = Array.from(document.getElementsByClassName('parallax'))

		let header = document.getElementById('header')

		let profileImage = document.getElementById('profile-image')

		header.setAttribute('style', 'color: white')

		pages.map((page) => {
			if(pageYOffset >= page.offsetTop - autoScroll && pageYOffset <= (page.offsetTop + page.offsetHeight) - autoScroll){
	
				header.setAttribute('style', 'color: black; background-color: white')
				
			}
		})
	});
	
})