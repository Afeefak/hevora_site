export default function CaseStudyDetail() {
  return (
    <section className="pt-32 pb-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-semibold text-white mb-6">
          Healthcare Website
        </h1>

        <p className="text-white/60 mb-10">
          A complete healthcare platform built for scalability and performance.
        </p>

        <img
          src="/case-placeholder.jpg"
          alt="Case Study"
          className="rounded-2xl border border-white/15 mb-12"
        />

        <div className="space-y-6 text-white/70">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            blandit ligula vel vestibulum commodo.
          </p>
          <p>Technologies used: React, Tailwind, Node.js, AWS.</p>
        </div>
      </div>
    </section>
  );
}
