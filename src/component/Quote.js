import { useEffect, useState } from "react";
import "./Quote.css";
import axios from "axios";

const App = () => {
  const [qoute, setQoute] = useState("");
  const [author, setAuthor] = useState("");

  const qouteAPI = async () => {
    let arrayOfQoutes = [];
    try {
      const data = await axios.get("http://api.quotable.io/random");
      arrayOfQoutes = data.data;
    } catch (error) {
      console.log(error);
    }
    try {
      setQoute(arrayOfQoutes.content);
      setAuthor(arrayOfQoutes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    qouteAPI();
  }, []);

  return (
    <div>
      <div className="qouteBox">
        <div className="container">
          <div>
            <button onClick={qouteAPI} className="btn btn-danger">
              CHANGE CUOTE
            </button>
          </div>
          <div className="qoute">
            <h2>{qoute}</h2>
          </div>
          <div className="author">{author}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
