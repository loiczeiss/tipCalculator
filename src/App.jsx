import dollar from "./assets/icon-dollar.svg";
import personLogo from "./assets/icon-person.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const inputBillRef = useRef(null);
  const inputPeopleRef = useRef(null);
  const [billAmount, setBillAmount] = useState(0);
  const [peopleAmount, setPeopleAmount] = useState(0);
  const [tipPourcent, setTipPourcent] = useState(0);
  const [tipAmount, setTipAmount] = useState("$0.00");
  const [tipTotal, setTipTotal] = useState("$0.00");
  const [errorMsg, setErrorMsg] = useState("")

  const [divStyle, setDivStyle] = useState({
    backgroundColor: "hsl(189, 41%, 97%)",
  });

  const [billStyle, setBillStyle] = useState({});
  const [peopleStyle, setPeopleStyle] = useState({});

  const InputClicked = () => {
    setDivStyle({
      backgroundColor: "hsl(189, 41%, 97%)",
      border: "2px solid hsl(172, 67%, 45%) ",
    });
  };

  const billDivClicked = () => {
    inputBillRef.current.focus();
    setBillStyle({ border: "2px solid hsl(172, 67%, 45%) " });
  };

  const billDivBlur = () => {
    setBillStyle({});
  };

  const peopleDivBlur = () => {
    setPeopleStyle({});
  };

  const billPeopleClicked = () => {
    inputPeopleRef.current.focus();
    setPeopleStyle({ border: "2px solid hsl(172, 67%, 45%) " });
    setErrorMsg("")
  };

  const calcTip = () => {
    const tipTotal = billAmount * tipPourcent;
    const tipDivided = tipTotal / peopleAmount;

    if (billAmount == 0 && peopleAmount == 0){
      setBillStyle({ border: "2px solid red"})
      setPeopleStyle({border : "2px solid red"})
    } else if (billAmount!==0 && peopleAmount == 0){
      setPeopleStyle({border : "2px solid red"})
      setErrorMsg("Can't be zero")
    }  else if (billAmount==0 && peopleAmount !== 0){
      setBillStyle({border : "2px solid red"})
    }  else{setTipTotal("$" + tipTotal.toFixed(2)); // Fixed to 2 decimal places
    setTipAmount("$" + tipDivided.toFixed(2)); // Fixed to 2 decimal places
  }
    
  };


  const onEnter = (e) => {
    if (e.code === "Enter") {
      calcTip();
    }
  };

  useEffect(() => {
    if (tipPourcent !== 0) {
      calcTip();
    }
  }, [tipPourcent]);

const resetAllValues = () => {
  setBillAmount(0);
  setPeopleAmount(0);
  setTipPourcent(0);
  setTipAmount("$0.00");
  setTipTotal("$0.00");
  inputBillRef.current.value = "";
  inputPeopleRef.current.value = "";
  setErrorMsg("")
  setBillStyle({})
  setPeopleStyle({})
}

  return (
    <>
      <div className="whole">
        <p className="splitterTitle">
          SPLI<br></br>TTER
        </p>
        <article>
          <section className="InSection">
            <p className="billTxt">Bill</p>
            <div className="bill" onClick={billDivClicked} style={billStyle}>
              <img src={dollar} alt="dollarSign" id="dollarSign" />
              <input
                ref={inputBillRef}
                type="text"
                name="billTotal"
                id="billTotal"
                placeholder="0"
                onBlur={billDivBlur}
                onChange={(e) => setBillAmount(e.target.value)}
              />
            </div>
            <div className="tip">
              <p className="tipTxt">Select Tip %</p>
              <div className="flex-container">
                <div
                  className="item"
                  onClick={() => {
                    setTipPourcent(0.05);
                    calcTip();
                  }}
                >
                  5%
                </div>
                <div
                  className="item"
                  onClick={() => {
                    setTipPourcent(0.1);
                    calcTip();
                  }}
                >
                  10%
                </div>
                <div
                  className="item"
                  onClick={() => {
                    setTipPourcent(0.15);
                    calcTip();
                  }}
                >
                  15%
                </div>
                <div
                  className="item"
                  onClick={() => {
                    setTipPourcent(0.25);
                    calcTip();
                  }}
                >
                  25%
                </div>
                <div
                  className="item"
                  onClick={() => {
                    setTipPourcent(0.5);
                    calcTip();
                  }}
                >
                  50%
                </div>
                <div className="item" id="itemCustom" style={divStyle}>
                  <input
                    maxLength={2}
                    type="text"
                    placeholder="Custom"
                    onFocus={InputClicked}
                    onChange={(e) => {
                      const inputValue = parseFloat(e.target.value);
                      if (!isNaN(inputValue)) {
                        setTipPourcent(inputValue / 100);
                      } else {
                        setTipPourcent(0);
                      }
                    }}
                    onKeyDown={onEnter}
                  />
                </div>
              </div>
            </div>

            <div className="peopleTxts"><p style={{ color: "hsl(186, 14%, 43%)" }}>
              Number of People
            </p>
            <p style={{ color: "red", fontSize: "12px", alignSelf: "center" }}>{errorMsg}</p></div>
            <div
              className="person"
              onClick={billPeopleClicked}
              style={peopleStyle}
            >
              <img src={personLogo} alt="personSign" id="personSign" />
              <input
                ref={inputPeopleRef}
                type="text"
                name="personTotal"
                id="personTotal"
                placeholder="0"
                onBlur={peopleDivBlur}
                onChange={(e) => setPeopleAmount(e.target.value)}
              />
            </div>
          </section>
          <section className="calculWindow">
            <div>
              {" "}
              <div className="tipWindows">
                <div>
                  <p style={{ color: "hsl(0, 0%, 100%)" }}>Tip Amount</p>
                  <p style={{ color: "hsl(186, 14%, 43%)" }}>/ person</p>
                </div>
                <p style={{ color: "hsl(172, 67%, 45%)", fontSize: "24px" }}>
                  {tipAmount}
                </p>
              </div>
              <div className="tipWindows">
                <div>
                  <p style={{ color: "hsl(0, 0%, 100%)" }}>Total</p>
                  <p style={{ color: "hsl(186, 14%, 43%)" }}>/ person</p>
                </div>
                <p style={{ color: "hsl(172, 67%, 45%)", fontSize: "24px" }}>
                  {tipTotal}
                </p>
              </div>
            </div>
            <button onClick={resetAllValues}>
              <p id="reset">RESET</p>
            </button>
          </section>
        </article>
      </div>
    </>
  );
}

export default App;
