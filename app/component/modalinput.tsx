import React, { useState } from "react";

function ModalInput({create}:ModalInputProps) {
  const [todoItem,setTodoItem]= useState<string>("")

  const handelAddTodoItem =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTodoItem(e.target.value)
  }

  const handelAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    create({
      id: Math.round(Math.random()*10000),
      todo: todoItem.trim(),
      checked: false
    })
  }


  return (
    <div className={" w-full mb-8"}>
        <form action="" className="border dark:border-white rounded-lg px-5 py-6">
            <label htmlFor="todo_input" className="text-black dark:text-white block font-medium mb-3 text-2xl ">
                Todo Input
            </label>
            <input type="text" id="todo_input" onChange={handelAddTodoItem} className="border-none rounded-md block w-full text-lg px-3 py-4 font-medium focus:outline-none mb-5 bg-gray-200 dark:bg-white" />
            <button onClick={handelAddTodo }  className="bg-black dark:bg-white border-none rounded-md block w-full text-lg px-1 py-1 font-medium focus:outline-none duration-200 hover:bg-opacity-90 text-white dark:text-black" >
                Add
            </button>
        </form>
    </div>
  );
}

export default ModalInput
