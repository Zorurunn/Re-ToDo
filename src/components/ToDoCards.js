import { Card } from "./Card";
// import mainPageStyle from "./mainPage.module.css";
import { AddTaskButton } from "@/components/AddTaskButton";
import styles from "@/styles/mainStyle.module.css";

export const ToDoCards = (props) => {
  return (
    <>
      <div className={styles.cardCont}>
        {props.toDoItems.map((item, index) => {
          item.id = index;
          return <Card key={index} {...item} />;
        })}

        {/* <button
          onClick={() => {
            props.setHidden((prev) => !prev);
          }}
        >
          OnClick
        </button> */}
        <AddTaskButton setHidden={props.setHidden}></AddTaskButton>
      </div>
    </>
  );
};
