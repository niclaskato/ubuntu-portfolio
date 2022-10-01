import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutNiclas extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "skills": <Skills />,
            "projects": <Projects />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? "bg-orange-800 bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 h-12 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className="w-5 md:w-5" alt="about nicholas" src="https://img.icons8.com/office/344/user.png" />
                    <span className="ml-1 md:ml-2 text-gray-50 text-lg">Overview</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? "bg-orange-800 bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 h-12 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className="w-5 md:w-5" alt="nicholas's skills" src="https://img.icons8.com/external-justicon-flat-justicon/344/external-setting-notifications-justicon-flat-justicon.png" />
                    <span className="ml-1 md:ml-2 text-gray-50 text-lg">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? "bg-orange-800 bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 h-12 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className="w-5 md:w-5" alt="nicholas's projects" src="https://img.icons8.com/color/344/project.png" />
                    <span className="ml-1 md:ml-2 text-gray-50 text-lg">Projects</span>
                </div>
                {/* <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    <iframe src="https://github.com/sponsors/niclaskato/button" title="Sponsor niclaskato" width={"100%"} height={"100%"} ></iframe>
                </div> */}
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/5 md:w-1/6 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutNiclas;

export const displayAboutNiclas = () => {
    return <AboutNiclas />;
}

function About() {
    return (
        <>
            <div className="w-28 md:w-32 mt-8 bg-white rounded-full">
                <img className="w-full rounded-circle" src="./images/logos/niclasmoji.png" alt="Nicholas Kato Logo" />
            </div>
            <div className="mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Nicholas Kato</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-orange-500 font-bold">Senior Full Stack Developer!</span></div>
            </div>
            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-full md:w-5/6 emoji-list">
                <li className="list-pc text-xl font-sans">
                    I'm a a skilled and motivated <span className="text-pink-600 font-bold">Front-end & Back-end developer</span> currently pursuing <span className="font-bold text-pink-600">Artificial Intelligence and Bots</span> for the modern web development.
                    <br />I've already developed a dozens of websites with <span className="text-pink-600 font-bold">React, Vue, Node, and Python</span> and now I'm looking for a remote opportunity of full time or part time from IT companies!
                    <br />( Mail me up <a className='text-pink-600 font-bold' href='mailto:niclas.kato92@gmail.com'> @niclas.kato92@gmail.com </a> )
                </li>
                <li className="mt-3 list-building text-xl font-sans"> I love building <span className="text-pink-600 font-bold">awesome websites and products</span> that need wonderful services.</li>
                <li className="mt-3 list-time text-xl font-sans"> When I am free, I like to spend my time reading books, playing games or writing <a className="text-pink-600 font-bold" href="https://medium.com/@niclas.kato92/" target="_blank"> some blogs.</a></li>
            </ul>
            <br />
        </>
    )
}

function Skills() {
    return (
        <>
            <br />
            <div className="font-medium relative text-2xl mt-1 md:mt-1">
                Technical Skills
            </div>
            <ul className="tracking-tight text-lg w-10/12 emoji-list font-sans">
                <li className="list-arrow text-xl mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages and frameworks.
                </li>
                <li className="list-arrow text-xl mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange"> React & Vue and Node & Python! </strong></div>
                </li>
                <li className="list-arrow text-xl mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <br />
            <div className="w-full md:w-10/12 flex mt-4">
                <div className="text-xl text-center w-1/2 font-bold">Languages & Tools</div>
                <div className="text-xl text-center w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-4 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=for-the-badge&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="nicholas javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="nicholas typescript" />
                        <img className="m-1" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="nicholas CSS3" />
                        <img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=for-the-badge&logo=html5&logoColor=ffffff" alt="nicholas HTML5" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=ffffff" alt="nicholas python" />
                        <img className="m-1" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="nicholas PHP" />
                        <img className="m-1" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="nicholas mysql" />
                        <img className="m-1" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="nicholas postgresql" />
                        <img className="m-1" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="nicholas mongodb" />
                        <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=for-the-badge&logo=sass&logoColor=ffffff" alt="nicholas SASS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=for-the-badge&logo=git&logoColor=%23ffffff" alt="nicholas git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=ffffff" alt="nicholas firebase" className="m-1" />
                        <img src="https://img.shields.io/badge/Firefox_Browser-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white" alt="nicholas mozila firefox" className="m-1" />
                        <img src="https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white" alt="nicholas google chrome" className="m-1" />
                        <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" alt="nicholas jira" className="m-1" />
                        <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="nicholas figma" className="m-1" />
                        <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" alt="nicholas trello" className="m-1" />
                    </div>
                </div>
                <div className="px-4 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=ffffff" alt="nicholas next" />
                        <img className="m-1" src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=ffffff" alt="nicholas react" />
                        <img className="m-1" src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="nicholas vue" />
                        <img className="m-1" src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="nicholas flutter" />
                        <img className="m-1" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="nicholas django" />
                        <img className="m-1" src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="nicholas laravel" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="nicholas tailwind css" />
                        <img className="m-1" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="nicholas bootstrap" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=for-the-badge&logo=Node.js&logoColor=ffffff" alt="nicholas node.js" className="m-1" />
                        <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="nicholas jquery" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="nicholas redux" />
                        <img className="m-1" src="https://img.shields.io/badge/Alpine_Linux-0D597F?style=for-the-badge&logo=alpine-linux&logoColor=white" alt="nicholas linux" />
                        <img className="m-1" src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="nicholas google cloud" />
                        <img className="m-1" src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="nicholas aws" />
                        <img className="m-1" src="https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown" alt="nicholas mocha" />
                        <img className="m-1" src="https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red" alt="nicholas chai" />
                    </div>
                </div>
            </div>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "UbuntuOS Portfolio",
            date: "Apr 2021",
            link: "https://github.com/niclaskato/ubuntu-portfolio",
            description: [
                "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & tailwind CSS",
            ],
            domains: ["javascript", "next.js", "tailwindcss"]
        },
        {
            name: "Chrome Extension React Bolierplate",
            date: "Dec 2021",
            link: "https://github.com/vivek9patel/chrome-extension-react-boilerplate",
            description: [
                "A boilerplate code to build a chrome extension with react and webpack",
            ],
            domains: ["javascript", "chrome-extension"]
        },
        {
            name: "CodeConnect",
            date: "Nov 2021",
            link: "https://github.com/vivek9patel/CodeConnect-frontend",
            description: [
                "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
            ],
            domains: ["javascript", "tailwindcss"]
        },
        {
            name: "Ad Free Spotify",
            date: "Jun 2021",
            link: "https://github.com/vivek9patel/ad-free-spotify",
            description: [
                "Chrome extension to automatically mute/unmute Spotify tab when Advertisement starts and ends!",
            ],
            domains: ["javascript", "chrome-extension"]
        },
        {
            name: "economist.com Unlocked",
            date: "Mar 2021",
            link: "https://github.com/vivek9patel/economist.com-unlocked",
            description: [
                "A chrome extension to read Paid Articles for Free & with no Ads, no subscription, no memberships!",
            ],
            domains: ["javascript", "chrome-extension"]
        },
        {
            name: "Flutter banking app",
            date: "Jan 2021",
            link: "https://github.com/vivek9patel/flutter-banking-app",
            description: [
                "A Flutter & Firebase project for creating transactions between different Users and displaying the history of transactions done by all.",
            ],
            domains: ["flutter", "firestore", "dart", "firebase auth"]
        },
        {
            name: "CPU scheduling application",
            date: "Dec 2020",
            link: "https://github.com/vivek9patel/CPU-Scheduling-APP-React-Native",
            description: [
                "React Native Application to visualize the CPU Scheduling algorithms with different Processes and Animations with gannt chart.",
            ],
            domains: ["react-native", "javascript"]
        },
        {
            name: "Meditech Healthcare WebApp",
            date: "Nov 2020",
            link: "https://github.com/vivek9patel/Meditech-Healthcare",
            description: [
                "Developed Web Application to predict and diagnose diseases from x-ray images.",
            ],
            domains: ["javascript", "html5", "sass", "firebase", "tensorflow"]
        },
        {
            name: "Problem Recommendation System",
            date: "Sep 2020",
            link: "https://github.com/vivek9patel/Improve-Codeforces",
            description: [
                "Django web application to suggest practice problems from the areas in which the user struggles to get pass in code-forces.",
            ],
            domains: ["django", "python", "codeforces-api", "javascript"]
        },
        {
            name: "Cleanliness Automation",
            date: "Dec 2019",
            link: "https://github.com/vivek9patel/CPU-Scheduling-APP-React-Native",
            description: [
                "Developed Web Applications to automate Garbage collection and extraction systems for SSIP hackathon",
            ],
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-5 mb-4">
                Projects
            </div>
            <iframe src="https://github.com/niclaskato/" title="nicholas kato" className='my-4 w-5/6 md:w-3/4' ></iframe>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=vivek9patel&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
