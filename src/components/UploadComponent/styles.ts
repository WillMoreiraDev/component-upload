import { styled } from "styled-components";

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
    grid-gap: 2.4rem;
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
  max-width: 16.9rem;
  height: 11.4rem;
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
