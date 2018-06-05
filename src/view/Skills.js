import React from 'react';

export default class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            notif: 11
        }
    }

    handleCont = (e) => {
        // let circleImg = document.getElementsByClassName('imgCont-circle');
        // let circle = document.getElementsByTagName('body');
        // let left = e.clientX;
        // let top = e.clientY;
        // let k = circleImg[0].style.left;
        // circleImg[0].style.left = left;
        // circleImg[0].style.top = top;

        // console.log(e.clientX)
    }

    render(){
        return(
            <section className="skills parent-content" onMouseMove={this.handleCont.bind(this)} >
                <div className="imgCont">
                    <div className="imgCont-circle"></div>
                </div>
            </section>
        );
    }
}