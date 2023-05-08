import React from "react";

function Card(props) {
    return (
        <div>
            <div className="card">
                <div class="icon">{props.emoji}</div>
                <div class="name">{props.name}</div>
                <div class="meaning">{props.meaning}</div>
            </div>
        </div>
    )
}

export default Card;