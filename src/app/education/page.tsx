export default function EducationPage() {
  const edu = [
    { school: "Your University", degree: "B.S. in Computer Science", year: "2018 - 2022" },
    { school: "Your High School", degree: "Science", year: "2016 - 2018" },
  ];
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <ul className="space-y-4">
        {edu.map((e) => (
          <li key={e.school} className="border border-neutral-800 rounded-lg p-4 bg-neutral-900/40">
            <div className="font-medium">{e.school}</div>
            <div className="text-neutral-300 text-sm">{e.degree}</div>
            <div className="text-neutral-500 text-xs">{e.year}</div>
          </li>
        ))}
      </ul>
    </section>
  );
} 