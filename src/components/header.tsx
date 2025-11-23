import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { PageType } from "../App";

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigation("home")}>
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white">KC</span>
            </div>
            <span className="text-xl text-gray-900">
              Oclean
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation("home")}
              className={`transition-colors ${
                currentPage === "home" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("house-cleaning")}
              className={`transition-colors ${
                currentPage === "house-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              House Cleaning
            </button>
            <button
              onClick={() => handleNavigation("condo-cleaning")}
              className={`transition-colors ${
                currentPage === "condo-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Condo Cleaning
            </button>
            <button
              onClick={() => handleNavigation("move-out-cleaning")}
              className={`transition-colors ${
                currentPage === "move-out-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Move Out Cleaning
            </button>
            <button
              onClick={() => handleNavigation("commercial-cleaning")}
              className={`transition-colors ${
                currentPage === "commercial-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Commercial Cleaning
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => handleNavigation("home")}
                className={`text-left transition-colors ${
                  currentPage === "home" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("house-cleaning")}
                className={`text-left transition-colors ${
                  currentPage === "house-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                House Cleaning
              </button>
              <button
                onClick={() => handleNavigation("condo-cleaning")}
                className={`text-left transition-colors ${
                  currentPage === "condo-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Condo Cleaning
              </button>
              <button
                onClick={() => handleNavigation("move-out-cleaning")}
                className={`text-left transition-colors ${
                  currentPage === "move-out-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Move Out Cleaning
              </button>
              <button
                onClick={() => handleNavigation("commercial-cleaning")}
                className={`text-left transition-colors ${
                  currentPage === "commercial-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Commercial Cleaning
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}