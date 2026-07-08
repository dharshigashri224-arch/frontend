import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import ProductCard from "../components/ProductCard/ProductCard";
import products from "../assets/data/products";

function Home() {

  return (

    <>

      <Navbar/>

      <Hero/>

      <section className="featured-products">

        <h2>

          Featured Collection

        </h2>

        <div className="products-grid">

          {

            products.map(product=>

              <ProductCard
                key={product.id}
                product={product}
              />

            )

          }

        </div>

      </section>

    </>

  );

}

export default Home;