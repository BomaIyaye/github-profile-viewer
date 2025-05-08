//function recieves user as a prop and displays the required information
function UserCard({ user }){
    return(
        <div className="user-card">
            <img src={user.avatar_url} alt="Avatar"/>
            <h2>{user.name||user.login}</h2>
            <p>{user.bio}</p>
            <p><strong>Public Repos:</strong> {user.public_repos}</p>
            <p><strong>Followers:</strong> {user.followers} | <strong>Following:</strong> {user.following}</p>
            <p><strong>Location:</strong>{user.location}</p>

            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="profile-button">
                View Profile
            </a>

        </div>

    );
}

export default UserCard;