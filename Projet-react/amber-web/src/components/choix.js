import "./tableObject.js";

function Choix() {
  const Price1 = 10;
  const Price2 = 100;
  const Price3 = 1;

  return ( // si je clique sur le bouton "ajouter au panier", ça ajoute une ligne dans le panier avec le nom du cv et son prix
    <div className="affichage">
      <h2>Votre Panier</h2>
      <ul>
        <li>Thème CV 1 : {Price1} €</li>
        <li>Thème CV 2 : {Price2} €</li>
        <li>Thème CV 3 : {Price3} €</li>
      </ul>

      Total :{Price1 + Price2 + Price3}€
      
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
}
export default Choix;

  <a
    href="https://www.amazon.fr/gp/cart/view.html?ref_=nav_cart"
    aria-label="2&nbsp;articles dans le panier"
    class="nav-a nav-a-2 nav-progressive-attribute"
    id="nav-cart"
  >
    <div id="nav-cart-count-container">
      <span
        id="nav-cart-count"
        aria-hidden="true"
        class="nav-cart-count nav-cart-1 nav-progressive-attribute nav-progressive-content"
      >
        2
      </span>
      <span class="nav-cart-icon nav-sprite"></span>
    </div>
    <div id="nav-cart-text-container" class=" nav-progressive-attribute">
      <span aria-hidden="true" class="nav-line-1"></span>
      <span aria-hidden="true" class="nav-line-2">
        Panier
        <span class="nav-icon nav-arrow"></span>
      </span>
    </div>
  </a>;
