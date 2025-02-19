import React, { useEffect, useState } from 'react';
import { useStreamers } from '../streamerdata/streamer';
import Spinner from '../components/Spinner';
import { FaTwitter } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const AboutPage = () => {
  const id = '676748e1c348f8214d9610f0';
  const { fetchStreamerByID, streamer } = useStreamers();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        await fetchStreamerByID(id);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchStreamerByID, id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (!streamer) {
    return <div className="p-4">Streamer not found.</div>;
  }

  return (
    <div className="p-4">
      <div className="max-w-screen-md mx-auto flex flex-col md:flex-row items-center md:items-start justify-center px-4">

        <div className="w-52 md:w-1/4 mb-3 h-56 -skew-x-12 bg-white mx-auto border-2 border-slamBlue-50 hover:scale-110 transition duration:200">
          <h1 className="text-center my-[5px] transform skew-x-12 font-semibold text-2xl">
            {streamer.name}
          </h1>

          <img
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/sajam-profile_image-1d50da0d59b0363a-300x300.jpeg"
            alt={streamer.name}
            className="h-36 w-5/6 mx-auto"
          />

          <div className="gap-x-4 flex items-center text-lg justify-center transform skew-x-12 mt-2">
            <a href={streamer.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className='hover:text-cyan-500 transition duration-150' /></a>
            <a href={streamer.twitch} target="_blank" rel="noopener noreferrer"><FaTwitch className='hover:text-purple-700 transition duration-150' /></a>
            <a href={streamer.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube className='hover:text-red-500 transition duration-150' /></a>
          </div>
        </div>

        <div className="p-6 w-full md:flex-1 h-auto -skew-x-12 bg-orange-200 -mt-[2px] md:mt-0 m-auto md:mx-0 font-semibold border-2 border-slamBlue-50 font-roboto">
          <p className='my-3'>
            Featuring 24 streamers of all Tekken skill levels and 6
            high level Tekken coaches, the Sajam Tekken Slam returns!
            Hosted by fighting game afficionado and community icon Sajam, 6 teams will
            compete for the chance to fly to EVO Las Vegas, along with some extra
            prizes.
          </p>
          <p className='mb-3'>
            The format is a team battle, which sees the team with the better
            head-to-head score winning.
            Teams will have time to train before the round robin stage, which leads
            into a double elimination bracket.
          </p>

          <p>
            The tournament stages will be broadcasted live on Twitch,
            highlights on YouTube! Follow Sajam on Twitter for all updates.
          </p>
        </div>
      </div>
    </div>

  );
};

export default AboutPage;
