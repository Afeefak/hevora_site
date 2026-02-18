import { useParams, Link } from "react-router-dom";
import { caseStudies } from "../../data/caseStudies";
import { useEffect, useMemo, useRef, useState } from "react";

type CaseStudyWithImages = {
  images?: string[];
};

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();

  const study = useMemo(() => {
    return caseStudies.find((c) => c.slug === slug);
  }, [slug]);

  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const images = useMemo(() => {
    if (!study) return [];

    const studyWithImages = study as CaseStudyWithImages;

    if (studyWithImages.images && studyWithImages.images.length > 0) {
      return studyWithImages.images;
    }

    return [study.image];
  }, [study]);

  // Auto Slider
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images]);

  // Auto Scroll
  useEffect(() => {
    if (!sliderRef.current) return;
    if (images.length <= 1) return;

    sliderRef.current.scrollTo({
      left: current * sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  }, [current, images]);

  if (!study) {
    return (
      <div className="pt-40 text-center text-white">Case study not found</div>
    );
  }

  return (
    <section className="pt-32 pb-24 bg-black">
      {/* key={slug} resets slider automatically */}
      <div key={slug} className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/case-studies"
          className="text-[#16F88A] font-bold text-sm uppercase tracking-widest"
        >
          ← Back to Case Studies
        </Link>

        {/* Scrollable Image Slider */}
        <div
          ref={sliderRef}
          className="w-full h-[260px] md:h-[420px] flex overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-3xl mb-6 bg-black/20 mt-6"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-full h-full flex items-center justify-center snap-center"
            >
              <img
                src={img}
                alt={`${study.title}-${index}`}
                className="max-w-full max-h-full object-contain transition-all duration-700"
              />
            </div>
          ))}
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mb-12">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === index ? "bg-[#16F88A]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-4">{study.title}</h1>

        {/* Short Brief */}
        {study.short && (
          <p className="text-[#16F88A] font-semibold text-lg mb-6">
            {study.short}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {study.tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 text-[11px] font-bold rounded-full bg-white/10 text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Overview */}
        <p className="text-white/70 mb-12 text-lg leading-relaxed">
          {study.overview}
        </p>

        {/* Services + Tech Stack */}
        {study.services && study.techStack && (
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl text-white font-semibold mb-4">
                Services Provided
              </h3>
              <ul className="space-y-2 text-white/70">
                {study.services.map((service, i) => (
                  <li key={i}>✔ {service}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl text-white font-semibold mb-4">
                Tech Stack
              </h3>
              <ul className="space-y-2 text-white/70">
                {study.techStack.map((tech, i) => (
                  <li key={i}>⚡ {tech}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Features */}
        {study.features && (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-14">
            <h3 className="text-2xl text-white font-semibold mb-4">
              Key Features
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 text-white/70">
              {study.features.map((feature, i) => (
                <p key={i}>✅ {feature}</p>
              ))}
            </div>
          </div>
        )}

        {/* Challenge / Solution / Result */}
        <div className="space-y-12">
          <div>
            <h3 className="text-3xl text-white font-semibold mb-3">
              Challenge
            </h3>
            <p className="text-white/60 text-lg leading-relaxed">
              {study.challenge}
            </p>
          </div>

          <div>
            <h3 className="text-3xl text-white font-semibold mb-3">Solution</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              {study.solution}
            </p>
          </div>

          <div>
            <h3 className="text-3xl text-white font-semibold mb-3">Result</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              {study.result}
            </p>
          </div>
        </div>

        {/* Duration + Role */}
        {(study.duration || study.role) && (
          <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl text-white font-semibold mb-4">
              Project Details
            </h3>

            {study.duration && (
              <p className="text-white/70">
                <span className="text-[#16F88A] font-semibold">Duration:</span>{" "}
                {study.duration}
              </p>
            )}

            {study.role && (
              <p className="text-white/70 mt-2">
                <span className="text-[#16F88A] font-semibold">Role:</span>{" "}
                {study.role}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
