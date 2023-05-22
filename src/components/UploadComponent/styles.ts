import { styled } from "styled-components";

import Checked from "../../assets/checked.svg";

export const ContainerUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  .content {
    max-width: 37.8rem;
    width: 100%;
  }
  .error {
    background: #fff3f3;
    display: block;
    padding: 4px 10px;
    color: #eb5757;
    letter-spacing: 0.04em;
    font-size: 14px;
    line-height: 140%;
    margin-top: 1.2rem;
    text-align: center;
  }
  .actions {
    margin-top: 2.4rem;
    display: flex;
    gap: 1.2rem;
    .btn-confirm {
      padding: 0.8rem 3.2rem;
      background-color: #2e7a5d;
      font-weight: 700;
      font-size: 1.6rem;
      letter-spacing: 0.04em;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;

export const BoxUpload = styled.div`
  border: 1px dashed #4da977;
  width: 100%;
  height: 20.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
  &.drag-active {
    opacity: 0.7;
  }
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  .icon {
    width: 3.9rem;
    height: 3.9rem;
    background-color: #e6f3ec;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.6rem;
  }
  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #4da977;
    text-align: center;
    max-width: 90%;
    height: 4.4rem;
  }
`;

export const BoxPreview = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  .list {
    display: flex;
    align-items: flex-start;
    grid-gap: 1.6rem;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const CardPreviewDoc = styled.div`
  position: relative;
  border: 1px solid #99ceb1;
  padding: 4px;
  width: 100%;
  max-width: 18.1rem;
  height: 12.4rem;
  &:hover {
    span {
      opacity: 1;
    }
  }

  & > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    iframe {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(46, 122, 93, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    opacity: 0;
    font-size: 1.2rem;
    transition: opacity 0.3s;
  }
  .btn-remove {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #e6f3ec;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const AreaSuccessFiles = styled.div`
  h5 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 160%;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 2.4rem;
  }
  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 140%;
    letter-spacing: 0.04em;
    color: #585858;
  }
  .all-docs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px 29px;
    margin-top: 2.4rem;
    margin-bottom: 6.4rem;
    max-width: 36.8rem;
  }

  .msg-preview {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-top: 1rem;
    .icon {
      width: 2.2rem;
      height: 2.2rem;
      background: url(${Checked}) no-repeat var(--secondary-02) center center;
      border-radius: 50%;
    }
    span {
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 160%;
      letter-spacing: 0.04em;
      color: #585858;
      margin-left: 0.6rem;
    }
  }

  .btn-add-another {
    cursor: pointer;
    padding: 0 2rem;
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 0.04em;
    color: #585858;
    height: 3.8rem;
    transition: background-color 0.3s;
    &:hover {
      background-color: #c4c4c4;
    }
  }
  .btn-next {
    display: flex;
    align-items: center;
    padding: 0 3.2rem;
    line-height: 3.8rem;
    font-weight: 700;
    font-size: 1.6rem;
    letter-spacing: 0.04em;
    cursor: pointer;
    background-color: #2e7a5d;
    color: white;
    transition: background-color 0.3s;
    &:hover {
      background-color: #4da977;
    }
  }
`;
