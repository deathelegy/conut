import styled from 'styled-components';
import TextField from "@mui/material/TextField";

export const Header = styled.div`
height: 50%;
display: flex;
justify-content: space-between;
align-items: center;
`;



export const Section = styled.div`
  height: 100%;
  width: 49%;
  /* background: red; */
`;

export const Section2 = styled.div`
  height: 100%;
  width: 99%;
  /* background: red; */
`;

export const CoMmLabel= styled.div`
    height: 50px;
    font-size: 40px;
    color: #0B1013;
    margin-bottom: 10px;
    font-weight: 600;
    float: left;
    width: 100%;
    display: flex;
    `;


export const ComText = styled(TextField)`
  width: 100%;
  
  .css-hjtp1-MuiInputBase-root-MuiOutlinedInput-root {
    height: 200px;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    font-size: 150px;
    text-align: center;
  }
`;