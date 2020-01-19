import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '45%',
    position: 'relative',
    padding: '6px 10px 24px 16px'
  },
});


export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([1960, 2019]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        
        min={1960}
        max={2019}
      />
    </div>
  );
}
