import React from "react";

const TodoList = ({form,children}) => {
    return (
        <div className="todoListTemplate">
            <h2 className="title">Todo List</h2>
            <div className="formCont">
                {form}
            </div>
            <div className="children">
                {children}
            </div>
        </div>
    );
};

export default TodoList;