import PriceOps from "../PriceOps/PriceOps";

const PriceOption = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      features: [
        { name: "Access to premium features" },
        { name: "Priority customerDedicated account  support" },
        { name: "Dedicated account Dedicated account  manager" }
        
      ],
      price: 9.99,
    },
    {
      id: 2,
      name: "Standard",
      features: [
        { name: "Access to premium features" },
        { name: "Priority customer support" },
        { name: "Dedicated account manager" },
        { name: "Personalized onboarding sessions" },
        { name: "Integration with third-party apps" }
      ],
  
      price: 19.99,
    },
    {
      id: 3,
      name: "Premium",
      features: [
        { name: "Access to standard features" },
        { name: "Priority customer support" },
        { name: "Advanced analytics dashboard" },
        { name: "Customizable templates" }
      ],
      price: 29.99,
    },
  ];

  return (
    <div className="">
      <h2 className="text-5xl text-center py-10">Best Prices In the town</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {priceOptions.map((option) => (
          <PriceOps option={option} key={option.id}></PriceOps>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
