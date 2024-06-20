document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 10) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			navList.classList.remove('show')
		})
	)

	const clock = document.createElement('div')
	clock.id = 'clock'
	clock.classList.add('clock-container')
	const contactSection = document.getElementById('contact')
	contactSection.appendChild(clock)

	function updateClock() {
		const now = new Date()
		let hours = now.getHours()
		let minutes = now.getMinutes()
		let seconds = now.getSeconds()

		hours = (hours < 10 ? '0' : '') + hours
		minutes = (minutes < 10 ? '0' : '') + minutes
		seconds = (seconds < 10 ? '0' : '') + seconds

		clock.textContent = `${hours}:${minutes}:${seconds}`
	}
	setInterval(updateClock, 1000)

	window.addEventListener('scroll', addShadow)
})
