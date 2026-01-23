import { Box, Typography } from "@mui/material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MuiAccordian = () => {

    const [panelToExpand, setPanelToExpand] = useState<null | string>(null);

    const handleClick = (panel:string) => (event:React.SyntheticEvent,expanded: boolean) => {
        console.log(`MuiAccordian - event is ${event} , panel is ${panel} , expanded is ${expanded}`)
    }


  return (
    <>
      <Box sx={{ width: 2 / 3, justifyContent: "left" }}>
        <Typography variant="h4">
          Example of using Accordian and associated components
        </Typography>
        <Typography variant="h6" component="div" align="left">
          <ul>
            <li>Accordion - the main wrapper</li>
            <li>AccordionSummary - the 'title' of the Accordian</li>
            <li>AccordionDetails - the 'contents' of the Accordian</li>
          </ul>
        </Typography>
        <Typography variant="h6" component="div" align="left" sx={{mb:3}}>
            Note that the event handler for the &lt;Accordian&gt; component uses a <Typography component="span" color="gray">function factory</Typography>.
            The onChange event handler is called immediately when the component renders and the function substitution occurs. This only occurs 
            with function factories.
        </Typography>
      </Box>

      <Box sx={{ width: 1 / 3, justifyContent: "left" }}>
        <Accordion expanded={panelToExpand === "panel1"} onChange={handleClick("panel1")}>
          <AccordionSummary id="panel1" expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>Elit ullamco anim mollit ullamco.</AccordionDetails>
        </Accordion>
        <Accordion expanded={panelToExpand === "panel2"} onChange={handleClick("panel2")}>
          <AccordionSummary id="panel2" expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>Sunt sit velit adipisicing id deserunt aliquip eu aliqua est. Ut eu proident ullamco quis elit duis reprehenderit sint occaecat eiusmod. Esse commodo laborum exercitation culpa Lorem pariatur sint sunt officia laboris.</AccordionDetails>
        </Accordion>
        <Accordion expanded={panelToExpand === "panel3"} onChange={handleClick("panel3")}>
          <AccordionSummary id="panel3" expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>Nulla et ea deserunt quis. Incididunt excepteur sint sunt consectetur. Laborum esse amet tempor et quis reprehenderit voluptate deserunt dolore deserunt.</AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};
