import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <SocialLink href="#" icon={Twitter} />
          <SocialLink href="#" icon={Github} />
          <SocialLink href="#" icon={Linkedin} />
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} DevSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon: Icon,
}) => (
  <a
    href={href}
    className="text-gray-400 hover:text-gray-500 transition-colors"
  >
    <Icon className="h-6 w-6" />
  </a>
);