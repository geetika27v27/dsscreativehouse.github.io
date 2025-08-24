import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Split Navigation - Aligns with page backgrounds */}
      <nav className="w-full absolute top-0 z-20 flex">
        {/* Left Navigation - White Background */}
        <div className="w-1/2 bg-white py-4 px-8">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <a href="/" className="hover:text-gray-600 text-black">
              Home
            </a>
            <span className="text-black">|</span>
            <a href="/about" className="hover:text-gray-600 text-black">
              About
            </a>
            <span className="text-black">|</span>
            <a href="/demo" className="hover:text-gray-600 text-black">
              Demo
            </a>
          </div>
        </div>

        {/* Right Navigation - Black Background */}
        <div className="w-1/2 bg-black py-4 px-8">
          <div className="flex items-center justify-center space-x-8 text-sm">
            <a href="/partners" className="hover:text-gray-300 text-white">
              Partners
            </a>
            <span className="text-white">|</span>
            <a href="/help" className="hover:text-gray-300 text-white">
              Help|EN
            </a>
            <span className="text-white">|</span>
            <a href="/signin" className="hover:text-gray-300 text-white">
              Sign In
            </a>
          </div>
        </div>
      </nav>

      {/* Horizontal Divider Line */}
      <div className="w-full absolute top-11 z-15 flex">
        <div className="w-1/2 h-0.5 bg-black"></div>
        <div className="w-1/2 h-0.5 bg-white"></div>
      </div>

      {/* Centered Logo - Spans both halves */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-center flex flex-col">
          <img
            src="https://cdn.builder.io/o/assets%2F6bff267cf158491cbf1e86b74a9b9379%2F4441506cc79f478e886c9e7884679772?alt=media&token=d540e6b1-6705-43be-94d3-d15af6d42ccb&apiKey=6bff267cf158491cbf1e86b74a9b9379"
            alt="SmritiLok Logo"
            className="h-15 mb-4 mx-auto ml-1.5"
          />
          <p className="text-gray-600">
            A place to Create, Store, and Share our memories
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex pt-12">
        {/* Left Half - White */}
        <div className="w-1/2 bg-white flex flex-col">
          {/* Left Content - Private Memories */}
          <div className="flex-1 flex flex-col justify-center px-8 pt-16 pb-9">
            <h2 className="text-2xl font-bold text-black text-center mb-8">
              Private Memories
            </h2>

            <div className="flex items-center w-full">
              {/* Buttons on left */}
              <div className="flex flex-col space-y-4">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 min-w-[150px]">
                  Chat
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 min-w-[150px]">
                  Calendar Journal
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 min-w-[150px]">
                  Files
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 min-w-[150px]">
                  Maps
                </Button>
              </div>

              {/* Human image positioned exactly at center line */}
              <div className="flex-shrink-0 flex items-center justify-end w-1/2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6bff267cf158491cbf1e86b74a9b9379%2F3e296fb73ca8440c955dbbeb1aa3532f?format=webp&width=800"
                  alt="Human Face"
                  className="w-48 h-48 object-cover object-center -mr-[170px]"
                />
              </div>
            </div>
          </div>

          {/* Left Footer - Empty */}
          <footer className="py-4 px-8">
            <div className="flex justify-end space-x-4">
              {/* No social icons on white side */}
            </div>
          </footer>
        </div>

        {/* Right Half - Black */}
        <div className="w-1/2 bg-black flex flex-col">
          {/* Right Content - Public Memories */}
          <div className="flex-1 flex flex-col justify-center px-8 pt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Public Memories
            </h2>

            <div className="flex items-center">
              {/* World image positioned exactly at center line */}
              <div className="flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F6bff267cf158491cbf1e86b74a9b9379%2F827625d723c5448c8b38602df1dcb5cd?format=webp&width=800"
                  alt="World Image"
                  className="w-48 h-48 object-cover object-center -ml-[32px]"
                />
              </div>

              {/* Buttons on right */}
              <div className="flex flex-col space-y-4 ml-auto pr-8">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 min-w-[150px]">
                  AI Avatar
                </Button>
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 min-w-[150px]">
                  Shared Memories
                </Button>
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 min-w-[150px]">
                  Memory Wall
                </Button>
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 min-w-[150px]">
                  Biography
                </Button>
              </div>
            </div>
          </div>

          {/* Right Footer - All Social Icons */}
          <footer className="py-4 px-8">
            <div className="flex justify-end space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-gray-300 p-2"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-gray-300 p-2"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-gray-300 p-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-gray-300 p-2"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-white hover:text-gray-300 p-2"
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
