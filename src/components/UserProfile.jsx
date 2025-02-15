import React from 'react';

const UserProfile = ({ data }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src={data.avatar_url}
          alt={data.login}
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2>{data.name ? data.name : data.login}</h2>
          <p>@{data.login}</p>
          {data.location && <p><i className="location-icon">📍</i> {data.location}</p>}
        </div>
      </div>
      
      <div className="profile-stats-grid">
        <div className="stat-item">
          <h3>{data.followers}</h3>
          <p>Followers</p>
        </div>
        <div className="stat-item">
          <h3>{data.following}</h3>
          <p>Following</p>
        </div>
        <div className="stat-item">
          <h3>{data.public_repos}</h3>
          <p>Repositories</p>
        </div>
        {data.public_gists > 0 && (
          <div className="stat-item">
            <h3>{data.public_gists}</h3>
            <p>Gists</p>
          </div>
        )}
      </div>
      

      <div className="profile-details">
        {data.company && <p><strong>Company:</strong> {data.company}</p>}
        {data.blog && <p><strong>Website:</strong> <a href={data.blog} target="_blank" rel="noopener noreferrer">{data.blog}</a></p>}
        {data.twitter_username && (
          <p><strong>Twitter:</strong> 
            <a href={`https://twitter.com/${data.twitter_username}`} target="_blank" rel="noopener noreferrer">
              @{data.twitter_username}
            </a>
          </p>
        )}
        {data.created_at && (
          <p><strong>Joined:</strong> {new Date(data.created_at).toLocaleDateString()}</p>
        )}
      </div>

      

      {data.bio && (
        <div className="profile-bio">
          <p>"{data.bio}"</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
