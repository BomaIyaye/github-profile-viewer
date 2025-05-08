//function for recieving an array of repositories as a prop and rendering the list
function RepoList({ repos }){

    return(
        <div className="repo-list">
        <h3>Latest Repositories</h3>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default RepoList;