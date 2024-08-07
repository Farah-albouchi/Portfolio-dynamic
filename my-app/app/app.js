// App.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./[id]/page"; // Ensure the correct path
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <Toaster />
      <Switch>
        <Route path="/:id" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
