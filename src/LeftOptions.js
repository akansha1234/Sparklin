
import React from 'react';
import "./LeftOption.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
 root:{
   boxShadow:"none",
 },
});

export default function LeftOptions({Icon,title}) {
  const classes = useStyles();

  return (
    <div className="left-options">
      <Accordion className={classes.root}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="sidebar">{Icon && <Icon className="plus"/>} {title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="sidebar-line">
               <p>Direct Tax Laws</p>
               <p>International Taxation</p>
               <p>Indirect Tax Laws</p>
               <p>GST</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

