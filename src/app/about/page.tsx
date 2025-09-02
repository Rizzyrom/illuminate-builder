import { readFileSync } from 'fs';
import { join } from 'path';
import { TinaMarkdown } from "tinacms/dist/rich-text";

async function getAboutData() {
  const filePath = join(process.cwd(), 'content', 'pages', 'about.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

async function getGlobalData() {
  const filePath = join(process.cwd(), 'content', 'global', 'index.json');
  const fileContent = readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

export default async function AboutPage() {
  const page = await getAboutData();
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

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              {page.mission.title}
            </h2>
            <div className="text-lg text-gray-600 prose prose-lg mx-auto">
              <TinaMarkdown content={page.mission.content} />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {page.values.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {page.values.valueList.map((value: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {page.team.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {page.team.teamMembers.map((member: any, index: number) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.bio}
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