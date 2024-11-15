import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center bg-gray-100 p-2 rounded-xl shadow-md shadow-slate-300">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-row items-center gap-2 min-w-0 flex-grow">
        {isComplete ? (
          <IoCheckmarkCircleSharp className="text-2xl flex-shrink-0 text-green-700 cursor-pointer hover:scale-95 hover:text-gray-700 transition duration-300" />
        ) : (
          <IoCheckmarkCircleOutline className="text-2xl flex-shrink-0 text-gray-700 cursor-pointer hover:scale-95 hover:text-green-700 transition duration-300" />
        )}
        <p
          className={`font-poppins text-black text-xl truncate ${
            isComplete ? 'line-through text-gray-500' : ''
          }`}>
          {text}
        </p>
      </div>
      <AiFillDelete
        onClick={() => {
          deleteTodo(id);
        }}
        className="text-2xl flex-shrink-0 hover:scale-95 hover:text-red-700 transition duration-300 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
