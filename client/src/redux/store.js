import { configureStore } from "@reduxjs/toolkit"; //Importa la función createStore de la biblioteca Redux. Esta función se utiliza para crear la tienda (store) central de la aplicación donde se almacenará el estado global de la misma.
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './reducer.js'


const store = configureStore(
    reducer,  //Importa el archivo o módulo reducer que contiene las funciones reductoras de Redux que definen cómo cambia el estado en respuesta a diferentes acciones.
    composeWithDevTools(applyMiddleware(thunk))
    );


export default store;

/*Creación de la tienda:
Se utiliza la función createStore para crear la tienda (store) de Redux. Se le pasa como argumento:

reducer: El reductor raíz que combina todos los reductores individuales en uno solo. Este reductor se define en el archivo importado como reducer.
composeWithDevTools(applyMiddleware(thunk)): Aquí se utiliza la función composeWithDevTools para mejorar la tienda con las herramientas de desarrollo de Redux. Dentro de ella, se aplica el middleware redux-thunk. redux-thunk es un middleware que permite manejar acciones asíncronas en Redux, lo que es útil para hacer peticiones HTTP u otras operaciones asíncronas en las acciones. */