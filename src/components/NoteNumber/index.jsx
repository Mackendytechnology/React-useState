import styles from "./style.module.scss";
export const NoteNumber = ({ listNotes }) => {
  const totalchar = listNotes.reduce((prevValue, note) => {
    return prevValue + note.title.length + note.message.length;
  }, 0);

  return (
    <div className={styles.numberBox}>
      <p className="paragraph">
        Notes: <span className="paragraph bold">{listNotes.length}</span>{" "}
        Characteres: <span className="paragraph bold"> {totalchar}</span>
      </p>
    </div>
  );
};
