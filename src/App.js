import "./App.css";
import AddTranscation from "./components/AddTranscation";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TranscationList from "./components/TranscationList";
import IncomeExpenseProvider from "./Context/IncomeExpenseContext";

function App() {
  return (
    <IncomeExpenseProvider>
      <div className='App'>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpense />
          <TranscationList />
          <AddTranscation />
        </div>
      </div>
    </IncomeExpenseProvider>
  );
}

export default App;
