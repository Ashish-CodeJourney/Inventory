import React, { useState, useEffect } from 'react';
import { Save, X, AlertCircle } from 'lucide-react';

const Form = ({ addData, editData, currentData, setCurrentData }) => {
    const [tableName, setTableName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (currentData) {
            setTableName(currentData.tableName);
            setQuantity(currentData.quantity.toString());
            setPrice(currentData.price.toString());
        } else {
            resetForm();
        }
    }, [currentData]);

    const validateForm = () => {
        const newErrors = {};

        if (!tableName.trim()) {
            newErrors.tableName = 'Product name is required';
        }

        const quantityNum = parseInt(quantity);
        if (isNaN(quantityNum) || quantityNum <= 0) {
            newErrors.quantity = 'Quantity must be a positive number';
        }

        const priceNum = parseFloat(price);
        if (isNaN(priceNum) || priceNum < 0) {
            newErrors.price = 'Price must be a non-negative number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setTableName('');
        setQuantity('');
        setPrice('');
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const newData = {
                tableName: tableName.trim(),
                quantity: parseInt(quantity),
                price: parseFloat(price),
                total: parseInt(quantity) * parseFloat(price)
            };

            currentData ? editData(newData) : addData(newData);
            resetForm();
            setCurrentData(null);
        }
    };

    const total = quantity && price
        ? (parseInt(quantity) * parseFloat(price)).toFixed(2)
        : '0.00';

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="tableName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Product Name
                    </label>
                    <input
                        id="tableName"
                        type="text"
                        placeholder="Enter product name"
                        value={tableName}
                        onChange={(e) => setTableName(e.target.value)}
                        className={`w-full p-3 rounded-md border transition-colors duration-200 
              ${errors.tableName
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                            : 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700'
                        }`}
                    />
                    {errors.tableName && (
                        <div className="flex items-center text-red-600 text-sm mt-1">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {errors.tableName}
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="quantity"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Quantity
                    </label>
                    <input
                        id="quantity"
                        type="number"
                        placeholder="Enter quantity"
                        value={quantity}
                        min="1"
                        onChange={(e) => setQuantity(e.target.value)}
                        className={`w-full p-3 rounded-md border transition-colors duration-200 
              ${errors.quantity
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                            : 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700'
                        }`}
                    />
                    {errors.quantity && (
                        <div className="flex items-center text-red-600 text-sm mt-1">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {errors.quantity}
                        </div>
                    )}
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                        Price
                    </label>
                    <input
                        id="price"
                        type="number"
                        step="0.01"
                        placeholder="Enter price"
                        value={price}
                        min="0"
                        onChange={(e) => setPrice(e.target.value)}
                        className={`w-full p-3 rounded-md border transition-colors duration-200 
              ${errors.price
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                            : 'border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700'
                        }`}
                    />
                    {errors.price && (
                        <div className="flex items-center text-red-600 text-sm mt-1">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {errors.price}
                        </div>
                    )}
                </div>

                <div className="mb-4 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Total:
            <span className="ml-2 font-bold text-green-600 dark:text-green-400">
              ₹{total}
            </span>
          </span>
                </div>

                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        onClick={() => {
                            resetForm();
                            setCurrentData(null);
                        }}
                        className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        <X className="w-5 h-5 mr-2" /> Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        <Save className="w-5 h-5 mr-2" />
                        {currentData ? 'Update' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;