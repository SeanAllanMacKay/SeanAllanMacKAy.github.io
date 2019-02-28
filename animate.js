window.addEventListener('load', ()=>{

	let drawerOpen = false

	let openDrawer = document.getElementById('open-drawer')

	let drawer = document.getElementById('drawer')

	let notDrawer = document.getElementById('not-drawer')

	notDrawer.addEventListener('click', () => {
		
		if(drawerOpen == true){
			var pos = 0;
			var id = setInterval(()=>{
				if (pos == -200) {
					clearInterval(id);
				} else {
					pos -= 2; 
					drawer.style.right = pos + 'px';
				}
			}, 0.1);

			drawerOpen = false
		}
		
	})

	openDrawer.addEventListener('click', () => {

		if(drawerOpen == false){
			var pos = -200;
			var id = setInterval(()=>{
				if (pos == 0) {
					clearInterval(id);
				} else {
					pos += 2; 
					drawer.style.right = pos + 'px';
				}
			}, 0.1);
		}
		drawerOpen = true
	})

	let pages = Array.from(document.getElementsByClassName('page'))

	let headerTitle = document.getElementById('header-title')

	let profile = document.getElementById('profile')

	let portfolio = document.getElementById('portfolio')

	let resume = document.getElementById('resume')

	let contact = document.getElementById('contact')

	let arrow = document.getElementById('arrow')

	headerTitle.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	})

	profile.addEventListener('click', () => {
		if(drawerOpen == true){
			var pos = 0;
			var id = setInterval(()=>{
				if (pos == -200) {
					clearInterval(id);
				} else {
					pos -= 2; 
					drawer.style.right = pos + 'px';
				}
			}, 0.1);

			drawerOpen = false
		}
		window.scrollTo({
			top: pages[0].offsetTop,
			left: 0,
			behavior: 'smooth'
		})
	})

	portfolio.addEventListener('click', () => {
		if(drawerOpen == true){
			var pos = 0;
			var id = setInterval(()=>{
				if (pos == -200) {
					clearInterval(id);
				} else {
					pos -= 2; 
					drawer.style.right = pos + 'px';
				}
			}, 0.1);

			drawerOpen = false
		}
		window.scrollTo({
			top: pages[1].offsetTop,
			left: 0,
			behavior: 'smooth'
		})
	})

	resume.addEventListener('click', () => {
		if(drawerOpen == true){
			var pos = 0;
			var id = setInterval(()=>{
				if (pos == -200) {
					clearInterval(id);
				} else {
					pos -= 2; 
					drawer.style.right = pos + 'px';
				}
			}, 0.1);

			drawerOpen = false
		}
		window.scrollTo({
			top: pages[2].offsetTop,
			left: 0,
			behavior: 'smooth'
		})
	})

	contact.addEventListener('click', () => {
		if(drawerOpen == true){
			var pos = 0;
			var id = setInterval(()=>{
				if (pos == -200) {
					clearInterval(id);
				} else {
					pos -= 2; 
					drawer.style.right = pos + 'px';
				}
			}, 0.1);

			drawerOpen = false
		}
		window.scrollTo({
			top: pages[3].offsetTop,
			left: 0,
			behavior: 'smooth'
		})
	})

	window.addEventListener('scroll', function() {

		let title = document.getElementById('title-container')

		let images = Array.from(document.getElementsByClassName('parallax'))

		let header = document.getElementById('header')

		let profileImage = document.getElementById('profile-image')

		header.setAttribute('style', 'color: white')

		pages.map((page) => {
			if(pageYOffset >= page.offsetTop - 20 && pageYOffset <= (page.offsetTop + page.offsetHeight) - 20){
	
				header.setAttribute('style', 'color: black; background-color: white')
				
			}
		})
	});
	
})