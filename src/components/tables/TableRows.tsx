import { ITableRowProps, TableRow } from "./TableRow";

export interface ITableRowsProps<T>
  extends Omit<Partial<ITableRowProps<T>>, "item" | "isSelected"> {
  rows: Map<number, T>;
  selectedRows: Map<number, boolean>;
}

export const TableRows = <T extends any>({
  rows,
  columns,
  canEdit,
  canDelete,
  canSelect,
  onDeleteRow,
  onEditRow,
  onSelectRow,
  selectedRows,
}: ITableRowsProps<T>) => {
  return (
    <tbody>
      {Array.from(rows.entries()).map(([rowKey, values]) => {
        return (
          <TableRow
            {...{
              columns,
              canEdit,
              canDelete,
              canSelect,
              onDeleteRow,
              onEditRow,
              onSelectRow,
              item: values,
              isSelected: selectedRows.get(rowKey),
            }}
            key={rowKey}
          />
        );
      })}
    </tbody>
  );
};
