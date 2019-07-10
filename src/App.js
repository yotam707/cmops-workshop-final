import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SearchHistoryProvider from './SearchHistory'
import Home from './views/Home'
import RepositoryList from './views/RepositoryList'
// import Spinner from "./components/Spinner";
// import ErrorBoundary from "react-error-boundary";

// import Home from './views/HomeHooks';
// import RepositoryList from "./views/RepositoryListHooks";

// const RepositoryList = React.lazy(() => import("./views/RepositoryListHooks"));
// const HomeView = React.lazy(() => import("./views/HomeHooks"));

// wrap <React.StrictMode>

function App() {
  return (
    <div>
      <SearchHistoryProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/:username" component={RepositoryList} />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </SearchHistoryProvider>
    </div>
  )
}

export default App
