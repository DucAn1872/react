import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            Permission: this.props.userEditObject.Permission
        }
    }
    //getUserEditInfo

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        //  console.log("info la " + info.name);
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus(); // an form 
    }
    render() {

        return (
            <div className="col">
                <form method="post">
                    <div className="card border-primary mb-3 mt-2 fixed top-28 right-1 z-10">
                        <div className="card-header text-center text-white bg-gray-700">Edit Data</div>
                        <div className="card-body text-primary py-0">
                            <div className="form-group my-2 w-96">
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Enter title..." />
                            </div>
                            <div className="form-group mb-2 w-96">
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="Enter description..." />
                            </div>
                            <div className="form-group mb-2 w-96">
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.Permission} type="date" name="Permission" className="form-control" />
                            </div>
                            <div className="form-group mb-2 w-96">
                                <input type="button"
                                    className="btn btn-block btn-success bg-green-500"
                                    value="Save" onClick={() => this.saveButton()} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;