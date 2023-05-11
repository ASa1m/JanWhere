import React from 'react';

function DCard(props) {
  return (
    <div class="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch">
    <div class="card">
      <div class="avatar white d-flex justify-content-center align-items-center">
        <img
          src= {props.image + (props.image === "/static/undefined" ? '.png' : '')} alt='Avatar'
          class="img-fluid"
        />
      </div>
      <div class="card-body">
        <p class="font-weight-bold my-2">{props.name}</p>
        <p class="text-muted">{props.role}</p>
      </div>
    </div>
  </div>
  );
}

export default DCard;