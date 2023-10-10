import createTabItem from './createTabItem.js'

const createNewTabs = (container, config) => {
	const containerForTabs = document.getElementById(container)

	const tabsContent = document.createElement('div')
	tabsContent.classList.add('tabsContent')

	config.forEach(tab => {
		const tabItemContent = document.createElement('div')
		tabItemContent.classList.add('tabItemContent')
		tabItemContent.setAttribute('aria-labelledby', tab.id)
		tabItemContent.innerHTML = tab.content

		tabsContent.appendChild(tabItemContent)
	})

	const ul = document.createElement('ul')
	containerForTabs.appendChild(ul)
	containerForTabs.append(tabsContent)

	config.forEach(tab => {
		ul.appendChild(createTabItem(tab.id, tab.label))
	})

	document.querySelectorAll('#containerForTabs button')[0].classList = 'tab active'
	document.querySelectorAll('#containerForTabs .tabItemContent')[0].classList = 'tabItemContent active'
}

export default createNewTabs
