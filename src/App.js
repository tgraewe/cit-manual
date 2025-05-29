import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>User Manual: How to Write a CIT Lab Report for CNIT Courses</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Lab Reports are a fundamental pillar in Purdue’s Computer and Information Technology (CIT) department, such as CNIT 34400, CNIT 24200, and so forth. These reports serve two key purposes they contribute a significant chunk to your course grade, and they help you develop the necessary professional documentation skills essential for careers in general IT, cybersecurity, and networking.

        </p>
        <p>
          This manual provides a breakdown approach to writing CIT lab reports, for newcomers to the CIT program as well as students outside the program who must earn credit from CNIT courses. Whether you are a first-time student unfamiliar with technical writing or a returning student looking to brush up your lab reports, this guide will help you understand each section’s expectations and how to fulfill them effectively in a check list style and easily digestible format from the perspective of a student who graduated the program and graded 100+ lab reports.
        </p>
      </section>

      <section>
        <h2>Who Should Use This Manual?</h2>
        <ul>
          <li>First-time CIT students who need guidance as to what CNIT Labreports should look like going forward.</li>
          <li>Returning students seeking to refine their reports for improving their grades.</li>
          <li>Students outside the CIT department who need to learn the CNIT lab report format to pass a course.</li>
          <li>Peer reviewers or TAs who need a structured checklist for evaluating reports.</li>
        </ul>
        <p>No prior technical writing experience is required this manual breakdown what you need to write a good lab report and document the results.</p>
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
          <li>Problems and Troubleshooting</li>
        </ol>
        <p>Each section has a specific function, guaranteeing the report to be comprehensive and hold a professional tone if documented correctly.</p>
      </section>

      <section>
        <h2>Section 1: Cover Page</h2>
        <p>The cover page is the first page of your report and must include:</p>
        <ul>
          <li>Title of the lab</li>
          <li>CNIT course number and section</li>
          <li>Names of all group members</li>
          <li>Date submitted</li>
          <li>Teaching Assistant's name</li>
          <li>Clearly organized</li>
          <li>Centered on page horizontally and vertically</li>
          
        </ul>
        <p className="tip">✅ Tip: Use a clean, professional layout. Avoiding any graphics or color is key.</p>
      </section>

      <section>
        <h2>Section 2: Table of Contents</h2>
        <p>The Table of Contents (TOC) maps out what each page of the report includes and must have the following:</p>
        <ul>
        <li>Table of Contents present and complete with all sections</li>
        <li>Table of Contents has correct page numbers and leading dots on from section name to page number</li>
        </ul>
        <p className="tip">✅ Tip: Just grab the Table of Contents form the CIT Lab Manual Template on Brightspace. Append it to your lab report and make sure it follow report format.</p>
      </section>

      <section>
        <h2>Section 3: Executive Summary</h2>
        <p><strong>Purpose:</strong> Provide a  non-technical summary of the lab’s objectives and results.</p>
        <p>
          Although this section appears early in the report, it should be written last since it summarizes the entire lab.
          It should briefly explain:
        </p>
        <ul>
          <li>Concise</li>
          <li>Maximum length of one page</li>
          <li>Written for non-technical audience</li>
          <li>Clear overview of project</li>
          <li>Clearly list major problems / works not complete</li>
        </ul>
        <p className="tip">✅ Tip: Write for a non-technical audience. Keep it to less than one page, and one paragraph if possible.</p>
      </section>

      <section>
        <h2>Section 4: Business Scenario</h2>
        <p><strong>Purpose:</strong> Establish a real-world or fictional scenario for the lab.</p>
        <ul>
          <li>Business case is explained as such that the technology used is appropriate</li>
          <li>Provides the relevant backstory / corporate scenario that lead to this project being necessary</li>
          <li>Documented list of applications / software / operating systems necessary for the lab</li>
          <li>Previous physical and logical diagrams from the previous lab in the course</li>
        </ul>
        <p className="tip">✅ Tip: Think of this as justifying the lab’s importance in a organization or corporate setting.</p>
      </section>

      <section>
        <h2>Section 5: Procedures</h2>
        <p><strong>Purpose:</strong> Provide a step-by-step account of how the lab was completed.</p>
        <p>
          This section should be detailed enough that another student or professional could replicate your work. Use
          complete sentences and avoid vague language.
        </p>
        <ul>
          <li>Clearly stated, The overall presentation of the procedures section in terms of clarity of message and professionalism</li>
          <li>Write in third-person past tense with verb-noun format (e.g., "Powered on Virtual Machine").</li>
          <li>Adequate information provided to allow re-creation of work</li>
          <li>Transition statements between numbered, titled and subtitled sections</li>
          <li>Numbered procedures and around 5-15 numbered procedures</li>
          <li>Consistent level of coverage throughout the project - nothing overly detailed or omitted</li>
        </ul>
        <p className="tip">✅ Tip: Focus on replicability. Readers should be able to follow and repeat your steps.</p>
      </section>
    </div>
  );
}
