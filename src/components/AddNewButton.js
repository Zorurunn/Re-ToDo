// import styles from "@/styles/mainStyle.module.css";
import { useData } from "./ToDoApp";
import mainPageStyle from "@/styles/mainPage.module.css";

export const AddNewButton = () => {
  const { setIsHidden } = useData();
  return (
    <>
      <button
        className="w-full border-[2px] rounded-[5px]"
        onClick={() => {
          setIsHidden((prev) => !prev);
        }}
      >
        Add new
      </button>
    </>
  );
};
