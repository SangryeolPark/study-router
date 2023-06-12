import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const SongDetail = ({ songs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [musician, setMusician] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    const song = songs.find(song => song.id === parseInt(id));

    if (song) {
      setTitle(song.title);
      setMusician(song.musician);
      setLink(`https://m.youtube.com/watch?v=${song.youtube_link}`);
    } else {
      alert('자료가 없습니다.');
      navigate('/songs');
    }
  }, [id]);

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musician : {musician}</p>
      <p>
        <a href={link} target="_blank" rel="noreferrer">
          View Yotube
        </a>
      </p>
      <Link to="/songs">Return SongList</Link>
    </div>
  );
};

export default SongDetail;
