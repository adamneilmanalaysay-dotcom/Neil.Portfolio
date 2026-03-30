const portfolioData = {
    name: "Manalaysay, Adam Neil",
    about: "Currently 3rd year student at STI College - Malolos, I love learning new things and technologies",
    email: "adamneilmanalaysay@gmail.com",
    techStacks: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ],
    works: [],
    webinars: [],
    socials: [
        { name: "GitHub", link: "https://github.com/adamneilmanalaysay-dotcom", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Facebook", link: "https://www.facebook.com/adamneil.manalaysay", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
        { name: "LinkedIn", link: "https://www.linkedin.com/in/adam-neil-manalaysay-28928b3bb/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
        { name: "Instagram", link: "https://www.instagram.com/adams.a.fool/", icon: "InstaIcon.png" }
    ]
};

function createPortfolio(data) {
    const root = document.getElementById('root');
    if (!root) return;
    root.innerHTML = `
        <nav class="navbar">
            <div class="nav-brand"><a href="#about">${data.name}</a></div>
            <input type="checkbox" id="nav-toggle" class="nav-toggle" />
            <label for="nav-toggle" class="nav-toggle-label">
                <span></span>
            </label>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#techstack">Tech Stacks</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#webinars">Webinars</a></li>
                <li><a href="#socials">Socials</a></li>
                <li><button id="darkModeToggle" class="dark-mode-toggle" title="Toggle dark mode">💡</button></li>
            </ul>
        </nav>
        <header id="about">
            <h1 class="main-name-animated">${data.name}</h1>
            <p class="subtitle">Aspiring Developer | Portfolio</p>
            <p class="motivation-quote">Fear of failing is the source of my motivation</p>
        </header>
        <main>
            <section class="about">
                <h2>About Me</h2>
                <p>${data.about}</p>
            </section>
            <section class="tech-stack" id="techstack">
                <h2>Tech Stacks</h2>
                <div class="stacks-group">
                    <div class="stacks bordered-row">
                        ${data.techStacks.slice(0, 4).map(stack => `
                            <div class="stack">
                                <img src="${stack.icon}" alt="${stack.name}"/>
                                <span>${stack.name}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="stacks bordered-row">
                        ${data.techStacks.slice(4, 8).map(stack => `
                            <div class="stack">
                                <img src="${stack.icon}" alt="${stack.name}"/>
                                <span>${stack.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
            <section class="contact" id="contact">
                <h2>Contact</h2>
                <p>Email: ${data.email}</p>
            </section>
            <section class="works" id="works">
                <h2>My Works</h2>
                <div class="work-bordered work-carousel">
                    <button class="work-nav work-nav-left" id="workNavLeft" aria-label="Previous Work">&#8592;</button>
                    <div class="work-carousel-content">
                        <div class="work-title" id="workTitle">Student Register</div>
                        <img src="StudentRegister.JPG" alt="Student Register" class="work-img" id="workImg" />
                    </div>
                    <button class="work-nav work-nav-right" id="workNavRight" aria-label="Next Work">&#8594;</button>
                </div>
                ${data.works.length > 0 ? `<ul>${data.works.map(work => `<li><strong>${work.title}</strong>: ${work.description}</li>`).join('')}</ul>` : ''}
            </section>
            <section class="webinars" id="webinars">
                <h2>My Webinars & Certificates</h2>
                <div class="webinar-bordered">
                    <img src="SAP.JPG" alt="SAP Webinar" class="webinar-img" />
                    <div class="webinar-desc">
                        <strong>SAP S/4HANA Webinar</strong><br/>
                        participated in<br/>
                        SD, MM, PP, FI, CO modules of S/4HANA<br/>
                        using Global Bike
                    </div>
                </div>
                <div class="webinar-bordered">
                    <div class="webinar-desc">
                        <strong>Bridging Knowledge: Exploring Digital Divide, Cybersecurity and OS Trends, Professionalism in the IT Industry and Programming</strong><br/>
                        This seminar was conducted to provide valuable insights and in-depth understanding of various critical topics in the field of Information Technology<br/>
                        <em>Held on December 10, 2024</em>
                    </div>
                </div>
                ${data.webinars.length > 0 ? `<ul>${data.webinars.map(webinar => `<li><a href="${webinar.link}" target="_blank">${webinar.title}</a></li>`).join('')}</ul>` : ''}
            </section>
            <section class="socials" id="socials">
                <h2>Social Media</h2>
                ${data.socials.length > 0 ? `<div class="social-icons">${data.socials.map(social => `
                    <a href="${social.link}" target="_blank" class="social-icon-link" title="${social.name}">
                        <img src="${social.icon}" alt="${social.name}" class="social-icon-img"/>
                    </a>
                `).join('')}</div>` : '<p>No social media links added yet.</p>'}
            </section>
        </main>
        <footer>
            <p>&copy; ${data.name} 2026</p>
        </footer>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    createPortfolio(portfolioData);

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    const navToggle = document.getElementById('nav-toggle');
                    if (navToggle && navToggle.checked) navToggle.checked = false;
                }
            }
        });
    });

    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '🌙';
        } else {
            darkModeToggle.textContent = '💡';
        }
    });

    const worksData = [
        { title: "Student Register", img: "StudentRegister.JPG", alt: "Student Register" },
        { title: "Figma", img: "Figma.JPG", alt: "Figma" },
        { title: "Queueing", img: "Queue.JPG", alt: "Queueing" }
    ];
    let workIndex = 0;
    function updateWorkCarousel() {
        document.getElementById('workTitle').textContent = worksData[workIndex].title;
        const img = document.getElementById('workImg');
        img.src = worksData[workIndex].img;
        img.alt = worksData[workIndex].alt;
    }
    const navLeft = document.getElementById('workNavLeft');
    const navRight = document.getElementById('workNavRight');
    if (navLeft && navRight) {
        navLeft.onclick = function() {
            workIndex = (workIndex - 1 + worksData.length) % worksData.length;
            updateWorkCarousel();
        };
        navRight.onclick = function() {
            workIndex = (workIndex + 1) % worksData.length;
            updateWorkCarousel();
        };
    }
});
