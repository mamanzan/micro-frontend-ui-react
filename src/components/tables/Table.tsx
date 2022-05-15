import { ReactElement, useEffect, useRef, useState } from "react";
import { IItem } from "../../interface/interface";
import {
  ColumnType,
  ITableColumn,
  ITableColumnsProps,
  SortDirection,
  TableColumns,
} from "./TableColumns";
import { ITableRowsProps, TableRows } from "./TableRows";

export interface ITableProps<T>
  extends Omit<ITableColumnsProps<T>, "canEditOrDelete" | "sort">,
    Omit<Partial<ITableRowsProps<T>>, "columns" | "isAutoSelectingAll"> {
  title?: string;
  dataCy?: string;
}

export const Table = <T extends IItem>({
  columns,
  rows,
  canEdit = false,
  canDelete = false,
  canSelect = false,
  title = "<Title>",
  dataCy = "table",
  onDeleteRow,
  onEditRow,
  onSelectRow,
  onSelectAll,
}: ITableProps<T>): ReactElement => {
  const [allColumns /*setAllColumns*/] = useState(columns);
  const [allRows, setAllRows] = useState(rows);
  const [isAutoSelectingAll, setIsAutoSelectingAll] = useState(false);
  const [isSelectingAll, setIsSelectingAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Map<number, boolean>());

  useEffect(() => {
    const result = new Map(
      Array.from(rows.entries()).map(([rowkey]) => [rowkey, false])
    );
    console.log("checked state", result);
    setSelectedRows(result);
  }, [rows]);

  useEffect(() => {
    let isAllSelected = true;
    selectedRows.forEach((value: boolean) => {
      if (value === false) isAllSelected = false;
    });
    setIsSelectingAll(isAllSelected);
  }, [selectedRows]);

  const comparison = (
    a: T,
    b: T,
    property: string,
    type: ColumnType
  ): number => {
    let _a = (a as any)[property];
    let _b = (b as any)[property];
    switch (type) {
      case "int":
        _a = parseInt(_a);
        _b = parseInt(_b);
        break;
      case "float":
        _a = parseFloat(_a);
        _b = parseFloat(_b);
        break;
      case "string":
      default:
        _a = _a.toString();
        _b = _b.toString();
        break;
    }
    return _a > _b ? 1 : -1;
  };

  const sort = (sortColumn: ITableColumn<T>) => {
    const indexOfColumn = allColumns.findIndex(
      (column: ITableColumn<T>) => column.field === sortColumn.field
    );
    //Somehow this copy keeps state updated ?
    const updatedColumns = [...allColumns];
    const column = updatedColumns[indexOfColumn];

    column.sort =
      column.sort === (SortDirection.DESCENDING || SortDirection.NONE)
        ? SortDirection.ASCENDING
        : SortDirection.DESCENDING;

    //resets all other columns when a new one is sorted.
    updatedColumns.forEach((column: ITableColumn<T>, i: number) => {
      column.sort = i === indexOfColumn ? column.sort : SortDirection.NONE;
    });

    let result = 0;

    const sortedItems = new Map(
      //@ts-ignore
      [...allRows.entries()].sort((a, b) => {
        switch (column.sort) {
          case SortDirection.DESCENDING:
          case SortDirection.NONE:
            result = comparison(a[1], b[1], column.field, column.type);
            break;
          case SortDirection.ASCENDING:
          default:
            result = comparison(b[1], a[1], column.field, column.type);
            break;
        }
        return result;
      })
    );

    //setAllColumns(updatedColumns);
    //@ts-ignore
    setAllRows(sortedItems);
  };

  //This will fire when the top-level select all is clicked
  const selectAll = (enabled: boolean) => {
    console.log("Table selectAll() enabled:", enabled);
    setIsSelectingAll(enabled);
    //setAutoSelectAll(enabled);
    setSelectedRows((prevState: Map<number, boolean>) => {
      const newState = new Map(
        Array.from(prevState.entries()).map(([key]) => [key, enabled])
      );
      console.log("After Select All update", newState);
      return newState;
    });
    //callbcack for outside of this component.
    if (onSelectAll) onSelectAll(enabled);
  };

  //Need to capture select row here to potentially turn off 'selectAll' checkbox
  const selectRow = (item: T): void => {
    //If any one row is de-selected, need to uncheck the 'Select All' checkbox.
    // if (!isSelected) {
    setIsSelectingAll(false);
    //setAutoSelectAll(false);
    // }
    console.log("Before update", selectedRows);
    const key = item.id as number;
    const isSelected = selectedRows.get(key);
    const newSelections = new Map(selectedRows);
    newSelections.set(key, !isSelected);
    console.log("After update", newSelections);
    setSelectedRows(newSelections);

    if (onSelectRow) onSelectRow(item);
  };

  return (
    <table className="table" data-cy={dataCy}>
      <caption className="ps-2" data-cy="title">
        {title}
      </caption>
      <TableColumns
        columns={allColumns}
        sort={sort}
        canEditOrDelete={canEdit || canDelete}
        canSelect={canSelect}
        onSelectAll={selectAll}
        isSelectingAll={isSelectingAll}
      />
      <TableRows
        {...{
          rows: allRows,
          columns: allColumns,
          canSelect,
          canEdit,
          canDelete,
          onDeleteRow,
          onEditRow,
          onSelectRow: selectRow,
          selectedRows,
        }}
      />
    </table>
  );
};
