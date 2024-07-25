import React, { useState, useEffect } from 'react';
import Clock from './Clock';
import Form from './Form';
import DataTable from './DataTable';
import Header from './Header';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const App = () => {
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) || []);
  const [currentDataIndex, setCurrentDataIndex] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const updateLocalStorage = (updatedData) => {
    setData(updatedData);
    localStorage.setItem('data', JSON.stringify(updatedData));
  };

  const addData = (newData) => updateLocalStorage([...data, newData]);

  const editData = (index, updatedData) => {
    const updatedArray = data.map((item, i) => (i === index ? updatedData : item));
    updateLocalStorage(updatedArray);
    setCurrentDataIndex(null); 
  };

  const deleteData = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    updateLocalStorage(updatedData);
  };

  return (
    <div className="inline">
      <Analytics />
      <Header />
      <Clock />
      <Form 
        addData={addData} 
        editData={(updatedData) => editData(currentDataIndex, updatedData)}
        currentData={currentDataIndex !== null ? data[currentDataIndex] : null}
        setCurrentData={setCurrentDataIndex}
      />
      <DataTable data={data} deleteData={deleteData} editData={setCurrentDataIndex} />
    </div>
  );
};

export default App;