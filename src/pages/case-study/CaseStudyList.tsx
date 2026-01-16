export default function CaseStudyList() {
  return (
    <section className="pt-32 pb-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-semibold text-white mb-16">
          Case Studies
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            "E-Commerce Platform",
            "Healthcare Website",
            "Fintech Mobile App",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/15 bg-[#0e0e0e] overflow-hidden hover:border-orange-500 transition"
            >
              <img
                src="/case-placeholder.jpg"
                alt={item}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{item}</h3>

                <p className="text-white/60 text-sm mt-2">
                  Web Development · UI/UX
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
