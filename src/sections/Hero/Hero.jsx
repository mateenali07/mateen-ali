import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/MATEEN ALI CV.pdf';
import { ThemeContext } from '../../common/ThemeContext';
import { useContext } from 'react'; // یہ import کریں


function Hero() {
const { theme, toggleTheme } = useContext(ThemeContext); // ✅ useContext کا استعمال کریں

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


   return (
    <section id="hero" className={styles.container}>
       <div className={styles.colorModeContainer}>
        <img
           className={styles.hero}
           src={heroImg}
           alt="Profile picture of Mateen Ali"
           />
           <img
             className={styles.colorMode}
             src={themeIcon} 
             alt="Color mode icon"
             onClick={toggleTheme}
             />       
             </div>
             <div className={styles.info}>
                <h1>Mateen Ali</h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://twitter.com/" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />                    
                    </a>
                    <a href="https://github.com/" target="_blank">
                    <img src={githubIcon} alt="Github icon" />                    
                    </a>
                    <a href="https://linkedin.com/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />                    
                    </a>
                </span>
                <p className={styles.description}>
                    With a passion for developing modern React web apps for commercial business.
                </p>
                
                <a href={CV} download className={styles.resumeBtn}>
                    <button className="hover">
                         Resume
                    </button> 
                </a>
             </div>
    </section>
    
   )
   
}

export default Hero;