import style from "./Form.module.css";

const Form = () => {

    return (
<div className={style.containerForm}>
<form >
  <h1>Crea una Actividad Turística</h1>
  <div className={style.camp}>
    <label className= {style.label}>Actividad:</label>
    <input className= {style.input}
      type="text"
      name="nombre"
      placeholder="Ingresa el nombre de la actividad..."
    />
  </div>
   <div className={style.camp}>
    <label className= {style.label}>Duración:</label>
    <select className={style.select} name="duracionMinutos">
      <option value="30">30 min.</option>
      <option value="1">1 hora</option>
      <option value="1.5">1.5 horas</option>
      <option value="2">2 horas</option>
      <option value="2.5">2.5 horas</option>
      <option value="3">3 horas</option>
      <option value="3">mayor a 3 horas</option>
    </select>
  </div>
  <div className={style.camp}>
    <label className= {style.label}>Dificultad:</label>
  <select className={style.select} name="dificultad">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
  </div>
  <div className={style.camp}>
    <label className= {style.label}>Temporada:</label>
  <select className={style.select} name="temporada">
    <option value="verano">Verano</option>
    <option value="otono">Otoño</option>
    <option value="invierno">Invierno</option>
    <option value="primavera">Primavera</option>
  </select>
  </div>
  <div className={style.camp}>
    <label className= {style.label}>Países:</label>
    <input className= {style.input}
      type="text"
      name="paises"
      placeholder="Ingresa los paises separados por comas..."
    />
  </div >
  <div className={style.containerBtn}>
  <button className={style.btn} type="submit">Crear Actividad</button>
  </div>
</form>
</div>
    )
};

export default Form;