import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./components/Header";
import { WatchListContextProvider } from "./context/watchListContext";
import CoinDetailPage from "./pages/CoinDetailPage";

function App() {
  return (
    <div className="container">
      <WatchListContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/coins/:id">
              <CoinDetailPage />
            </Route>
            <Route exact path="/">
              <CoinSummaryPage />
            </Route>
          </Switch>
        </Router>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
