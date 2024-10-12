import headerBgImg from "./assets/images/headerBgImg.jpg"
import tonyBambinoLogo from "./assets/images/tony-bambino.png"

export default function goToHomePage() {
  const bodyContent = document.querySelector('#content')
  bodyContent.innerHTML = ''

  // DOM object creation:
  const imgElement = document.createElement('img')
  const logoImageElement = document.createElement('img')
  const logoImageContainerElement = document.createElement('div')
  const contentHeaderElement = document.createElement('div')
  const pageHeader = document.createElement('h1')
  const aboutSection = document.createElement('p')
  // give created elements attributes and content:
  imgElement.classList.add('header-bg-img')
  contentHeaderElement.classList.add('content-header')
  logoImageContainerElement.classList.add('tonys-logo-container')
  pageHeader.textContent = "Tony Bambino's Bambanoo"
  logoImageElement.classList.add('logo-img')
  logoImageElement.height = '250'
  logoImageElement.width = '250'
  aboutSection.textContent = `Where the pasta is al dente, the gabagool is fresher than gossip, and the only thing faster than our service is how quickly you'll need a nap after. At Tony's, every dish comes with a side of "fuggedaboutit" with extra "strunz", and the subtle aroma of garlic that lingers for three days — just like family. Whether you're here for our world-famous meatballs or to debate whether pineapple belongs on pizza, one thing’s for sure: you’ll leave with your belly full and your head wondering what the hell Bambanoo is.`
  aboutSection.classList.add('home-about-section')

  // append DOM objects to HTML:
  imgElement.src = headerBgImg
  logoImageElement.src = tonyBambinoLogo
  logoImageContainerElement.appendChild(logoImageElement)
  contentHeaderElement.appendChild(imgElement)
  contentHeaderElement.appendChild(pageHeader)
  bodyContent.appendChild(contentHeaderElement)
  bodyContent.appendChild(aboutSection)
  bodyContent.appendChild(logoImageContainerElement)
}