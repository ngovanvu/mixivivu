import style from "./NewsCard.module.css";

function NewsCard({ news }) {
  return (
    <div className={style.blogCard}>
      <div className={style.header}>
        <div className={style.imageWrapper}>
          <img className={style.image} alt="mixivivu" src={news.image} width="100%" height="100%" loading="lazy" />
        </div>
      </div>
      <div className={style.body}>
        <p className={`lg ${style.title}`}>{news.title}</p>
        <p className={`sm ${style.descripts}`}>{news.desc}</p>
      </div>
      <p className={`sm ${style.footer}`}>{news.days}</p>
    </div>
  );
}

export default NewsCard;
