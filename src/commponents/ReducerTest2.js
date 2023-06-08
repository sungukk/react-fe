import { useReducer, useState } from "react";
import TodoOne from "./TodoOne";

const reducer = (state, action) => {
  switch (action.type) {
    case 'todo-add':
      const todo = action.payload.todo;
      const newTodo = { id: Date.now(), todo, isDone: false };
      return {
        count: state.count + 1,
        todoList: [...state.todoList, newTodo]
      };
    case 'todo-del':
      return {
        count: state.count - 1,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
      };
    case 'todo-mark':
      return {
        count: state.count,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, isDone: !todo.isDone };
          } else {
            return todo;
          }
        })
      };
    default: return state;
  }
};

const todoState = {
  count: 0,
  todoList: [

  ]
};

const ReducerTest2 = () => {
  const [todo, setTodo] = useState('');
  const [todoInfo, dispatch] = useReducer(reducer, todoState);

  return (
    <div className="text-gray-900"> 
      <div>
        <h3 className="flex justify-center p-4 my-10 text-3xl font-extrabold ">스케쥴</h3>
        <p className="flex p-4 my-10 text-2xl font-extrabold justify-left text">계획 : {todoInfo.count}개</p>
        {
          todoInfo.todoList.map((list) => (
            <TodoOne key={list.id} todo={list.todo}
              dispatch={dispatch} id={list.id}
              isDone={list.isdone} />
          ))
        }
        <hr />
        <div className="flex justify-center text-2xl font-extrabold">
          <input className="bg-slate-200" type="text" value={todo} onChange={(e) => setTodo(e.target.value)}></input>
          <button className="relative px-4 py-2 text-xl font-extrabold text-white bg-black border w-fit h-fit"
           onClick={() => {
            dispatch({ type: 'todo-add', payload: { todo } });
          }}>추가</button>
        </div>
      </div>
    </div>
  );
};

export default ReducerTest2;