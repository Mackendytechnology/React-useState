import styles from "./style.module.scss";
import { AllForm } from "../../components/AllForm";
import { AllList } from "../../components/AllList";

export const HomePage = ({ listNotes, addNote, removeNote }) => {
  return (
    <main className={styles.container}>
      <div className={styles.flexBox}>
      <AllForm addNote={addNote} />
      <AllList listNotes={listNotes} removeNote={removeNote} />
      </div>
    </main>
  );
};
