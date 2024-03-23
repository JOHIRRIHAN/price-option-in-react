/* eslint-disable react/prop-types */

import Features from "../Features/Features";

// eslint-disable-next-line react/prop-types
const PriceOps = ({option}) => {
    // console.log(option)
    const {name, price , features} =option;
    return (
        <div className="text-5xl border-2 border-blue-200 rounded-2xl bg-blue-600 text-zinc-300 flex flex-col">
            <h2 className="font-semibold text-center py-5">{name}</h2>
            <h2 className="text-center">{price} <span className="text-xl">/mon</span></h2>
            <div className="py-5 px-10 flex-grow">
            {
                features.map((feature, idx) => <Features  feature={feature} key={idx}></Features> )
            }
            </div>
            <div className="flex items-center justify-center py-10">
            <button className="text-lg font-semibold rounded-lg bg-green-700 px-5 py-2 hover:bg-green-900">Buy Now</button>
            </div>
        </div>
    );
};

export default PriceOps;