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
        <div className={style.containerRecommendations}>
            <h2>Recommendations</h2>
        <div className={style.recommendations}> 
            <img className={style.recommendationsImage} src="/image_aalborg.png" alt="newArrival1" />
            <img className={style.recommendationsImage} src="/image_aalborg.png" alt="newArrival2" />
            <img className={style.recommendationsImage} src="/image_aalborg.png" alt="newArrival3" />
            <img className={style.recommendationsImage} src="/image_aalborg.png" alt="newArrival4" />
            <img className={style.recommendationsImage} src="/image_aalborg.png" alt="newArrival5" />
        </div>
        </div>
        <div className={style.containerNewArrivals}>
            <h2>New Arrivals</h2>
        <div className={style.newArrivals}>
            <div className={style.newArrival}>
            <img className={style.newArrivalImage} src="/image_aalborg.png" alt="newArrival1" />
            <img className={style.newArrivalImage} src="/image_aalborg.png" alt="newArrival2" />
            <img className={style.newArrivalImage} src="/image_aalborg.png" alt="newArrival3" />
            <img className={style.newArrivalImage} src="/image_aalborg.png" alt="newArrival4" />
            <img className={style.newArrivalImage} src="/image_aalborg.png" alt="newArrival5" />
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}