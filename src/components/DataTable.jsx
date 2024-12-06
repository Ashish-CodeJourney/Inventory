import React from 'react';
import { Trash2, Edit3, Info } from 'lucide-react';

const DataTable = ({ data, deleteData, editData }) => {
  const totalPrice = data.reduce((acc, item) => acc + item.total, 0);

  return (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Table Name
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Quantity
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Price
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Total
              </th>
              <th className="py-3 px-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Actions
              </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {data.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500 dark:text-gray-400">
                    <div className="flex flex-col items-center justify-center">
                      <Info className="w-10 h-10 mb-2 text-blue-500" />
                      <p>No data available</p>
                    </div>
                  </td>
                </tr>
            ) : (
                data.map((item, index) => (
                    <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <td className="py-4 px-4 text-sm text-gray-900 dark:text-gray-100">
                        {item.tableName}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 dark:text-gray-100">
                        {item.quantity}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-900 dark:text-gray-100">
                        ₹{item.price.toFixed(2)}
                      </td>
                      <td className="py-4 px-4 text-sm font-medium text-green-600 dark:text-green-400">
                        ₹{item.total.toFixed(2)}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <button
                              onClick={() => editData(index)}
                              className="text-yellow-500 hover:text-yellow-700 transition-colors duration-200 p-1 rounded-full hover:bg-yellow-100 dark:hover:bg-yellow-900"
                              title="Edit"
                          >
                            <Edit3 className="w-5 h-5" />
                          </button>
                          <button
                              onClick={() => deleteData(index)}
                              className="text-red-500 hover:text-red-700 transition-colors duration-200 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900"
                              title="Delete"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                ))
            )}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Total Entries:
          </span>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs">
            {data.length}
          </span>
          </div>
          <div className="text-right">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2">
            Total Price:
          </span>
            <span className="text-green-600 dark:text-green-400 font-bold text-lg">
            ₹{totalPrice.toFixed(2)}
          </span>
          </div>
        </div>
      </div>
  );
};

export default DataTable;