import React from "react";
// import { useState } from "react";


export default class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefense = this.handleDefense.bind(this);

        // state object
        this.state = {
            count:0, // this state is immutable & cant be modified directly,
            gameStatus: "",
        };
    }
    
    handleAttack = () =>{
        //alert("Atack clicked");
        this.setState((previousState) => { //new syntax
            let newCount = previousState.count + Math.round(Math.random() * 10);
            return {
                count: newCount,
                gameStatus: newCount > 10 ? "You Win!" : "",
            };
        });
    }
    
    handleDefense = () => {
        //alert("Defend clicked");
        this.setState((previousState) => { //new syntax
            let newCount = previousState.count - Math.round(Math.random() * 10);
            return {
                count: newCount,
                gameStatus: newCount < -10 ? "You Loose!" : "",
            };
        });
    };

    handleRandomPlay = () => {
        //alert("Atack clicked");
        
        let playMode = Math.round(Math.random());
        if(playMode === 0){
            this.handleAttack();
        }
        else{
            this.handleDefense();
        }  
    };

    handleReset = () => {
        //alert("Defend clicked");
        this.setState(() => { //new syntax
            let resetCounter = 0;
            return {
                count: resetCounter,
            };
        });
    };


    render(){
        return (
            <div className="text-white col-12 col-md-4 offset-md-4">
                <h2>Score: {this.state.count}</h2>
                <h1>Status: {this.state.gameStatus}</h1>
                <button className="btn btn-success w-100 mt-2" onClick={this.handleAttack} style={{width: "200px"}}>Attack (+1)</button>
                <button className="btn btn-danger w-100 mt-2" onClick={this.handleDefense} style={{width: "200px"}}>Defense (-1)</button>
                <br/><br/>
                <div className="col-12 col-md-4 offset-md-4">
                    <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay}>Random Play</button>
                    <button className="btn btn-warning w-100 mt-2" onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}

/*
export default function Counter() {


    handleAttack = () => {
        alert("Atack clicked");
    }
    
    defendAttack = () => {
        alert("Defend clicked");
    }

    return (
        <div className="row text-white">
            <h1>Counter: {state.count}</h1>
            <button onClick={handleAttack} style={{width: "200px"}}>+1</button>
            <button onClick={defendAttack} style={{width: "200px"}}>-1</button>    
        </div>
    );
}
*/