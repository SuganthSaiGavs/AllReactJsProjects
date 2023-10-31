import {Component} from "react";
import User from "./User";

class UserDetails extends Component{
    userArray=[];
    count=0;
    constructor(){
        super();
        this.state={
            firstName:'Unknown' ,
            Address:'Unknown',
            updateCount:0,
            userArray:[]
            };
        this.updateFirstName=this.updateFirstName.bind(this);
        this.updateAddress=this.updateAddress.bind(this);
        this.confirmReset=this.confirmReset.bind(this);
        this.addUser=this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    // This SPECIAL FUNCTION gets executed when the tag is getting load in Mounting phase.
    //Use this function to initialize the state and perform some inital tasks like DB connection or authentication.
    componentDidMount(){  //Mounting Phase
        this.setState({firstName:'Suganth'});
        this.setState({Address:'Royapuram'});
        console.log("State initialized");
    }
    // componentDidUpdate(){  //Updating Phase
    //     var today=new Date();
    //     console.log('Got updated on' + today.getHours() +":"+ today.getMinutes()+":"+today.getSeconds()+"for"+ this.state.updateCount+"times");

    // }

    // componentWillUnmount(){  //Unmounting Phase
    //     var today=new Date();
    //     console.log("Tag Unmounted on"+ today.getHours() +":"+ today.getMinutes()+":"+today.getSeconds());
    // }

    updateFirstName(event){
        this.setState({firstName:event.target.value});
        this.setState({updateCount:this.state.updateCount +1});
        console.log(this.state.updateCount);

    }   

    updateAddress(event){
        this.setState({Address:event.target.value});
        this.setState({updateCount:this.state.updateCount +1});
        console.log(this.state.updateCount);
    }
    confirmReset(){
        var v = window.confirm("Do you wish to reset?? Yes/No");
        return v;
    }
    addUser(event){
        event.preventDefault();
        var u = new User(this.state.firstName,this.state.Address)
        this.userArray.push(u);
        this.setState({firstName:'',Address:''});  //to trigger the view inside <ul>
        console.log(this.userArray);
    }

    deleteUser(index) {
        const updatedUserArray = [...this.userArray];
        updatedUserArray.splice(index, 1);
        this.userArray = updatedUserArray;
        //this.setState({ userArray: updatedUserArray });
        this.forceUpdate();
    }
 
    render(){
        return(  
        <div>
             <center> 
            <form onReset={this.confirmReset} onSubmit={this.addUser}>
                <label>First Name</label><input type="text" value={this.state.firstName} onChange={this.updateFirstName}/><br/>
                <label>Address</label><input type="text" value={this.state.Address} onChange={this.updateAddress} /><br/>
                <input type="submit" value="Add data"/>&nbsp;&nbsp; <input type="reset" value="Reset"/>
                {/* <button type="button" onClick={this.deleteValue}>Delete Last User</button> */}

            </form>
            {/* <ul>
                    {this.userArray.map((user, index) => (
                        <li key={index}>
                            {user.firstName} &nbsp;&nbsp; {user.Address}
                        </li>
                    ))}
                </ul> */}
                </center><br/>
                <table border="1" align="center">
                    <tr>
                    <th>First Name</th><th>Address</th>
                    </tr>

                    {
                    this.userArray.map((usr, index) => (
                    <tr key={index}>

                    <td>{usr.firstName}</td>
                    <td>{usr.Address}</td>
                    <td>
                    <button onClick={() => this.deleteUser(index)}>Delete</button>
                    </td>

                    </tr>

))}
                    
                </table>
        </div>
        );
    }
}

export default UserDetails;