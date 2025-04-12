import { Star } from "lucide-react";
import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "DevSpace has transformed how we build applications. The development speed and quality have improved significantly.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer at StartupX",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "The tools and features provided are exactly what modern development teams need. Highly recommended!",
  },
  {
    name: "Emily Rodriguez",
    role: "Frontend Developer at DesignCo",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "The attention to detail and user experience is outstanding. Our team productivity has never been better.",
  },
  
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-indigo-600 sm:text-4xl lg:text-5xl">
            Trusted by developers worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what our users have to say about their experience with
            DevSpace
          </p>
        </div>

        <div className=" grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              quote={testimonial.quote}
              role={testimonial.role}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const Card = ({ name, role, image, quote , index }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center mb-6">
          <img
            src={image}
            alt={name}
            className="h-14 w-14 rounded-full object-cover border-2 border-indigo-500"
          />
          <div className="ml-4">
            <h4 className="text-lg font-bold text-gray-900">{name}</h4>
            <p className="text-sm text-indigo-600">{role}</p>
          </div>
        </div>
        <div className="flex text-yellow-500 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 italic flex-grow">"{quote}"</p>
        <div className="mt-6 flex justify-end">

          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-500 font-semib
           text-lg">
            {index + 1}
          </span>
        </div>
      </div>
    </div>
  );
};