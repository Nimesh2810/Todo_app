"use client"
import Image from 'next/image'
import ModalInput from './component/modalinput'
import Todo from './component/todo'
import { Suspense, useEffect, useState } from 'react'
import { Divide } from 'lucide-react'

export default function Home() {
  const [todos, setTodos]=useState<TodosArray[]>([])
// creat todo
      const createTodo = (todo:TodosArray)=>{

        const checkTodos = todos.find((item) => item.todo === todo.todo);
        if(checkTodos)return;


        setTodos([...todos, todo])
                // todos save to db
        
                const saveTodos = async()  => {
                  const res = await fetch('/api/todos', {
                    method: 'POST',
                    body: JSON.stringify({ todos: todo}),
                  })
        
                  if(res.ok){
                    console.log('Todos Save')
                  }
        
                }
        
                saveTodos();  
      }

      const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      }
             console.log(deleteTodo);

      const updateTodo = (id: number) => {
        setTodos(
          todos.map(
            (todo) => todo.id === id ? {...todo, checked: !todo.checked}: todo));
      }

      useEffect(() => {
          const getTodo = async() => {
            const res = await fetch('/api/todos');
            const todos = await res.json();
            setTodos(todos);
          }
          getTodo();
      }, [])


  return (
    <>
      <div className='max-w-3xl mx-auto px-3'>
        <ModalInput create={createTodo}/>
        <h1 className='text-2xl md:text-4xl dark:text-white text-center font-medium mb-8' >
          My Todo's
        </h1>
        <div>
          <Suspense fallback={<div className='dark:text-white text-2xl text-center mb-1'>Loading . . .</div>}>

          {todos && todos.length > 0 ? todos.map((todo)=> (
            <Todo key={todo.id} todo={todo} deleteTodoItem={deleteTodo} update={updateTodo}/>
          )) : < div className='dark:text-white text-2xl text-center mb-1'>Loading . . .</div> }
          </Suspense>
        </div>
      </div>
    </>
  )
}
