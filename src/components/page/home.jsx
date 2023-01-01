import React, { Component } from "react";
import "../../App.css";
import Search from "../home/Search";
import Task from "../home/Task";
import Add from "../home/Add";
import Data from "../home/Data.json";
import "../../tailwind.css";

const uniqueId = () => parseInt(Date.now() * Math.random()).toString();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      searchText: "",
      data: [],
      editItemStatus: false,
      itemEditObject: {},
    };
  }


  componentWillMount() {
    // kiem tra
    if (localStorage.getItem("database") === null) {
      localStorage.setItem("database", JSON.stringify(Data));
    } else {
      var temp = JSON.parse(localStorage.getItem("database"));
      this.setState({
        data: temp,
      });
    }
  }

  deleteItem = (idItem) => {
    var tempData = this.state.data.filter((item) => item.id !== idItem);
    this.setState({
      data: tempData,
    });
    // day vao du lieu
    localStorage.setItem("database", JSON.stringify(tempData));
  };
  getItemEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.title = info.title;
        value.description = info.description;
        value.date = info.date;
      }
    });
    localStorage.setItem("database", JSON.stringify(this.state.data));
  };
  editItem = (item) => {
    this.setState({
      itemEditObject: item,
    });
  };
  changeEditItemStatus = () => {
    this.setState({
      editItemStatus: !this.state.editItemStatus,
    });
  };
  getNewUserData = (title, description, date) => {
    var item = {};
    item.id = uniqueId();
    item.title = title;
    item.description = description;
    item.date = date;
    var items = this.state.data;
    items.push(item);

    this.setState({
      data: items,
    });
    localStorage.setItem("database", JSON.stringify(items));
  };

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl,
    });
  };

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm,
    });
  };

  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.title.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    });

    
    return (
      <div>
        <div className="w-4/5 m-auto">
                <div className="m-auto">
                    <h1 className="font-bold text-4xl mt-7 text-white">Todo List</h1>
                    <p className="text-xl">with data json</p>
                    <hr className="my-2" />
                </div>
            </div>
        <div className="searchForm">
          <div className="m-auto">
            <div className="">
              <Search
                getItemEditInfoApp={(info) => this.getItemEditInfoApp(info)}
                itemEditObject={this.state.itemEditObject}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editItemStatus={this.state.editItemStatus}
                changeEditItemStatus={() => this.changeEditItemStatus()}
              />
              <Task
                deleteItem={(idItem) => this.deleteItem(idItem)}
                changeEditItemStatus={() => this.changeEditItemStatus()}
                editFun={(item) => this.editItem(item)}
                dataItemProps={ketqua}
              />
              <Add
                add={(title, description, date) =>
                  this.getNewUserData(title, description, date)
                }
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
