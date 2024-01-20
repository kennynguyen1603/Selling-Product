import "./App.css";
import image1 from "./assets/images/ipadPro.jpg";
import image2 from "./assets/images/headphone.jpg";
import image3 from "./assets/images/macbook-air.jpg";
import image4 from "./assets/images/nikon.jpg";
import Sellingproduct from "./companents/Sellingproduct";
import Heading from "./companents/Heading";
import TurningPages from "./companents/TurningPages";
function App() {
  const products1 = [
    {
      title: "Apple Ipad",
      src: image1,
      alt: "ipad",
      originalPrice: "$1000",
      price: "$369.00",
      rating: 4,
    },
    {
      title: "Sony Headphone",
      src: image2,
      alt: "headphone",
      originalPrice: "$500",
      price: "$23.99",
      rating: 4,
    },
    {
      title: "Macbook Air",
      src: image3,
      alt: "macbookPro",
      originalPrice: "$870",
      price: "$649.00",
      rating: 4.5,
    },
    {
      title: "Nikon DSLR",
      src: image4,
      alt: "nikon",
      originalPrice: "$400",
      price: "$250.00",
      rating: 3,
    },
  ];

  const products2 = [
    {
      title: "Sony Play Station",
      src: image1,
      alt: "ipad",
      originalPrice: "$1000",
      price: "$369.00",
      rating: 4,
    },
    {
      title: "Macbook Pro",
      src: image2,
      alt: "headphone",
      originalPrice: "$500",
      price: "$23.99",
      rating: 4,
    },
    {
      title: "Bose Speaker",
      src: image3,
      alt: "macbookPro",
      originalPrice: "$870",
      price: "$649.00",
      rating: 4.5,
    },
    {
      title: "Samsung Galaxy S8",
      src: image4,
      alt: "nikon",
      originalPrice: "$400",
      price: "$250.00",
      rating: 3,
    },
  ];

  const products3 = [
    {
      title: "Apple Ipad",
      src: image1,
      alt: "ipad",
      originalPrice: "$1000",
      price: "$369.00",
      rating: 4,
    },
    {
      title: "Sony Headphone",
      src: image2,
      alt: "headphone",
      originalPrice: "$500",
      price: "$23.99",
      rating: 4,
    },
    {
      title: "Macbook Air",
      src: image3,
      alt: "macbookPro",
      originalPrice: "$870",
      price: "$649.00",
      rating: 4.5,
    },
    {
      title: "Nikon DSLR",
      src: image4,
      alt: "nikon",
      originalPrice: "$400",
      price: "$250.00",
      rating: 3,
    },
  ];
  return (
    <>
      <div className="container">
        <div className="productContainer">
          <Heading title="Featured Products" />
          <TurningPages />
          <div className="itemRow">
            {products1.map((product, index) => {
              return (
                <Sellingproduct
                  src={product.src}
                  alt={product.alt}
                  key={index}
                  title={product.title}
                  originalPrice={product.originalPrice}
                  price={product.price}
                  rating={product.rating} // Truyền rating đến SellingProduct
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
