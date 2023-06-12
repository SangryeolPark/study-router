import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SongList = ({ songs }) => {
  return (
    <div className="card card-body">
      <h2>SongList</h2>
      <ul className="list-group">
        {songs.map(song => (
          <li className="list-group-item" key={song.id}>
            <Link to={`/songs/${song.id}`} style={{ textDecoration: 'none' }}>
              {song.title} / {song.musician}
              <span className="float-end badge bg-secondary">
                <i className="fa fa-play"></i>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet context={{ songs }} />
    </div>
  );
};

export default SongList;
