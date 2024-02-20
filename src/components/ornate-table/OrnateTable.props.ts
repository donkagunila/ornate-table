import { Column } from "./OrnateTable.types";

export interface OrnateTableProps {
  title?: string;
  columns: Column[];
  rows: any[];
  loading?: boolean;
  className?: string;
}
