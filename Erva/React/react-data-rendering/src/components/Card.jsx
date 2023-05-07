import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="top">{props.name}</div>
            <div className="name">
                Tel: {props.tel}<br />
                Email: {props.email}
            </div>
        </div>
    )
}

export default Card;