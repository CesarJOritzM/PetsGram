import React from 'react';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const PhothoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => (
  <article>
    <a href={`/details/${id}`}>
      <div>
        <img src={src} alt="" />
      </div>
    </a>
    <button type="button">{likes} Likes!</button>
  </article>
);

export default PhothoCard;
