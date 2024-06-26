import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Season from "./pages/Season";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import AppProvider from "./contexts/AppContext";

const App = () => {
    return (
        <AppProvider>
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/show/:id" component={Show} />
                        <Route path="/season/:id" component={Season} />
                        <Route path="/favorites" component={Favorites} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </AppProvider>
    );
};

export default App;
