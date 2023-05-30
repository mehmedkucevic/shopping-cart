import * as React from "react";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import DeleteForever from "@mui/icons-material/DeleteForever";

export default function DeleteButton({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Chip
        variant="outlined"
        color="danger"
        onClick={handleDelete}
        endDecorator={
          <ChipDelete color="danger" variant="plain">
            <DeleteForever />
          </ChipDelete>
        }
      >
        Clear
      </Chip>
    </Box>
  );
}