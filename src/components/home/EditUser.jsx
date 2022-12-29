import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.itemEditObject.id,
            title: this.props.itemEditObject.title,
            description: this.props.itemEditObject.description,
            date: this.props.itemEditObject.date
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
        info.title = this.state.title;
        info.description = this.state.description;
        info.date = this.state.date;
        this.props.getUserEditInfo(info);
        this.props.changeEditItemStatus(); // an form 
    }
    render() {

        return (
            <div className="col">
                <form method="post">
                    <div className="z-50 mb-3 mt-2 fixed top-28 right-1 bg-purple-500 rounded shadow-2xl outline outline-2 outline-white">
                        <div className="rounded-t p-2 bg-violet-500 text-white text-xl">Edit Data</div>
                        <div className="card-body text-primary py-0">
                            <div className="my-2 w-96">
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.itemEditObject.title} type="text" name="title" className="w-11/12 p-1 my-2 outline-none rounded" placeholder="Enter title..." required/>
                            </div>
                            <div className="mb-2 w-96">
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.itemEditObject.description} type="text" name="description" className="w-11/12 p-1 mb-2 outline-none rounded" placeholder="Enter description..." required/>
                            </div>
                            <div className="mb-2 w-96">
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.itemEditObject.date} type="date" name="date" className="w-11/12 p-1 outline-none rounded" required/>
                            </div>
                            <div className="mb-2 w-96">
                                <input type="submit"
                                    className="w-11/12 m-auto my-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
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