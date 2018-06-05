import React from 'react';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'ruslan',
            surname: 'dashtoyan',
            role: 'front-end web developer',
            time: new Date(),
            welcome: ['Good Morning', 'Good Afternoon', 'Good Evening'],
            drowName: function (prop, pre){
                pre = arguments[1] ? pre: '';
                let name = prop;
                let res = name.split("");
                return res.map(function(name, index) {
                    if(pre === ''){
                        return (
                            <span className={pre + name} key={index}>{name}</span> 
                        );        
                    } else {
                        return (
                            <span className={pre + name} key={index}>{name}</span> 
                        );
                    }
                })
            }
        }
    }

    render(){
        let say;
        let date = this.state.time.getHours();
        say = (date >= 9 && date < 12) ? this.state.welcome[0] : (date >= 12 && date <= 20) ? this.state.welcome[1] : this.state.welcome[2];
        return (
            <section className="homePage">
                <div className="user">
                    <h2 className="user-welcome">{say} Dear Guest.</h2>
                    <h1 className="user-title">
                        {this.state.drowName(this.state.name)}
                    </h1>
                    <h2 className="user-pretitle">
                        {this.state.drowName(this.state.surname)}
                    </h2>
                    <p className="user-role">{this.state.drowName(this.state.role)}</p>  
                </div>
            </section>
        );
    }
}