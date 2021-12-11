import React from "react";

function Work() {
    const projects = [
        {
            className: 'anytime-books',
            deployed_website_link: "https://makispear.github.io/Anytime-Books/",
            title: "Anytime Books",
            description: 'My First Front-End Group Project',
            featured: true,
            tags: ['HTML', 'CSS', 'Bulma', 'JS', 'API'],
            testId: 'anytimebooks'
        },
        {
            className: 'homeroom',
            deployed_website_link: "https://homeroomportal.herokuapp.com/",
            title: "HomeRoom",
            description: "My First Full-Stack Group Project",
            featured: false,
            tags: ['SQL', 'Node', 'Express', 'ORM (Sequelize)'],
            testId: 'homeroom'
        },
        {
            className: "run-buddy",
            deployed_website_link: 'https://makispear.github.io/run-buddy/',
            title: 'Run Buddy',
            description: 'My First Complete Landing Page',
            featured: false,
            tags: ['HTML', 'CSS'],
            testId: 'runbuddy'
        },
        {
            className: 'weather-app',
            deployed_website_link: 'https://makispear.github.io/Weather-App/',
            title: 'Weather App',
            description: 'An application for weather forecasting',
            featured: false,
            tags: ['Js', 'Open Weather API', 'Bootstrap 5'],
            testId: 'weatherapp'
        },
        {
            className: 'star-wars',
            deployed_website_link: 'https://makispear.github.io/Star-Wars/',
            title: 'Star Wars API',
            description: 'An Application for searching for Star Wars characters and their information',
            featured: false,
            tags: ['jQuery', 'Star Wars API'],
            testId: 'startwars'
        },
        {
            className: 'timed-coding-quiz',
            deployed_website_link: 'https://makispear.github.io/Timed-Coding-Quiz-/',
            title: 'Timed Coding Quiz',
            description: 'An Application for testing coding skills',
            featured: false,
            tags: ['JS', 'DOM Manipulation'],
            testId: 'timedcodingquiz'
        },
        {
            className: 'work-day-scheduler',
            deployed_website_link: 'https://makispear.github.io/Daily-Planner-Calandar/',
            title: 'Work Day Scheduler',
            description: 'An App for organizing workdays',
            featured: false,
            tags: ['jQuery', 'Moment js', 'Bootstrap 5'],
            testId: 'workdayscheduler'
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
            {/* <!-- ANYTIME BOOKS  --> */}
            <a target="_blank" className="grid-children featured anytime-books" href="https://makispear.github.io/Anytime-Books/">
                <div className="project-tags">
                    <h3>Anytime Books</h3>
                    <p>My First Front-End Group Project</p>
                    <p>
                        <span className="text-tertiary">
                            HTML
                        </span> |
                        <span className="text-tertiary">
                            CSS
                        </span> |
                        <span className="text-tertiary">
                            Bulma
                        </span> |
                        <span className="text-tertiary">
                            JS
                        </span>
                        |
                        <span className="text-tertiary">
                            API
                        </span>
                    </p>
                </div>
            </a>
            {/* <!-- HOMEROOM  --> */}
            <a target="_blank" className="grid-children featured homeroom" href="https://homeroomportal.herokuapp.com/">
                <div className="project-tags">
                    <h3>HomeRoom</h3>
                    <p>My First Full-Stack Group Project</p>
                    <p>
                        <span className="text-tertiary">
                            MySQL
                        </span> |
                        <span className="text-tertiary">
                            Node
                        </span> |
                        <span className="text-tertiary">
                            Express
                        </span> |
                        <span className="text-tertiary">
                            ORM (Sequelize)
                        </span>
                    </p>
                </div>
            </a>
            {/* <!-- RUN BUDDY  --> */}
            <a target="_blank" className="grid-children run-buddy" href="https://makispear.github.io/run-buddy/">
                <div className="project-tags">
                    <h3>Run Buddy</h3>
                    <p>My First Complete Landing Page</p>
                    <p>
                        <span className="text-tertiary">
                            HTML
                        </span> |
                        <span className="text-tertiary">
                            CSS
                        </span>
                    </p>
                </div>
            </a>
            {/* <!-- WEATHER APP  --> */}
            <a target="_blank" className="grid-children weather-app" href="https://makispear.github.io/Weather-App/">
                <div className="project-tags">
                    <h3>Weather App</h3>
                    <p>API</p>
                    <p>
                        <span className="text-tertiary">
                            Plain JS
                        </span> |
                        <span className="text-tertiary">
                            Open Weather API
                        </span> |
                        <span className="text-tertiary">
                            Bootstrap 5
                        </span>
                    </p>
                </div>
            </a>
             {/* <!-- STAR WARS  --> */}
             <a target="_blank" className="grid-children star-wars" href="https://makispear.github.io/Star-Wars/">
                <div className="project-tags">
                    <h3>Star Wars API</h3>
                    <p>jQuery & API</p>
                    <p>
                        <span className="text-tertiary">
                            JQuery
                        </span> |
                        <span className="text-tertiary">
                            Star Wars API
                        </span>
                    </p>
                </div>
            </a>
            {/* <!-- TIMED CODING QUIZ  --> */}
            <a target="_blank" className="grid-children timed-coding-quiz" href="https://makispear.github.io/Timed-Coding-Quiz-/">
                <div className="project-tags">
                    <h3>Timed Coding Quiz</h3>
                    <p>DOM JavaScript</p>
                    <p>
                        <span className="text-tertiary">
                            Plain JS
                        </span> |
                        <span className="text-tertiary">
                            DOM Manipulation
                        </span>
                    </p>
                </div>
            </a>
            <a target="_blank" className="grid-children work-day-scheduler" href="https://makispear.github.io/Daily-Planner-Calandar/">
                <div className="project-tags">
                    <h3>Work Day Scheduler</h3>
                    <p>Third Party APIs</p>
                    <p>
                        <span className="text-tertiary">
                            jQuery
                        </span> |
                        <span className="text-tertiary">
                            Moment js
                        </span>
                        |
                        <span className="text-tertiary">
                            Bootstrap
                        </span>
                    </p>
                </div>
            </a>
        </div>
        <button data-testid="viewAll" onClick={goToRepositories} className="btn more">View All</button>
    </section>
  )
}

export default Work
