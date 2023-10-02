"use client";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Capsule Id", width: 200 },
  { field: "capsule_serial", headerName: "Capsule serial", width: 200 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "original_launch", headerName: "Original launch", width: 200 },
  { field: "mission	", headerName: "Mission	", width: 200 },
  { field: "landings", headerName: "Landings", width: 200 },
  { field: "type", headerName: "Type", width: 200 },
  { field: "reuse_count", headerName: "Reuse count", width: 200 },

  // Add more columns here as needed
];

// const rows = [
//   { id: 1, name: "Capsule 1", status: "Active" },
//   { id: 2, name: "Capsule 2", status: "Inactive" },
//   { id: 3, name: "Capsule 1", status: "Active" },
//   { id: 4, name: "Capsule 2", status: "Inactive" },
//   { id: 5, name: "Capsule 1", status: "Active" },
//   { id: 6, name: "Capsule 2", status: "Inactive" },
//   { id: 7, name: "Capsule 1", status: "Active" },
//   { id: 8, name: "Capsule 2", status: "Inactive" },
//   { id: 9, name: "Capsule 1", status: "Active" },
//   { id: 10, name: "Capsule 2", status: "Inactive" },
//   // Add more data here
// ];
interface CustomDataGridProp {
  rows: any[];
}
const CustomDataGrid = (props: CustomDataGridProp) => {
  const { rows } = props;
  return (
    <div className="min-h-screen flex items-center justify-center bg-space-gradient">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-3/4  ">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomDataGrid;
