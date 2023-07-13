import MatchCard from "../Cards/Match/Match";
import Header from "../Cards/Match/Header/Header";
import GetKey from "../../utils/utils";
export default function Main({ pageNumbers, pageSizes }) {
  const page = [];
 
  const matchData = {
    text: "Argentina - Liga Professional",
    teamOne: "Barracas Central",
    teamTwo: "CA Central Cordoba SE",
    date: "Today, 21:30",
    teamOneLogo: "/images/teams-logo.svg",
    teamTwoLogo: "/images/team2.png",
    result: "1X2",
  };

  const rowItem = (pageNumber, pageSize) => {
    const triggerYellowColor = (rowIndex, columnIndex) => {
      return pageNumber === 1
        ? (rowIndex === 0 && columnIndex === 0) ||
          (columnIndex === 1 && rowIndex === 1)
          ? true
          : false
        : false;
    };

    return (
      <div className="row" style={{ marginTop: "32px" }} key={pageNumber}>
        <Header />
        <div className="container">
          {Array(pageSize / 3)
            .fill()
            .map((item, rowIndex) => {
              return (
                <div className="row" key={GetKey()}>
                  <div className="col-12 col-lg-10">
                    <div className="row" style={{ gap: "10px" }}>
                      {Array(3)
                        .fill()
                        .map((item, columnIndex) => (
                          <MatchCard
                            key={GetKey()}
                            matchData = {matchData}
                            triggerYellow={triggerYellowColor(
                              rowIndex,
                              columnIndex
                            )}
                          />
                        ))}
                    </div>
                  </div>
                  <div className="col-2"></div>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  for (let i = 0; i < pageNumbers; i++) {
    page.push(rowItem(i + 1, pageSizes[i]));
  }

  return <>{page.map((item) => item)}</>;
}
