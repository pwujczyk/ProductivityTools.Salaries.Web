import React, { useState, useEffect } from 'react'
import apiService from '../services/apiService'

function Edit() {

    const [salary, setSalary] = useState({ name: "", b2b: false, valueConfirmed: 1 })

    const f = (type, value, checked) => {
        debugger;
        switch (type) {
            case "checkbox": return checked;
            case "number": return Number(value);
            default: return value;
        }
    }

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        debugger
        setSalary(prevState => ({
            ...prevState,
            [name]: f(type, value, checked)

        }));
    }

    async function saveSalary() {
        debugger;
        await apiService.saveSalary(salary);
    }

    return (
        <div>
            <p>Edit</p>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>salaryId</td>
                    <td>{salary.id}</td>
                </tr>
                <tr>
                    <td>Position</td>
                    <td><input type="text" name="position" value={salary.position} onChange={handleChange} /> </td>
                </tr>
                <tr>
                    <td>Value</td>
                    <td><input type="text" name="value" value={salary.value} onChange={handleChange} /></td>
                </tr>
                <tr>
                    <td>Comment</td>
                    <td><input type="text" name="comment" value={salary.comment} onChange={handleChange} /> </td>
                </tr>
                <tr>
                    <td>Company</td>
                    <td><input type="text" name="Company" value={salary.company} onChange={handleChange} /> </td>
                </tr>
                <tr>
                    <td>ValueConfirmed</td>
                    <td><input type="number" name="valueConfirmed" value={salary.valueConfirmed} onChange={handleChange} /> </td>
                </tr>
                <tr>
                    <td>CreationDate</td>
                    <td><input type="date" name="creationDate" value={salary.creationDate} onChange={handleChange} /> </td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td><input type="text" name="name" value={salary.name} onChange={handleChange} /> </td>
                </tr>
                <tr>
                    <td>Source</td>
                    <td><input type="text" name="source" value={salary.source} onChange={handleChange} /> </td>
                </tr>
                <tr>
                    <td>Expectation</td>
                    <td><input type="text" name="expectation" value={salary.expectation} onChange={handleChange} /> </td>
                </tr>
                <tr>
                    <td>B2b</td>
                    <td><input type="checkbox" name="b2b" checked={salary.b2b} onChange={handleChange} /> </td>
                </tr>
            </table>
            <button onClick={() => saveSalary(salary)}>Save</button>
        </div>
    )
}

export default Edit