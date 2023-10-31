import { Component } from "react";

// Model->state(data)
// View->HTML page
// Controller->function like updateFirstName
class UserDetails extends Component{
constructor(){
    super();
    this.state={firstName:'Suganth',lastName:'Unknown'};
    this.updateFirstName=this.updateFirstName.bind(this); //bind both, into the class
    this.updateLastName=this.updateLastName.bind(this);    //use bind or => (arrow) to work
}
// Binding 2 types: one way binding, two way binding 
// One way Binding:                             Two way Binding:
// 1.model-to-view                              model-to-view and view-to-model through controller.
// 2.view-to-model
// 3.view-to-controller

updateFirstName=(event)=>{
    console.log(event.target.value);  
    //store the value  of the firstName textbox into firstName field in the state  
    this.setState({firstName:event.target.value});
}
updateLastName=(event)=>{
    console.log(event.target.value);  
    this.setState({lastName:event.target.value});
}


    //This class must implement a function called render.
    render(){
        return(
            <div className="formclass">
                <center>
                <form>
                    {/*From View to controller binding (this.updateFirstName) */}
                    <label>First Name</label><input type="text" name="firstName" value={this.state.firstName} onChange={this.updateFirstName} /><br/>
                    <label>Last Name</label><input type="text" name="lastName" onChange={this.updateLastName} /><br/>
                    <input type="submit" value="Save" /><br/>

                    {/*From Model to View binding (this.state.firstName) - One Way binding */}
                    <b>Your Full Name</b>&nbsp;&nbsp; <label>{this.state.firstName}&nbsp;&nbsp;
                        {this.state.lastName}</label>
                </form>
                </center>
            </div>  
        )
    }
}

export default UserDetails;