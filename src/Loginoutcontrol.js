import React,{Component} from "react";
import Loginbutton from "./Loginbutton";
import Logoutbutton from "./Logoutbutton";
import Greetings from "./Greetings";

class Loginoutcontrol extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn:false
        }
    }
    logIn = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    logOut = () => {
        this.setState({
            isLoggedIn: false
        })
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        return(
            <React.Fragment>
                <Greetings isLoggedIn = {isLoggedIn}/>
                {isLoggedIn ? 
                <Logoutbutton onClick={this.logOut}/>:
                <Loginbutton onClick={this.logIn}/>
                
                }
            </React.Fragment>
        )
    }
}

export default Loginoutcontrol;

