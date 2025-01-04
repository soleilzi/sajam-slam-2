import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const TeamCard = ({ teamName, teamMembers }) => {

  const coachBackground = {
    BrawlPro: 'bg-orange-600',
    Tone: 'bg-sky-500',
    MYK: 'bg-red-500',
    PhiDX: 'bg-purple-500',
    KawaiiFaceMiles: 'bg-pink-500',
    Kaizur: 'bg-green-500',
  };


  return (
    <div className="bg-white w-96 h-80 -skew-x-12 shadow-lg transition duration-200 hover:scale-110">
      <div className="flex flex-col">
        {teamMembers.map((member) => {
          const backgroundClass =
            member.rank === 1 ? coachBackground[teamName] :
              member.rank === 2 ? 'bg-blue-100' :
                member.rank === 3 ? 'bg-red-100' :
                  member.rank === 4 ? 'bg-orange-100' : 'bg-green-100';

          const textColourClass =
            member.rank === 1 ? coachBackground[teamName] :
              member.rank === 2 ? 'bg-blue-00' :
                member.rank === 3 ? 'bg-red-100' :
                  member.rank === 4 ? 'bg-orange-100' : 'bg-green-100';

          const fontClass = member.rank === 1 ? 'font-semibold' : 'font-semibold';
          const textSize = member.rank === 1 ? 'text-[22px]' : 'text-lg';

          return (
            <div
              key={member._id}
              className={`flex items-center h-16 ${backgroundClass}`}>

              <div className={`${textSize} w-full ml-4 transform skew-x-12 ${fontClass}`}>
                {member.name}
              </div>

              <div className='gap-x-4 flex items-center text-xl justify-center mr-10 transform skew-x-12'>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter className='hover:text-sky-600 transition duration-150' /></a>
                <a href={member.twitch} target="_blank" rel="noopener noreferrer"><FaTwitch className='hover:text-purple-800 transition duration-150' /></a>
                <a href={member.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube className='hover:text-red-600 transition duration-150' /></a>
              </div>

              <img src={member.image} alt={member.name} className="h-full ml-auto" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamCard;
