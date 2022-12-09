import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { techIcons } from "../util components/project_skill_icons";

const {
    html,
    css,
    bootstrap,
    tailwindcss,
    js,
    jquery,
    ts,
    react,
    next,
    angular,
    vue,
    nuxt,
    python,
    ruby,
    php,
    node,
    nest,
    postgreSQL,
    mySQL,
    mongodb,
    laravel,
    redux,
    graphQL,
    apollo,
    amazon,
    nginx,
    netlify,
    webpack,
} = techIcons;

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
                <div className='my-0.5 my-4 w-28 md:w-full h-8 px-2 md:px-2.5 flex justify-center items-center'>
                    <a class="flex justify-center items-center gap-1.5 w-4/5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" href="https://github.com/niclaskato/ubuntu-portfolio" target="_blank">
                      Star <img className="w-5 md:w-5" alt="nicholas's projects" src="https://img.icons8.com/officel/512/star.png" />
                    </a>
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
                <div className="md:flex hidden flex-col w-1/5 md:w-1/6 text-sm overflow-y-auto windowMainScreen border-r border-black font-sans">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20 font-sans"}>
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
                <img className="w-full rounded-circle border-2" src="./images/logos/niclasmoji.png" alt="Nicholas Kato Logo" />
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
                <li className="mt-3 list-time text-xl font-sans"> When I am free, I like to spend my time reading books, playing games or writing <a className="text-pink-600 font-bold" href="https://medium.com/@nicholas-blog" target="_blank"> some blogs.</a></li>
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
        // {
        //     name: "UbuntuOS Portfolio",
        //     date: "Apr 2021",
        //     link: "https://github.com/niclaskato/ubuntu-portfolio",
        //     description: [
        //         "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & tailwind CSS",
        //     ],
        //     domains: ["javascript", "next.js", "tailwindcss"]
        // },
        {
            name: "Anshinkai",
            date: "Jul 2022",
            link: "https://anshinkai-gr.jp/",
            description: [
                "This site was developed to offer guarantor services to individuals seeking cosigners for housing leases.",
                "Running web and application servers in the cloud to host dynamic websites using Amazon Web Service(AWS)."
            ],
            domains: [laravel, php, mySQL, js, css]
        },
        {
            name: "Baron Nakamura",
            date: "Apr 2022",
            link: "https://baron-nakamura.com/",
            description: [
                "It is for Cradle of the Universe.",
                "Developed UIs using ReactJS with JavaScript and TypeScript.",
                "Participated in the full lifecycle of development for company web applications using JS framework."
            ],
            domains: [react, redux, jquery, js, amazon]
        },
        {
            name: "Club MED",
            date: "Nov 2021",
            link: "https://www.clubmed.co.jp/",
            description: [
                "It specialises in luxury all-inclusive holidays.",
                "Have the interface test so that web server handle all application requests without any service denial.",
            ],
            domains: [node, react, apollo, graphQL, nginx, amazon]
        },
        {
            name: "Elm Shelter",
            date: "Aug 2021",
            link: "https://elm-lang.jp/",
            description: [
                "Elm-jp is a group of Elm users based in Japan who cherish the gentle feeling of admiring animals.",
                "Have the usability testing so that menus, buttons, or Links to different pages on your site should be easily visible and consistent on all webpages.",
            ],
            domains: [ruby, tailwindcss, js, amazon]
        },
        {
            name: "Daellenbach Swich",
            date: "Jan 2021",
            link: "https://daellenbach.ch/",
            description: [
                "Their traditional Thun company has been a competent partner for all plastering and painting work for our customers since 1949.",
            ],
            domains: [vue, ts, nuxt, nginx]
        },
        {
            name: "Optimum Results",
            date: "Oct 2020",
            link: "http://optimumresults.co.nz/",
            description: [
                "They’re paid search scientists who specialise in optimising Google and Bing Ads accounts.",
                "Implemented SEO strategy (keywords, meta data, and link-building, and technical components)",
            ],
            domains: [python, nginx, postgreSQL, amazon, bootstrap]
        },
        {
            name: "Harcouts Holiday",
            date: "May 2020",
            link: "https://www.harcourtsholidayhomes.co.nz/",
            description: [
                "They’re a small, local team who have the utmost respect and care when it comes to ensuring your holiday stay is the best one it possibly could be. All their guests enjoy an outstanding level of service that is second to none, as are their beautiful private holiday homes.",
            ],
            domains: [nest, node, nginx, postgreSQL]
        },
        {
            name: "Random Shapes",
            date: "Feb 2020",
            link: "https://randomshapes.com/",
            description: [
                "They're Random Shapes, They Build Minimum Viable Products and Help Teams Grow.",
            ],
            domains: [vue, webpack, nginx, netlify]
        },
        {
            name: "LMFX",
            date: "Dec 2019",
            link: "https://lmfx.com/",
            description: [
                "When it comes to trading, LMFX is the broker you are looking for, that offers advanced institutional and retail trading conditions to a global audience. They have thought of everything you might need, to ensure a smooth hassle-free trading experience.",
            ],
            domains: [next, react, jquery, node, bootstrap]
        },
        {
            name: "DOMINOS",
            date: "Oct 2019",
            link: "https://www.dominos.com.jm/",
            description: [
                "Domino's Pizza Jamaica, Order Pizza Online for Delivery or Serve.",
            ],
            domains: [node, nest, angular, jquery, bootstrap]
        }
        ,
        {
            name: "Code Editor",
            date: "Dec 2018",
            link: "https://github.com/niclaskato/Editor.io/",
            description: [
                "Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage.",
            ],
            domains: [html, css, js, bootstrap]
        },
        {
            name: "Bits-0f-C0de",
            date: "Jun 2018",
            link: "https://github.com/niclaskato/Bits-0f-C0de/",
            description: [
                "My personal blog page build with Next.js and Tailwind Css which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
            ],
            domains: [html, css, js, bootstrap]
        }
    ];

    return (
        <>
            <div className="font-bold relative text-2xl mt-2 md:mt-5 mb-4">
            🌟Projects🌟
            </div>
            {/* <iframe src="https://github.com/niclaskato/" title="nicholas kato" className='my-4 w-5/6 md:w-3/4' ></iframe> */}
            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full p-5 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className="text-base font-bold md:text-xl mr-2">{project.name}</div>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc text-base md:text-lg mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => (
                                                <img style={{height: 35, margin: 5}} key={index} src={domain} />
                                            )) : null)
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
