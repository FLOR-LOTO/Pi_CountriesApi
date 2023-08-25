import { Link } from "react-router-dom";
import style from "./Landing.module.css"

const LandingPage = () => {

    return (

    <div className={style.container}>
        <Link to='/countries'>
        <button className={style.btn}>Go to Home</button>    
        </Link>
        </div>
)};

export default LandingPage;