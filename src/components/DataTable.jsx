import React from 'react';

const DataTable = ({ data, deleteData, editData }) => {
  const totalPrice = data.reduce((acc, item) => acc + item.total, 0);

  return (
    <div>
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200 dark:bg-gray-600">
          <th className="py-2 px-4 border">Table Name</th>
          <th className="py-2 px-4 border">Quantity</th>
          <th className="py-2 px-4 border">Price</th>
          <th className="py-2 px-4 border">Total</th>
          <th className="py-2 px-4 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="border-b dark:border-gray-600 even:bg-blue-100 dark:even:bg-gray-700"
          >
            <td className="py-2 px-4">{item.tableName}</td>
            <td className="py-2 px-4">{item.quantity}</td>
            <td className="py-2 px-4">{item.price}</td>
            <td className="py-2 px-4">{item.total}</td>
            <td className="py-2 px-4">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                onClick={() => editData(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => deleteData(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="bg-gray-200 dark:bg-gray-600 py-2 px-4 border-t">
    <span className="font-bold">Total Price: </span>
    <span>₹{totalPrice.toFixed(2)}</span>
  </div>
</div>
  );
};

export default DataTable;