import createTabItem from './createTabItem.js'

const createNewTabs = (container, config) => {
	let containerForTabs = document.getElementById(container)

	let tabsContent = document.createElement('div')
	tabsContent.className = 'tabsContent'

	config.map(tab => {
		let tabItemContent = document.createElement('div')
		tabItemContent.classList = `tabItemContent`
		tabItemContent.setAttribute('aria-labelledby', tab.id)
		tabItemContent.innerHTML = tab.content

		tabsContent.appendChild(tabItemContent)
	})

	let ul = document.createElement('ul')
	containerForTabs.appendChild(ul)
	containerForTabs.append(tabsContent)

	config.map(tab => {
		ul.appendChild(createTabItem(tab.id, tab.label))
	})
}

export default createNewTabs
