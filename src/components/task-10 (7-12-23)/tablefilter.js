
import { Component } from "react";
import "./tablestyling.css";



class TableFilter extends Component{
    state={
            name:["Rohit","Rahul","kohli","Jadeja","Ishan","Hardik"],
            designation:["Batsman","Wicketkeeper","Batsman","Allrounder","Wicketkeeper","Allrounder"]
        }
        
    handleAll=()=>{
        this.setState(
            {
                name:["Rohit","Rahul","kohli","Jadeja","Ishan","Hardik"],
                designation:["Batsman","Wicketkeeper","Batsman","Allrounder","Wicketkeeper","Allrounder"]
            }
        )
    }
    handleClick=(x)=>{
    this.setState(
        {
            name:["Rohit","Rahul","kohli","Jadeja","Ishan","Hardik"],
            designation:["Batsman","Wicketkeeper","Batsman","Allrounder","Wicketkeeper","Allrounder"]
        },
        ()=>{
            
            var name1=[];
            var designation1=[];
            this.state.designation.filter((val,ind)=>{
            if(val===x){
                    designation1.push(val);
                    name1.push(this.state.name[ind]);
            } 
            })
            // 

            this.setState(
                {
                    designation:designation1,
                    name:name1
                }
            )
        }
    )
    }
    
    render(){
        return(
            <>
                <button onClick={this.handleAll}>All</button>
                <button onClick={()=>{this.handleClick("Batsman")}}>Filter by Batsman</button>
                <button onClick={()=>{this.handleClick("Wicketkeeper")}}>Filter by Wicketkeeper</button>
                <button onClick={()=>{this.handleClick("Allrounder")}}>Filter by Allrounder</button>

                <table className="t1">
                    <tr className="t1">
                        <th className="t1">Name</th>
                        <th className="t1">Role</th>
                    </tr>
                    {
                        this.state.name.map((val,ind)=>{
                            return(
                                <tr className="t1">
                                    <td className="t1">{this.state.name[ind]}</td>
                                    <td className="t1">{this.state.designation[ind]}</td>
                                </tr>
                            )
                        })
                    }
            
                </table>
            </>
        )
    }
}
export default TableFilter