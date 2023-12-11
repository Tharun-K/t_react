import { Component} from "react";
import axios from "axios";
class ProonCards extends Component{
    state={
        products:[],
        totalprice:0
    } 
    handleClick=()=>{
        //fetch ("https://fakestoreapi.com/products")
        //.then(response=>response.json())
        //.then(response=>console.log(resposne))
        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            this.setState(
                {
                    products:response.data
                },
                ()=>{
                    this.totalvalue();
                }
            )
        })
    }
    handleRemove=(ind)=>{
        let a=this.state.products.slice();
        a.splice(ind,1);
        this.setState( {
            products:a

        },
        ()=>{
            this.totalvalue();
        }

        )
    }
    removeAll=()=>{
    this.setState({
        products:[]
    })

    
    }
totalvalue=()=>{    
        
    var final=this.state.products.reduce((acc,val)=>acc+ val.price,0)
    this.setState({
        totalprice:final
    })
        
    }
    render(){
        
        return(
            
            <div > 
             <div className="card" >    
                <div className="card-body">
                      
                   <button onClick={this.handleClick}>Click here </button> 
                   &nbsp;
                   <button onClick={this.removeAll}> Remove All</button>
                   <h6>Total Price:${this.state.totalprice}</h6>
                   <div style={{display:"flex",flexWrap:"wrap"}}>
                  {
                    this.state.products.length>0 ? this.state.products.map((element,ind)=>{
                        return (
                            <div >
                            <div className="card"style={{width:300,height:470}}>
                                <div className="card-body">
                                <h6 className="card-title">{element.title}</h6> 
                                <img className="card-img-top" src={element.image} alt="Card" style={{width:200,height:300}}/>
                                <h6 className="card-title">{`Price:$${element.price}`}</h6> 
                                <button onClick={()=>{this.handleRemove(ind)}}>Remove</button>
                                </div>
                                </div>
                            </div>
                        )
                    }) 
                    :
                    <h1>No products available</h1>
                  }
                 
                  </div>
                  </div>
                  </div>
                  

            </div >
        )
    }
}
export default ProonCards
