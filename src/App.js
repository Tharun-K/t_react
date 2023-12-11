

// import Tablecomponent1 from "./components/tables/table-component";
// import Formcomponent from "./components/Form/form-component";
import Cards from "./components/task-4/cards/cards";
import Imagecomponent from "./components/image/image-component";
import Imagecomponentsc from "./components/image/image-components";
import Listcomponent from "./components/orderlist/list-component";
import Ollistcomponent1 from "./components/orderlist/list-component3";
import Tablecomponent from "./components/table/table-componentclas";
import Tablecomponents from "./components/table/table-componentfunc";
import Tablecomponent1 from "./components/tables/table-component";

import Textcomponent from "./components/text/text-component";
import Textcomponents from "./components/text/text-components";

import Ullistcomponent1 from "./components/unorderlist/list-component1";
import Ullistcomponent from "./components/unorderlist/list-component2";
import Tablec from "./components/task-4/cards/table";
import Formst4 from "./components/task-4/formst4";
import Extcards from "./components/task-4/cards/externalcards";
import "./App.css"
import Table1 from "./components/Task-5(29-11-23)/Tableprops/Table";
import Showtime from "./components/Task-5(29-11-23)/time";
import Buttons from "./components/Task-5(29-11-23)/button";
import CardsAlign from "./components/Task-6  (1-12-23)/cardsalign";
import ProonCards from "./components/Task-7  (4-12-23)/cardspro";
import DemoCarousel from "./components/Task-7  (4-12-23)/carousels/carousel";
import Tablefilter from "./components/task-10 (7-12-23)/tablefilter";
import TimerReact from "./components/Task-9(6-12-23)/timerinreact";

// import Formcomponent from "./components/Form/form-component";
function App() {
  // const dayy=new Date().getDay
  // function getDay (day){

  //   switch (day){
  //     case 0:
  //       return "Sunday"
  //       case 1:
  //       return "Monday"
  //       case 2:
  //       return "Tuesday"
  //       case 3:
  //       return "Wednesday"
  //       case 4:
  //       return "Thursday"
  //       case 5:
  //       return "Friday"
  //       case 6:
  //       return "Saturday" 
  //       default:
  //       return "none"
  //   }
  // }
  // const d=new Date();
  // let hr =d.getHours();
  // function getGreeting(hr){
  //   let greeting;
  //   if((hr>=0)&&(hr<12)){
  //     greeting="Good Morning"
  //   }
  //   else if((hr>=12)&&(hr<3)){
  //     greeting="Good Afternoon"
  //   }
  //   else if((hr>=3)&&(hr<7)){
  //     greeting="Good Evening"
  //   }
  //   else{
  //     greeting="Good Night"
  //   }
  // }
  return (

    <div>
    
        <h1>Hello World!</h1>
        
        <Listcomponent/>
        <Ullistcomponent1/>
        <Ollistcomponent1/>
        <Ullistcomponent/>
        <Tablecomponent/>
        <Tablecomponents/>
        <Textcomponent/>
        <Imagecomponent/>
        <Imagecomponentsc/>
        <Textcomponents/>
        <Tablecomponent1/>
        <Tablecomponent1/>
        <Cards/>  
        <Tablec/>
        <Formst4/>
        <Extcards/>
        <Table1>
          <td className="hi"> KPHB</td>
          <td className="hi">JNTU</td>
          <td className="hi">MIYAPUR</td>
          <td className="hi">LBNAGAR</td>
          </Table1>
          <Showtime />
          <Buttons text={"Size 1"} wid={1125}/>
          <Buttons text={"Size 2"} wid={1175}/>
          <Buttons text={"Size 3"} wid={1225}/>
          <Buttons text={"Size 4"} wid={1275}/>
          <Buttons text={"Size 5"} wid={1325}/>
          <Buttons text={"Size 6"} wid={1375}/>
          <Buttons text={"Size 7"} wid={1425}/>
          <Buttons text={"Size 8"} wid={1475}/>
          <Buttons text={"Size 9"} wid={1525}/>
          <Buttons text={"Size 10"} wid={1575}/>
          <CardsAlign/>
          <ProonCards/>
          <DemoCarousel/>
          <Tablefilter/>
          <TimerReact/>

        
        
    </div>
  );
}

export default App;
