function Projects(){
    return(
        <section id="projects" className="projects">
            <h2>PROJECTS</h2>
            <div className="projects-container">
                <div className="project-card">
                    <h3>Bank Management System</h3>

                    <p>
                        Developed a javaFx and MySQL application for managing
                        bank accounts and performing database operations such as
                        creating, reading, updating and deleting account records.
                    </p>
                </div>
                <div className="project-card">
                    <h3>WASCO Online Water Billing Management System</h3>
                    <p>
                        Developed an online distributed database application for managing
                        customer information, water usage , billing and payment records.
                        The system uses SQL and database modelling to calculate water bills,
                        track outstanding balances and manage customer payment history.
                    </p>
                </div>

            </div>
        </section>

    
    );
}

export default Projects;