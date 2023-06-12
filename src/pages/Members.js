import React from 'react';
import { useNavigate } from 'react-router-dom';

const Members = ({ members }) => {
  const path = process.env.PUBLIC_URL;
  const navigate = useNavigate();

  const goHome = () => {
    // navigate를 이용하여 정보를 전달하고 싶다.
    // state 옵션에 객체를 정의해서 전달해 준다.
    navigate('/', { state: { from: '/members' } });
  };

  const showInfo = _name => {
    navigate('/about', { state: { name: _name } });
  };

  return (
    <div className="card card-body">
      <h2>Members</h2>
      <div className="container">
        <div className="row">
          {members.map((member, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3" style={{ textAlign: 'center' }}>
              <img
                src={`${path}/${member.photo}`}
                alt={member.name}
                className="img-thumbnail"
                style={{ width: 90, height: 80 }}
                onClick={() => showInfo(member.name)}
              />
              <br />
              <h6>{member.name}</h6>
              <br />
            </div>
          ))}
        </div>
        <button className="btn btn-secondary" onClick={goHome}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Members;
