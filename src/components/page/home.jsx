import React, { Component } from "react";
import "../../App.css";
import Header from "../home/Header";
import Search from "../home/Search";
import TableData from "../home/TableData";
import AddUser from "../home/AddUser";

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
      localStorage.setItem("database",[{id: "80651159705", title: "IP14", description: "512GB", date: "2022-12-22"}]);
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

    //  console.log(ketqua);
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getItemEditInfoApp={(info) => this.getItemEditInfoApp(info)}
                itemEditObject={this.state.itemEditObject}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editItemStatus={this.state.editItemStatus}
                changeEditItemStatus={() => this.changeEditItemStatus()}
              />
              <TableData
                deleteItem={(idItem) => this.deleteItem(idItem)}
                changeEditItemStatus={() => this.changeEditItemStatus()}
                editFun={(item) => this.editItem(item)}
                dataItemProps={ketqua}
              />
              <AddUser
                add={(title, description, date) =>
                  this.getNewUserData(title, description, date)
                }
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
