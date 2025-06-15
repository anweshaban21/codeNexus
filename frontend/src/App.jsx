import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Main App styling
import Header from './components/Header';
import ConnectBanner from './components/ConnectBanner';
import UserProfile from './components/UserProfile';
import StatsCard from './components/StatsCard';
import SubmissionHistory from './components/SubmissionHistory';
import ProblemDifficultyBreakdown from './components/ProblemDifficultyBreakdown';

function App() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8080/api/leetcode/anweshab_21');
        const users = response.data.users;
        // Assuming your API returns an array of user objects, find Anwesha
        const anweshaProfile = response.data;
        if (anweshaProfile) {
          // Structure the data to match what the components expect
          setProfileData({
  user: {
    name: anweshaProfile.name,
    username: anweshaProfile.username,
    profilePicture: anweshaProfile.profilePicture || "", // fallback
    location: anweshaProfile.location || "Not Provided",
    university: anweshaProfile.university || "Not Provided",
    socialLinks: anweshaProfile.socialLinks || []
  },
  stats: {
    totalQuestions: anweshaProfile.totalSolved,
    totalActiveDays: anweshaProfile.totalActiveDays || "N/A", // replace with real key if available
    submissionsPast6Months: anweshaProfile.submissionsPast6Months || [],
    maxStreak: anweshaProfile.maxStreak || 0,
    currentStreak: anweshaProfile.currentStreak || 0,
    awards: anweshaProfile.awards || [],
    problemBreakdown: anweshaProfile.problemBreakdown || {}
  }
});

        } else {
            setError(new Error("Anwesha's profile not found."));
        }
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchProfileData();
}, []);

  if (loading) return <div className="loading-state">Loading profile...</div>;
  if (error) return <div className="error-state">Error loading profile: {error.message}</div>;
  if (!profileData) return <div className="no-data-state">No profile data available.</div>;

  const { user, stats } = profileData;

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <ConnectBanner />
        <div className="profile-dashboard">
          <div className="left-panel">
            <UserProfile user={user} />
          </div>
          <div className="right-panel">
            <div className="stats-grid">
              <StatsCard title="Total Questions" value={stats.totalQuestions} />
              <StatsCard title="Total Active Days" value={stats.submissionCalendar.length} />
              {/* You might want a different component for Max.Streak and Current.Streak if they have different styling */}
              <div className="streak-stats">
                 <StatsCard title="Max.Streak" value={stats.maxStreak} />
                 <StatsCard title="Current.Streak" value={stats.currentStreak} />
              </div>
            </div>
            <SubmissionHistory data={stats.submissionsPast6Months} />
            <div className="bottom-stats-row">
              <StatsCard title="Contribution" value={stats.contributionPoints}/> {/* Added isAwards prop */}
              <ProblemDifficultyBreakdown data={stats.problemBreakdown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;