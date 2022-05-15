import { useEffect, useRef } from "react";

/* eslint-disable no-unused-vars */
export enum SortDirection {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
  NONE = "NONE",
}

export type ColumnType = "int" | "float" | "string";

export interface ITableColumn<T> {
  field: string;
  displayName?: string;
  sort: SortDirection;
  type: ColumnType;
  customRender?: (item: T) => JSX.Element;
}

export interface ITableColumnsProps<T> {
  columns: ITableColumn<T>[];
  canEditOrDelete?: boolean;
  canSelect?: boolean;
  isSelectingAll?: boolean;
  sort?: (column: ITableColumn<T>) => void;
  onSelectAll?: (enabled: boolean) => void;
}

export const TableColumns = <T extends any>({
  columns,
  sort,
  canEditOrDelete,
  canSelect,
  onSelectAll,
  isSelectingAll,
}: ITableColumnsProps<T>) => {
  const checkboxRef = useRef(null);

  useEffect(() => {
    console.log("TableColumns useEffect[isSelectingAll]:", isSelectingAll);
    if (checkboxRef.current) checkboxRef.current.checked = isSelectingAll;
  }, [isSelectingAll]);

  const selectAllEventHandler = () => {
    const isSelectingAll = checkboxRef.current.checked;
    console.log(
      "TableColumns selectAllEventHandler() isSelectingAll: ",
      isSelectingAll
    );
    onSelectAll(isSelectingAll);
  };
  const renderSortIcon = (column: ITableColumn<T>) => {
    let result = null;

    switch (column.sort) {
      case SortDirection.ASCENDING:
        result = <i className="bi bi-sort-up-alt"></i>;
        break;
      case SortDirection.DESCENDING:
        result = <i className="bi bi-sort-down"></i>;
        break;
      case SortDirection.NONE:
      default:
        result = (
          <span style={{ width: "20px", display: "inline-block" }}></span>
        );
        break;
    }
    return result;
  };

  return (
    <thead className="table__columns">
      <tr className="table__column-row">
        {canSelect && (
          <th className="table__column-cell">
            <input
              className="form-check-input"
              type="checkbox"
              ref={checkboxRef}
              onClick={onSelectAll && (() => selectAllEventHandler())}
            />
          </th>
        )}
        {columns.map((column: ITableColumn<T>) => (
          <th
            className="table__column-cell"
            key={column.field}
            onClick={() => (sort ? sort(column) : null)}
          >
            {column.displayName ?? column.field}
            {renderSortIcon(column)}
          </th>
        ))}
        {canEditOrDelete && <th className="table__column-cell">&nbsp;</th>}
      </tr>
    </thead>
  );
};
