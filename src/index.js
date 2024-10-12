import './styles.css'
import goToHomePage from './home'
import goToMenuPage from './menu'
import goToAboutPage from './about'

const homeNavBtn = document.querySelector('#homeNavBtn')
const menuNavBtn = document.querySelector('#menuNavBtn')
const aboutNavBtn = document.querySelector('#aboutNavBtn')

homeNavBtn.addEventListener('click', goToHomePage)
menuNavBtn.addEventListener('click', goToMenuPage)
aboutNavBtn.addEventListener('click', goToAboutPage)