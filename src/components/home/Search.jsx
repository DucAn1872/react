import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue:'' ,
            userObj:{}
        }
    }
    //props.getItemEditInfoApp
    
    getUserEditInfo = (info) => {
        this.setState({
            userObj : info 
        });
        this.props.getItemEditInfoApp(info) ; 
    
    }
    isShowEditForm = () => {
        if(this.props.editItemStatus === true){
            return <EditUser 
            getUserEditInfo = {(info) => this.getUserEditInfo(info)}
            itemEditObject= {this.props.itemEditObject}
            changeEditItemStatus = {() => this.props.changeEditItemStatus()}
             />
        }
        
    }

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue:event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }
    hienThiNut = () => {
        if(this.props.hienThiForm === true){
          return   <div className="cursor-pointer flex justify-between w-24 m-auto my-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" 
                        onClick={()=>this.props.ketNoi()}  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
            Close</div>

        }else 
        {
            return <div className="cursor-pointer flex justify-between w-24 m-auto my-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"   
                        onClick={()=>this.props.ketNoi()} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>Add</div>
                </div>
        }
    }
    render() {
       
        return (
            <div>
                 {this.isShowEditForm()}
                    <div className='relative inline'>
                    <input type="text" className="outline-none rounded p-2 pr-7 w-3/5 relative" onChange={(event) => this.isChange(event) }   placeholder="Quick search... "/>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6 absolute top-0 right-1"
                        onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <div className="form-group">
                    <div className="btn-group1">
                        {this.hienThiNut()}
                    </div>
                </div>
                <hr className='w-4/5 m-auto'/>
            </div>
          
        );
    }
}

export default Search;