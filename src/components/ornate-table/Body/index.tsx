import React from "react";
import { SpinnerIcon } from "../../../lib/icons/SpinnerIcon";
import { Column } from "../OrnateTable.types";
import EmptyBody from "./empty-body";

interface OrnateTableBodyProps {
  rows: any[];
  columns: Column[];
  loading?: boolean;
  options?: {
    emptyDataMessage?: string | React.ReactNode;
  };
}
const OrnateTableBody = (props: OrnateTableBodyProps) => {
  if (props.loading) {
    return (
      <tr>
        <td className="text-center py-20" colSpan={props.columns.length}>
          <div>
            <SpinnerIcon />
          </div>
        </td>
      </tr>
    );
  }

  if (props.rows.length === 0) {
    return <EmptyBody columns={props.columns} options={props.options} />;
  }
  return props.rows.map((row: any, index: number) => (
    <tr
      key={row.id}
      className={`${
        index % 2 === 0
          ? "bg-gray-50 dark:bg-darkmode-500"
          : "bg-white dark:bg-darkmode-100"
      }  hover:bg-gray-100`}
    >
      {props.columns.map((column: Column) => {
        const cellContent: any = column.render
          ? column.render(row)
          : row[column.field];
        return (
          <td key={column.field} className="px-2 py-4 text-xs">
            {column.type === "date"
              ? new Date(cellContent).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : cellContent}
          </td>
        );
      })}
    </tr>
  ));
};

export default OrnateTableBody;
