import { keyframes, css } from 'styled-components';

const fadeOutKeyframes = keyframes`
from{
  filter: blur(0);
  opacity: 1;
}

to {
  filter: blur(5px);
  opacity: 0;
}
`;
const fadeOut = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeOutKeyframes} ${type};
  `;

export default fadeOut;
