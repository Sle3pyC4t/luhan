import React from "react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg bg-slate-200 flex items-center justify-center">
              <div className="text-slate-500 text-lg font-semibold">Lu Han</div>
            </div>
            <div className="mt-6 bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-slate-500">Email:</span> 
                  <a href="mailto:luger123@sjtu.edu.cn" className="text-blue-600 hover:underline">
                    luger123@sjtu.edu.cn
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500">Phone:</span>
                  <span>+86 183-1711-0324</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500">Location:</span>
                  <span>Shanghai, China</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-slate-800">Lu Han</h1>
            <h2 className="text-xl text-blue-600 mt-1">Ph.D. Student in Pharmacy</h2>
            
            <div className="mt-6 prose max-w-none">
              <p className="text-lg">
                I am a Ph.D. student at Shanghai Jiao Tong University specializing in pharmacokinetics, with a particular focus on Population Pharmacokinetic (PPK) modeling and precision dosing.
              </p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Research Interests</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Population Pharmacokinetic (PPK) modeling</li>
                <li>Physiologically-Based Pharmacokinetic (PBPK) modeling</li>
                <li>Precision medicine and individualized drug dosing</li>
                <li>Development of web-based tools for clinical pharmacology</li>
                <li>Pharmacokinetics in special populations (transplant patients, pediatrics)</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <p className="font-medium">Shanghai Jiao Tong University</p>
                    <p className="text-sm text-slate-500">September 2022 - June 2025</p>
                  </div>
                  <p className="text-sm">Master's Degree in Pharmacy (In Progress)</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start">
                    <p className="font-medium">Wenzhou Medical University</p>
                    <p className="text-sm text-slate-500">September 2017 - June 2022</p>
                  </div>
                  <p className="text-sm">Bachelor's Degree in Clinical Pharmacy</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">R</span>
                <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">Python</span>
                <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">PPK Modeling</span>
                <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">PBPK Modeling</span>
                <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">Statistical Analysis</span>
                <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">HPLC MS/MS</span>
                <span className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">R Shiny</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 