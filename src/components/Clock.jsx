import React, { useEffect, useState } from 'react';
import { Clock as ClockIcon } from 'lucide-react';

const Clock = () => {
  const [time, setTime] = useState({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(undefined, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime({
        time: now.toLocaleTimeString(),
        date: now.toLocaleDateString(undefined, {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
      <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg shadow-sm">
        <ClockIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
          {time.time}
        </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
          {time.date}
        </span>
        </div>
      </div>
  );
};

export default Clock;