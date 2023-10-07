const showTabContent = id => {
	let allTabs = document.querySelectorAll('#containerForTabs .tab')
	let allTabsContent = document.querySelectorAll('#containerForTabs .tabItemContent')

	allTabs.forEach(tab => {
		tab.classList.remove('active')
		tab.setAttribute('aria-selected', false)
	})

	allTabsContent.forEach(tabItemContent => {
		tabItemContent.classList.remove('active')
	})

	document.getElementById(id).classList = 'tab active'
	document.getElementById(id).setAttribute('aria-selected', true)
	document.querySelector(`div[aria-labelledby="${id}"]`).classList = 'tabItemContent active'
}

export default showTabContent
