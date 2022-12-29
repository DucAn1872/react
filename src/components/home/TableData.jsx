import React, { Component } from 'react';
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
            <div className="col">
                <table className="table table-striped table-hover   ">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataItem()}
                    </tbody>
                </table>
                </div>

        );
    }
}

export default TableData;