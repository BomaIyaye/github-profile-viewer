
import { useState} from "react";

import UserCard from "./components/UserCard";
import Spinner from "./components/Spinner";
import RepoList from "./components/RepoList";
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {

  const [username, setUsername] = useState("");
  const [userData, setUserdata] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  //Function for fetching GitHub Users data
  const fetchUser = async () => {
    setLoading(true);
    setError("");
    setUserdata("null");
    setRepos([]);

    try{
      const userRes = await fetch(`https://api.github.com/users/${username.trim()}`);
      if(!userRes.ok) throw new Error("User not found");

      const user = await userRes.json();//Parse to JSON
      console.log("User Data:", user);
      setUserdata(user);//Save the profile data

      //Fetch users last 5 repos
      const repoRes = await fetch(user.repos_url + "?sort=updated&per_page=5");//fetches the list of repos
      const repoData = await repoRes.json(); // Parse repos to JSON
      console.log("Repo Data:", repoData);
      setRepos(repoData); // Save repo data
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message); // Show error message if user not found or fetch fails
    } finally {
      setLoading(false); // Hide loading spinner after fetch completes
    }

  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form refresh behavior
    if (username.trim()) fetchUser(); // If input isn't empty, call the fetch function
  };
  return (
    <div className="App">
      <h1>
      <FontAwesomeIcon icon={faGithub} style={{ marginRight: "0.5rem" }} />
        GitHub Profile Viewer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update state on input change
        />
        <button type="submit">Search</button>
      </form>
      
       {/* Conditional Rendering based on app state */}
       {loading && <Spinner />}            {/* Show loading spinner if loading */}
      {error && <p className="error">{error}</p>}  {/* Show error message if any */}
      {userData && <UserCard user={userData} />}   {/* Show user card if user data is available */}
      {repos.length > 0 && <RepoList repos={repos} />}{/* Show repo list if repos exist */}
    </div>
  );
}

export default App;
