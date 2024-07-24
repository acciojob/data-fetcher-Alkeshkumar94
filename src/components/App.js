
import React from "react";
import './../styles/App.css';
import {useState,useEffect} from "react";
const App = () => {
 const [data, setData] = useState(null);
  // State to store loading status
  const [loading, setLoading] = useState(true);
  // State to store any potential errors
  const [error, setError] = useState(null);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();
      setData(result); // Update state with fetched data
    } catch (err) {
      setError(err.message); // Update state with error message
    } finally {
      setLoading(false); // Update state to indicate loading is done
    }
  };

  // Use useEffect to call fetchData when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Render the component
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default App
