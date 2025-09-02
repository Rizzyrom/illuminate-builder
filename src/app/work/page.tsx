import { readFileSync } from 'fs';
import { join } from 'path';
import { TinaMarkdown } from "tinacms/dist/rich-text";

async function getWorkData() {
  const filePath = join(process.cwd(), 'content', 'pages', 'work.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

async function getGlobalData() {
  const filePath = join(process.cwd(), 'content', 'global', 'index.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function WorkPage() {
  const page = await getWorkData();
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {page.stats.map((stat: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Case Studies
            </h2>
          </div>
          
          <div className="grid gap-12">
            {page.caseStudies.map((study: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {study.industry}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h3>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
                    <ul className="space-y-3 mb-6">
                      {study.results.map((result: string, resultIndex: number) => (
                        <li key={resultIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <span className="text-sm text-gray-600">Timeframe: </span>
                      <span className="font-semibold text-blue-600">{study.timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Client Testimonials
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {page.testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-600 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-blue-600">
                    {testimonial.company}
                  </div>
                </div>
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