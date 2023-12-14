import mainPageStyle from "../app/mainPage.module.css";
import { AddTaskButton } from "./AddTaskButton";
import { useData } from "./ToDoApp";

export const InputTodo = (props) => {
  const { isHidden } = useData();
  return (
    <>
      {!isHidden && <div>oook</div>}
      {/* <div className={mainPageStyle.hidden}>
        <h1>TODO-List</h1>
        <form className={mainPageStyle.addForm} onSubmit={props.getValue}>
          title: <input id="title" type="text" />
          description: <input id="description" type="text"></input>
          <label for="status">Status:</label>
          <select name="statusList">
            <option value="toDo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="stuck">Stuck</option>
            <option value="done">Done</option>
          </select>
          <label for="priority">Priority:</label>
          <select name="priorityList">
            <option value="2">high</option>
            <option value="1">medium</option>
            <option value="0">low</option>
          </select>
          <AddTaskButton setHidden={props.setHidden}></AddTaskButton>
        </form>
      </div> */}
    </>
  );
};
