import { Card } from "../../components/Card/Card";
import { useTitle } from "../../hooks/useTitle";

export const Home = () => {
  useTitle(`Home`);

  const products = [
    {id: 1000, name: `Sony wh-Ch510 Bluetooth Wireless`, imgSrc: `./assets/images/products/Sony wh-Ch510 Bluetooth Wireless.jpg`, price: 345},
    {id: 1001, name: `boAt Rockerz 450`, imgSrc: `./assets/images/products/boAt Rockerz 450.jpg`, price: 55},
    {id: 1002, name: `JBL Tune 760NC.jpg`, imgSrc: `./assets/images/products/Sony wh-Ch510 Bluetooth Wireless.jpg`, price: 299},
    {id: 1003, name: `JLab JBuds LUX ANC Smart Active Noise Cancelling Headphones - Over Ear Wireless Headphones with Microphone, 70+ H Playtime Foldable Bluetooth Earphones with Multipoint & Customisable Sound, Graphite`, imgSrc: `./assets/images/products/JLab JBuds LUX ANC Smart Active Noise Cancelling Headphones - Over Ear Wireless Headphones.jpg`, price: 58},
    {id: 1004, name: `boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)`, imgSrc: `./assets/images/products/boAt Bassheads 100 in Ear Wired Earphones with Mic(Black).jpg`, price: 3}
  ]

  return (
    <div className="home-wrapper">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap gap-x-16 gap-y-5">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}          
        </div>
      </div>
    </div>
  )
}
