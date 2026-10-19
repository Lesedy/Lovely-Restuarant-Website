import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
export default function App(){return <><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3 focus:text-black">Skip to content</a><Header/><main id="main-content"><Hero/><MainContent/></main><Footer/></>}