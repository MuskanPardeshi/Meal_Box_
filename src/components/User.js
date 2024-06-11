import { useState } from "react";

const User = (props) =>{
    const [count] = useState(0)
    return (
        <div>
        <h1> Count :{count}</h1>
            <p>name : {props.name}</p>
            <p>Conatct : {props.contact}</p>
            <p>Tech : React</p>
        </div>
    )
}

export default User;