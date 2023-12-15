// import styles from "@/styles/mainStyle.module.css";
import { useData } from "./ToDoApp";
import mainPageStyle from "@/styles/mainPage.module.css";

// import mainPageStyle from "../app/mainPage.module.css";

export const AddTaskButton = (props) => {
  return (
    <>
      <button
        className="w-full border-[2px] rounded-[5px]"
        type="submit"
        // onClick={() => {
        //   props.setHidden((prev) => !prev);
        // }}
      >
        Add Task
      </button>
    </>
  );
};

// export const AddTaskButton = (props) => {
// const { setIsHidden } = useData();
// console.log(props.set);
// return (
// <button
// type="submit"
// onClick={() => {
//   setIsHidden((prev) => !prev);
// }}
// >
{
  /* Add Task */
}
{
  /* </button> */
}
// );
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault()
//   const { elements } = event.target
//   const title = elements.title.value;
//   const description = elements.description.value;
//   const status = elements.statuslist.value;
//   const newData = [...data, { title, description, status }]

//   setData(newData)

// })
