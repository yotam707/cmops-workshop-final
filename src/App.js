import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SearchHistoryProvider from './SearchHistory'
// import Home from './views/Home'
// import RepositoryList from "./views/RepositoryListHooks";
import ErrorBoundary from 'react-error-boundary'
// import RepositoryList from './views/RepositoryList'
import Spinner from './components/Spinner'

// import Home from './views/HomeHooks';

const RepositoryList = React.lazy(() => import('./views/RepositoryListHooks'))
const Home = React.lazy(() => import('./views/HomeHooks'))

// wrap <React.StrictMode>

function App() {
  return (
    <div>
      <SearchHistoryProvider>
        <BrowserRouter>
          <Switch>
            <React.Suspense fallback={<Spinner />}>
              <ErrorBoundary FallbackComponent={() => <div>Error!</div>}>
                <Route path="/:username" component={RepositoryList} />
                <Route path="/" component={Home} />
              </ErrorBoundary>
            </React.Suspense>
          </Switch>
        </BrowserRouter>
      </SearchHistoryProvider>
    </div>
  )
}

export default App
