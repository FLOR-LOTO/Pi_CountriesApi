import style from "./Landing.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FormUsers from "../../Form/FormUsers";

const LandingPage = () => {
  return (
    <div className={style.background}>
      <FormUsers className={style.formUsers} />
    </div>
  );
};

export default LandingPage;
