
import { Component } from  "react";
import image from "./Sandwich.jpg";
import image1 from "./samosa-main.jpg";
import image2 from "./Frenchfries.jpg";
import image3 from "./Noodles.jpg";
class CardsAlign extends Component{
    state={
        fooditems:[
            {
                itemname:"Sandwich",
                images:image
            },
            {
                itemname:"Samosa",
                images:image1
            },
            {
                itemname:"Frenchfries",
                images:image2
            },
            {
                itemname:"Noodles",
                images:image3
            },
            {
                itemname:"Noodles",
                images:image3
            }
        ]
    }
    handleClick=(element)=>{
        alert(element.itemname);
    }
    render(){
        return(
            <div style={{display:"flex",flexWrap:"wrap"}}>
            {   
                this.state.fooditems.map((element)=>{
                    return(
                        
                        <div className="card" style={{width:395}}>
                <img className="card-img-top" src={element.images} alt="Card"/>
                <div className="card-body">
                  <h4 className="card-title">{element.itemname}</h4>    
                  <p className="card-text">Some example text.</p>
                  <button onClick={()=>this.handleClick(element)}>Click here</button>
                  {/* <a href="#" className="btn btn-primary">See Profile</a> */}
                </div>
              </div>
            

                    )
                })
            }
           
            </div>
        )
    }
}
export default CardsAlign