import '../styles/global.css';
import style from '../styles/MainPage.module.css';

export default function Home() {
  return (
    <main>
      <div className={style.main}>
        <div className={style.slideshow}>
          <img className={style.slideshowImage} src="/image_aalborg.png" alt="slideshow1" />
          <img className={style.slideshowImage} src="/image_aalborg.png" alt="slideshow2" />
          <img className={style.slideshowImage} src="/image_aalborg.png" alt="slideshow3" />
          <img className={style.slideshowImage} src="/image_aalborg.png" alt="slideshow4" />
          <img className={style.slideshowImage} src="/image_aalborg.png" alt="slideshow5" />
        </div>
        <div className={style.recommendations}> 
        </div>
        <div className={style.newArrivals}>

        </div>
      </div>

    </main>
  );
}
