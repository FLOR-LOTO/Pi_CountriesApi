import ReactDOM from 'react-dom';
import App from './App.js';
import {BrowserRouter} from "react-router-dom" //nos permite hacer cambios de rutas, conecta a la url del navegador/ se conecta a la api History
import "./index.css"



ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,  
  document.getElementById('root') // busca el root en el index.html
);

