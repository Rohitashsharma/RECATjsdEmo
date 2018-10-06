import React from "react";


class Form extends React.Component{
    render(){
        return(
            <div>
                <form> 
               <input type="text"  name="City" placeholder="City" />        
               <input type="text"  name="Countery" placeholder="Countery" />
               <button>Get Countery</button>
               </form>                                                       </div>
        )
    }
}


export default Form;