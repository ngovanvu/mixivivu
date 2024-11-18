import styles from "./NewsCard.module.css";

function NewsCard({ news }) {
  return (
    <div className={styles.blogCard}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} alt="mixivivu" src={news.image} width="100%" height="100%" loading="lazy" />
        </div>
      </div>
      <div className={styles.body}>
        <p className={`lg ${styles.title}`}>{news.title}</p>
        <p className={`sm ${styles.descripts}`}>{news.desc}</p>
      </div>
      <p className={`sm ${styles.footer}`}>{news.days}</p>
    </div>
  );
}

export default NewsCard;
