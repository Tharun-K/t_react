
import tabledata from "./tabledata";
const Tdcomponent=()=>{
    
    const{tdata1,tdata2,tdata3,tdata4,}=tabledata;
    return (
        <div>
            <td>{tdata1}</td>
           <td>{tdata2}</td>
           <td>{tdata3}</td>
           <td>{tdata4}</td>
        </div>
    )
}
export default Tdcomponent