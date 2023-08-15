import React, {useState} from "react";

const Formulario = (props) => {
    const [color, setColor] = useState([]);

    const sumbitBox = (e) => {
        e.preventDefault();
        props.newColor(color);
        document.querySelector(".box").value = "";
    }

    return(
        <form onSubmit={sumbitBox}>
            <label>Color: </label>
            <input type="text" onChange={(e) => setColor(e.target.value)} className="box" name="color" placeholder="Choose a color"/>
            <input type="submit" value="Create box"/>
        </form>
    )
}

export default Formulario;