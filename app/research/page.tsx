import React from "react";

export default function Research() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Research</h1>
        
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Current Research Projects</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Tacrolimus Semi-Physiological PPK Model in Lung Transplant Patients</h3>
                  <p className="text-slate-600">
                    Building a semi-physiological, semi-mechanistic population pharmacokinetic model of tacrolimus in lung transplant patients to improve dosing accuracy and treatment outcomes.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Graduation Project</span>
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-2">In Progress</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Pyrazinamide PPK Model Repository</h3>
                  <p className="text-slate-600">
                    Developing a web-based repository of population pharmacokinetic models for pyrazinamide to inform precision dosing strategies using R Shiny platform.
                  </p>
                  <div className="mt-4">
                    <a href="https://lushinyhan.shinyapps.io/PZA_model_library/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Model Repository
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Tacrolimus Precision Dosing Dashboard</h3>
                  <p className="text-slate-600">
                    Web-based dashboards to guide tacrolimus precision dosing in lung transplant patients, developed for both adult and pediatric populations.
                  </p>
                  <div className="mt-4">
                    <a href="https://pzaauccal.shinyapps.io/tacrolimu_MIPD_lungtransplant_adult/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">
                      Adult Dashboard
                    </a>
                    <a href="https://pzaauccal.shinyapps.io/TacrolimusMIPD/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Pediatric Dashboard
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Linezolid Precision Dosing Dashboard</h3>
                  <p className="text-slate-600">
                    Web-based dashboard to guide precision dosing of linezolid in patients with renal impairment using R Shiny platform.
                  </p>
                  <div className="mt-4">
                    <a href="https://lushinyhan.shinyapps.io/LZD_MIPD/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      View Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Research Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Population Pharmacokinetic Modeling</h3>
                <p className="text-slate-600 text-sm">
                  Expertise in developing population pharmacokinetic models, including complex absorption models and semi-physiological pharmacokinetic models.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">R Shiny Development</h3>
                <p className="text-slate-600 text-sm">
                  Creating interactive web applications for clinical decision support and precision medicine using R Shiny platform.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Pharmacokinetic Analysis</h3>
                <p className="text-slate-600 text-sm">
                  Proficient in using R, Python, and specialized software for pharmacokinetic analysis and statistical modeling.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">Analytical Methods</h3>
                <p className="text-slate-600 text-sm">
                  Experience with UV-Vis and IR spectrophotometry, HPLC MS/MS for quantitative analysis of pharmaceuticals.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 