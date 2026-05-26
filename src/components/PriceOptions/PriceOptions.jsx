import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const PriceOptions = [
    {
      id: 1,
      name: "Basic Pass",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free Wi-Fi",
        "Standard cardio area",
      ],
    },
    {
      id: 2,
      name: "Standard Monthly",
      price: 49.99,
      features: [
        "Everything in Basic Pass",
        "Unlimited group classes",
        "Access to sauna and steam room",
        "Guest pass (1 per month)",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "Everything in Standard Monthly",
        "Personalized training plan",
        "24/7 priority access",
        "Free towel service",
        "Discounted smoothie bar",
      ],
    },
    {
      id: 4,
      name: "Elite Athlete",
      price: 129.99,
      features: [
        "Everything in Premium Membership",
        "4 personal training sessions per month",
        "Body composition scanning",
        "Unlimited guest passes",
        "Access to all global locations",
      ],
    },
    {
      id: 5,
      name: "Day Pass",
      price: 10.0,
      features: [
        "Single-day facility access",
        "Access to all standard equipment",
        "No long-term contract",
        "On-site shower access",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-center text-5xl mt-36">Best Prices in the Town</h2>
      <div className="md:grid grid-cols-3 gap-6 mt-8">
        {PriceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
