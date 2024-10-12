import oneAvocadoImg from './assets/images/one-avocado.jpg'

export default function goToMenuPage() {
  const bodyContent = document.querySelector('#content')
  bodyContent.innerHTML = ''

  // DOM object creation:
  const menuListElement = document.createElement('ul')
  // const menuListItemElement = document.createElement('li')
  // const menuItemImageElement = document.createElement('img')

  // give created elements attributes and content:
  menuListElement.classList.add('menu-list')
  // menuListItemElement.classList.add('menu-list-item')
  // menuItemImageElement.classList.add('menu-item-image')

  // append DOM objects to HTML:
  menuListElement.innerHTML = `
    <li class="menu-list-item">
      <img class="menu-item-image" src="${oneAvocadoImg}" height="auto" />
      <div class="menu-item-info">
        <h3>One Avocado</h3>
        <p>Here's literally one avocado. It's all we have.</p>
        <p class="menu-item-price">$100.00</p>
      </div>
    </li>
  `;
  bodyContent.appendChild(menuListElement)
}