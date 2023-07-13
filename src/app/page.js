import styles from "./page.module.css";
import PremierLeague from "./components/Layout/Cards/PremierLeague/Premier-League";
import Main from "./components/Layout/main/main";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="container-fluid" style={{margin:'0 auto'}}>
          <div className="row">
            <div className="col-sm"><PremierLeague /></div>
            <div className="col-sm"><PremierLeague /></div>
          </div>
          <div className="row">
            <Main pageNumbers={3} pageSizes={[9,6,6]}/>
          </div>
        </div>
      </div>
    </main>
  );
}
