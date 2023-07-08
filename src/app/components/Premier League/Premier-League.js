import styles from "./premierleague.module.css";

export default function PremierLeague(props) {
  return (
    <div className={styles.main}>
      <div className={`${styles.rowtitle} row`}>
        <p className={`${styles.title}`}>
        <img src="/images/Sport Icons.svg" alt="" width={18} height={18} />
        <span> England</span> {`>`} <span>Premier League</span>
        </p>
      </div>
      <div className="row">
        <p className={`${styles.matchtitle} text-center`}>
          Tottenham - Leicester City
        </p>
      </div>
      <div className={`${styles.result} row d-flex justify-content-center`}>
        <div className={styles.textnumber}>4</div>
        <div className={styles.textnumber}>2</div>
      </div>
      <div className={`${styles.lastline} row`}>
        <div className={`${styles.lineResult} col d-flex justify-content-between`} >
          <span>1</span>
          <span>1.05</span>
        </div>
        <div className={`${styles.lineResult} col d-flex justify-content-between`}>
          <span>Draw</span>
          <span>2.40</span>
        </div> 
        <div className={`${styles.lineResult} col d-flex justify-content-between`}>
          <span>2</span>
          <span>5.13</span>
        </div>
      </div>
    </div>
  );
}
