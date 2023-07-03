import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nvbar from "./components/Nvbar";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";

const Navobj = {
  img: "https://img.freepik.com/vecteurs-premium/creation-logo-ligne-shopping_15713-10.jpg",
  liste1: "Categories",
  logo1:
    "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
  liste2: "Account",
  logo2:
    "https://media.istockphoto.com/id/1079804618/vector/shopping-cart-black-icon-on-white-background-vector-illustration-for-website-mobile.jpg?s=612x612&w=0&k=20&c=JSrnFX65zYzQi8EZ3gbcQzNprEcMHK8z5t7kdnTWHQY=",
  liste3: "Cart",
};
const carouss = {
  imag1:
    "https://www.humanite.fr/sites/default/files/styles/1200x675_full/public/images/nutella-emeute-intermarche.jpg?itok=zqiAJ0ia",
  imag2: "https://pointsdevente.fr/wp-content/uploads/2016/03/carrefour_02.jpg",
  imag3: "https://www.lsa-conso.fr/mediatheque/4/8/7/000576784_896x598_c.jpg",
};

const shopcard = [
  {
    phot: "https://courses.monoprix.tn/lac/130948-large_default/c%C3%A9r%C3%A9ales-bl%C3%A9.jpg",
    title1: "Céréale",
    title2: "GRAIN D'OR",
    title3: "900GR - Cacao",
    ancprix: "11990 DT",
    promoprix: "8590 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/130949-large_default/c%C3%A9r%C3%A9ales-bl%C3%A9.jpg",
    title1: "Céréale",
    title2: "GRAIN D'OR",
    title3: "900GR - Miel",
    ancprix: "11990 DT",
    promoprix: "8590 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/129384-large_default/gaufrettes.jpg",
    title1: "Gaufrette",
    title2: "SWING",
    title3: "18GR - Chocolat",
    ancprix: "0.380 DT",
    promoprix: "0.310 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/152850-large_default/gaufrettes.jpg",
    title1: "Gaufrette",
    title2: "GAUCHO",
    title3: "16.5GR - Chocolat",
    ancprix: "0.380 DT",
    promoprix: "0.310 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/129385-large_default/chocolat.jpg",
    title1: "Chocolat fourré",
    title2: "KROSS",
    title3: "14GR - cacao",
    ancprix: "0.390 DT",
    promoprix: "0.320 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/129387-large_default/chocolat.jpg",
    title1: "Chocolat fourré",
    title2: "KROSS",
    title3: "14GR - Fraise",
    ancprix: "0.390 DT",
    promoprix: "0.320 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/129386-large_default/chocolat.jpg",
    title1: "Chocolat fourré",
    title2: "KROSS",
    title3: "14GR - Lait",
    ancprix: "0.390 DT",
    promoprix: "0.320 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/130512-large_default/chocolat-fourr%C3%A9.jpg",
    title1: "Chocolat fourré",
    title2: "KROSS",
    title3: "14GR - Banane",
    ancprix: "0.390 DT",
    promoprix: "0.320 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/155831-large_default/glace.jpg",
    title1: "Glace",
    title2: "BOULES D'OR",
    title3: "1L - Twin chocolat vanille",
    ancprix: "14490 DT",
    promoprix: "9990 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/129165-large_default/glace.jpg",
    title1: "Glace",
    title2: "BOULE D'OR TWIN",
    title3: "1L",
    ancprix: "14490 DT",
    promoprix: "9990 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/129277-large_default/yaourt-brass%C3%A9.jpg",
    title1: "Yaourt brassé",
    title2: "NATILAIT",
    title3: "70GR - Fraise",
    ancprix: "0.460 DT",
    promoprix: "0.380 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/129276-large_default/yaourt-brass%C3%A9.jpg",
    title1: "Yaourt brassé",
    title2: "NATILAIT",
    title3: "70GR - Vanille",
    ancprix: "0.460 DT",
    promoprix: "0.380 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/155991-large_default/eau-min%C3%A9rale.jpg",
    title1: "Eau minérale",
    title2: "SAFIA",
    title3: "0.5L",
    ancprix: "0.480 DT",
    promoprix: "0.440 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/129038-large_default/eau-min%C3%A9rale.jpg",
    title1: "Eau minérale",
    title2: "MARWA",
    title3: "1.5L",
    ancprix: "0.690 DT",
    promoprix: "0.660 DT",
  },
  {
    phot: "https://courses.monoprix.tn/lac/129789-large_default/eau-min%C3%A9rale.jpg",
    title1: "Eau minérale",
    title2: "Mira",
    title3: "1.5L",
    ancprix: "0.720 DT",
    promoprix: "0.680 DT",
  },
];

const products = () => alert(`this product is added to the card`);

function App() {
  return (
    <div className="App">
      <Nvbar Navobj={Navobj} />
      <Comp1 carouss={carouss} />
      <Comp2 shopcard={shopcard} products={products} />
    </div>
  );
}

export default App;
