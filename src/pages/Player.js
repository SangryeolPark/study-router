import React, { useEffect } from 'react';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { songs } = useOutletContext();
  const song = songs.find(song => song.id === parseInt(id));

  useEffect(() => {
    if (!song) {
      alert('!!!');
      navigate('/songs');
    }
  }, []);

  return (
    <div className="modal modal-sheet d-block">
      {/*  p-4 py-md-5 */}
      <div className="modal-dialog">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">Modal title {song ? song.title : ''}</h1>
            <Link to="/songs" className="btn-close"></Link>
          </div>
          <div className="modal-body py-0 pb-3">
            <YouTube
              videoId={song ? song.youtube_link : ''}
              opts={{
                width: '100%',
                playerVars: { autoplay: 1 },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
