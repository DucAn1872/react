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
          return   <div className="btn btn-block btn-outline-secondary my-2" onClick={()=>this.props.ketNoi()}  > Đóng lại </div>

        }else 
        {
            return <div className="btn btn-block btn-outline-info my-2"   onClick={()=>this.props.ketNoi()} > Thêm mới </div>
        }
    }
    render() {
       
        return (
            <div>
                 {this.isShowEditForm()}
                <div className="form-group">
                <div className="btn-block d-flex justify-center">
                    <input type="text" className="form-control w-2/3" onChange={(event) => this.isChange(event) }   placeholder="Nhập tên cần tìm   "
                    />
                    <div className="btn btn-block btn-outline-info rounded mx-1"
                     onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}> Tìm</div>
                    
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