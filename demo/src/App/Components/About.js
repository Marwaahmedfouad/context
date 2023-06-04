import { Component, useContext } from "react";
import { counterContext } from "./Context/CounterContext";


class About extends Component {
    //  {counter} = useContext(counterContext);
    
    state = {  
        userName:'Boyka'
    }
    render() {
        return<>
            <div className="text-center">
                <h3 className="bg-black text-danger"> Hello From About JS</h3>
                <h3 className="text-teal">Name: {this.state.userName}</h3>
            </div>
        </>

    }
}
export default About



// import React from 'react';

// const About = () => {
//     let {counter} = useContext(counterContext)
//     console.log(counter);
//     return<>
//     <div className="text-center">
//         <h3 className="bg-black text-danger"> Hello From About JS</h3>
//         <h3 className="text-teal">Name: {this.state.userName}</h3>
//     </div>
// </>
// }

// export default About;
