import React from "react";

const Cajas = (props) => {
    return(
        <div>
            {
                props.colors.map((color) => (
                    <div style={{
                        display: "inline-block",
                        margin: "10px",
                        height: "50px",
                        width: "50px",
                        backgroundColor: color
                    }}>
                    </div>
                ))
                }
        </div>
    );
}

export default Cajas;