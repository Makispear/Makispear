import React from "react";

function Work() {
    const projects = [
        {
            className: 'anytime-books',
            deployed_website_link: "https://makispear.github.io/Anytime-Books/",
            title: "Anytime Books",
            description: "My First Front-End Group Project",
            featured: true,
            tags: ['HTML', 'CSS', 'Bulma', 'JS', 'API']
        },
        {
            className: 'homeroom',
            deployed_website_link: "https://homeroomportal.herokuapp.com/",
            title: "HomeRoom",
            description: "My First Full-Stack Group Project",
            featured: false,
            tags: ['SQL', 'Node', 'Express', 'ORM (Sequelize)']
        },
        {
            className: "run-buddy",
            deployed_website_link: 'https://makispear.github.io/run-buddy/',
            title: 'Run Buddy',
            description: 'My First Complete Landing Page',
            featured: false,
            tags: ['HTML', 'CSS']
        },
        {
            className: 'weather-app',
            deployed_website_link: 'https://makispear.github.io/Weather-App/',
            title: 'Weather App',
            description: 'An application for weather forecasting',
            featured: false,
            tags: ['Js', 'Open Weather API', 'Bootstrap 5']
        },
        {
            className: 'star-wars',
            deployed_website_link: 'https://makispear.github.io/Star-Wars/',
            title: 'Star Wars API',
            description: 'An Application for searching for Star Wars characters and their information',
            featured: false,
            tags: ['jQuery', 'Star Wars API']
        },
        {
            className: 'timed-coding-quiz',
            deployed_website_link: 'https://makispear.github.io/Timed-Coding-Quiz-/',
            title: 'Timed Coding Quiz',
            description: 'An Application for testing coding skills',
            featured: false,
            tags: ['JS', 'DOM Manipulation']
        },
        {
            className: 'work-day-scheduler',
            deployed_website_link: 'https://makispear.github.io/Daily-Planner-Calandar/',
            title: 'Work Day Scheduler',
            description: 'An App for organizing workdays',
            featured: false,
            tags: ['jQuery', 'Moment js', 'Bootstrap 5']
        }
    ]

    const featured = projects.filter(project => project.featured)
    const notFeatured = projects.filter(project => !project.featured)

    const goToRepositories = () => {
        window.open('https://github.com/Makispear?tab=repositories', '_blank', 'noopener')
    }

  return (
    <section id="work">
        <h2 className="section-title">My Work</h2>
        <div id="projectsContainer">
            {featured.map(project => {
                return (
                    <a href={`${project.deployed_website_link}`} rel="noopener noreferrer"  target="_blank" className={`grid-children ${project.className}`}>
                        <div className="project-tags">
                            <h3>{`${project.title}`}</h3>
                            <p>{`${project.description}`}</p>
                            <p>
                                {
                                    project.tags.map(item => {
                                        return (
                                            <span className="text-tertiary">
                                                {item} 
                                                <span>| </span> 
                                            </span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                    </a>
                )
            })
            }
            {notFeatured.map(project => {
                return (
                  <a href={`${project.deployed_website_link}`} rel="noopener noreferrer"  target="_blank" className={`grid-children ${project.className}`}>
                        <div className="project-tags">
                            <h3>{`${project.title}`}</h3>
                            <p>{`${project.description}`}</p>
                            <p>
                                {
                                    project.tags.map(item => {
                                        return (
                                            <span className="text-tertiary">
                                                {`${item}`} 
                                                <span>| </span> 
                                            </span>
                                        )
                                    })
                                }
                            </p>
                        </div>
                    </a>

                )
            })
            }
        </div>
        <button onClick={goToRepositories} className="btn more">View All</button>
    </section>
  )
}

export default Work
