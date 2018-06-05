import React from 'react';

export default class Inputs extends React.Component{
    constructor(){
        super();
        this.state = {
            elems: [1, 2, 3, 4, 5, 6]
        }
    }


    handleChange = (e) => {
        // console.log(this.state.elems);
        
        let id = e.target.id;
        let val = e.target.value;
        let newST = this.state.elems;
        let max = Math.max( ...this.state.elems );
        
        let index = newST[id-1];
        let next = (Number(index));
        let nextELEM = document.getElementById(next+1);
        
        let input = document.getElementById(next);
        
        if(val < 1 && (id < max)) {
            // this.setState({
            //     elems: newST
            // })

                input.parentNode.remove();
                newST.splice(index, 1);
                nextELEM.focus();

            console.log(input)
        }
    }

    // handleKeyDown = (e) => {
    //     let max = Math.max( ...this.state.elems );
    //     let id = e.target.id;
    //     let newST = this.state.elems;

    //     if(e.keyCode === 13 && e.target.value.length >= 1 && id == max){
    //         newST.push((newST.length+1));
            
    //         this.setState({
    //             elems: newST
    //         })
    //     } else if(e.keyCode === 13 && e.target.value.length >= 1 && id < max){
    //         let nextELEM = (Number(id)) + 1;
    //         document.getElementById(nextELEM).focus()
    //     }
    // }

    handleOut = (e) => {

    }

    mapingElems = (e) => {
        let arrLEN = this.state.elems.length;
        return(
            <ul>
                {this.state.elems.map((key) => 
                    {if(arrLEN !== key){
                        return(
                            <li key={key}>
                                <input 
                                    type="text" 
                                    defaultValue={"input " + (key)} 
                                    id={key} 
                                    key={key}
                                    // onKeyDown={this.handleKeyDown.bind(this)}
                                    onChange={this.handleChange.bind(this)}    
                                    />    
                            </li>  
                        );
                    } else if(arrLEN === key){
                        return(
                            <li key={key}>
                                <input 
                                    type="text" 
                                    defaultValue=""
                                    id={key} 
                                    key={key}
                                    // onKeyDown={this.handleKeyDown.bind(this)}
                                    onChange={this.handleChange.bind(this)}    
                                    autoFocus
                                />    
                            </li>  
                        );
                    }}
                )}
            </ul>
        )
    }

    render(){
        return(
            <div className="parent-content">
               {this.mapingElems()}
            </div>
        );
    }
}