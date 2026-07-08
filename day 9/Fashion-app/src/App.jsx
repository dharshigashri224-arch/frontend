import "./App.css";
import Cart from "./pages/Cart";
import { useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaStar,
  FaUser,
  FaBars,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Royal Bridal Lehenga",
    price: 23999,
    rating: "5.0",
  category:"Bridal Gowns",
  description:"Luxurious silk bridal lehenga with intricate embroidery and premium zari work for a royal wedding look",
    image:
      "https://thfvnext.bing.com/th/id/R.933c5ce9dbf9e1e86877f9cc4cea474e?rik=VqVEFP7rIbpYDQ&riu=http%3a%2f%2fwww.fashionvibes.net%2fcdn%2fshop%2fcollections%2ffashionvibes-beautiful-pink-bridal-lehenga-15543219617841_1200x1200.jpg%3fv%3d1616522111&ehk=9v1f2ZWSALoUBJ5KJ2lIPDevW2c0AijSKcxxO2%2bRrRk%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    name: "Princess Wedding Gown",
    price: 15999,
    rating: "4.9",
    category:"Bridal Gowns",
    description:"Elegant princess-cut wedding gown with lace detailing and a flowing train.",
    image:
      "https://i.pinimg.com/736x/0f/1f/fa/0f1ffa87eb9d0dbd5984cc03d454ba33.jpg",
  },
  {
    id: 3,
    name: "Elegant Reception Dress",
    price: 20999,
    rating: "5.0",
    category:"Bridal Gowns",
    description:"Stylish reception gown with a modern silhouette and shimmering embellishments.",
    image:
      "https://i.pinimg.com/736x/42/70/ca/4270ca3f703c91edc2efe5a99ef3c891.jpg",
  },
  {
    id: 4,
    name: "Luxury Bridal Saree",
    price: 39999,
    rating: "4.8",
    category:"Sarees",
    description:"Premium Kanchipuram silk saree featuring rich gold zari weaving and traditional craftsmanship",
    image:
      "https://i.pinimg.com/originals/e3/00/76/e300765e61cc4d2d94d9cc126ca294cc.jpg",
  },
  {
    id: 5,
    name: "Temple collection Set",
    price: 7999,
    rating: "5.0",
    category:"Jewellery",
    description:"raditional temple jewellery set with antique gold finish, perfect for bridal wear.",
    image:
      "https://i.pinimg.com/736x/a3/7d/5d/a37d5d48ceebd1a1fdf144926e43ca83.jpg",
  },
  {
    id: 6,
    name: "Necklace",
    price: 6499,
    rating: "4.9",
    category:"Jewellery",
    description:"Elegant bridal necklace with sparkling stones and a timeless design.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.FJEHNurJrBsGvGQnY789SAHaHa?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
   
  {
    id: 7,
    name: " Muhurtham saree ",
    price: 25599,
    rating: "5.0",
    category:"Sarees",
    description:"Authentic silk muhurtham saree with vibrant colors and intricate zari borders.",
    image:
"https://i.pinimg.com/736x/c7/99/3a/c7993a9958c080c81f0e3a58fcdc4adc.jpg",
  },
  {
     id: 8,
    name: " Bride Heels ",
    price: 5599,
    rating: "4.7",
    category:"Slippers",
    description:"Comfortable bridal heels with crystal embellishments for weddings and receptions.",
    image:
"https://i.pinimg.com/736x/bd/cc/4e/bdcc4ebc273e00b3d3a637be6d769f80.jpg",
  },
  {
    id: 9,
    name: " Fancy Saree",
    price: 7899,
    rating: "5.0",
    category:"Sarees",
    description:"Designer saree with elegant embroidery, suitable for festive and wedding occasions.",
    image:
"https://i.pinimg.com/736x/b4/16/6d/b4166d40e8b7f0c8e2b19f8f6ddf734d.jpg",
  },
  {
    id: 10,
    name: "Bangles ",
    price: 4000,
    rating: "5.0",
    category:"Jewellery",
    description:"Traditional bridal bangles with gold-plated craftsmanship and intricate detailing.",
    image:
"https://i.pinimg.com/originals/03/ed/b2/03edb2e59c615c76853ccd25c99b636b.jpg"
   
  },
   {
    id: 11,
    name: " Braidsmaid Saree",
    price: 2999,
    rating: "5.0",
    category:"Sarees",
    description:"Graceful saree designed for bridesmaids, combining comfort with elegance",
    image:
"https://i.pinimg.com/originals/eb/98/b9/eb98b9b2cdfd5b4ba50c6a09421072c6.jpg",
  },
  
  {
     id: 12,
    name: " Bridal shoes",
    price: 8599,
    rating: "4.9",
    category:"Slippers",
    description:"Premium bridal shoes with cushioned comfort and luxurious embellishments.",
    image:
"https://www.weddingplz.com/blog/wp-content/uploads/86cbd60KL_YASSI00000323_1-1-1024x1004.jpg",
  },
   {
     id: 13,
    name: " Bridal Flats",
    price: 2699,
    rating: "4.9",
    category:"Slippers",
     description:"Stylish embellished bridal flats offering elegance and all-day comfort.",
    image:
"https://tse1.explicit.bing.net/th/id/OIP.618zqab6zbpensQlBAJH7QHaKh?cb=thfvnextfalcon4&pid=ImgDet&w=184&h=261&c=7&dpr=1.3&o=7&rm=3",
  },
  {
     id: 14,
    name: " Pink elegant Saree",
    price: 7699,
    rating: "4.9",
    category:"Sarees",
     description:"Designer saree with elegant embroidery, suitable for festive and wedding occasions.",
    image:"https://i.pinimg.com/736x/08/e3/b9/08e3b925d997ebb28f67728a5274b01e.jpg"
 
  
  },
  {
     id: 15,
    name: "Temple waist chain ",
    price: 1699,
    rating: "4.6",
    category:"Jewellery",
     description:"Elegant temple waist chain with an antique gold finish and traditional craftsmanship, perfect for bridal and festive wear.",
    image:
"https://cdn.joyalukkas.com/images/Bridal+Images/TAMIL/CLOSE+UP/Ta_CU_04.jpg",
  },
  {
     id: 16,
    name: "Anarkali High Work Stone Gown ",
    price: 30599,
    rating: "4.9",
    category:"Bridal Gowns",
     description:"Elegant Anarkali gown with intricate stone work, premium fabric, and a flowing silhouette. Perfect for weddings, receptions, and festive occasions.",
    image:"https://apiserver.seasonsindia.com/uploads/feature_images/116592A01.jpg"

  
  },
  {
     id: 17,
    name: "High Heels ",
    price: 4599,
    rating: "4.9",
    category:"Slippers",
     description:"Stylish high heels with a premium finish and cushioned comfort, perfect for bridal wear, parties, and festive occasions.",
    image:"https://s-media-cache-ak0.pinimg.com/736x/79/ef/72/79ef72dd515726e32d5815c1c89caaf0.jpg"

  
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
 
  // Notification State
  const [notification, setNotification] = useState("");
 const loginSuccess = () => {
  setNotification("Login Successfully ✅");

  setTimeout(() => {
    setNotification("");
    setPage("home");
  }, 2000);
};


  // Show Notification Function
  const showNotification = (message) => {
    setNotification(message);

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    showNotification(`${item.name} added to Cart 🛒`);
  };

  const removeCart = (id) => {
    setCart(cart.filter((item, index) => index !== id));
  };
  const total = cart.reduce(
  (sum, item) => sum + item.price,
  0
);

  const toggleWishlist = (item) => {
    const exist = wishlist.find((x) => x.id === item.id);

    if (exist) {
      setWishlist(wishlist.filter((x) => x.id !== item.id));
      showNotification(`${item.name} removed from Wishlist 💔`);
    } else {
      setWishlist([...wishlist, item]);
      showNotification(`${item.name} added to Wishlist ❤️`);
    }
  };
const filteredProducts = products.filter((item) => {

  const matchSearch = item.name
    .trim()
    .toLowerCase()
    .includes(search.trim().toLowerCase());

  const matchCategory =
    selectedCategory === "All" ||
    item.category === selectedCategory;

  const matchPrice =
    priceFilter === "All" ||
    (priceFilter === "low" && item.price < 10000) ||
    (priceFilter === "medium" && item.price >= 10000 && item.price <= 25000) ||
    (priceFilter === "high" && item.price > 25000);

  return matchSearch && matchCategory && matchPrice;
});
  return (
    <div className="app">
      {notification && (
  <div className="toast">
    {notification}
  </div>
)}
      {/* Navbar */}

      <nav className="navbar">
        <h1>Vivaha Vastram</h1>

        <ul>
          <li onClick={() => setPage("home")}>Home</li>

          <li onClick={() => setPage("shop")}>Shop</li>

          

          <li onClick={() => setPage("contact")}>Contact</li>
        </ul>

        <div className="icons">
          <div className="search-box">
            <FaSearch />

            <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setPage("shop");
  }}
/>
          </div>

          <FaHeart
            onClick={() => setPage("wishlist")}
            style={{ cursor: "pointer" }}
          />

          <FaShoppingCart
            onClick={() => setPage("cart")}
            style={{ cursor: "pointer" }}
          />

          <FaUser
  onClick={() => setPage("login")}
  style={{cursor:"pointer"}}
/>

          <FaBars className="menu" />
        </div>
      </nav>
            {/* HOME PAGE */}
      {page === "home" && (
        <>
          {/* Hero Section */}
          <section className="hero">
            <div className="overlay">
              <h3>Luxury Bridal Collection</h3>

              <h3>Your Fairytale Begins Here</h3>

              <p>
                Every sparkle reflects your joy,
                 every stitch celebrates your love
              </p>

              <button onClick={() => setPage("shop")}>
                Shop Collection
              </button>
            </div>
          </section>

          {/* Categories */}
          <section className="categories">
  <h2>Shop by Category</h2>

  <div className="category-grid">

    <div
      className={`category-card ${
        selectedCategory === "All" ? "active" : ""
      }`}
      onClick={() => setSelectedCategory("All")}
    >
      All
    </div>

    <div
      className={`category-card ${
        selectedCategory === "Bridal Gowns" ? "active" : ""
      }`}
      onClick={() => setSelectedCategory("Bridal Gowns")}
    >
      Bridal Gowns
    </div>

    <div
      className={`category-card ${
        selectedCategory === "Jewellery" ? "active" : ""
      }`}
      onClick={() => setSelectedCategory("Jewellery")}
    >
      Jewellery
    </div>

    <div
      className={`category-card ${
        selectedCategory === "Slippers" ? "active" : ""
      }`}
      onClick={() => setSelectedCategory("Slippers")}
    >
      Slippers
    </div>

    <div
      className={`category-card ${
        selectedCategory === "Sarees" ? "active" : ""
      }`}
      onClick={() => setSelectedCategory("Sarees")}
    >
      Sarees
    </div>

  </div>
</section>

          {/* Featured Products */}
          <section className="products">
            <h2>Featured Collection</h2>

            <div className="product-grid">
              {filteredProducts.map((item) => (
                <div
  className="card"
  key={item.id}
  onClick={() => {
    setSelectedProduct(item);
    setPage("details");
  }}
>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="card-content">
                    <h3>{item.name}</h3>

                    <p>₹{item.price.toLocaleString()}</p>

                    <div className="rating">
                      <FaStar /> {item.rating}
                    </div>

                    <div className="buttons">
                      <button
  onClick={(e) => {
    e.stopPropagation();
    addToCart(item);
  }}
>
                        Add to Cart
                      </button>
<button
  className="wish"
  onClick={(e) => {
    e.stopPropagation();
    toggleWishlist(item);
  }}
>
  <FaHeart />
</button>
                  
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Offer */}
          <section className="offer">
            <h2>✨ Exclusive Bridal Sale ✨</h2>

            <p>
              Flat 30% OFF on Premium Wedding
              Collections
            </p>

            <button
              onClick={() => setPage("shop")}
            >
              Shop Now
            </button>
          </section>

          {/* Reviews */}
          <section className="reviews">
            <h2>Happy Brides</h2>

            <div className="review-grid">
              <div className="review">
                ⭐⭐⭐⭐⭐

                <p>
                  "The gown was absolutely stunning
                  and made my wedding day
                  unforgettable."
                </p>

                <h4>- Priya</h4>
              </div>

              <div className="review">
                ⭐⭐⭐⭐⭐

                <p>
                  "Excellent quality, beautiful
                  designs and amazing customer
                  service."
                </p>

                <h4>- Ananya</h4>
              </div>

              <div className="review">
                ⭐⭐⭐⭐⭐

                <p>
                  "Elegant collection with premium
                  fabrics. Highly recommended!"
                </p>

                <h4>- Meera</h4>
              </div>
            </div>
          </section>
        </>
      )}
            {/* SHOP PAGE */}
      {page === "shop" && (
        <section className="products">
          <h2>Our Bridal Collection</h2>
          <select
  onChange={(e) => setPriceFilter(e.target.value)}
>
  <option value="All">All Prices</option>
  <option value="low">Below ₹10,000</option>
  <option value="medium">₹10,000 - ₹25,000</option>
  <option value="high">Above ₹25,000</option>
</select>

          <div className="product-grid">
            {filteredProducts.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="card-content">
                  <h3>{item.name}</h3>

                  <p>₹{item.price.toLocaleString()}</p>

                  <div className="rating">
                    <FaStar /> {item.rating}
                  </div>

                  <div className="buttons">
                    <button onClick={() => addToCart(item)}>
                      Add to Cart
                    </button>

                    <button
                      className="wish"
                      onClick={() => toggleWishlist(item)}
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
{page === "login" && (
  <section className="login-page">
    <h2>Login</h2>

    <input
      type="email"
      placeholder="Email"
    />

    <input
      type="password"
      placeholder="Password"
    />

   <button onClick={loginSuccess}>
  Login
</button>
  </section>
)}
{page === "details" && selectedProduct && (
  <section className="details-page">

    <img
      src={selectedProduct.image}
      alt={selectedProduct.name}
      className="details-img"
    />

    <div className="details-info">

      <h2>{selectedProduct.name}</h2>

      <h3>₹{selectedProduct.price.toLocaleString()}</h3>

      <p>
        <strong>Category:</strong> {selectedProduct.category}
      </p>

      <p>
        ⭐ {selectedProduct.rating} Rating
      </p>

      <p>{selectedProduct.description}</p>

      <button
        onClick={() => addToCart(selectedProduct)}
      >
        Add to Cart
      </button>

      <button
        onClick={() => setPage("shop")}
        style={{ marginLeft: "10px" }}
      >
        Back
      </button>

    </div>

  </section>
)}

      {/* CONTACT PAGE */}
      {page === "contact" && (
        <section className="newsletter">
          <h2>Contact Us</h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button>Send Message</button>
        </section>
      )}

      {/* NEWSLETTER */}
      <section className="newsletter">
        <h2>Subscribe for Bridal Updates</h2>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>Subscribe</button>
      </section>
      <footer>
        <h2>Vivaha Vastram</h2>

        <p>
          Luxury Bridal Fashion | Wedding Dresses |
          Lehengas | Jewellery
        </p>

        <p>
          © 2026 Vivaha Vastram.
          All Rights Reserved.
        </p>
      </footer>
          {/* CART PAGE */}
{page === "cart" && (
  <Cart
    cart={cart}
    removeFromCart={removeCart}
    total={total}
    setPage={setPage}
  />
)}
{/* ORDER PAGE */}
{page === "order" && (
  <section className="order-page">

    <h1>🎉 Order Confirmation</h1>

    <p>Thank you for shopping with Vivaha Vastram.</p>

    <h3>Total Amount: ₹{total.toLocaleString()}</h3>

    <button
      onClick={() => {
        alert("Order Placed Successfully! ❤️");
        setCart([]);      // Clears the cart
        setPage("home");  // Returns to Home
      }}
    >
      Place Order
    </button>

  </section>
)}

      {/* WISHLIST PAGE */}
      {page === "wishlist" && (
        <section className="products">
          <h2>❤️ Wishlist</h2>

          {wishlist.length === 0 ? (
            <h3>Your wishlist is empty.</h3>
          ) : (
            <div className="product-grid">
              {wishlist.map((item) => (
                <div className="card" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="card-content">
                    <h3>{item.name}</h3>

                    <p>₹{item.price.toLocaleString()}</p>

                    <div className="rating">
                      <FaStar /> {item.rating}
                    </div>
<div className="buttons">
  <button onClick={() => addToCart(item)}>
    Add to Cart
  </button>

  <button
    onClick={() => {
      setSelectedProduct(item);
      setPage("details");
    }}
  >
    View Product
  </button>

  <button
    className="wish"
    onClick={() => toggleWishlist(item)}
  >
    <FaHeart />
  </button>
</div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}

export default App;