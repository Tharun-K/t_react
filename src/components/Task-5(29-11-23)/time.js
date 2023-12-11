const d=new Date();
let day=d.getDay();
let mon=d.getMonth();
let year=d.getFullYear();
const Showtime = (props)=>{
    return(
        <>
        <p>Good morning user, today date was {day},{mon} ,{year}</p>
        </>
    )
}
export default Showtime

