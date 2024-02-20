import "../../global.css";
import OrnateTableBody from "./Body";
import OrnateTableHeader from "./Header";
import { OrnateTableProps } from "./OrnateTable.props";
import { twMerge } from "tailwind-merge";

const OrnateTable = (props: OrnateTableProps) => {
  return (
    <div className={twMerge("box", props.className)}>
      <div className="box-header flex">
        <div className="flex justify-between items-center px-3 w-full">
          <div className="py-3">
            {props.title && (
              <h2 className="text-base font-medium text-slate-600">
                {props.title}
              </h2>
            )}
          </div>
        </div>
      </div>

      <div className={`overflow-x-auto`}>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkmode-600 truncate">
            <OrnateTableHeader columns={props.columns} />
          </thead>
          <tbody className="truncate">
            <OrnateTableBody
              columns={props.columns}
              rows={props.rows}
              loading={props.loading}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrnateTable;
