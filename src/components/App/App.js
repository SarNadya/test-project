import React from "react";
import About from "../layouts/About/About";
import AdamsFeedback from "../layouts/AdamsFeedback/AdamsFeedback";
import BuildingArticle from "../layouts/BuildingArticle/BuildingArticle";
import ComtemporaryVilla from "../layouts/ComtemporaryVilla/ComtemporaryVilla";
import Article from "../layouts/Article/Article";
import JhonsonsFeedback from "../layouts/JhonsonsFeedback/JhonsonsFeedback";
import News from "../layouts/News/News";
import OurServices from "../layouts/OurServices/OurServices";
import SchultsFeedback from "../layouts/SchultsFeedback/SchultsFeedback";
import SubscriptionForm from "../SubscriptionForm/SubscriptionForm";
import styles from './App.module.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import fdn_logo from '../img/fdn_logo.jpg';
import pdf_logo from '../img/pdf_logo.jpg';
import location from '../img/location.jpg';
import settings_logo from '../img/settings_logo.jpg';
import MenuBar from "../layouts/MenuBar/MenuBar";
import Slider from "../layouts/Slider/Slider";
import Search from "../Search/Search";
import Construction from "../layouts/Construction/Construction";
import ExpertWitnes from "../layouts/ExpertWitnes/ExpertWitnes";
import Procurement from "../layouts/Procurement/Procurement";
import ProjectManagments from "../layouts/ProjectManagments/ProjectManagments";
import Footer from "../Footer/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

function App() {
  const theme = createTheme({
    palette: {
        black: {
        main: '#000',
        },
    },
});
  return (
    <div className={styles.App}>
      <div className={styles.item_1}></div>
      <div className={styles.item_2}>
        <img src={fdn_logo} alt='fdn_logo'/>
      </div>
      <div className={styles.item_3}>
        <MenuBar/>
      </div>
      <div className={styles.item_4}></div>
      <div className={styles.item_5}>
        <BuildingArticle/>
      </div>
      <div className={styles.item_6}></div>
      <div className={styles.item_7}>
        <Slider value={'01/03'}/>
      </div>
      <div className={styles.item_8}></div>
      <div className={styles.item_9}>
        <div className={styles.PlayCircleIcon}>
          <ThemeProvider theme={theme}>
            <IconButton aria-label="play">
              <PlayCircleIcon color='black' sx={{ fontSize: 90 }}/>
            </IconButton>
          </ThemeProvider>
        </div>
        <h4> COMPANY VIDEO</h4>
      </div>
      <div className={styles.item_10}></div>
      <div className={styles.item_11}></div>
      <div className={styles.item_12}>
        <OurServices/>
      </div>
      <div className={styles.item_13}></div>
      <div className={styles.item_12}>
        <Article
          title={'General Contracting'}
          article={'This allows the Design and Engineering team to originate drawings, specifications, structural calculations, details and scopes of work that deliver exactly what the client had intended to achieve.'}
        />
      </div>
      <div className={styles.item_13}></div>
      <div className={styles.item_16}></div>
      <div className={styles.item_7}>
        <Slider value={'03/06'}/>
      </div>
      <div className={styles.item_12}>
        <Article
          title={'Project Design and engineering'}
          article={'Through Stage-Gate, Design and Engineering methodology, DMCS ensure client-partners realize clearly defined project objective to achieve intended results.'}
        />
      </div>
      <div className={styles.item_13}></div>
      <div className={styles.item_12}>
        <Article
          title={'Capital Improvements'}
          article={'This results in scope creep and slippage of the schedule that ultimately result in additional cost to the owner.'}
        />
      </div>
      <div className={styles.item_21}>
        <img src={pdf_logo} alt='pdf_logo'/>
        <h5> DOWNLOAD PRICE</h5>
      </div>
      <div className={styles.item_9}>
        <img src={location} alt='location_logo'/>
        <h5> CONTACT US </h5>
      </div>
      <div className={styles.item_23}>
        <Search/>
      </div>
      <div className={styles.item_24}>
        <JhonsonsFeedback/>
      </div>
      <div className={styles.item_25}>
      <About/>
      </div>
      <div className={styles.item_26}></div>
      <div className={styles.item_27}>
        <SchultsFeedback/>
      </div>
      <div className={styles.item_28}>
        <ExpertWitnes/>
      </div>
      <div className={styles.item_29}>
        <Construction/>
      </div>
      <div className={styles.item_30}>
        <News/>
      </div>
      <div className={styles.item_7}>
        <AdamsFeedback/>
      </div>
      <div className={styles.item_32}>
        <Procurement/>
      </div>
      <div className={styles.item_28}>
        <ProjectManagments/>
      </div>
      <div className={styles.item_34}>
        <ComtemporaryVilla/>
      </div>
      <div className={styles.item_35}></div>
      <div className={styles.item_36}></div>
      <div className={styles.item_21}>
        <img src={settings_logo} alt='settings_logo'/>
        <h5> WORK WITH US </h5>
      </div>
      <div className={styles.item_7}>
        <Slider value={'01/09'}/>
      </div>
      <div className={styles.item_38}>
        <SubscriptionForm/>
      </div>
      <div className={styles.item_37}>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
