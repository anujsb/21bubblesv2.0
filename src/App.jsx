import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero /> {/*done*/}
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing /> {/*about*/}
        <CardDeal />
        {/*serv*/}
        <Business /> {/*?*/}
        <Testimonials /> {/*test*/}
        
        {/* <Clients /> */}
        {/* <Stats />  */}
        <CTA /> {/*contact*/}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
