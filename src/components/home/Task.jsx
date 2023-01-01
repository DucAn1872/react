import React, { Component } from "react";
import "../../tailwind.css";

class TableData extends Component {
  deleteButtonClick = (idItem) => {
    //deleteItem
    this.props.deleteItem(idItem);
  };

  editClick = (value) => {
    this.props.editFun(value);
    this.props.changeEditItemStatus();
  };

  render() {
    return (
      <div className="m-auto mt-4 w-4/5 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 mb-4">
        {this.props.dataItemProps.map((value) => (
          <div className="relative bg-opacity-50 bg-violet-600 border-solid border-2 shadow-2xl border-sky-500 rounded-lg p-2 mb-4 lg:mb-0">
            <div className="grid grid-cols-4">
              <div className="text-2xl font-bold truncate text-sky-500 uppercase col-span-2 text-left">
                {value.title}
              </div>
              <div className="text-xl text-gray-700 col-span-2 text-right">
                {value.date}
              </div>
            </div>
            <div className="text-xl text-gray-700 pl-2 text-justify mb-6">
              {value.description}
            </div>
            <div className=" text-xl text-gray-700 text-left pl-2 absolute bottom-1 right-1">
              <div className="flex justify-end">
                <div
                  className="text-yellow-400 mr-2 hover:text-yellow-300 cursor-pointer"
                  onClick={() => this.editClick(value)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 mb-1 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  <i className="fa fa-edit" /> Edit
                </div>
                <div
                  className="text-red-500 cursor-pointer hover:text-red-300"
                  onClick={() => this.props.deleteItem(value.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 mb-1 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <i className="fa fa-delete" /> Delete
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TableData;
