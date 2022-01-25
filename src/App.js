import Header from "./components/Header";
import Posts from "./components/Posts";
import Searchbar from "./components/Searchbar";


function App() {
  return (
    <div>
      <Header/>
        <div className="feed md:container md:mx-auto ">
          <Posts/>
        </div>
    </div> 
 );
}

export default App;
