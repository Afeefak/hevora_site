import { useParams } from "react-router-dom";
import { caseStudies } from "../../data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return <div className="pt-40 text-white">Case study not found</div>;
  }

  return (
    <section className="pt-32 pb-24 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <img
          src={study.image}
          alt={study.title}
          className="rounded-3xl mb-12"
        />

        <h1 className="text-5xl font-bold text-white mb-6">{study.title}</h1>

        <p className="text-white/70 mb-12">{study.overview}</p>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl text-white font-semibold mb-2">
              Challenge
            </h3>
            <p className="text-white/60">{study.challenge}</p>
          </div>

          <div>
            <h3 className="text-2xl text-white font-semibold mb-2">Solution</h3>
            <p className="text-white/60">{study.solution}</p>
          </div>

          <div>
            <h3 className="text-2xl text-white font-semibold mb-2">Result</h3>
            <p className="text-white/60">{study.result}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
