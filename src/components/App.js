import { useRef, useState } from "react";
import Action from "./Action";
import List from "./List";
import SearchBar from "./SearchBar";

let leftTask;

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [tempTaskList, setTempTaskList] = useState([]);
  const [searchFlag, setSearchFlag] = useState(false);

  const taskInput = useRef();
  const searchedTaskRef = useRef();
  const getListRef = useRef();

  const handleAddTask = (event) => {
    if (event.key === "Enter" || event._reactName === "onClick") {
      const taskName = taskInput.current.value;
      if (taskName.trim() === "") return;
      const id = Math.random();

      setTaskList((prevState) => {
        return [
          {
            taskName: taskName,
            id: id,
            status: false,
          },
          ...prevState,
        ];
      });

      setTempTaskList((prevState) => {
        return [
          {
            taskName: taskName,
            id: id,
            status: false,
          },
          ...prevState,
        ];
      });
      taskInput.current.value = "";
    }
  };

  const handleCheckedStatus = (e) => {
    const checkTaskID = e.target.parentElement.id;

    const tempList0 = taskList.map((task) => {
      if (task.id === Number(checkTaskID)) {
        task.status = e.target.checked;
      }
      return task;
    });

    setTaskList(tempList0);
    setTempTaskList(tempList0);
  };

  let list = tempTaskList.map((task) => {
    return [
      <List
        label={task.taskName}
        key={task.id}
        id={task.id}
        ref={getListRef}
        onCheck={handleCheckedStatus}
        checked={task.status}
      />,
      <hr key={Math.random()} />,
    ];
  });

  const handleSearchTask = () => {
    const searchedTask = searchedTaskRef.current.value;

    if (searchedTask.trim() === "") return;

    const tempList = taskList.filter(
      (item) => item.taskName.toLowerCase() === searchedTask.toLowerCase()
    );

    setTempTaskList(tempList);
  };

  const handleShowAll = () => {
    setTempTaskList(taskList);
  };

  const handleActiveTask = () => {
    const activeTaskList = taskList.filter((task) => task.status === false);
    setTempTaskList(activeTaskList);
  };

  const handleCompletedTask = () => {
    const completedTaskList = taskList.filter((task) => task.status === true);
    setTempTaskList(completedTaskList);
  };

  leftTask = taskList.filter((task) => task.status === false).length;

  return (
    <div className="app">
      <header>THINGS TO DO</header>
      <input
        type="text"
        ref={taskInput}
        onKeyDown={handleAddTask}
        placeholder="Add New"
        className="searchbox"
      />
      <div className="lists">{list}</div>

      {!searchFlag && (
        <Action
          onAdd={handleAddTask}
          onSearchButton={() => {
            setSearchFlag(true);
          }}
          onShowAll={handleShowAll}
          onActive={handleActiveTask}
          onComplete={handleCompletedTask}
          leftItems={leftTask}
        />
      )}

      {searchFlag && (
        <SearchBar
          ref={searchedTaskRef}
          onHomeButton={() => {
            setSearchFlag(false);
            setTempTaskList(taskList);
          }}
          onSearch={handleSearchTask}
        />
      )}
    </div>
  );
};

export default App;
