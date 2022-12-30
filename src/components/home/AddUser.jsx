import React, { Component } from 'react';
import "../../tailwind.css";

const uniqueId = () => parseInt(Date.now() * Math.random()).toString();
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      description: "",
      date: ""
    }
  }

  onSubmit = (e) =>{
    let ob = {
      id: uniqueId(),
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
    }
    let olddata = localStorage.getItem('database');
    if(olddata===null){
      olddata = []
      olddata.push(ob)
      localStorage.setItem('database', JSON.stringify(olddata));
    }else{
      let oldArr = JSON.parse(olddata)
      oldArr.push(ob)
      localStorage.setItem("database", JSON.stringify(oldArr))
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
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="z-50 mb-3 mt-2 fixed top-28 right-1 bg-purple-500 rounded shadow-2xl outline outline-2 outline-white">
              <div className="rounded-t p-2 bg-violet-500 text-white text-xl">New Data</div>
              <div>
                <div className="my-2 w-96">
                  <input type="text" onChange={(event) => this.isChange(event)} name="title" className="w-11/12 p-1 my-2 outline-none rounded" placeholder="Enter title..." required/>
                </div>
                <div className="mb-2 w-96">
                  <input type="text" onChange={(event) => this.isChange(event)} name="description" className="w-11/12 p-1 mb-2 outline-none rounded" placeholder="Enter description..." required/>
                </div>
                <div className="mb-2 w-96">
                  <input type="date" onChange={(event) => this.isChange(event)} name="date" className="w-11/12 p-1 outline-none rounded" required/>
                </div>
                <div className="mb-2 w-96">
                  <input type="submit"
                    className="w-11/12 m-auto my-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" 
                    value="Add" />
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }
  render() {
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