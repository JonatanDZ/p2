import style from "../../styles/LandingPageBox.module.css";

export default function Landing() {
    return (
      <main>
        <h1 className={style.header}>Vælg din lokale by du vil handle i.</h1>
        <div className={style.landingPage}>
          <div className={style.landingPageBox}>
            <p>Aalborg</p>
          </div>
          <div className={style.landingPageBox}>
            <p>København</p>
          </div>
          <div className={style.landingPageBox}>
            <p>Aarhus</p>
          </div>
          </div>
      </main>
    );
  }
  