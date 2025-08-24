import { Navigation } from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About SmritiLok
          </h1>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              This page is currently under development. Please continue
              prompting to help us build out the content for this section.
            </p>
            <p>
              SmritiLok is a platform dedicated to creating, storing, and
              sharing our most precious memories in innovative ways.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
