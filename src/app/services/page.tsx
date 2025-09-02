import { readFileSync } from 'fs';
import { join } from 'path';
import { TinaMarkdown } from "tinacms/dist/rich-text";

async function getServicesData() {
  const filePath = join(process.cwd(), 'content', 'pages', 'services.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

async function getGlobalData() {
  const filePath = join(process.cwd(), 'content', 'global', 'index.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function ServicesPage() {
  const page = await getServicesData();
  const globalData = await getGlobalData();
  const site = globalData.site;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-gray-900">
              {site.logoText}
            </div>
            <div className="hidden md:flex space-x-8">
              {site.navigation.links.map((link: any, index: number) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {page.hero.badge}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {page.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {page.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {page.serviceDetails.map((service: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {page.process.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {page.process.steps.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              {site.logoText}
            </div>
            <div className="text-gray-400">
              <TinaMarkdown content={site.footer.content} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}