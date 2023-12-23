import NewProduct from "../components/newProduct";
import Products from "../components/products";

function Home() {
  return (
    <div className="w-full h-auto flex flex-col items-center p-10">
      <div className="relative w-[70%] flex flex-col items-end">
        <NewProduct />
        <Products />
      </div>
    </div>
  );
}

export default Home;
