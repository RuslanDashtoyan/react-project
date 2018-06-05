import React from 'react';

export default class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            
        }
    }

    componentDidMount() {
        this.drowCanvas();
    }

    drowCanvas(){
        const ctx = this.refs.canvas.getContext('2d');
        ctx.moveTo(50, 10);
        ctx.lineTo(10, 10);
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 650, 75);
        
        // ctx.fillStyle = "#000000";
        // ctx.fillRect(0,75,350,400);
        ctx.stroke();
    }
    
    render(){
        return(
            <div className="container-fluid parent-content">
                <canvas ref="canvas" width="800px" height="600px" /*style={{border: "1px solid #d3d3d3"}}*/></canvas>
            </div>
        );
    }
}