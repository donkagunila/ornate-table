export type Column = {
  field: any;
  name: string;
  render?: (row: any) => React.ReactElement;
  type?: string;
};

export type OrnateOptions = {
  emptyDataMessage?: string | React.ReactNode;
};
