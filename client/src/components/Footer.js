import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-yellow-950/95 text-orange-100 py-12 mt-auto border-t-4 border-orange-300">
      <div className="max-w-4xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-4 text-orange-300">Contact Us</h4>
            <ul className="space-y-2">
              <li className="hover:text-orange-300 transition-colors">
                <a href="mailto:contact@mikeninnes.com">contact@mikeninnes.com</a>
              </li>
              <li className="hover:text-orange-300 transition-colors">
                <a href="tel:+1234567890">(123) 456-7890</a>
              </li>
              <li>Washington, USA</li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-4 text-orange-300">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-orange-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-orange-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-orange-300 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-4 text-orange-300">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://facebook.com/mikeninnes" className="hover:text-orange-300 transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/mikeninnes" className="hover:text-orange-300 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com/mikeninnes" className="hover:text-orange-300 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-orange-300/30 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mike Ninnes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
