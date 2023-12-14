import mainPageStyle from "./mainPage.module.css";
import { AddTaskButton } from "@/components/AddTaskButton";

export const MainPage = (props) => {
  return (
    <div className={mainPageStyle.container}>
      <div className={mainPageStyle.bigCards}>
        <div className={mainPageStyle.toDo}>
          <h1>TODO</h1>
          <div className={mainPageStyle.todoList}>
            <div>
              {props.toDoItems
                .filter((item) => {
                  return item.status === "toDo";
                })
                .map((item) => {
                  return (
                    <div key={item.id} className={mainPageStyle.card}>
                      <h1>{item.id}</h1>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <button
            onClick={() => {
              props.setHidden((prev) => !prev);
            }}
          >
            dsvgfnhj
          </button>
          <AddTaskButton setHidden={props.setHidden}></AddTaskButton>
        </div>

        {/* <div className={mainPageStyle.hiddenAdd}>
                    <h5>TODO-List</h5>
                    <form className={mainPageStyle.addForm}>
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


                        <button className={mainPageStyle.task_submit} type="submit" onSubmit={props.addTask}> Add Task</button>
                    </form>
                </div> */}

        <div className={mainPageStyle.inProgress}>
          <h1>IN PROGRESS</h1>
          <div className={mainPageStyle.inProgressList}>
            <div>
              {props.toDoItems
                .filter((item) => {
                  return item.status === "inProgress";
                })
                .map((item) => {
                  return (
                    <div key={item.id} className={mainPageStyle.card}>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <AddTaskButton setHidden={props.setHidden}></AddTaskButton>
        </div>

        <div className={mainPageStyle.stuck}>
          <h1>STUCK</h1>
          <div className={mainPageStyle.stuckList}>
            <div>
              {props.toDoItems
                .filter((item) => {
                  return item.status === "stuck";
                })
                .map((item) => {
                  return (
                    <div key={item.id} className={mainPageStyle.card}>
                      <h5 className={mainPageStyle.cardTitle}>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <AddTaskButton setHidden={props.setHidden}></AddTaskButton>
        </div>

        <div className={mainPageStyle.done}>
          <h1>DONE</h1>
          <div className={mainPageStyle.doneList}>
            <div>
              {props.toDoItems
                .filter((item) => {
                  return item.status === "done";
                })
                .map((item) => {
                  return (
                    <div key={item.id} className={mainPageStyle.card}>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
            </div>
          </div>
          <AddTaskButton setHidden={props.setHidden}></AddTaskButton>
        </div>
      </div>
    </div>
  );
};
