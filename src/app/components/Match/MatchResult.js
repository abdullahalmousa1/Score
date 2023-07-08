import styles from "./match.module.css";
import DropDownMenu from "../controls/dropDownMenu";
import Link from "next/link";
export default function MatchResult({ triggerYellow , matchData }) {
 
  return (
    <div className={`${styles.main} col-md`}>
      <div
        className="row d-flex justify-content-between"
        style={{ paddingTop: "10px" }}
      >
        <div className="col-10 d-flex justify-content-start">
          <img src="/images/Sports.svg" alt="" width={18} height={18} />
          <Link href='/matchResult' className={styles.title}>{matchData.text}</Link>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <img src="/images/chart-simple.svg" alt="" width={14} height={14} />
        </div>
      </div>
      <div className="row d-flex justify-content-start">
        <p className={styles.matchDate}>
          {matchData.date}
          <img
            src="/images/P-icon.svg"
            width={16}
            height={16}
            alt=""
            style={{ marginLeft: "4px" }}
          />
          <img
            src="/images/sports-icon.svg"
            width={16}
            height={16}
            alt=""
            style={{ marginLeft: "4px" }}
          />
        </p>
      </div>
      <div className="row">
        <p className={styles.team1}>
          <img
            src={matchData.teamOneLogo}
            width={16}
            height={16}
            className={styles.teamLogo}
            alt=""
            style={{ marginRight: "8px" }}
          />
          {matchData.teamOne}
        </p>
      </div>
      <div className="row">
        <p className={styles.team1}>
          <img
            src={matchData.teamTwoLogo}
            width={16}
            height={16}
            className={styles.teamLogo}
            alt=""
            style={{ marginRight: "8px" }}
          />
          {matchData.teamTwo}
        </p>
      </div>
      <div className="row">
        <p className={styles.result}>{matchData.result}</p>
      </div>
      <div className={`${styles.lastline} row d-flex justify-content-between`}>
        <div className="col-sm col-11">
          <div className="row" style={{ gap: "3px" }}>
            <div
              className={`${styles.lineResult} col d-flex justify-content-between`}
            >
              <span>1</span>
              <span>1.05</span>
            </div>
            <div
              className={`${styles.lineResult} col d-flex justify-content-between`}
              style={
                triggerYellow === true
                  ? { backgroundColor: "#FBFF20", color: "#000" }
                  : {}
              }
            >
              <span>Draw</span>
              <span>2.40</span>
            </div>
            <div
              className={`${styles.lineResult} col d-flex justify-content-between`}
            >
              <span>2</span>
              <span>5.13</span>
            </div>
          </div>
        </div>
        <div
          className={`${styles.dropbutton} col-xs-auto col-1 justify-content-center`}
        >
            <DropDownMenu />
        </div>
      </div>
    </div>
  );
}
