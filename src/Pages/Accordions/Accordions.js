import * as React from "react";
import './Accordion.css';
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="flex  justify-center">
      <div className="accordion-position w-[500px]">
        <Accordion
        className="rounded"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>What kind of data can I see in FieldX?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="my-5 rounded"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Does Bizzy read my customers' data?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
        className="rounded"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>What's your refund and cancellation policy?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="accordion-position w-[500px]">
        <Accordion
        className="rounded"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>How do you take payments?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
        className="my-5 rounded"
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>Can I also track website analytics on fieldX?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
        className="rounded"
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography>What makes Bizzy different from other analytics tools?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
