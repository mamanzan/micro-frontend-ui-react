import { IItem } from "../../interface/interface";
import { ITableRowProps, TableRow } from "./TableRow";

export interface ITableRowsProps<T>
  extends Omit<Partial<ITableRowProps<T>>, "item" | "isSelected"> {
  rows: Map<number, T>;
  selectedRows: Map<number, boolean>;
}

export const TableRows = <T extends IItem>({
  rows,
  selectedRows,
  columns,
  canEdit,
  canDelete,
  canSelect,
  onDeleteRow,
  onEditRow,
  onSelectRow,
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
