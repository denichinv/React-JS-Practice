import './App.css';
import React from 'react';
import ProfileCard from './ProfileCard';

const App = () => {
  const profiles = [
    {
      image:
        'https://headshots-inc.com/wp-content/uploads/2021/01/FINAL-Blog-Images.jpg',
      name: 'John Doe',
      jobTitle: 'Frontend Developer',
      bio: 'Passionate about creating user-friendly web applications.',
    },
  ];
  return (
    <div className="app">
      <h1>Team Profiles</h1>
      <div className="profiles-container">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile.name}
            jobTitle={profile.jobTitle}
            bio={profile.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
