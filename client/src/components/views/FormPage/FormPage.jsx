import style from "./FormPage.module.css";
import FormActivities from "../../Form/FormActivities.jsx";

const FormPage = () => {
  return (
    <div>
      <div className={style.container}>
        <FormActivities />
      </div>
    </div>
  );
};

export default FormPage;
