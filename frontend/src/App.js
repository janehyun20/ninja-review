import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//page & layout import
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

// apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <SiteHeader />
          <Routes>
            <Route exact path="/" element={<Homepage />} />

            <Route path="/details/:id" element={<ReviewDetails />} />

            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
