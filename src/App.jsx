import dollar from "./assets/icon-dollar.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="whole">
        <p className="splitterTitle">
          SPLI<br></br>TTER
        </p>
        <article>
          <section className="InSection">
            <p className="billTxt">Bill</p>
            <div className="bill">
              <img src={dollar} alt="dollarSign" id="dollarSign" />
              <input
                type="text"
                name="billTotal"
                id="billTotal"
                placeholder="0"
              />
            </div>
            <div className="tip">
              <p className="tipTxt">Select Tip %</p>
              <div className="flex-container">
  <div className="item">5%</div>
  <div className="item">10%</div>
  <div className="item">15%</div>
  <div className="item">20%</div>
  <div className="item">25%</div>
  <div className="item" style={{backgroundColor: 'hsl(189, 41%, 97%)'}}><input type="text" /></div>
</div>
            </div>
          </section>
          <section></section>
        </article>
      </div>
    </>
  );
}

export default App;
