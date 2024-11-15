import React from 'react';
import Todo from './components/Todo';

const App = () => {
  return (
    <>
      <div className="bg-black h-screen flex flex-col justify-center font-poppins">
        <Todo />
      </div>
    </>
  );
};

export default App;
