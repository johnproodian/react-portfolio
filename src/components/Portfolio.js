import React, { useState} from 'react';

function Portfolio() {
    const [projects] = useState([
        { name: "Barber Shop", deployed: "https://barber-shop-sidemerns.herokuapp.com/", github: "https://github.com/paul88vera/barber-shop", src: "../../src/assets/barber-shop.png" },
        { name: "Movie List", deployed: "https://https://dry-mountain-13532.herokuapp.com/-shop-sidemerns.herokuapp.com/", github: "https://github.com/johnproodian/movie-list", src: "../assets/movie-list.png"},
        { name: "What's in Your Pantry?", deployed: "https://svnday.github.io/whats_in_your_pantry/", github: "https://github.com/johnproodian/whats_in_your_pantry", src: "../assets/whats-in-your-pantry.png" }
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