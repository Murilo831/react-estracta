import React, { useState } from 'react';
import { fakeData } from '../data';


const DataList = ({ itemsPorPage, currentPage }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const offset = (currentPage - 1) * itemsPorPage;

    const filteredData = fakeData.filter(item => {
        const searchValue = searchTerm.toLowerCase();
        return (
            item.name.toLowerCase().includes(searchValue) ||
            item.id.toString().includes(searchValue)
        );
    });

    const currentData = filteredData.slice(offset, offset + itemsPorPage);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='table-responsive '>
            <div className='center-input'>
                <input
                    className='search-input '
                    type='text'
                    placeholder='Pesquisar por nome ou id...'
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataList;