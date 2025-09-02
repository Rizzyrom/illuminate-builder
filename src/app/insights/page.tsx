import { readFileSync } from 'fs';
import { join } from 'path';
import { TinaMarkdown } from "tinacms/dist/rich-text";

async function getInsightsData() {
  const filePath = join(process.cwd(), 'content', 'pages', 'insights.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

async function getGlobalData() {
  const filePath = join(process.cwd(), 'content', 'global', 'index.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function InsightsPage() {
  const page = await getInsightsData();
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

      {/* Featured Insight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="max-w-4xl">
              <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Featured • {page.featuredInsight.category}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                {page.featuredInsight.title}
              </h2>
              <p className="text-blue-100 text-lg mb-6">
                {page.featuredInsight.excerpt}
              </p>
              <div className="flex items-center space-x-6 text-blue-200 text-sm">
                <span>{page.featuredInsight.readTime}</span>
                <span>•</span>
                <span>{page.featuredInsight.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {page.insights.map((insight: any, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    {insight.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{insight.readTime}</span>
                    <span>{insight.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {insight.tags.map((tag: string, tagIndex: number) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {page.categories.map((category: string, index: number) => (
              <button
                key={index}
                className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-full transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {page.newsletter.title}
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              {page.newsletter.description}
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder={page.newsletter.placeholder}
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {page.newsletter.buttonText}
              </button>
            </div>
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