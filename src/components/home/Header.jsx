import React, { Component } from 'react';
import "../../tailwind.css";

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3 font-bold">Todo List
                    </h1>
                    <p className="lead"> với dữ liệu json</p>
                    <hr className="my-2" />
                </div>
                </div>

        );
    }
}

export default Header;