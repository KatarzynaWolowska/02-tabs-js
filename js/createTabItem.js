function createTabItem(id, label) {
	let li = document.createElement('li')
	let btn = document.createElement('button')

	btn.type = 'button'
	btn.id = id
	btn.className = 'tab'
	btn.role = 'tab'
	btn.textContent = label
	btn.setAttribute('aria-selected', false)

	li.appendChild(btn)

	return li
}

export default createTabItem
