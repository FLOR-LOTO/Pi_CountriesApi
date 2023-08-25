import style from "./App.module.css"
import Nav from "./components/Nav/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage.jsx';
import DetailPage from "./components/views/DetailPage/DetailPage.jsx";
import FormPage from "./components/views/FormPage/FormPage.jsx"
import HomePage from "./components/views/HomePage/HomePage.jsx";
import Error404 from "./components/views/Error404/Error404.jsx";

function App() {

   // Obtiene la ubicación actual
   const location = useLocation();

   // Decide si se debe mostrar la barra de navegación en función de la ubicación actual
   const shouldShowNav = location.pathname !== "/";

 
   return (
     <div className={style.container}>
       {/* Renderiza la barra de navegación solo si shouldShowNav es true */}
       {shouldShowNav && <Nav />}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/countries' element={<HomePage />}/>
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='/activities' element={<FormPage />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
  );
}

export default App;