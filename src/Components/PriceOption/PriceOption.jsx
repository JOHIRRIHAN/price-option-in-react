import PriceOps from "../PriceOps/PriceOps";

const PriceOption = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      features: [
        { name: "Access to premium features" },
        { name: "Priority customer support" },
        { name: "Dedicated account manager" }
      ],
      price: 9.99,
    },
    {
      id: 2,
      name: "Standard",
      features: [
        { name: "Access to standard features" },
        { name: "Priority customer support" }
      ],
      price: 19.99,
    },
    {
      id: 3,
      name: "Premium",
      features: [
        { name: "Access to basic features" },
        { name: "Limited customer support" }
      ],
      price: 29.99,
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Prices In the town</h2>
      <div className="grid grid-cols-3 gap-6 px-10">
        {priceOptions.map((option) => (
          <PriceOps option={option} key={option.id}></PriceOps>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
