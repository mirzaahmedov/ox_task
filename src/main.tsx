import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LoadingScreen from './components/LoadingScreen'

import ReactQueryProvider from './lib/query'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <React.Suspense fallback={<LoadingScreen />}>
        <App />
      </React.Suspense>
    </ReactQueryProvider>
  </React.StrictMode>,
)
