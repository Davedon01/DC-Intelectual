export default function AboutPage() {
  return (
    <section className="min-h-screen py-24 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">

      <div className="max-w-4xl mx-auto px-6">

        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-5xl font-serif mb-6">
            About This Platform
          </h1>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            This website serves as a structured archive of intellectual work,
            analytical exploration, and long-form projects developed through
            research, observation, and disciplined thinking.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12 text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">

          <div>
            <h2 className="text-2xl font-serif mb-4">
              Purpose
            </h2>

            <p>
              The primary purpose of this platform is to document and publish
              independent intellectual projects across multiple disciplines.
              Each project represents a structured attempt to analyze ideas,
              frameworks, and systems that shape human behavior, society,
              and personal development.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif mb-4">
              Project Structure
            </h2>

            <p>
              Projects published here are written in a structured format
              similar to academic coursework or research documentation.
              Topics may include psychology, social systems, behavioral
              frameworks, philosophical analysis, and interdisciplinary
              explorations that connect multiple fields of study.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif mb-4">
              Articles
            </h2>

            <p>
              In addition to long-form projects, the platform also contains
              analytical articles that examine specific ideas, observations,
              or emerging concepts. These articles allow for a more focused
              exploration of individual topics and encourage discussion
              through reader reactions and commentary.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif mb-4">
              Philosophy
            </h2>

            <p>
              The work presented on this platform is guided by the belief
              that intellectual growth requires structured thinking,
              disciplined observation, and the willingness to document
              ideas with clarity. Rather than consuming information
              passively, this platform exists to organize and develop
              knowledge through deliberate analysis.
            </p>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-neutral-500 text-sm">
          This platform is a living archive and will continue to evolve
          as new projects, ideas, and research explorations are developed.
        </div>

      </div>

    </section>
  );
}