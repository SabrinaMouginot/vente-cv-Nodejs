import cv1 from "../assets/cv1.png";
import cv2 from "../assets/cv2.png";
import cv3 from "../assets/cv3.png";
import "./tableObject.css";

let objetsList = [
  { name: " cv1 ", description: " curriculum vitae1 ", price: " 10.50€ ", image: cv1,},
  { name: " cv2 ", description: " curriculum vitae2 ", price: " 11.75€ ", image: cv2,},
  { name: " cv3 ", description: " curriculum vitae3 ", price: " 11.25€ ", image: cv3,},
];


export default function objetsListfun() {
  function handleClick(cequejeveux) {
    alert(cequejeveux);
  }
  return (
    <ul class="liste">
      {objetsList.map(({ name, description, price, image }) => (
        <ul>
          <li> {name} </li>
          <li> {price} </li>
          <img src={image} class="imageCv" />
          {/* < href={description} */}
          {/* <li> {description} </li> */}
          <button onClick={() => handleClick(description)}>DESCRIPTION</button>
          <button onClick={() => handleClick(name)}>Ajouter au panier</button>
          <br></br>
          <br></br>
          <br></br>
        </ul>
      ))}
    </ul>
  );
}
      {/* si je clique sur le bouton "ajouter au panier", ça ajoute une ligne dans le panier avec le nom du cv et son prix */}
      {/* <div className="affichage">
        <h2>Votre Panier</h2>
        function panier(){
          let result;
        if (onclick){
          result = '{ name }, { price }'
        } else{
          result = ''
        } return result;
        } */}
     {/* </div> */}
     

   