import React from 'react';
import ReactPlayer from 'react-player';
import useGTM from 'hooks/useGTM';
import './style.scss';

export default function VideoPlayer({ link }) {
  const gtm = useGTM();
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={link}
        controls={false}
        width="100%"
        height="100%"
        onStart={() => {
          gtm.push(gtm.events.LANDING_VIDEO, {});
        }}
      />
    </div>
  );
}
