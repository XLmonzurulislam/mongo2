import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Team from "@/pages/Team";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/team" component={Team} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-dark-300 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Router />
      </main>
      <nav className="bg-dark-200 py-2 px-4">
        <div className="container mx-auto flex justify-center items-center space-x-6 text-sm">
          <a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Fiverr</a>
          <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">UpWork</a>
          <a href="https://www.freelancer.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Freelancer</a>
          <a href="https://themeforest.net" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">ThemeForest</a>
          <a href="https://remotehub.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">RemoteHub</a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Dribbble</a>
          <a href="/resume" className="text-gray-300 hover:text-white transition-colors">Resume</a>
        </div>
      </nav>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}

export default App;