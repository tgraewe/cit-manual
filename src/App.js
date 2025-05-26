import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>User Manual: How to Write a CIT Lab Report for CNIT Courses</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Technical lab reports are a fundamental requirement in Purdue’s Computer and Information Technology (CIT)
          networking courses, such as CNIT 24000 and CNIT 24200. These reports serve two key purposes: they
          contribute significantly to your course grade, and they help you develop professional documentation skills
          essential for careers in IT, cybersecurity, and networking.
        </p>
        <p>
          This manual provides a structured approach to writing CIT lab reports, ensuring clarity, professionalism,
          and adherence to academic standards. Whether you are a first-time student unfamiliar with technical writing
          or a returning student looking to improve your reports, this guide will help you understand each section’s
          expectations and how to fulfill them effectively.
        </p>
      </section>

      <section>
        <h2>Who Should Use This Manual?</h2>
        <ul>
          <li>First-time CNIT students who need clear instructions on writing technical lab reports.</li>
          <li>Returning students seeking to refine their reports for better grades.</li>
          <li>Peer reviewers or TAs who need a structured checklist for evaluating reports.</li>
        </ul>
        <p>No prior technical writing experience is required—this manual breaks down each section step by step.</p>
      </section>

      <section>
        <h2>Report Structure Overview</h2>
        <p>A well-organized CIT lab report must include the following sections, each starting on a new page:</p>
        <ol>
          <li>Cover Page</li>
          <li>Table of Contents</li>
          <li>Executive Summary</li>
          <li>Business Scenario</li>
          <li>Procedures</li>
          <li>Results</li>
          <li>Conclusions and Recommendations</li>
          <li>Bibliography</li>
          <li>Appendices</li>
          <li>Troubleshooting (Optional but recommended)</li>
        </ol>
        <p>Each section has a specific purpose, ensuring the report is comprehensive and professional.</p>
      </section>

      <section>
        <h2>Section 1: Cover Page</h2>
        <p>The cover page is the first impression of your report and must include:</p>
        <ul>
          <li>Title of the lab</li>
          <li>CNIT course number and section</li>
          <li>Names of all group members</li>
          <li>Date submitted</li>
          <li>Instructor’s or TA’s name</li>
        </ul>
        <p className="tip">✅ Tip: Use a clean, professional layout. Avoid excessive graphics or colors—simplicity is key.</p>
      </section>

      <section>
        <h2>Section 2: Executive Summary</h2>
        <p><strong>Purpose:</strong> Provide a concise, non-technical summary of the lab’s objectives and outcomes.</p>
        <p>
          Although this section appears early in the report, it should be written last since it summarizes the entire lab.
          It should briefly explain:
        </p>
        <ul>
          <li>What the lab required (the objective)</li>
          <li>What you did (the process)</li>
          <li>What was achieved (the results)</li>
        </ul>
        <p className="tip">✅ Tip: Write for a non-technical audience—avoid jargon. Keep it to one paragraph if possible.</p>
      </section>

      <section>
        <h2>Section 3: Business Scenario</h2>
        <p><strong>Purpose:</strong> Establish a real-world or fictional context for the lab.</p>
        <ul>
          <li>A hypothetical company or department that would benefit from the lab’s outcomes.</li>
          <li>A brief background explaining their needs.</li>
          <li>Why this lab is relevant to their operations.</li>
        </ul>
        <p className="tip">✅ Tip: Think of this as justifying the lab’s importance in a business or organizational setting.</p>
      </section>

      <section>
        <h2>Section 4: Procedures</h2>
        <p><strong>Purpose:</strong> Provide a step-by-step account of how the lab was completed.</p>
        <p>
          This section should be detailed enough that another student or professional could replicate your work. Use
          complete sentences and avoid vague language.
        </p>
        <ul>
          <li>Document each major step taken, including network setups, configurations, or test cases used.</li>
          <li>Write in third-person past tense (e.g., "The team configured the router...").</li>
          <li>Include screenshots or code snippets when necessary to support clarity.</li>
          <li>Reference any tools, platforms, or guides used (e.g., Cisco Packet Tracer, Wireshark).</li>
          <li>Note problems encountered, solutions applied, and lessons learned.</li>
        </ul>
        <p className="tip">✅ Tip: Focus on replicability. The reader should be able to follow and repeat your steps.</p>
      </section>
    </div>
  );
}
