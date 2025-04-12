import { Check } from "lucide-react";
import React from "react";

const plans = [
  {
    name: "Starter",
    price: "0",
    features: [
      "Up to 5 team members",
      "5GB storage",
      "Basic support",
      "Basic analytics",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "49",
    features: [
      "Up to 20 team members",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "API access",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "99",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "24/7 support",
      "Advanced analytics",
      "Custom domains",
      "API access",
      "Custom integrations",
      "SLA guarantee",
    ],
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 bg-white">
      <div className=" container mx-auto px-4 sm:px-7 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-indigo-600 sm:text-4xl">
            Simple , transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose the plan that's right for your team
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              featured={plan.featured}
              features={plan.features}
              name={plan.name}
              price={plan.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const PricingCard = ({ name, price, features, featured }) => {
  return (
    <div
      className={`rounded-lg shadow-lg overflow-hidden ${
        featured ? "ring-2 ring-indigo-600 transform scale-105" : ""
      }`}
    >
      <div className="px-6 py-8 bg-white">
        <h3 className="text-2xl font-bold text-center text-gray-900">{name}</h3>
        <div className="mt-4 flex justify-center">
          <span className="text-5xl font-extrabold">{price}</span>
          <span className="ml-2 text-xl font-medium text-gray-500 self-end">
            /month
          </span>
        </div>
        <ul className="mt-8 space-y-4">
            {features.map((feature)=>(
                <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500"/>
                        <span className="ml-3 text-gray-600">{feature}</span>
                </li>
            ))}
        </ul>
        <button
        className={`mt-8 w-full py-3 px-6 rounded-md font-semibold ${
            featured ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }transition-colors `}
        >
                Get Started
        </button>
      </div>
    </div>
  );
};