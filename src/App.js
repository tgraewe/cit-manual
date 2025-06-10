import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>User Manual: How to Write a CIT Lab Report for CNIT Courses</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Lab Reports are a fundamental pillar in Purdue's Computer and Information Technology (CIT) department, particularly in technical courses like CNIT 24200, CNIT 34400, and other courses down the plan of study. These reports serve two key purposes: they contribute a significant chunk to your course grade, and they help you develop the necessary professional documentation skills essential for careers in general IT, cybersecurity, and network infrastructure. Being able to clearly report, what you've done and how you did it is an essential professional skill.
        </p>
        <p>
          This manual is written and contributed by a student who completed the CIT program and graded over 100 lab reports as a teaching assistant for CNIT 34400. Its aim is to break down each section of a standard lab report in an open, accessible checklist-style format. The guide removes guesswork by outlining what a model lab report should look like and highlighting common mistakes made by both new and experienced students. Even if you have little to no technical writing experience, this manual is designed to walk you through the required steps with clarity from formatting the Procedures section to using a third person past tense writing tone.
        </p>
      </section>

      <section>
        <h2>Who Should Use This Manual?</h2>
        <ul>
          <li>First-time CIT students who need guidance as to what CNIT Lab reports should look like going forward</li>
          <li>Returning students seeking to refine their reports to improve their grades</li>
          <li>Students outside the CIT department who need to learn the CNIT lab report format to pass a course</li>
          <li>Peer reviewers or TAs who need a structured checklist for evaluating reports</li>
        </ul>
        <p>
          No prior technical writing experience is required, this manual breaks down what you need to write a good lab report and document the results.
        </p>
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
        <p>
          Each section has a specific function, guaranteeing the report is comprehensive and holds a professional tone if documented correctly.
        </p>
      </section>

      <section>
        <h2>Section 1: Cover Page</h2>
        <p>The cover page is the first page of your report and must include:</p>
        <ul>
          <li>Title of the lab</li>
          <li>CNIT course number and section</li>
          <li>Names of all group members</li>
          <li>Date submitted</li>
          <li>The Teaching Assistant's name</li>
          <li>Centered on page horizontally and vertically</li>
        </ul>
        <p className="tip">✅ Tip: Use a simple, professional layout. Avoiding any graphics or color is key to this entire report.</p>
        <div className="figure-container">
          <img 
            src={process.env.PUBLIC_URL + '/figures/figure1-cover-page.png'} 
            alt="Example cover page showing proper formatting with title, course number, names, date, and TA name"
            className="figure-image"
          />
          <p className="figure-caption">Figure 1: Example Cover Page</p>
        </div>
      </section>

      <section>
        <h2>Section 2: Table of Contents</h2>
        <p>The Table of Contents (TOC) maps out what each page of the report includes and must have the following:</p>
        <ul>
          <li>The TOC should follow the CIT format with an initial header</li>
          <li>The TOC should have the correct page numbers and leading dots from section name to page number</li>
        </ul>
        <p className="tip">✅ Tip: Grab the Table of Contents from the CIT Lab Manual Template on Brightspace. Append it to your lab report and make sure it follows the report format.</p>
        <div className="figure-container">
          <img 
            src={process.env.PUBLIC_URL + '/figures/figure2-toc.png'} 
            alt="Example table of contents showing proper formatting with section names and page numbers"
            className="figure-image"
          />
          <p className="figure-caption">Figure 2: Example TOC</p>
        </div>
      </section>

      <section>
        <h2>Section 3: Executive Summary</h2>
        <p><strong>Purpose:</strong> Provide a non-technical summary of the lab's objectives and results.</p>
        <p>
          The first section of any technical project report should be an executive summary. The executive summary is a brief description of the project and the results and conclusions of the project completely void of any technology implementations. This section is aimed at people who have no computer background, it is simply a way to cover, at a glance, what the project accomplishes e.g. this project establishes a method of ensuring only authorized people are able to access the G: drive.
        </p>
        <ul>
          <li>Concise</li>
          <li>Maximum length of one page</li>
          <li>Written for non-technical audience</li>
          <li>Clear overview of project</li>
          <li>List major problems / works not complete</li>
        </ul>
        <p className="tip">✅ Tip: Write for a non-technical audience. Keep it to less than one page, and one paragraph if possible.</p>
        <div className="figure-container">
          <img 
            src={process.env.PUBLIC_URL + '/figures/figure3-executive-summary.png'} 
            alt="Example executive summary showing proper formatting and non-technical language"
            className="figure-image"
          />
          <p className="figure-caption">Figure 3: Example Executive Summary</p>
        </div>
      </section>

      <section>
        <h2>Section 4: Business Scenario</h2>
        <p><strong>Purpose:</strong> Establish a real-world or fictional scenario for the lab.</p>
        <p>
          Describe the business scenario that lead to the initiation of the project and the overall purpose of the project. If a business scenario was not provided with the assignment, create a scenario appropriate for the project. If you are investigating peer-to-peer networking, develop a small business scenario rather than a Fortune 500 based scenario. Make sure to make up a company name and situation to go along with the scenario. Be sure to detail the purpose of the project: What are you trying to determine or prove through the project? A good way to develop this section is to use the top-down model to detail the environment into which the technology will be installed to set the context of the project. It should include prose descriptions of the applications and data required as well as a logical network design. This section can involve technology issues and lingo.
        </p>
        <ul>
          <li>The business case should explain that the technology used is appropriate</li>
          <li>This section should provide the relevant backstory / corporate scenario that led to this project being necessary</li>
          <li>Document the list of applications / software / operating systems (OS) necessary for the lab</li>
          <li>Should contain the physical and logical diagrams from the lab previous to the current lab in the course</li>
        </ul>
        <p className="tip">✅ Tip: Think of this as justifying the lab's importance in an organization or corporate setting.</p>
        <div className="figure-container">
          <img 
            src={process.env.PUBLIC_URL + '/figures/figure4-business-scenario.png'} 
            alt="Example business scenario showing proper formatting and context setting"
            className="figure-image"
          />
          <p className="figure-caption">Figure 4: Example Business Scenario</p>
        </div>
      </section>

      <section>
        <h2>Section 5: Procedures</h2>
        <p><strong>Purpose:</strong> Provide a step-by-step account of how the lab was completed.</p>
        <p>
          How did you complete the project? Provide a stepwise narrative or listed sequence of actions undertaken. The key is to provide a reader with an appropriate background and enough detail to re-create your work. However, it is not necessary to provide "cookbook" directions although many processes do need step-by-step instructions.
        </p>
        <p>
          This section should be detailed enough that another student or professional could replicate your work. Use complete sentences and avoid vague language. This will be the longest part of your report.
        </p>
        <ul>
          <li>Clearly stated, the overall presentation of the procedures section in terms of clarity of message and professionalism</li>
          <li>Write in third-person past tense with verb-noun format (e.g., "Powered on Virtual Machine").</li>
          <li>Provide adequate information for future readers to recreate the work</li>
          <li>Make sure to add transition statements between numbered, titled, and subtitled sections</li>
          <li>The procedures should be numbered and approximately 5-15 numbered lines</li>
          <li>This section should remain consistent to the level of coverage throughout the project with nothing overly detailed nor omitted</li>
        </ul>
        <p className="tip">✅ Tip: Focus on replicability. Readers should be able to follow and repeat your steps. Keep it simple and not redundant.</p>
        
        <h3>Example Procedure Subsection:</h3>
        <h4>Installed VMware Workstation & Virtual Machines (VM's) per Domain Controller (DC)</h4>
        <p>The procedures listed below show how the user installed VMware Workstation 17 in addition to creating a VM inside the VMware application on each Domain Controller</p>
        <ol className="procedure-steps">
          <li>Pressed <span className="bold">Windows key</span></li>
          <li>Typed <span className="path">\\rtfm.cit.lcl</span></li>
          <li>Typed <span className="path">CIT\username - password</span></li>
          <li>Navigated <span className="path">ISO | VMware | VMware Workstation | VMware Workstation 17 | Windows</span></li>
          <li>Clicked <span className="italic">Application file</span></li>
          <li>Clicked <span className="bold">Run</span> on the security warnings page</li>
          <li>Waited for product setup | <span className="bold">Next</span></li>
          <li>Selected checkbox for the <span className="italic">End User License Agreement</span></li>
          <li>Clicked <span className="bold">Next | Next | Next | Next | Install | Finish</span></li>
          <li>Pressed <span className="bold">Windows key</span></li>
          <li>Repeated steps 2-3</li>
          <li>Navigated <span className="path">ISO | Windows | Client | Windows 10 Old</span></li>
          <li>Right-clicked <span className="italic">ISO file</span> and copied the pasted to Desktop</li>
        </ol>
      </section>

      <section>
        <h2>Section 6: Results</h2>
        <p><strong>Purpose:</strong> Present the objectives that are completed by the end of the lab</p>
        <p>
          This section is most often the section that students don't understand. This section is a detailed view of what the system consisted of once the project was completed. It is important to note that there should be absolutely no procedures in this section. If there is only one possible configuration for a given item (such as NETBEUI), you can simply state that it was installed.
        </p>
        <ul>
          <li>The goal of this section should be summarizing the end result</li>
          <li>Should begin with a summary of usually 1-3 paragraphs of what was completed during the lab as well as relating to the business scenario</li>
          <li>Should contain no procedures or instructions should be included</li>
          <li>After the results paragraph this section should contain the physical (with Devices Names / Network interfaces) and logical network diagrams (with Network Addresses / Subnet Masks)</li>
        </ul>
        <p className="tip">✅ Tip: Keep it simple, the results section is probably the easiest one. Have the group members who are pursuing a network engineer career path draw up the diagrams.</p>
        <div className="figure-container">
          <img 
            src={process.env.PUBLIC_URL + '/figures/figure5-physical-diagram.png'} 
            alt="Example physical network diagram showing device connections and interfaces"
            className="figure-image"
          />
          <p className="figure-caption">Figure 5: Physical Diagram</p>
        </div>
        <div className="figure-container">
          <img 
            src={process.env.PUBLIC_URL + '/figures/figure6-logical-diagram.png'} 
            alt="Example logical network diagram showing network addresses and subnet masks"
            className="figure-image"
          />
          <p className="figure-caption">Figure 6: Logical Diagram</p>
        </div>
      </section>

      <section>
        <h2>Section 7: Conclusions and Recommendations</h2>
        <p><strong>Purpose:</strong> Reflect on what was achieved and what you recommend going forward.</p>
        <p>
          Close the report by answering the issues raised in the background/business scenario section of the report. Include any recommendations that you would give to someone who might be attempting to duplicate your work. An example would be if you used Internet Explorer as your web browser but would recommend others use Mozilla Firefox instead. All recommendations stated must be relevant to the laboratory activity.
        </p>
        <ul>
          <li>Revisit the business scenario and whether it was fulfilled</li>
          <li>Highlight successes and limitations</li>
          <li>Offer practical advice for future students doing similar work</li>
          <li>Be specific in your recommendations (e.g., "Use pfSense over UFW for firewall lab due to feature set")</li>
        </ul>
        <p className="tip">✅ Tip: I mostly see students confused by this section and off feedback for the instructor of the course and TA's. The purpose of this section is to NOT give feedback to the instructors on the course, but rather to YOURSELF. If you were to redo the current lab.</p>
      </section>

      <section>
        <h2>Section 8: Bibliography</h2>
        <p><strong>Purpose:</strong> Credit all external sources, materials, or people that assisted in the lab.</p>
        <p>
          List the sources of any information used to complete the project in APA format. Examples would be this lab manual, software used, web sites, your lab instructor, members of other groups, etc. There is never an instance where you do not use any resources.
        </p>
        <ul>
          <li>Use APA formatting</li>
          <li>Include manuals, websites, instructors, classmates, or any other consulted resources</li>
          <li>Don't skip this section every project uses some outside reference</li>
        </ul>
        <p className="tip">✅ Tip: The most common mistake I see students make is minor APA formatting errors, so I recommend you refer to the Purdue OWL. Another common mistake is to include the blue weblinks, for this I recommend pressing CTRL + A on your keyboard to select the entire report then changing the text to the color Black at the very end.</p>
      </section>

      <section>
        <h2>Section 9: Appendices</h2>
        <p><strong>Purpose:</strong> Provide supporting material without cluttering the main report.</p>
        <p>
          Appendices are used to show information that supports the body of your report. Some common appendices include inventory sheets, things to remember, and things to watch out for. Each appendix should be labeled and should be referenced at least once from the body of the report.
        </p>
        <ul>
          <li>Label each appendix (Appendix A, B, C, etc.) as a subheading</li>
          <li>Reference each appendix at least once in the report body. Typically, in the procedures section</li>
          <li>Use tables to document IP addresses, subnet masks, wire management, etc</li>
          <li>If there were devices with text configs in the lab include each device config as a subheading under the Appendix section (Appendix C: Configs)</li>
        </ul>
        <p className="tip">✅ Tip: When referencing the appendix in the procedures you can simplify things by including a table with IP addresses then referencing the table in procedures. So, you would not have to record the IP addresses in the procedures section many times only once.</p>
      </section>

      <section>
        <h2>Section 10: Problems and Troubleshooting</h2>
        <p><strong>Purpose:</strong> Show how problems were addressed during the lab.</p>
        <p>
          The development of troubleshooting and problem-solving skills is one of the main objectives of the laboratory. Therefore, each problem encountered throughout the course of the project report should be addressed. A short description of the problem, the knowns, unknowns, assumptions, processes used to arrive at a solution, and findings/conclusions should be documented as well as an indication of how this affected your timeline to complete the project.
        </p>
        <ul>
          <li>List at exactly 3 problems encountered</li>
          <li>This portion of the report ties in with your TPS reports submitted weekly as you may refuse a problem encountered during lab from them on the final report</li>
          <li>Stick to the CIT lab format when recording problems</li>
          <li>Describe the attempted solution(s) and finalize the solution which solved the problem encountered</li>
        </ul>
        <p className="tip">✅ Tip: The most common mistake I see students make when addressing problems faced in lab is listing none or no problem encountered. No matter what you are doing there will always be problems if you don't know how to do a task and had to google something that's a problem. Recording no problems encountered is lazy writing and worth no credit.</p>
        <div className="figure-container">
          <img 
            src={process.env.PUBLIC_URL + '/figures/figure7-problem-example.png'} 
            alt="Example problem documentation showing proper format for describing and solving issues"
            className="figure-image"
          />
          <p className="figure-caption">Figure 7: Example Problem</p>
        </div>
      </section>

      <section>
        <h2>Glossary</h2>
        <table className="glossary-table">
          <thead>
            <tr>
              <th>Term</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>CIT</strong></td>
              <td>Computer and Information Technology: Purdue's applied IT department focused on infrastructure, networking, and security.</td>
            </tr>
            <tr>
              <td><strong>Lab Report</strong></td>
              <td>A structured, formal document that outlines the technical work performed during a lab assignment.</td>
            </tr>
            <tr>
              <td><strong>Executive Summary</strong></td>
              <td>A brief, non-technical summary of the lab's objectives, outcomes, and any notable challenges.</td>
            </tr>
            <tr>
              <td><strong>Business Scenario</strong></td>
              <td>A realistic or fictional company situation that justifies the lab's purpose in a workplace context.</td>
            </tr>
            <tr>
              <td><strong>Procedures</strong></td>
              <td>The step-by-step process performed to complete the lab, written in third-person past tense.</td>
            </tr>
            <tr>
              <td><strong>Results</strong></td>
              <td>A section that documents what was achieved after performing the lab, often including diagrams or output summaries.</td>
            </tr>
            <tr>
              <td><strong>Appendices</strong></td>
              <td>Supplementary materials placed at the end of the report, such as full configs, IP tables, or diagrams.</td>
            </tr>
            <tr>
              <td><strong>Troubleshooting</strong></td>
              <td>The process of identifying, diagnosing, and resolving technical problems during the lab.</td>
            </tr>
            <tr>
              <td><strong>Third-Person Past Tense</strong></td>
              <td>Writing style that avoids "I" or "we" and uses phrasing like "The VM was created."</td>
            </tr>
            <tr>
              <td><strong>APA Format</strong></td>
              <td>A standardized citation style used to reference external sources; required for the Bibliography.</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
