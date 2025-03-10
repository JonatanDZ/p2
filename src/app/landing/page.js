import style from "../../styles/LandingPageBox.module.css";
import Link from "next/link";

export default function Landing() {
    return (
      <main>
        <h1 className={style.header}>Make local greate again</h1>
        <div className={style.landingPage}>
          <Link href="/">
          <div className={style.landingPageBox}>
              <p>Aalborg</p>
              <img src="/image_aalborg.png" alt="Aalborg" />
          </div>
          </Link>
          <div className={style.landingPageBox}>
            <p>København</p>
            <img src="/kbh.jpg" alt="København" />
          </div>
          <div className={style.landingPageBox}>
            <p>Aarhus</p>
            <img src="/aarhus.jpg" alt="Aarhus" />
          </div>
          </div>
      </main>
    );
  }
  