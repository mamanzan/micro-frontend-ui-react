import { useEffect, useRef } from "react";
import { IItem } from "../../interface/interface";

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

export const TableColumns = <T extends IItem>({
  columns,
  sort,
  canEditOrDelete,
  canSelect,
  onSelectAll,
  isSelectingAll = false,
}: ITableColumnsProps<T>) => {
  const renderSortIcon = (column: ITableColumn<T>) => {
    let result = null;

    switch (column.sort) {
      case SortDirection.ASCENDING:
        result = (
          <span
            className="oi"
            data-glyph="sort-ascending"
            style={{ width: "20px", display: "inline-block" }}
          ></span>
        );
        break;
      case SortDirection.DESCENDING:
        result = (
          <span
            className="oi"
            data-glyph="sort-descending"
            style={{ width: "20px", display: "inline-block" }}
          ></span>
        );
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
              checked={isSelectingAll}
              onChange={onSelectAll && (() => onSelectAll(isSelectingAll))}
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
