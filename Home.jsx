import Card from "../components/Card";
import Products from "../components/Products";
const Home = () => {
const URL = "https://fakestoreapi.com/products";

fetch(URL)
.then((response)=>{
return response.json().then((data)=>{
  console.log(data);
});
})
.catch((error)=>{
console.log( error);
});



  return  <div><Products/></div>
  
};

export default Home;
