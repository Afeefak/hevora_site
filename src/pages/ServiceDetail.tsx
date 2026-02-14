import { useParams } from "react-router-dom";

export default function ServiceDetail() {
  useParams();

  return (
    <main className="bg-black pt-32">
      {/* HERO */}
      <section className="py-32 text-center bg-gradient-to-b from-[#1b0f08] to-black">
        <h1 className="text-6xl font-semibold text-white">Web Development</h1>

        <p className="mt-6 max-w-2xl mx-auto text-white/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit
          ligula vel vestibulum commodo.
        </p>

        <button className="mt-10 bg-orange-600 text-white px-8 py-3 rounded-full">
          Discover Now
        </button>
      </section>

      {/* HOW WE HELP */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-white mb-12">
          How We Help Your Business
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Security and reliability",
            "High-quality code",
            "Cost efficiency",
            "Using latest technologies",
          ].map((item) => (
            <div
              key={item}
              className="border border-white/20 rounded-2xl p-8 text-white"
            >
              <div className="w-3 h-3 bg-orange-500 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="text-white/60 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div
          className="
      relative
      border border-white/20
      rounded-3xl
      p-16
      grid lg:grid-cols-2
      gap-12
      overflow-visible
    "
        >
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl text-white font-semibold">Our Approach</h2>

            <p className="text-white/60 mt-6 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <button className="mt-8 bg-orange-600 px-6 py-3 rounded-full text-white">
              Discover Now
            </button>
          </div>

          {/* RIGHT IMAGE WRAPPER (no layout height) */}
          <div className="relative">
            {/* IMAGE — ABSOLUTE */}
            <img
              src={import.meta.env.BASE_URL + "phone1.png"}
              alt="Phones"
              className="
          absolute
          -right-10
          top-1/2
          -translate-y-1/2
          w-[420px]
          max-w-none
          pointer-events-none
        "
            />

            {/* FLOATING STATS */}
            <div
              className="
          absolute
          left-55
          top-2/3
          -translate-y-1/2
          bg-black/80
          border border-white/20
          rounded-xl
          px-6 py-4
          text-white
          backdrop-blur-md
        "
            >
              <p className="text-2xl font-semibold">2,554+</p>
              <p className="text-sm text-white/60">Success Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK, CONTACT, FOOTER → reuse your existing components */}
    </main>
  );
}
