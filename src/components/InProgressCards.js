import { Card } from "./Card";
import { AddTaskButton } from "@/components/AddTaskButton";
import styles from "@/styles/mainStyle.module.css";

export const InProgressCards = (props) => {
  return (
    <>
      <div className={styles.cardCont}>
        {props.toDoItems.map((item, index) => {
          item.id = index;
          return <Card key={index} {...item} />;
        })}
      </div>
    </>
  );
};
