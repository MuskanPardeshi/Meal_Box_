import React from "react"


class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count :0,
            count1 :0
        }
    }
   

    render(){

        const {name, contact} = this.props;
        return(
            <div>
            <h2>Count: {this.state.count}</h2>
            <h2>Count1: {this.state.count1}</h2>
            <button onClick={() =>{
                this.setState({
                    count: this.state.count +1
                })
            }}>Increment</button>
            <p>name : {name}</p>
            <p>Conatct : {contact}</p>
            <p>Tech : React</p>
            </div>
        )
    }
}

export default UserClass;
