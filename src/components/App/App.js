import React from "react";
import About from "../layouts/About/About";
import AdamsFeedback from "../layouts/AdamsFeedback/AdamsFeedback";
import BuildingArticle from "../layouts/BuildingArticle/BuildingArticle";
import CapitalImprovements from "../layouts/CapitalImprovements/CapitalImprovements";
import ComtemporaryVilla from "../layouts/ComtemporaryVilla/ComtemporaryVilla";
import GeneralContracting from "../layouts/GeneralContracting/GeneralContracting";
import JhonsonsFeedback from "../layouts/JhonsonsFeedback/JhonsonsFeedback";
import News from "../layouts/News/News";
import OurServices from "../layouts/OurServices/OurServices";
import ProjectDesign from "../layouts/ProjectDesign/ProjectDesign";
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

function App() {
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
          <PlayCircleIcon sx={{ fontSize: 90 }}/>
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
        <GeneralContracting/>
      </div>
      <div className={styles.item_13}></div>
      <div className={styles.item_16}></div>
      <div className={styles.item_7}>
        <Slider value={'03/06'}/>
      </div>
      <div className={styles.item_12}>
        <ProjectDesign/>
      </div>
      <div className={styles.item_13}></div>
      <div className={styles.item_12}>
        <CapitalImprovements/>
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
      <div className={styles.item_9}>
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
      <div className={styles.item_9}>
        <SubscriptionForm/>
      </div>
      <div className={styles.item_37}>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
