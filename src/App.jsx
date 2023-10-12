import dollar from "./assets/icon-dollar.svg";
import personLogo from './assets/icon-person.svg'
import "./App.css";
import { useState } from "react";

function App() {
const [tipAmount, setTipAmount] = useState('$0.00')
const [tipTotal, setTipTotal] = useState('$0.00')
const [divStyle, setDivStyle] = useState({ backgroundColor: "hsl(189, 41%, 97%)" })
const InputClicked = () => {
  setDivStyle({ backgroundColor: "hsl(189, 41%, 97%)", border:'2px solid hsl(172, 67%, 45%) '})
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
                <div className="item">25%</div>
                <div className="item">50%</div>
                <div
                  className="item"
                  id="itemCustom"
                  style={divStyle}
                >
                  <input type="text" placeholder="Custom" onFocus={InputClicked}/>
                </div>
              </div>
            </div>
       
              <p style={{color:'hsl(186, 14%, 43%)', marginTop:'30px' }}>Number of People</p>
              <div className="person">
              <img src={personLogo} alt="personSign" id="personSign" />
              <input
                type="text"
                name="personTotal"
                id="personTotal"
                placeholder="0"
              />
            </div>
          </section>
          <section className="calculWindow">
         <div>   <div className="tipWindows">
              <div >
                <p style={{color: 'hsl(0, 0%, 100%)'}}>Tip Amount</p>
                <p style={{color: 'hsl(186, 14%, 43%)'}}>/ person</p>
              </div>
              <p style={{color: 'hsl(172, 67%, 45%)', fontSize: '24px'}}>{tipAmount}</p>
            </div>
            <div  className="tipWindows">
            <div>
                <p style={{color: 'hsl(0, 0%, 100%)'}}>Total</p>
                <p style={{color: 'hsl(186, 14%, 43%)'}}>/ person</p>
              </div>
              <p style={{color: 'hsl(172, 67%, 45%)', fontSize: '24px'}}>{tipTotal}</p>
            </div></div>
            <button style={{backgroundColor: 'hsl(172, 67%, 45%)', marginTop: '10px',
          marginBottom:'5px'}}><p>RESET</p></button>

          </section>
        </article>
      </div>
    </>
  );
}

export default App;
