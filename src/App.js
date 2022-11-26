import "./App.css";
import * as React from "react";
import { IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import * as style from "./style";


function App() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);

  const handleChange1 = (e) => {
    setCount1(e.target.value);
  };

  const addCount1 = () => {
    setCount1(parseInt(count1, 10)+1);
  }

  const subCount1 = () => {
    if(count1 > 0){
      setCount1(parseInt(count1, 10)-1);
    }

  }

  const handleChange2 = (e) => {
    console.log("e", e.target.value);
    setCount2(e.target.value);
  };

  const addCount2 = () => {
    if(count2 > 0){
    setCount2(parseInt(count2, 10)+1);
    }
  }

  const subCount2 = () => {
    setCount2(parseInt(count2, 10)-1);
  }

  const handleChange3 = (e) => {
   
    setCount3(e.target.value);
  };

  const addCount3 = () => {
    setCount3(parseInt(count3, 10)+1);
  }

  const subCount3 = () => {
    if(count3 > 0){
    setCount3(parseInt(count3, 10)-1);
    }
  }
  return (
    <div className="App">
      <style.Header>
        <style.Section>
          <style.CoMmLabel>1. 黃美雲</style.CoMmLabel>
          <style.ComText
            id="outlined-number"
            type="number"
            label="Count"
            color="secondary"
            focused
            value={count1}
            onChange={handleChange1}
          />
          <div>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={subCount1}
            >
              <RemoveCircleIcon sx={{ color: "#CB1B45", fontSize: "70px" }} />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={addCount1}
            >
              <AddCircleIcon sx={{ color: "#1B813E", fontSize: "70px" }} />
            </IconButton>
          </div>
        </style.Section>
        <style.Section>
          <style.CoMmLabel>2. 謝杉</style.CoMmLabel>
          <style.ComText
            id="outlined-number"
            type="number"
            label="Count"
            color="secondary"
            focused
            value={count2}
            onChange={handleChange2}
          />
          <div>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={subCount2}
            >
              <RemoveCircleIcon sx={{ color: "#CB1B45", fontSize: "70px" }} />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={addCount2}
            >
              <AddCircleIcon sx={{ color: "#1B813E", fontSize: "70px" }} />
            </IconButton>
          </div>
        </style.Section>

      </style.Header>


      <style.Header>
        <style.Section2>
          <style.CoMmLabel>3.陳靜雅</style.CoMmLabel>
          <style.ComText
            id="outlined-number"
            type="number"
            label="Count"
            color="warning"
            focused
            value={count3}
            onChange={handleChange3}
          />
          <div>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={subCount3}
            >
              <RemoveCircleIcon sx={{ color: "#CB1B45", fontSize: "70px" }} />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={addCount3}
            >
              <AddCircleIcon sx={{ color: "#1B813E", fontSize: "70px" }} />
            </IconButton>
          </div>
        </style.Section2>
      </style.Header>
    </div>
  );
}

export default App;
