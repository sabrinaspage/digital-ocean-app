import React from "react";
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-hexagon">
            <svg viewBox="0 0 48 48">
              <polygon points="24,4 41,14 41,34 24,44 7,34 7,14" fill="none" stroke="#8DE9FF" strokeWidth="2"/>
            </svg>
            <span className="logo-text">S</span>
          </div>
        </div>
        <nav className="navbar">
          <div className="nav-menu">
            <a href="#about" className="nav-item"><span className="nav-number">01.</span> About</a>
            <a href="#experience" className="nav-item"><span className="nav-number">02.</span> Experience</a>
            <a href="#work" className="nav-item"><span className="nav-number">03.</span> Work</a>
            <a href="#contact" className="nav-item"><span className="nav-number">04.</span> Contact</a>
          </div>
          <a href="/resume.pdf" className="btn-outline">Resume</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <p className="hero-intro">Hi, my name is</p>
        <h1 className="hero-title">Sabrina Reyes.</h1>
        <h2 className="hero-subtitle">I build things for the web.</h2>
        <p className="hero-description">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products at <span className="highlight">Upstatement</span>.
        </p>
        <a href="#contact" className="btn-outline btn-large">Check out my Resume!</a>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">01.</span> About Me
          </h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi stranger! My name is Sabrina. I have been coding for several years now, starting in college and now at my job at <span className="highlight">Vouch Insurance</span>.
            </p>
            <p>
              Before entering Computer Science, I loved the research and exploration aspects of technology, but I actually didn't connect the dots between science and computer science. I didn't know there would be programming! The irony now is, I code all the time now! You know why? Because I absolutely adore this field.
            </p>
            <p>
              I was first introduced to coding not in college, but in middle school when I was on <span className="highlight">Neopets</span>. You would have an account and own up to four Neopets. You could build an HTML page on each Neopet's pet page and add all sorts of fun stuff with CSS. Neopets is what introduced me to PhotoShop too, which explains why I love graphic design platforms like Canva so much!
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <div className="tech-list">
              <div className="tech-column">
                <div className="tech-item">▸ Firebase</div>
                <div className="tech-item">▸ React</div>
                <div className="tech-item">▸ Node.js</div>
              </div>
              <div className="tech-column">
                <div className="tech-item">▸ TypeScript</div>
                <div className="tech-item">▸ Material UI</div>
                <div className="tech-item">▸ Netlify</div>
              </div>
              <div className="tech-column">
                <div className="tech-item">▸ Figma</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-border"></div>
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">02.</span> Where I've Worked
          </h2>
          <div className="section-line"></div>
        </div>
        <p className="experience-intro">
          As of August 2022, I am still early in my career, but I think internships are still a valid means of work. Thus, here you will find my technical work experiences: <span className="highlight">https://www.linkedin.com/in/sab-reyes/details/experience/</span>
        </p>
        <div className="experience-container">
          <div className="experience-tabs">
            <button className="tab-button active">Vouch Insurance</button>
            <button className="tab-button">Colombia<br/>University IT</button>
            <button className="tab-button">Beyond<br/>(formerly<br/>Brooklyness)</button>
          </div>
          <div className="experience-content">
            <h3 className="job-title">
              Software Engineer I <span className="at-symbol">@</span> <span className="highlight">Vouch Insurance</span>
            </h3>
            <p className="job-date">June 2021 - Present</p>
            <ul className="job-responsibilities">
              <li>Designing, building, and maintaining full-stack, customer-facing features to power our insurance application and partnership integrations.</li>
              <li>Working on the core front-end infrastructure for our customer experience.</li>
              <li>Collaborating with team members on priorities and technical specifications and assisting in the onboarding of new engineers.</li>
              <li>Participating in brainstorming, retrospectives, sprint planning, and team game times!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">03.</span> Some Things I've Built
          </h2>
          <div className="section-line"></div>
        </div>
        
        {/* Featured Project 1 - RobotaHQ */}
        <div className="featured-project">
          <div className="project-image project-image-left"></div>
          <div className="project-content project-content-right">
            <p className="project-label">Featured Project</p>
            <h3 className="project-title">RobotaHQ</h3>
            <div className="project-description">
              <p>
                The Russian invasion of Ukraine has caused the greatest humanitarian crisis in Europe since the Second World War.
              </p>
              <p>
                Robota supports Ukrainians in finding their next opportunity on their career journey and connects prospective employers with Ukrainian talent.
              </p>
            </div>
            <ul className="project-tech">
              <li>Django</li>
              <li>Python</li>
              <li>GCP</li>
              <li>TypeScript</li>
              <li>React</li>
            </ul>
            <ul className="project-tech">
              <li>Figma</li>
              <li>Netlify</li>
              <li>Bootstrap</li>
              <li>Git</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://example.com" aria-label="External Link">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Featured Project 2 - Futurview */}
        <div className="featured-project featured-project-reverse">
          <div className="project-content project-content-left">
            <p className="project-label">Featured Project</p>
            <h3 className="project-title">Futurview</h3>
            <div className="project-description">
              <p>
                Empowering marginalized communities through accessible interview preparation. Sometimes, we need someone to practice interviewing with; however, we might not have a person available at all times.
              </p>
              <p>
                With Futerview, we are capable of interviewing with an AI that makes practice possible!
              </p>
            </div>
            <ul className="project-tech">
              <li>ReactJS</li>
              <li>ChakraUI</li>
              <li>AssemblyAI</li>
              <li>Firebase</li>
              <li>Netlify</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://example.com" aria-label="External Link">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="project-image project-image-right"></div>
        </div>

        {/* Featured Project 3 - Skript */}
        <div className="featured-project">
          <div className="project-image project-image-left"></div>
          <div className="project-content project-content-right">
            <p className="project-label">Featured Project</p>
            <h3 className="project-title">Skript</h3>
            <div className="project-description">
              <p>
                Got distracted by some sudden event? We got your back! Using Skript, you can automatically and manually record snippets of your meetings and lectures without the hassle of going through the entire recording.
              </p>
              <p>
                Leveraging bleeding-edge technologies & with the power of advanced Machine Learning, users' faces (along with their sentiments) are tracked with user's consent and then synchronously mapped with the transcript of the recorded content to generate accurate time-stamped content that users can go through. In addition, users can directly ask questions to generate relevant answers.
              </p>
            </div>
            <ul className="project-tech">
              <li>ReactJS</li>
              <li>MaterialUI</li>
              <li>Netlify</li>
              <li>CockroachDB</li>
            </ul>
            <a href="#" className="btn-outline">Learn More</a>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="other-projects">
          <h3 className="other-projects-title">Other Noteworthy Projects</h3>
          <a href="#" className="view-archive">view the archive</a>
          
          <div className="projects-grid">
            {/* Project Card 1 */}
            <div className="project-card">
              <div className="card-header">
                <svg className="folder-icon" viewBox="0 0 48 48" width="48" height="48">
                  <path fill="none" stroke="#8DE9FF" strokeWidth="2" d="M8 11h13l3 3h16v21H8z"/>
                </svg>
                <a href="#" className="card-link">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
              <h4 className="card-title">Integrating Algolia Search with WordPress Multisite</h4>
              <p className="card-description">Building a custom multisite compatible WordPress plugin to build global search with Algolia.</p>
              <ul className="card-tech">
                <li>Algolia</li>
                <li>WordPress</li>
                <li>PHP</li>
              </ul>
            </div>

            {/* Project Card 2 */}
            <div className="project-card">
              <div className="card-header">
                <svg className="folder-icon" viewBox="0 0 48 48" width="48" height="48">
                  <path fill="none" stroke="#8DE9FF" strokeWidth="2" d="M8 11h13l3 3h16v21H8z"/>
                </svg>
                <div className="card-links">
                  <a href="#" className="card-link">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="card-link">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </div>
              <h4 className="card-title">Time to Have More Fun</h4>
              <p className="card-description">A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS.</p>
              <ul className="card-tech">
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Firebase</li>
              </ul>
            </div>

            {/* Project Card 3 */}
            <div className="project-card">
              <div className="card-header">
                <svg className="folder-icon" viewBox="0 0 48 48" width="48" height="48">
                  <path fill="none" stroke="#8DE9FF" strokeWidth="2" d="M8 11h13l3 3h16v21H8z"/>
                </svg>
                <a href="#" className="card-link">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
              <h4 className="card-title">Building a Headless Mobile App CSS From Scratch</h4>
              <p className="card-description">Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement.</p>
              <ul className="card-tech">
                <li>Node</li>
                <li>Express</li>
                <li>Firebase</li>
                <li>Vue</li>
              </ul>
            </div>

            {/* Project Card 4 */}
            <div className="project-card">
              <div className="card-header">
                <svg className="folder-icon" viewBox="0 0 48 48" width="48" height="48">
                  <path fill="none" stroke="#8DE9FF" strokeWidth="2" d="M8 11h13l3 3h16v21H8z"/>
                </svg>
                <div className="card-links">
                  <a href="#" className="card-link">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="card-link">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </div>
              <h4 className="card-title">OctoProfile</h4>
              <p className="card-description">A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.</p>
              <ul className="card-tech">
                <li>Next.js</li>
                <li>Chart.js</li>
                <li>GitHub API</li>
              </ul>
            </div>

            {/* Project Card 5 */}
            <div className="project-card">
              <div className="card-header">
                <svg className="folder-icon" viewBox="0 0 48 48" width="48" height="48">
                  <path fill="none" stroke="#8DE9FF" strokeWidth="2" d="M8 11h13l3 3h16v21H8z"/>
                </svg>
                <div className="card-links">
                  <a href="#" className="card-link">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="card-link">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </div>
              <h4 className="card-title">Google Keep Clone</h4>
              <p className="card-description">A simple Google Keep clone built with Vue and Firebase.</p>
              <ul className="card-tech">
                <li>Vue</li>
                <li>Firebase</li>
              </ul>
            </div>

            {/* Project Card 6 */}
            <div className="project-card">
              <div className="card-header">
                <svg className="folder-icon" viewBox="0 0 48 48" width="48" height="48">
                  <path fill="none" stroke="#8DE9FF" strokeWidth="2" d="M8 11h13l3 3h16v21H8z"/>
                </svg>
                <a href="#" className="card-link">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
              <h4 className="card-title">Apple Music Embeddable Web Player Widget</h4>
              <p className="card-description">Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging <span className="highlight">MusicKit.js</span>. Read more about this project on <span className="highlight">9to5Mac</span>.</p>
              <ul className="card-tech">
                <li>MusicKit.js</li>
                <li>JS</li>
                <li>SCSS</li>
              </ul>
            </div>
          </div>

          <button className="btn-outline btn-large show-more">Show More</button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <p className="contact-number">04. What's Next?</p>
        <h2 className="contact-title">Don't Leave Me Hangin'!</h2>
        <p className="contact-description">
          Although I'm not currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:sabreyes01@gmail.com" className="btn-outline btn-large">Say Hello</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-credit">
          Built by Sabrina Reyes<br/>
          Designed by Nicholas Ikenma
        </p>
        <div className="footer-stats">
          <div className="stat">
            <svg viewBox="0 0 20 20" width="20" height="20">
              <path fill="currentColor" d="M10 1l2.5 6.5L19 8.5l-5.5 4.5L15 20l-5-3.5L5 20l1.5-7L1 8.5l6.5-1L10 1z"/>
            </svg>
            <span>5,209</span>
          </div>
          <div className="stat">
            <svg viewBox="0 0 20 20" width="20" height="20">
              <path fill="currentColor" d="M6 3a3 3 0 0 1 0 6v8h2V9a5 5 0 0 0 5-5V3H6zm8 8a3 3 0 0 1 0 6H6v-2h8a3 3 0 0 0 0-6h-2V3h2a5 5 0 0 1 0 10z"/>
            </svg>
            <span>2,420</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
