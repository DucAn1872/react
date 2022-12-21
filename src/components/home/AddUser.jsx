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


  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  kiemTraTrangThai = () => {
    if (this.props.hienThiForm === true) {
      return (
        <div className="col">
          <form method="post">
            <div className="card border-primary mb-3 mt-2 fixed top-28 right-1">
              <div className="card-header bg-gray-700 text-white">New Data</div>
              <div className="card-body text-primary py-0">
                <div className="form-group my-2 w-96">
                  <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" placeholder="Enter title..." />
                </div>
                <div className="form-group mb-2 w-96">
                  <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" placeholder="Enter description..." />
                </div>
                <div className="form-group mb-2 w-96">
                  <input type="date" onChange={(event) => this.isChange(event)} name="Permission" className="form-control" />
                </div>
                <div className="form-group mb-2 w-96">
                  <input type="reset" className="btn btn-success bg-green-500" onClick={(name, tel, Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} value="Add" />
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