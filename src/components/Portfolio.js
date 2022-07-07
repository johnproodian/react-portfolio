import React, { useState} from 'react';

function Portfolio() {
    const [projects] = useState([
        { name: "Barber Shop", deployed: "https://shrouded-stream-03839.herokuapp.com/", github: "https://github.com/johnproodian/barber-shop", src: "" },
        { name: "Weather Dashboard", deployed: "https://johnproodian.github.io/weather-dashboard/", github: "https://github.com/johnproodian/weather-dashboard", src: ""},
        { name: "What's in Your Pantry?", deployed: "https://johnproodian.github.io/whats-in-your-pantry/", github: "https://github.com/johnproodian/whats_in_your_pantry", src: "" }
    ]);

    const [currentProject, setCurrentProject] = useState(projects[0])


    return (
    
    <section id="portfolio-section">
        <h1 id="portfolio">Portfolio</h1>
        <div id="portfolio-div">
            {projects.map(project => (
                <div>
                    <h2>{project.name}</h2>
                    <div className="link-class">
                        <a className="links" href={project.deployed}>deployed</a>
                        <a className="links" href={project.github}>github</a>
                    </div>
                </div>
            ))}
        </div>
        
    </section>

    )


}

export default Portfolio;