import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-gray-200 bg-white relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`text-gray-900 hover:text-gray-700 font-medium ${
                isActive("/") ? "border-b-2 border-gray-300 pb-1" : ""
              }`}
            >
              Home
            </a>
            <a
              href="/about"
              className={`text-gray-900 hover:text-gray-700 font-medium ${
                isActive("/about") ? "border-b-2 border-gray-300 pb-1" : ""
              }`}
            >
              About
            </a>
            <a
              href="/demo"
              className={`text-gray-900 hover:text-gray-700 font-medium ${
                isActive("/demo") ? "border-b-2 border-gray-300 pb-1" : ""
              }`}
            >
              Demo
            </a>
            <a
              href="/partners"
              className={`font-medium ${
                isActive("/partners")
                  ? "bg-black text-white px-6 py-1 border-b-2 border-black pb-1"
                  : "bg-black text-white px-6 py-1"
              }`}
            >
              Partners
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <span className="text-gray-900 font-medium">Help | EN</span>
            <Button
              variant="outline"
              className="bg-white border-gray-300 font-medium"
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <a
                href="/"
                className={`block py-2 text-gray-900 hover:text-gray-700 font-medium ${
                  isActive("/") ? "border-l-2 border-gray-300 pl-2" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className={`block py-2 text-gray-900 hover:text-gray-700 font-medium ${
                  isActive("/about") ? "border-l-2 border-gray-300 pl-2" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/demo"
                className={`block py-2 text-gray-900 hover:text-gray-700 font-medium ${
                  isActive("/demo") ? "border-l-2 border-gray-300 pl-2" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </a>
              <a
                href="/partners"
                className={`block py-2 font-medium ${
                  isActive("/partners")
                    ? "bg-black text-white px-4 -mx-4"
                    : "bg-black text-white px-4 -mx-4"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partners
              </a>
              <div className="pt-2 border-t border-gray-200 mt-2">
                <span className="block py-2 text-gray-900 font-medium">
                  Help | EN
                </span>
                <Button
                  variant="outline"
                  className="w-full bg-white border-gray-300 font-medium"
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
