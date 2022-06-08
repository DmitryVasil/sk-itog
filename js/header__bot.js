

document.querySelectorAll(".dropdown__list").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 30,
});
})







document.addEventListener('DOMContentLoaded', () => {
	const menuBtns = document.querySelectorAll('.menu__btn');
	const drops = document.querySelectorAll('.menu__dropdown');

	menuBtns.forEach (el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.menu__item').querySelector('.menu__dropdown');
			
			menuBtns.forEach (el => {
				if (el!==currentBtn) {
				el.classList.remove('menu__btn--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('menu__dropdown--active');
				}
			});

			drop.classList.toggle('menu__dropdown--active');
			currentBtn.classList.toggle('menu__btn--active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.menu')) {
			menuBtns.forEach (el => {				 
				el.classList.remove('menu__btn--active');				
			});

			drops.forEach(el => {
					el.classList.remove('menu__dropdown--active');
			});
		}
	})
});