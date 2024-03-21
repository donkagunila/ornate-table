import { Column } from "../OrnateTable.types";

interface OrnateTableHeaderProps {
  columns: Column[];
}

const OrnateTableHeader = (props: OrnateTableHeaderProps) => {
  return (
    <tr className="text-left text-xs font-semibold bg-slate-100 dark:bg-darkmode-600 border-y border-slate-200 dark:text-slate-200 uppercase tracking-wider">
      {props.columns.map((column: Column) => (
        <th
          key={column.field}
          scope="col"
          className={`px-2 py-3 cursor-pointer text-slate-500`}
        >
          <div className="flex">
            <span> {column.name}</span>
          </div>
        </th>
      ))}
    </tr>
  );
};

export default OrnateTableHeader;
