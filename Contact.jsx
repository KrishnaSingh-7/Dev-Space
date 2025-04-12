import { Mail, MessageSquare, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className=" container mx-auto px-4 sm:px-7 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-indigo-600 sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            We'd love to hear from you. Drop us a line and we'll get back to you
            shortly.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative rounded-lg bg-gray-100 shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className=" px-4 py-2.5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" px-4 py-2.5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-gray-900">Email us</h4>
                <p className="mt-1 text-gray-600">krishnasingh07882@gmail.com.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-gray-900">Call us</h4>
                <p className="mt-1 text-gray-600">+91 8127731028</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-gray-900">Live chat</h4>
                <p className="mt-1 text-gray-600">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;