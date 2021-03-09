import { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;
// eslint-disable-next-line import/prefer-default-export
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

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
export const fadeOut = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeOutKeyframes} ${type};
  `;
