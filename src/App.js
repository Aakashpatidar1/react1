import React, { useState } from 'react';
import { addRow, formData } from "@firebase/firestore"
import { firestore } from './firebase';
const InvoiceForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        gst: '',
        items: [{ service: '', quantity: '', unitPrice: '', totalPrice: '' }]
    });

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const items = [...formData.items];
        items[index][name] = value;
        setFormData({ ...formData, items });
    };

    const addRow = () => {
        setFormData({
            ...formData,
            items: [...formData.items, { service: '', quantity: '', unitPrice: '', totalPrice: '' }]
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>Invoice Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /><br /><br />
                <label htmlFor="address">Address:</label><br />
                <input type="text" id="address" name="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} required /><br /><br />
                <label htmlFor="phone">Phone:</label><br />
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required /><br /><br />
                <label htmlFor="gst">GST Number:</label><br />
                <input type="text" id="gst" name="gst" value={formData.gst} onChange={(e) => setFormData({ ...formData, gst: e.target.value })} required /><br /><br />

                <h2>Item Details</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formData.items.map((item, index) => (
                            <tr key={index}>
                                <td><input type="text" name="service" value={item.service} onChange={(e) => handleChange(index, e)} required /></td>
                                <td><input type="number" name="quantity" value={item.quantity} onChange={(e) => handleChange(index, e)} required /></td>
                                <td><input type="number" name="unitPrice" value={item.unitPrice} onChange={(e) => handleChange(index, e)} required /></td>
                                <td><input type="number" name="totalPrice" value={item.totalPrice} readOnly /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" onClick={addRow}>Add Row</button><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default InvoiceForm;
