import { css, keyframes } from 'styled-components';

const skeletonLoading = keyframes`
    from {
        background-position: 0% 0%;
    }
    to {
        background-position: -135% 0%;
    }
`;

const Skeleton = () =>
  css`
    background: linear-gradient(-90deg, #c1c1c1 0%, #f8f8f8 50%, #c1c1c1 100%);
    background-size: 400% 400%;
    animation: ${skeletonLoading} 1.5s ease-in-out infinite;
  `;

export default Skeleton;
