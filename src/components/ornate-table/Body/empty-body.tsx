import { EmptyIcon } from "../../../lib/icons/EmptyIcon";
import { Column } from "../OrnateTable.types";

interface EmptyBodyProps {
  columns: Column[];
  options?: {
    emptyDataMessage?: string | React.ReactNode;
  };
}

const EmptyBody = (props: EmptyBodyProps) => {
  const emptyDataText: string | React.ReactNode =
    props.options?.emptyDataMessage ?? "No records found";
  return (
    <tr>
      <td className="text-center py-10" colSpan={props.columns.length}>
        <div className="m-auto bg-accent-100 items-center text-center p-5 h-fit w-fit rounded-full">
          <EmptyIcon height={70} width={70} />
        </div>
        {typeof emptyDataText === "string" ? (
          <p className="text-sm text-slate-600 mt-3 capitalize">
            {props.options?.emptyDataMessage}
          </p>
        ) : (
          props.options?.emptyDataMessage
        )}
      </td>
    </tr>
  );
};

export default EmptyBody;
