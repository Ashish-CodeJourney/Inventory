import React, { useState, useEffect } from 'react';

const Form = ({ addData, editData, currentData, setCurrentData }) => {
  const [tableName, setTableName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (currentData) {
      setTableName(currentData.tableName);
      setQuantity(currentData.quantity);
      setPrice(currentData.price);
    } else {
      resetForm();
    }
  }, [currentData]);

  const resetForm = () => {
    setTableName('');
    setQuantity('');
    setPrice('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tableName && quantity && price) {
      const newData = { tableName, quantity, price, total: quantity * price };
      currentData ? editData(newData) : addData(newData);
      resetForm();
      setCurrentData(null); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Product Name"
        value={tableName}
        onChange={(e) => setTableName(e.target.value)}
        className="bg-gray-200 dark:bg-gray-600 p-2 rounded mb-2 w-full"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="bg-gray-200 dark:bg-gray-600 p-2 rounded mb-2 w-full"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="bg-gray-200 dark:bg-gray-600 p-2 rounded mb-2 w-full"
      />
      <label className="block mb-2">Total: {quantity * price}</label>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          {currentData ? 'Update' : 'Submit'}
        </button>
        <button
          type="button"
          onClick={() => {
            resetForm();
            setCurrentData(null); 
          }}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;