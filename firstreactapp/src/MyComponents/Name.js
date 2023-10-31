import './Name.css'  //. represents current directory

function Name(){
    return(
        // all html tags should come inside the container tags(div,span)
        <div className='Name'>
        <b>Welcome to React</b><br/>
        <b>Welcome GavsTech</b>
        {/* <b>Today: </b>{new Date()} */}
        </div>
    );
}

export default Name;

