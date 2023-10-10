import showTabContent from './showTabContent.js'

function createTabItem(id, label) {
	const li = document.createElement('li')
	const btn = document.createElement('button')

	btn.type = 'button'
	btn.id = id
	btn.className = 'tab'
	btn.role = 'tab'
	btn.textContent = label
	btn.setAttribute('aria-selected', false)

	btn.addEventListener('click', e => {
		showTabContent(e.target.id)
	})

	li.appendChild(btn)

	return li
}

export default createTabItem
