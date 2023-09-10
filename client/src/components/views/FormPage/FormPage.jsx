import style from "./FormPage.module.css";
import FormActivities from "../../Form/FormActivities.jsx";

const FormPage = () => {
  return (
    <div className={style.container}>
      <FormActivities />
    </div>
  );
};

export default FormPage;
