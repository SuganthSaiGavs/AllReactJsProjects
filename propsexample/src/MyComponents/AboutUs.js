import { useState } from "react";


// props is readonly(cannot be modified), but state can be dynamically changed.
function AboutUs(props){
    // props.companyName='DEll' this i illegal
    const[companyName,setCompanyName] = useState(props.companyName);
    const[address,setAddress]=useState(props.address);

    return(
    <center>
    <div>
        <b>Contact Us @</b>{companyName}<br/>
        <b>Our address</b>{address}<br/>    
    </div>
    </center>
    )
}

export default AboutUs;