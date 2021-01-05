import styled from "styled-components";
import { blue } from "./index";

export const Wrapper = styled.header`
  min-height: 140px;
  width: 100%;
  position: relative;
  @media (max-width: 600px) {
    min-height: 200px;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
  }

  .mobile-header-img {
    display: none;
  }

  @media (max-width: 1200px) {
    width: auto;
    height: 140px;
    & img {
      height: 100%;
    }
  }

  @media (max-width: 600px) {
    width: auto;
    height: 100%;

    .mobile-header-img {
      display: block;
    }
    .desktop-header-img {
      display: none;
    }
  }
`;
export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 9vw;

  .header_toggle {
    height: 36px;
    width: 102px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    & button {
      width: 40px;
      height: 20px;
      outline: none;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }

    .slider {
      height: 14px;
      width: 14px;
      bottom: 11.5px;
      left: 58px;
      position: absolute;
      border-radius: 50%;
      background-color: ${blue};
      transition: 0.4s;
      pointer-events: none;
    }

    .slider.active {
      transform: translateX(-19px);
    }
  }
`;
