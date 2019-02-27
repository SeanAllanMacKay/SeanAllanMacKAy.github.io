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

	window.addEventListener('scroll', function() {

		let content = document.getElementById('content')

		let header = document.getElementById('header')

		if(pageYOffset >= content.offsetTop){
			header.setAttribute('style', 'color: black')
		}
		else{
			header.setAttribute('style', 'color: white')
		}
		
	});
	
})