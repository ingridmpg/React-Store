import React from "react";

export default function Title(props) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-4 text-center text-tile">
                <h2 className="text-capitalize font-weight-bold">
                    {props.name}{" "}
                    <strong className="text-blue">{props.title}</strong>
                </h2>
            </div>
        </div>
    );
}
