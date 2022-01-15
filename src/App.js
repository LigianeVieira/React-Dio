import Item from "./components/item";
import Card from "./components/card";

const App = () => {
  return (
    // usando {props.texto}
     //<>
     // <h1>Minha primeira aplicação com React</h1>
     // <ul>
     //   <Item texto='Item 1'/>
     //   <Item  texto='Item 2'/>
     //   <Item  texto='Item 3'/>
     // </ul>
   // </>
   //usando {props.children}
     <>
     <h1>Minha primeira aplicação com React</h1>
     <ul>
       <Item>Item 1</Item>
       <Item>Item 2</Item>
       <Item>Item 3</Item>
     </ul>
     <Card/>
   </>
  );
};

export default App;
