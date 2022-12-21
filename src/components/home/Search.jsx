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
    //props.getUserEditInfoApp
    
    getUserEditInfo = (info) => {
        this.setState({
            userObj : info 
        });
        this.props.getUserEditInfoApp(info) ; 
    
    }
    isShowEditForm = () => {
        if(this.props.editUserStatus === true){
            return <EditUser 
            getUserEditInfo = {(info) => this.getUserEditInfo(info)}
            userEditObject= {this.props.userEditObject}
            changeEditUserStatus = {() => this.props.changeEditUserStatus()}
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
          return   <div className="btn btn-block btn-outline-secondary my-2 w-24" onClick={()=>this.props.ketNoi()}  >Close</div>

        }else 
        {
            return <div className="btn btn-block btn-outline-info my-2 w-24"   onClick={()=>this.props.ketNoi()} >Add</div>
        }
    }
    render() {
       
        return (
            <div>
                 {this.isShowEditForm()}
                <div className="form-group">
                <div className="btn-block d-flex justify-center">
                    <input type="text" className="form-control w-2/3" onChange={(event) => this.isChange(event) }   placeholder="Quick search... "
                    />
                    <div className="btn btn-block btn-outline-info rounded mx-1"
                     onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                     </div>
                    
                </div>
                </div>

                <div className="form-group">
                 <div className="btn-group1">
                     {this.hienThiNut()}
                
                </div>
                </div>
                <hr/>
            </div>
          
        );
    }
}

export default Search;