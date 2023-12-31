import styles from "./style.module.scss"
import { NoteNumber } from "../NoteNumber";
import { AllCard } from "./AllCard";

export const AllList = ({ listNotes, removeNote }) => {
  console.log(listNotes);
  return (
    <div className={styles.todoList}>
      <h2 className="title one">Liste de notes
      </h2>
      <NoteNumber listNotes={listNotes} />

      {listNotes.length > 0 ? (
        <ul>
          {listNotes.map((note) => {
            const { title, message, category, id } = note;
            return (
              <AllCard
                key={id}
                id={id}
                title={title}
                message={message}
                category={category}
                removeNote={removeNote}
              />
            );
          })}
        </ul>
      ) : 
        <p>Create your first note</p>
      }
    </div>
  );
};
