import Feature from "../Feature/Feature";


const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="pt-4 bg-green-400 rounded p-4 text-black">
      <h2>
        <span className="text-4xl font-extrabold">{price}$</span>
        <span className="text-2xl">per month</span>
      </h2>
      <h4 className="2xl">{name}</h4>
      {
        features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
      }
    </div>
  );
};

export default PriceOption;
