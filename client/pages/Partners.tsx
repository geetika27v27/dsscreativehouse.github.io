import { Navigation } from "@/components/Navigation";

export default function Partners() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Our Partners
          </h1>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              This page is currently under development. Please continue
              prompting to help us build out the partners section.
            </p>
            <p>
              Discover the organizations and companies that make SmritiLok
              possible through their collaboration and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
