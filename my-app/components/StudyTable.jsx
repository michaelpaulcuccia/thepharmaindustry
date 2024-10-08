import React from "react";
import styled2 from "styled-components";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { mobileBreakpoint } from "../constants";
import { LineWeight } from "@mui/icons-material";

const ComponentWrapper = styled2.div`
  margin: 18px 26px;

  @media(max-width: ${mobileBreakpoint}) {
  margin: 18px 0px;
  }
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function StudyTable({ item }) {
  console.log(item);

  return (
    <ComponentWrapper>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Conditions</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item.map((field, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {field.protocolSection.identificationModule.briefTitle}
                </StyledTableCell>
                <StyledTableCell>
                  {field.protocolSection.conditionsModule.conditions.map(
                    (condition, index) => (
                      <React.Fragment key={index}>
                        <span>{condition}</span>
                        {index <
                          field.protocolSection.conditionsModule.conditions
                            .length -
                            1 && ", "}
                      </React.Fragment>
                    )
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  {field.protocolSection.statusModule.overallStatus}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ComponentWrapper>
  );
}
