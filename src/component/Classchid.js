import { Component } from "react";

class Child extends Component{

    constructor(props){

        const {user} = props;

        super(props)
        this.state = {
            childuser : user
        }
        console.log("Child constructor");
        console.log(this.state.childuser);
    }

    componentDidMount(){
        console.log("Child component did mount");
    }

    componentDidUpdate(){
        console.log("Child component did update");
    }

    render(){
        console.log("Child render");
        return(
            <h1>Its child components {this.state.childuser.name} and email id is {this.state.childuser.email}</h1>
        )
    }

}

export default Child;