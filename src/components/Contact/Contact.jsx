//import { number } from "yup";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.name}>
          <BsFillPersonFill />
          {name}
        </li>
        <li className={css.tel}>
          <BsFillTelephoneFill /> {number}
        </li>
      </ul>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
