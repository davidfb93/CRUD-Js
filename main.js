import './style.css'
import javascriptLogo from './javascript.svg'
import { UsersApp } from './src/users-app'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Javascript CRUD!</h1>
    <div class="card">
    </div>
  </div>
`

const element = document.querySelector('.card')
UsersApp( element )
