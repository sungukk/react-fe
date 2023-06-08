const TodoOne = ({ todo, dispatch, id, isDone }) => {
  return (
    <div className="flex justify-center text-2xl font-extrabold">
      <span className="p-3 px-5" onClick={() => {
          dispatch({ type: 'todo-mark', payload: { id } });
        }}
      >
        {todo}
      </span>
      <button className="relative px-4 py-2 text-xl font-extrabold text-white bg-black border w-fit h-fit"
       onClick={() => {
        dispatch({
          type: 'todo-del', payload: { id }
        });
      }}>취소</button>
    </div>
  );
};

export default TodoOne;