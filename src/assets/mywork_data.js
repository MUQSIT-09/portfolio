// src/assets/mywork_data.js
import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'
import Netflix from '../assets/Portfolio_Videos/Netflix_clone.mp4'
import Dice_Game from '../assets/Portfolio_Videos/Dice_Game.mp4'
import Currency_Converter from '../assets/Portfolio_Videos/Currency_Converter.mp4'
import Cards_Blogs from '../assets/Portfolio_Videos/Cards_Blogs.mp4'
import Portfolio from '../assets/Portfolio.png' // Ensure this import is correct
import Portfolio_vedio from '../assets/Portfolio_Videos/Portfolio.mp4'

const mywork_data = [
    {
        w_no:1,
        w_name:"Web design",
        w_video: Netflix,
        live_link: "https://686780ea41b3a696ee5adb3c--gregarious-sopapillas-ae4e01.netlify.app",
        github_link: "https://github.com/MUQSIT-09/netflix"
    },
    {
        w_no:2,
        w_name:"Web design",
        w_video: Currency_Converter,
        live_link: "https://muqsit-09.github.io/CurrencyConverters",
        github_link: "https://github.com/MUQSIT-09/CurrencyConverters"
    },
    {
        w_no:3,
        w_name:"Web design",
        w_video: Dice_Game,
        live_link: "https://muqsit-09.github.io/dicegame",
        github_link: "https://github.com/MUQSIT-09/dicegame"
    },
    {
        w_no:4,
        w_name:"Web design",
        w_video: Cards_Blogs,
        live_link: "https://muqsit-09.github.io/Cardsblogs",
        github_link: "https://github.com/MUQSIT-09/Cardsblogs"
    },
    {
        w_no:5,
        w_name:"Web design",
        w_img: Portfolio,
        w_video: Portfolio_vedio,
        live_link: window.location.href, // This ensures the link points to the current page
        github_link: "https://github.com/MUQSIT-09/portfolio"
    },
    {
        w_no:6,
        w_name:"Web design",
        w_img:project6_img
    },
]

export default mywork_data;