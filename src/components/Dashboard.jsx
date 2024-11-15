import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { BsClipboardCheck, BsClipboardX } from 'react-icons/bs';

const Dashboard = ({ totalTasks, remainingTasks, completedTasks }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {/* Total Tasks */}
      <div className="bg-black p-3 rounded-xl flex flex-col items-center justify-center">
        <FaTasks className="text-2xl text-white mb-1" />
        <p className="text-sm text-white font-semibold">Total</p>
        <p className="text-xl font-bold text-white">{totalTasks}</p>
      </div>

      {/* Remaining Tasks */}
      <div className="bg-black p-3 rounded-xl flex flex-col items-center justify-center">
        <BsClipboardX className="text-2xl text-white mb-1" />
        <p className="text-sm text-white font-semibold">Pending</p>
        <p className="text-xl font-bold text-white">{remainingTasks}</p>
      </div>

      {/* Completed Tasks */}
      <div className="bg-green-100 p-3 rounded-xl flex flex-col items-center justify-center">
        <BsClipboardCheck className="text-2xl text-green-800 mb-1" />
        <p className="text-sm text-green-800 font-semibold">Done</p>
        <p className="text-xl font-bold text-green-800">{completedTasks}</p>
      </div>
    </div>
  );
};

export default Dashboard;
