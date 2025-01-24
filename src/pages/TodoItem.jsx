import React, { Component } from "react";

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <div className="todoItem" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {e.stopPropagation(); onRemove(id)}}>
                    <span>&times;</span>
                </div>
                <div className={`todoText ${checked && 'checked'}`}>
                    <span>{text}</span>
                </div>
                {
                    checked && (<span className="checkMark">✓</span>)
                }
            </div>
        )
    }
}

export default TodoItem;