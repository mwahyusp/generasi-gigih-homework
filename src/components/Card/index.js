import style from "./style.module.css";

const Card = props => (
  <div className={`${style.Card} ${props.extraClass}`} >
    {props.children}
  </div>
);

export default Card;
