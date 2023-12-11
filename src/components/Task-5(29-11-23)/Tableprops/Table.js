import "./Table.css"
import { Collapse } from "bootstrap"


const Table1=(props)=>{
    return(
      <table className="hi">
        <tr className="hi">    
            {props.children} 
            
         </tr>
         
         
       </table>
    )
}
export default Table1