import React from 'react';

export default class Info extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    handleAllowDrop(ev) {
        ev.preventDefault();
    }
    
    handleDrag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    
    handleDrop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

    render(){
        return(
            <div className="info parent-content">
                <div id="div1" onDrop={this.handleDrop.bind(this)} onDragOver={this.handleAllowDrop.bind(this)}>
                    <div className="drag-box" draggable="true" onDragStart={this.handleDrag.bind(this)} id="drag1"></div>
                    <div className="drag-box blue" draggable="true" onDragStart={this.handleDrag.bind(this)} id="drag2"></div>
                    <div className="drag-box green" draggable="true" onDragStart={this.handleDrag.bind(this)} id="drag3"></div>
                </div>

                <div id="div2" onDrop={this.handleDrop.bind(this)} onDragOver={this.handleAllowDrop.bind(this)}></div>
            </div>
        );
    }
}