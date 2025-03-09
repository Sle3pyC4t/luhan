import React from "react";

export default function CV() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Curriculum Vitae</h1>
          <a
            href="/resume-en.txt"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            Download CV
          </a>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-medium">Shanghai Jiao Tong University</h3>
                    <p className="text-slate-600">Master's Degree in Pharmacy</p>
                  </div>
                  <div className="text-slate-500 mt-1 md:mt-0">September 2022 - June 2025</div>
                </div>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-medium">Wenzhou Medical University</h3>
                    <p className="text-slate-600">Bachelor's Degree in Clinical Pharmacy</p>
                  </div>
                  <div className="text-slate-500 mt-1 md:mt-0">September 2017 - June 2022</div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
              Skills
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Highly skilled in managing and processing data using R, Python, and VB.</li>
              <li>Highly skilled in conducting Population Pharmacokinetic (PPK) modeling.</li>
              <li>Proficient in performing statistical analyze with SPSS.</li>
              <li>Proficient in using UV-Vis and IR spectrophotometers, HPLC MS/MS for quantitative analysis.</li>
              <li>Capable of Physiologically-Based Pharmacokinetic (PBPK) modeling.</li>
              <li>Capable of conducting animal and cell experiments.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
              Research Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium">Shanghai Chest Hospital, Affiliated with Shanghai Jiao Tong University</h3>
                <p className="text-slate-500 mb-2">Department of Pharmacy</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Building web-based Pyrazinamide PPK models repository to inform precison dosing using R shiny platform</li>
                  <li>Building web-based dashboards to infom precision dosing of linezolid using R shiny platform</li>
                  <li>Building web-based dashboards to infom precision dosing of tacrolimus lung transplant patients using R shiny platform</li>
                  <li>Review of Quetiapine Population Pharmacokinetics characteristics</li>
                  <li>External Validation of Tacrolimus PPK Models in Adult Lung Transplant Patients</li>
                  <li>Establishment of roxadustat PPK Models in kidney transplant recipients</li>
                  <li>Establishment of nirmatrelvir PPK Models in Chinese patients with COVID-19 infection</li>
                  <li>Establishment of Tacrolimus PPK Models in Pediatric Lung Transplant Patients</li>
                  <li>Establish a Semi-Physiological, Semi-Mechanistic PPK Model of Tacrolimus in Lung Transplant Patients (Graduation Project)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium">The First Affiliated Hospital of Wenzhou Medical University</h3>
                <p className="text-slate-500 mb-2">Department of Clinical Pharmacy</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Evaluation of Individualized Dosing Software for Vancomycin</li>
                  <li>Study of the Relationship Between Blood Concentration of Polymyxin B and Nephrotoxicity</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium">Wenzhou Medical University</h3>
                <p className="text-slate-500 mb-2">ZheNan Water Research Institution</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Preparation, Activity Analysis, and Application of Sulfur-Containing Nanomaterials</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
              Honors and Awards
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>National Pharmacy Graduate Entrance Exam Scholarship (2022, Total score 406/500, Rank 1 at Shanghai chest hospital)</li>
              <li>Frist-Class scholarship (2024, top student award)</li>
              <li>Second-Class Scholarship (2020, 2022, 2023, top 20% student award)</li>
              <li>Third-Class Scholarship (2019, top 40% student award)</li>
              <li>Third Prize in Poster Presentation - The 2023 International Symposium in Quantitative Pharmacology (ISQP)</li>
              <li>Excellent Poster Award - TDM Committee of Chinese Pharmacological Society (2023)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200">
              Language Skills
            </h2>
            <p>English: IELTS overall score: 7.0, with each band score above 6.0</p>
            <p>Chinese: Native</p>
          </section>
        </div>
      </div>
    </div>
  );
} 