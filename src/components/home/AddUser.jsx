import React, { Component } from 'react';
import "../../tailwind.css";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      Permission: ""
    }
  }

  close = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm,   
    });
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
    // pakage to item 
    // var item = {};
    // item.id = this.state.id;
    // item.name = this.state.name;
    // item.tel = this.state.tel;
    // item.Permission = this.state.Permission;
    // console.log(item);
  }

  kiemTraTrangThai = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className="col fixed top-20 right-0">
          <form method="post">
            <div className="card border-primary mb-3 mt-2 bg-slate-400">
              <div className="card-header text-yellow-300">Thêm mới user vào hệ thống </div>
              <div className="card-body text-primary">
                <div className="form-group mb-2">
                  <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" placeholder="Tên User" />
                </div>
                <div className="form-group mb-2">
                  <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" placeholder="Điện thoại " />
                </div>
                <div className="form-group mb-2">
                  <select className="custom-select outline-none text-gray-500 bg-white" name="Permission" onChange={(event) => this.isChange(event)} required>
                    <option value>Chọn quyền mặc định </option>
                    <option value={1}>Admin</option>
                    <option value={2}>Modrator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="reset" className="btn btn-block btn-primary text-yellow-300 bg-blue-500" onClick={(name, tel, Permission) => {this.props.add(this.state.name, this.state.tel, this.state.Permission)}} value=" Thêm mới " />
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }

  render() {
    // console.log(this.state);
    return (
      <div >
        {
          this.kiemTraTrangThai()
        }
      </div>
    );
  }
}

export default AddUser;