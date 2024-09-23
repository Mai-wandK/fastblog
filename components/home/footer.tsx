import React from 'react';
import { Github, Twitter, Linkedin, Mail, LucideIcon } from 'lucide-react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a href={href} className="text-gray-500 hover:text-purple-600 transition-colors duration-300">
    {children}
  </a>
);

interface SocialIconProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon, label }) => (
  <a href={href} className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
    <span className="sr-only">{label}</span>
    <Icon size={20} />
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">FastBlog</h2>
            <p className="text-gray-600 mb-4 text-sm">Convert your video or voice into a Blog Post in seconds with the power of AI!</p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={Github} label="Github" />
              <SocialIcon href="#" icon={Twitter} label="Twitter" />
              <SocialIcon href="#" icon={Linkedin} label="LinkedIn" />
              <SocialIcon href="#" icon={Mail} label="Email" />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-2">
              <li><FooterLink href="#">Features</FooterLink></li>
              <li><FooterLink href="#pricing">Pricing</FooterLink></li>
              <li><FooterLink href="#">How It Works</FooterLink></li>
              <li><FooterLink href="#">Testimonials</FooterLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li><FooterLink href="#">FAQ</FooterLink></li>
              <li><FooterLink href="#">Documentation</FooterLink></li>
              <li><FooterLink href="#">API Status</FooterLink></li>
              <li><FooterLink href="#">Contact</FooterLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><FooterLink href="#">About Us</FooterLink></li>
              <li><FooterLink href="#">Blog</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2024 ContentAI. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
