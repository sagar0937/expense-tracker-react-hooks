import "./App.css";
import AddBookForm from "./components/AddBookForm";
import AddTranscation from "./components/AddTranscation";
import Balance from "./components/Balance";
import BookList from "./components/BookList";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TranscationList from "./components/TranscationList";
import BookContextProvider from "./Context/bookContext";
import IncomeExpenseProvider from "./Context/IncomeExpenseContext";

function App() {
  return (
    <>
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
      <h3>NEW BOOK LIST PROJECT</h3>
      <BookContextProvider>
        <BookList />
        <AddBookForm />
      </BookContextProvider>
    </>
  );
}

export default App;
