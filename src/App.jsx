import './App.css'
import "./styles/styles.scss"
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Resources from "./components/Resources"

function App() {

  return (
    <>
      
      <Layout>
        <Routes>
          <Route path="/html" element={<Resources category={"html"} />} />
          <Route path="/css" element={<Resources category={"css"} />} />
          <Route path="/javascript" element={<Resources category={"javascript"} />} />
          <Route path="/react" element={<Resources category={"react"} />} />
          <Route path="/headless-cms" element={<Resources category={"headless-cms"} />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App

/*Har fått hjelp av medstudent Hanna Hënel Sørum til å legge opp ruter til de ulike fanene (knappene) på nettstedets
navigasjon, fra kodelinje 7 - 23. */ 
