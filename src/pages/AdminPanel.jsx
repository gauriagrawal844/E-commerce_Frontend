import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const AdminPanel = () => {
    const { products, addProduct, updateProduct, deleteProduct } = useContext(ShopContext);
    const [newProduct, setNewProduct] = useState({ title: "", category: "", price: "", image: "" });
    const [editId, setEditId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editId) {
            updateProduct(editId, { id: editId, ...newProduct });
            setEditId(null);
        } else {
            addProduct(newProduct);
        }
        setNewProduct({ title: "", category: "", price: "", image: "" });
    };

    return (
        <div className="container mx-auto p-5">
            <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

            {/* Product Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 border p-4 mb-6">
                <input
                    type="text"
                    placeholder="Product Title"
                    value={newProduct.title}
                    onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                    className="border p-2"
                    required
                />
                <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="border p-2"
                    required
                >
                    <option value="">Select Category</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="kids">Kids</option>
                </select>
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="border p-2"
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    className="border p-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2">
                    {editId ? "Update Product" : "Add Product"}
                </button>
            </form>

            {/* Product List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4">
                        <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                        <h3 className="mt-2 text-lg font-medium">{product.title}</h3>
                        <p className="text-sm">Price: ${product.price}</p>
                        <div className="flex gap-2 mt-2">
                            <button onClick={() => setEditId(product.id) || setNewProduct(product)} className="bg-yellow-500 text-white px-2 py-1">
                                Edit
                            </button>
                            <button onClick={() => deleteProduct(product.id)} className="bg-red-500 text-white px-2 py-1">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPanel;
