import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Scan</h2>
      <p>Remember to use https://</p>

      <label for="frmNameCC">Navn</label>
      <input
        type="text"
        name="ccname"
        id="frmNameCC"
        required
        placeholder="Full Name"
        autocomplete="cc-name"
      />

      <label for="frmCCNum">Card Number</label>
      <input
        name="cardnumber"
        id="frmCCNum"
        required
        autocomplete="cc-number"
      />

      <label for="frmCCCVC">CVC</label>
      <input name="cvc" id="frmCCCVC" required autocomplete="cc-csc" />

      <label for="frmCCExp">Expiry</label>
      <input
        name="cc-exp"
        id="frmCCExp"
        required
        placeholder="MM-YYYY"
        autocomplete="cc-exp"
      />
    </div>
  );
}

export default App;
