import { Card } from "./Card";
// import mainPageStyle from "./mainPage.module.css";
import { AddTaskButton } from "@/components/AddTaskButton";
import styles from "@/styles/mainStyle.module.css";
import { Header } from "./Header";
import { AddNewButton } from "./AddNewButton";

export const ToDoCards = (props) => {
  return (
    <>
      <div className={styles.cardCont}>
        <Header name={"To Do"} />
        {props.toDoItems.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
        <AddNewButton setHidden={props.setHidden}></AddNewButton>
      </div>
    </>
  );
};
