import React from "react";
import { Box, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type PaginationControlsProps = {
  count?: number; // total pages
  page?: number; // current page (1-indexed)
  onPageChange?: (event: React.ChangeEvent<unknown>, value: number) => void;
};

export const PaginationControls = ({
  count = 10,
  page = 1,
  onPageChange,
}: PaginationControlsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 4,
        bgcolor: "background.paper",
      }}
    >
      <Pagination
        count={count}
        page={page}
        onChange={onPageChange}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
        sx={{
          "& .MuiPaginationItem-root": {
            borderRadius: 2,
            margin: "0 4px",
          },
          "& .Mui-selected": {
            backgroundColor: "#1976d2 !important",
            color: "white",
            fontWeight: "bold",
          },
        }}
      />
    </Box>
  );
};
