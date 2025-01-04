import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import { useStreamers } from '../streamerdata/streamer'
import TeamCard from '../components/TeamCard'
import SpButton from '../components/SpButton'
import { Link } from 'react-router-dom'

const Teams = () => {
  const { fetchStreamers, streamers } = useStreamers();
  const [loading, setLoading] = useState(false);
  const [sortedTeams, setSortedTeams] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await fetchStreamers();
      setLoading(false);
    }
    fetchData();
  }, [fetchStreamers]);

  useEffect(() => {
    const filteredStreamers = streamers.filter(
      (streamer) => streamer.team !== "sajam"
    )

    const teams = filteredStreamers.reduce((acc, streamer) => {
      const { team } = streamer;
      if (!acc[team]) {
        acc[team] = []
      }
      acc[team].push(streamer);
      return acc
    }, {});

    for (const team in teams) {
      teams[team].sort((a, b) => a.rank - b.rank)
    }

    setSortedTeams(teams);
  }, [streamers]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  console.log("streamers", streamers);
  console.log("teams", sortedTeams);

  return (
    <div className='p-4'>
      <div className='mt-10 mx-auto justify-center max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-12 justify-items-center'>

        {Object.keys(sortedTeams).map((teamName) => (
          <TeamCard
            key={teamName}
            teamName={teamName}
            teamMembers={sortedTeams[teamName]}
          />
        ))}
      </div>
      <div className='mt-10 flex items-center justify-center gap-x-8'>
        <Link to={'/'}>
          <SpButton label="Home" />
        </Link>

        <Link to={'/about'}>
          <SpButton label="About" />
        </Link>
      </div>
    </div>
  )
}

export default Teams