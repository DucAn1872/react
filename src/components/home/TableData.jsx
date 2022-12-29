import React, { Component } from 'react';
import "../../tailwind.css";
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtonClick = (idItem) => {
        //deleteItem
        this.props.deleteItem(idItem);
    }
    mappingDataItem = () => this.props.dataItemProps.map((value,key) => (
        <TableDataRow
            deleteButtonClick = {(idItem) => this.deleteButtonClick(idItem)}
            changeEditItemStatus = {() => this.props.changeEditItemStatus()}
            editFunClick={(item) => this.props.editFun(value)} 
            title={value.title}
            key={key} 
            stt={key} 
            description={value.description}
            date={value.date}
            id={value.id}
        />
    ))
    
    render() {
        return (
            <div className="w-4/5 m-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className='bg-gray-50'>
                    <tr>
                        <th scope="col" className='px-6 py-3 text-lg font-bold text-center text-gray-500 uppercase'>STT</th>
                        <th scope="col" className='px-6 py-3 text-lg font-bold text-center text-gray-500 uppercase'>Title</th>
                        <th scope="col" className='px-6 py-3 text-lg font-bold text-center text-gray-500 uppercase'>Description</th>
                        <th scope="col" className='px-6 py-3 text-lg font-bold text-center text-gray-500 uppercase'>Date</th>
                        <th scope="col" className='px-6 py-3 text-lg font-bold text-center text-gray-500 uppercase'>Action</th>
                    </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                        {this.mappingDataItem()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;