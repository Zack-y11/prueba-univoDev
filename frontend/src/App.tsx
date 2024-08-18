import { useEffect } from 'react'
import axios from 'axios';
//import './App.css'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'https://api.example.com/data' with your API URL
        const response = await axios.get('http://localhost:8080/api/tasks/');
        // Log the data to the console
        console.log(response.data);
      } catch (error) {
        // Handle any errors
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function
    fetchData();
  }, []);

  return (
    <div>
    <h1>Check the console for fetched data!</h1>
  </div>
  )
}

export default App
