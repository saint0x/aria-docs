import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Layout } from '@/components/docs/layout'
import { GettingStarted } from '@/pages/GettingStarted'
import { CoreConcepts } from '@/pages/CoreConcepts'
import { SyntaxReference } from '@/pages/SyntaxReference'
import { ApiReference } from '@/pages/ApiReference'
import { AriaCompiler } from '@/pages/AriaCompiler'
import { StandardTools } from '@/pages/StandardTools'
import { Architecture } from '@/pages/Architecture'
import { Examples } from '@/pages/Examples'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="aria-docs-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/getting-started" replace />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/core-concepts" element={<CoreConcepts />} />
            <Route path="/syntax-reference" element={<SyntaxReference />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/aria-compiler" element={<AriaCompiler />} />
            <Route path="/standard-tools" element={<StandardTools />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/examples" element={<Examples />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App