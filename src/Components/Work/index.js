import React from "react";

function Work() {
  const projects = [
    {
      className: 'anytime-books',
      deployed_website_link: "https://makispear.github.io/Anytime-Books/",
      repo: 'https://github.com/Makispear/Anytime-Books',
      title: "Anytime Books",
      description: 'My First Front-End Group Project',
      featured: true,
      tags: ['HTML', 'CSS', 'Bulma', 'JS', 'API'],
      testId: 'anytimebooks'
    },
    {
      className: 'homeroom',
      deployed_website_link: "https://homeroomportal.herokuapp.com/",
      repo: 'https://github.com/michellewehr/homeroom',
      title: "HomeRoom",
      description: "My First Full-Stack Group Project",
      featured: true,
      tags: ['SQL', 'Node', 'Express', 'ORM (Sequelize)'],
      testId: 'homeroom'
    },
    {
      className: "run-buddy",
      deployed_website_link: 'https://makispear.github.io/run-buddy/',
      repo: 'https://github.com/Makispear/run-buddy',
      title: 'Run Buddy',
      description: 'My First Complete Landing Page',
      featured: false,
      tags: ['HTML', 'CSS'],
      testId: 'runbuddy'
    },
    {
      className: 'weather-app',
      deployed_website_link: 'https://makispear.github.io/Weather-App/',
      repo: 'https://github.com/Makispear/Weather-App',
      title: 'Weather App',
      description: 'An application for weather forecasting',
      featured: false,
      tags: ['Js', 'Open Weather API', 'Bootstrap 5'],
      testId: 'weatherapp'
    },
    {
      className: 'kindly',
      deployed_website_link: "https://kindly-volunteer.herokuapp.com/",
      repo: "https://github.com/brentocracy/kindly",
      title: "Kindly",
      description: 'An App where users can volunteer and showcase their volunteering',
      featured: true,
      tags: ["React", "GraphQL", "MongoDB", "Mongoose", "Node", "Express"],
      testId: "kindly"
    },
    {
      className: 'star-wars',
      deployed_website_link: 'https://makispear.github.io/Star-Wars/',
      repo: 'https://github.com/Makispear/Star-Wars',
      title: 'Star Wars API',
      description: 'An Application for searching for Star Wars characters and their information',
      featured: false,
      tags: ['jQuery', 'Star Wars API'],
      testId: 'startwars'
    },
    {
      className: 'timed-coding-quiz',
      deployed_website_link: 'https://makispear.github.io/Timed-Coding-Quiz-/',
      repo: 'https://github.com/Makispear/Timed-Coding-Quiz-',
      title: 'Timed Coding Quiz',
      description: 'An Application for testing coding skills',
      featured: false,
      tags: ['JS', 'DOM Manipulation'],
      testId: 'timedcodingquiz'
    },
    {
      className: 'work-day-scheduler',
      deployed_website_link: 'https://makispear.github.io/Daily-Planner-Calandar/',
      repo: 'https://github.com/Makispear/Daily-Planner-Calandar',
      title: 'Work Day Scheduler',
      description: 'An App for organizing workdays',
      featured: false,
      tags: ['jQuery', 'Moment js', 'Bootstrap 5'],
      testId: 'workdayscheduler'
    }
  ]

  const goToRepositories = () => {
    window.open('https://github.com/Makispear?tab=repositories', '_blank', 'noopener')
  }

  const featured = projects.filter(project => project.featured)
  const notFeatured = projects.filter(project => !project.featured)

  return (
    <section id="work">
      <h2 className="section-title">My Work</h2>
      <div id="projectsContainer">
        {featured.map(project => {
          return (
            <a key={project.testId} href={project.deployed_website_link} rel="noopener noreferrer" target="_blank" className={`grid-children featured ${project.className}`}>
              <div className="project-tags">
                <h3 data-testid={project.testId}>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  {project.tags.map(item => {
                    return (
                      <span className="text-tertiary">
                        {item}
                        <span> | </span>
                      </span>
                    )
                  })}
                </p>
                <p className="repo-link">
                  <a target="_blank" href={project.repo} rel="noopener noreferrer">
                    <img title={`github repo for ${project.title}`} className="logos" src={require(`../../assets/images/github.png`).default} alt={`github logo linking to ${project.title}`} />
                  </a>
                </p>
              </div>
            </a>
          )
        })
        }
        {notFeatured.map(project => {
          return (
            <a key={project.testId} href={project.deployed_website_link} rel="noopener noreferrer" target="_blank" className={`grid-children ${project.className}`}>
              <div className="project-tags">
                <h3 data-testid={project.testId}>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  {project.tags.map(item => {
                    return (
                      <span className="text-tertiary">
                        {item}
                        <span> | </span>
                      </span>
                    )
                  })}
                </p>
                <p className="repo-link">
                  <a target="_blank" href={project.repo} rel="noopener noreferrer">
                    <img title={`github repo for ${project.title}`} className="logos" src={require(`../../assets/images/github.png`).default} alt={`github logo linking to ${project.title}`} />
                  </a>
                </p>
              </div>
            </a>
          )
        })
        }
      </div>
      <button data-testid="viewAll" onClick={goToRepositories} className="btn more">View All</button>
    </section>
  )
}

export default Work
