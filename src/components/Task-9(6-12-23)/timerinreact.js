import { Component } from "react";



class TimerReact extends Component{
    state={
        min:0,
        sec:0,
    }
    a=null;
    // It is declared as a class property.
    // Note while writing methods use call back function .
    handleClick=()=>{
        // we cannot use loops in react.instead use setInterval and clearInterval methods.
        // while(true){
            // Here when we use var a=setInterval(), "a" is not accessing in handleStop() method.So we declared "a" as a class property.
                this.a=setInterval(()=>{
                    let new_sec=this.state.sec+1;
                    let new_min=this.state.min;

                    if(new_sec>=60){
                        new_min=this.state.min+1;
                        new_sec=0
                    }

                    this.setState(
                        {
                            min:new_min,
                            sec:new_sec
                        }
                      )
                },1000);



        // }
    }
    //Without button upon page load we can use componentDidMount() lifecycle method. 
    // componentDidMount(){
    //     var a=setInterval(this.handleClick,1000);
    // }
    // 
    handleStop=()=>{
        clearInterval(this.a);
    }


    render(){
        return(
            <>
                <button onClick={this.handleClick}>Start Timer</button>
                <h1>{this.state.min}:{this.state.sec}</h1>
                <button onClick={this.handleStop}>Stop Timer</button>
            </>
        )
    }
}
export default TimerReact