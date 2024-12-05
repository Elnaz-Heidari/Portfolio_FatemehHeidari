import React from 'react';

function PersonalData() {
    return (
        <section id="personal-data" className="personal-data">


            <div className="academic-credentials">
                <h3>Academic Credentials</h3>
                <div className="education">
                    <h4>Education</h4>
                    <ul>
                        <li>Master's Degree in English Language Teaching, University of Kashan, Iran (2010)</li>
                        <li>
                            <ul>
                                <li>Awarded excellent for Master’s thesis (19.41 out of 20)</li>
                                <li>Degree evaluated by Comparative Education Service (CES), University of Toronto, as equivalent to a Canadian Master’s degree</li>
                            </ul>
                        </li>
                        <li>Bachelor's Degree in English Language Translation, Payame Noor University, Iran (2007)</li>
                        <li>Advanced Diploma in Computer Programming and Analysis, George Brown College, Toronto (2024)</li>
                        <ul>
                            <li>Expected Graduation: April 2024</li>
                            <li>GPA: 3.60</li>
                        </ul>
                    </ul>
                </div>
            </div>

            {/* Remaining content... */}
        </section>
    );
}

export default PersonalData;
