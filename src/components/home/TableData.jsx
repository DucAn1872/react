import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    
    deleteButtonClick = (idUser) => {
        //deleteUser
        this.props.deleteUser(idUser);
    }
    mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
        
        <TableDataRow
        deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
        
        changeEditUserStatus = {() => this.props.changeEditUserStatus()}
        editFunClick={(user) => this.props.editFun(value)} 
        title={value.title}
         key={key} 
        stt={key} 
        description={value.description}
        date={value.date}
        id={value.id}
        />
    ))
    
    // this.props.editFun

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

                        {this.mappingDataUser()}
                   
                    </tbody>
                </table>
                </div>

        );
    }
}

export default TableData;