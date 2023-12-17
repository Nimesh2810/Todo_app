import { LucideXCircle } from 'lucide-react';
import React from 'react'

function Todo({ todo, deleteTodoItem, update}: TotoProps)  {
  return (
    <div className='flex items-center px-1 py-1 dark:border-white border rounded mb-3'>
        <label htmlFor="#" className="peer flex gap-2 items-center">
            <input onChange={e => update(todo?.id)} type="checkbox" name="" className='dark:border-white h-5 w-5' id="" />
            <p className="text 3xl dark:text-white font-medium peer-checked:line-through decoration-2">
              {todo?.todo}
            </p>
        </label>
        <button onClick={() => deleteTodoItem(todo?.id)} className='bg-black dark:bg-white px-1 py-1 rounded ml-auto'>
            <LucideXCircle className='dark:stroke-black stroke-white'/>
        </button>
    </div>
  );
}

export default Todo;
