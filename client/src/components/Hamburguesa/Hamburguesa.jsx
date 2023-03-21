import style from "./Hamburguesa.module.css";

const Hamburguesa = ({ handleClick, isActive }) => {
  return (
    <div>
      <div
        className={`${style.hamburguesa} ${isActive ? "" : style.open}`}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburguesa;
