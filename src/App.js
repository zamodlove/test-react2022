import Trasection from "./components/Transaction";
import FormComponent from "./components/FormComponent"
import "./App.css";
function App() {
  return (
    <div className="container">
      <h1>แอพบัญชีรายรับ - รายจ่าย</h1>
      <FormComponent />
      <Trasection />
    </div>
  );
}

export default App;
