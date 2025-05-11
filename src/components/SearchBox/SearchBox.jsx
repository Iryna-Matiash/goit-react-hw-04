import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.container}>
      <p className={css.filterName}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(el) => onFilter(el.target.value)}
      ></input>
    </div>
  );
}
