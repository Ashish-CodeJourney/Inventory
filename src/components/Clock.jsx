import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <h2 className="float-right bg-gray-200 dark:bg-gray-600 p-2 rounded">
      {time}
    </h2>
  );
};

export default Clock;
