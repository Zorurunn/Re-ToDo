// import mainPageStyle from "@/styles/mainPage.module.css";
// import { AddTaskButton } from "./AddTaskButton";
// import { useData } from "./ToDoApp";
// import styles from "@/styles/mainStyle.module.css";

// export const InputField = (props) => {
//   const { isHidden } = useData();
//   return (
//     <>
//       {!isHidden && (
//         <div className={styles.hidden}>
//           <h1>TODO-List</h1>
//           <form className={styles.addForm} onSubmit={props.getValue}>
//             <div>title:</div>
//             <div>
//               <input id="title" type="text" />
//             </div>

//             <div>description:</div>
//             <div>
//               <textarea id={styles.description}></textarea>
//             </div>

//             <div>
//               <label htmlFor="status">Status:</label>
//             </div>
//             <div>
//               <select name="statusList">
//                 <option value="toDo">To Do</option>
//                 <option value="inProgress">In Progress</option>
//                 <option value="stuck">Stuck</option>
//                 <option value="done">Done</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="priority">Priority:</label>
//             </div>
//             <div>
//               <select name="priorityList">
//                 <option value="2">high</option>
//                 <option value="1">medium</option>
//                 <option value="0">low</option>
//               </select>
//             </div>

//             <AddTaskButton set={props.set} />
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

import mainPageStyle from "@/styles/mainPage.module.css";
import { AddTaskButton } from "./AddTaskButton";
import styles from "@/styles/mainStyle.module.css";

export const InputField = (props) => {
  return (
    <>
      <div className={styles.hidden}>
        <form className={styles.addForm} onSubmit={props.getValue}>
          {/* title: <input id="title" type="text" /> */}
          <h1 className="text-[60px] bg-green-500 rounded-[5px] col-span-2 ">
            Add New
          </h1>

          <div className="bg-green-500 rounded-[5px] pl-[10px]">title:</div>
          <div>
            <input id="title" type="text" />
          </div>

          <div className="bg-green-500 rounded-[5px] pl-[10px] h-fit">
            description:
          </div>
          <div>
            <textarea
              id="description"
              className={styles.description}
            ></textarea>
          </div>
          <div className="bg-green-500 rounded-[5px] pl-[10px]">
            <label htmlFor="status">Status:</label>
          </div>
          <div>
            <select name="statusList">
              <option value="toDo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="stuck">Stuck</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div className="bg-green-500 rounded-[5px] pl-[10px]">
            <label htmlFor="priority">Priority:</label>
          </div>
          <div>
            <select name="priorityList">
              <option value="2">high</option>
              <option value="1">medium</option>
              <option value="0">low</option>
            </select>
          </div>
          <div className="col-span-2">
            <button
              className="bg-green-500  rounded-[5px] w-full"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

{
  /* <h1>TODO-List</h1>
          <form className={styles.addForm} onSubmit={props.getValue}>
            <div>title:</div>
            <div>
              <input id="title" type="text" />
            </div>

            <div>description:</div>
            <div>
              <textarea id={styles.description}></textarea>
            </div>

            <div>
              <label htmlFor="status">Status:</label>
            </div>
            <div>
              <select name="statusList">
                <option value="toDo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="stuck">Stuck</option>
                <option value="done">Done</option>
              </select>
            </div>

            <div>
              <label htmlFor="priority">Priority:</label>
            </div>
            <div>
              <select name="priorityList">
                <option value="2">high</option>
                <option value="1">medium</option>
                <option value="0">low</option>
              </select>
            </div>

            <AddTaskButton set={props.set} />
          </form> */
}
