import { readFileSync } from 'fs';
import { join } from 'path';
import { TinaMarkdown } from "tinacms/dist/rich-text";

async function getStrategyData() {
  const filePath = join(process.cwd(), 'content', 'pages', 'strategy.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

async function getGlobalData() {
  const filePath = join(process.cwd(), 'content', 'global', 'index.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function StrategyPage() {
  const page = await getStrategyData();
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

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {page.methodology.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {page.methodology.description}
            </p>
          </div>
          
          <div className="grid gap-8">
            {page.methodology.phases.map((phase: any, index: number) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600">
                      {phase.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Key Activities:
                    </h4>
                    <ul className="space-y-3">
                      {phase.activities.map((activity: string, activityIndex: number) => (
                        <li key={activityIndex} className="flex items-start text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {activity}
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

      {/* Frameworks Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {page.frameworks.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {page.frameworks.list.map((framework: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {framework.name}
                </h3>
                <p className="text-gray-600">
                  {framework.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {page.principles.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.principles.list.map((principle: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
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