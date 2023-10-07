import { TABS } from './constants.js'
import createNewTabs from './createNewTabs.js'
import showTabContent from './showTabContent.js'

/* 
create new tabs
*/
createNewTabs('containerForTabs', TABS)

/* 
activate first tab 
*/
document.querySelectorAll('#containerForTabs button')[0].classList = 'tab active'
document.querySelectorAll('#containerForTabs .tabItemContent')[0].classList = 'tabItemContent active'

/* 
add event listener to all tabs 
*/
document.body.addEventListener('click', event => {
	const allTabs = document.querySelectorAll('#containerForTabs .tab')

	allTabs.forEach(() => {
		if (event.target.classList.contains('tab')) showTabContent(event.target.id)
	})
})
