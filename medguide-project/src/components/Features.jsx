const features = [
    {
      title: "Medical History Review",
      desc: "Your second brain for health—MedGuide recalls the details you miss.",
    },
    {
      title: "Lab Report & Prescription Analysis",
      desc: "Tired of medical jargon? Get clarity when you’re confused. ",
    },
    {
      title: "Medication Adherence",
      desc: "Never miss your meds again—August remembers, even when you don’t.",
    },
  ];
  
  export default function Features() {
    return (
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Medguide ?</h2>
          <div className="grid gap-12 md:grid-cols-3"> 
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-lg shadow-lg p-8">
                <div className="h-10 w-10 bg-teal-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-700">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }