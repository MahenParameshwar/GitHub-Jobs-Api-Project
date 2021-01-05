import styled from "styled-components";
import { light_color, box_color, grey_dark, blue, link_color } from "../Styles";

export const JobHeader = styled.div`
  max-height: 120px;
  width: 82%;
  padding: 15px 0;
  background-color: ${({ theme }) => {
    return theme.current === "light" ? light_color : box_color;
  }};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: -25px;
  .img_header_container {
    width: 150px;
  }

  & img {
    width: 100%;
  }

  .header_text_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding: 0 50px;
  }

  .company_link {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 50px;
  }

  & .btn {
    width: 160px;
    display: flex;
    align-items: center;
    height: 53px;
    padding: 0 25px;
    font-size: 16px;
    border-radius: 2px;
    background-color: ${({ theme }) => {
      return theme.current === "light" ? light_color : link_color;
    }};
    color: ${({ theme }) => {
      return theme.current === "light" ? blue : light_color;
    }};
  }

  & .btn:hover {
    border: 1px solid
      ${({ theme }) => {
        return theme.current === "light" ? blue : light_color;
      }};
  }

  & .btn.invalid {
    border: 1px solid rgba(255, 0, 0, 0.4);
    background-color: rgba(255, 0, 0, 0.1);
    color: red;
  }

  & .no_link_to_site {
    font-size: 14px;
    margin-top: 10px;
    color: red;
  }

  @media (max-width: 768px) {
    top: -30px;
    min-height: 236px;
    padding: 15px 0;
    display: flex;
    flex-direction: column;

    .img_header_container {
      position: absolute;
      top: -40px;
      width: 80px;
      height: 80px;
      background-color: ${({ theme }) => {
        return theme.current === "light" ? light_color : box_color;
      }};
      border-radius: 5px;
      display: flex;
      align-items: center;
    }

    h1 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    h4 {
      margin-bottom: 30px;
    }

    .header_text_container {
      display: flex;
      padding: 20px 0;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      text-align: center;
    }

    .company_link {
      margin-left: unset;
    }
  }

  @media (max-width: 600px) {
    top: -60px;
  }
`;

export const JobBody = styled.div`
  padding: 35px;
  background-color: ${({ theme }) => {
    return theme.current === "light" ? light_color : box_color;
  }};

  .location {
    color: ${blue};
  }

  .displayFlex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }

  h2 {
    margin-bottom: 10px;
  }

  h2 + div {
    font-size: 14px;
  }

  .apply_btn {
    width: 102px;
    padding: 0 15px;
    background-color: ${blue};
    color: ${light_color};
    height: 38px;
    border-radius: 5px;
    outline: none;
    border: none;
  }

  .apply_btn:hover {
    background-color: transparent;
    border: 1px solid ${blue};
  }

  .grey {
    color: ${grey_dark};
  }

  .job_description > * {
    line-height: 1.5;
    margin-top: 20px;
  }

  .job_description ul {
    margin-left: 40px;
  }
`;

export const ApplyLink = styled.div`
  width: 100%;
  height: 137px;
  background-size: cover;
  padding: 35px;
  margin: 20px 0 60px;
  background-image: url("/images/desktop/bg-pattern-detail-footer.svg");

  & * {
    line-height: 1.5;
  }

  a {
    color: ${light_color};
  }
`;
