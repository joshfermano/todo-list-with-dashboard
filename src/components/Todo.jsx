import React, { useRef, useState, useEffect } from 'react';
import TodoItems from './TodoItems';
import Dashboard from './Dashboard';
import Footer from './Footer';
import { LuListTodo } from 'react-icons/lu';
import { MdPlaylistAdd } from 'react-icons/md';

const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState(
    localStorage.getItem('todoList')
      ? JSON.parse(localStorage.getItem('todoList'))
      : []
  );

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const totalTasks = todoList.length;
  const completedTasks = todoList.filter((todo) => todo.isComplete).length;
  const remainingTasks = totalTasks - completedTasks;

  const addTodo = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearTasks = () => {
    setTodoList([]);
    localStorage.removeItem('todoList');
  };

  return (
    <>
      <div className="text-black font-poppins">
        <div className="bg-white shadow-lg shadow-gray-400 place-self-center w-[320px] h-[550px] md:w-[500px] md:h-[680px] max-w-md flex flex-col p-5 rounded-3xl relative">
          {/* Title */}
          <div className="flex flex-row items-center justify-center space-x-3 mb-6">
            <LuListTodo className="text-4xl text-black" />
            <h1 className="text-black text-3xl font-bold uppercase">
              To-Do App
            </h1>
          </div>

          {/* Dashboard Component */}
          <Dashboard
            totalTasks={totalTasks}
            remainingTasks={remainingTasks}
            completedTasks={completedTasks}
          />

          {/* Input */}
          <div className="relative flex items-center mb-6">
            <input
              ref={inputRef}
              type="text"
              className="p-3 pr-20 bg-slate-200 rounded-xl w-full placeholder-slate-400"
              placeholder="Add a ToDo Task"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  addTodo();
                }
              }}
            />
            <button
              onClick={addTodo}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2 hover:scale-95 hover:bg-gray-800 transition duration-300">
              <MdPlaylistAdd className="text-white text-xl" />
            </button>
          </div>

          {/* Todo Items */}
          <div className="flex-grow px-3 py-2 rounded-xl space-y-3 bg-gray-300 overflow-y-auto mb-16 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {todoList.map((todo, index) => (
              <TodoItems
                key={index}
                text={todo.text}
                id={todo.id}
                isComplete={todo.isComplete}
                deleteTodo={deleteTodo}
                toggle={toggle}
              />
            ))}
          </div>

          {/* Clear Todo */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <button
              onClick={clearTasks}
              className="px-4 py-2 bg-black text-white rounded-full hover:scale-95 hover:bg-gray-900 transition duration-300">
              Clear Tasks
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default Todo;
