import styles from "./style.module.scss"
export const AllCard = ({ title, message, category, id, removeNote }) => {
  return (
    <div className={`${styles.todoCard}
    ${category === "Homework" ? styles.blue : styles.orange}`}>
      <h3 className="title two">{title}</h3>
      <p className="paragraph">{message}</p>
      <button onClick={() => removeNote(id)} className="btn small">
        Delete
      </button>
    </div>
  );
};
