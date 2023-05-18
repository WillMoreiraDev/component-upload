import styled, { keyframes } from "styled-components";

const ldsEllipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const ldsEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const ldsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

export const LoadingStyles = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 13px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 0;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: var(--secondary-01);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: ${ldsEllipsis1} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: ${ldsEllipsis3} 0.6s infinite;
  }
  span {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--secondary-01);
  }
  @media (max-width: 560px) {
    span {
      text-align: center;
      max-width: 80%;
    }
  }
`;
