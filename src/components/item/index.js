//const Item = (props) => {
 //  return(
    //  <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
    //   {props.texto}</a> ou

//<a href="/" className="list-group-item list-group-item-action list-group-item-dark">
//{props.children}</a>
 //  )
//}
//Refatorando/ desistruturando
const Item = ({children}) => {
   return(<a href="/" className="list-group-item list-group-item-action list-group-item-dark">
   {children}</a>
     )
   }
export default Item;