"use client";

export default function ProjectDocumentation() {
  return (
    <section className="relative py-32 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white overflow-hidden">
      
  {/* Background glows */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-neutral-200 dark:bg-neutral-800 rounded-full blur-3xl opacity-30" />
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-neutral-300 dark:bg-neutral-700 rounded-full blur-3xl opacity-20" />

  <div className="relative max-w-6xl mx-auto px-6">
    <p className="uppercase tracking-widest text-sm text-neutral-500 dark:text-neutral-400 mb-6">Platform Overview</p>
    <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-12 max-w-4xl">A Structured Archive of Independent Intellectual Work</h2>

    <div className="grid md:grid-cols-2 gap-16 text-neutral-700 dark:text-neutral-300 leading-relaxed">
      <div className="space-y-6 text-lg">
        <p>This platform is a curated documentation of my personal intellectual projects, developed through research, coursework, structured analysis, and independent study.</p>
        <p>It is not confined to a single discipline. Projects may emerge from psychology, sociology, philosophy, technology, systems theory, or interdisciplinary exploration.</p>
      </div>

      <div className="space-y-6 text-lg">
        <p>The purpose of this archive is to present ideas with clarity, structure, and intellectual discipline, allowing readers to examine concepts in depth rather than consume them superficially.</p>
        <p className="text-black dark:text-white font-medium">This is a study environment. A living documentation. A growing intellectual repository.</p>
      </div>
    </div>

    <div className="mt-20 border-t border-neutral-300 dark:border-neutral-800 pt-8 text-neutral-600 dark:text-neutral-400 text-sm">
      All works presented here reflect original structured thinking and ongoing analytical development.
    </div>
  </div>
</section>
  );
}