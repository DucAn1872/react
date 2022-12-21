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
      editUserStatus: false,
      userEditObject: {},
    };
  }

  componentWillMount() {
    // kiem tra
    if (localStorage.getItem("database") === null) {
      localStorage.setItem("database",[]);
    } else {
      var temp = JSON.parse(localStorage.getItem("database"));
      this.setState({
        data: temp,
      });
    }
  }

  deleteUser = (idUser) => {
    var tempData = this.state.data.filter((item) => item.id !== idUser);
    this.setState({
      data: tempData,
    });
    // day vao du lieu
    localStorage.setItem("database", JSON.stringify(tempData));
  };
  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.title = info.title;
        value.description = info.description;
        value.date = info.date;
      }
    });
    localStorage.setItem("database", JSON.stringify(this.state.data));
  };
  editUser = (user) => {
    this.setState({
      userEditObject: user,
    });
  };
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
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
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <TableData
                deleteUser={(idUser) => this.deleteUser(idUser)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editFun={(user) => this.editUser(user)}
                dataUserProps={ketqua}
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
