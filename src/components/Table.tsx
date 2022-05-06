import { useCallback, useState } from "react";
import { IItem } from "../interface/interface";

export enum SortDirection {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
  NONE = "NONE",
}

export type ColumnType = "int" | "float" | "string";

export interface ITableColumn {
  name: string;
  displayName?: string;
  sort: SortDirection;
  type: ColumnType;
}
export interface ITableColumnsProps {
  columns: ITableColumn[];
  sort?: (column: ITableColumn) => void;
}

export interface ITableRowsProps<T> {
  rows: Map<number, T>;
}

interface ITableProps<T> extends ITableColumnsProps, ITableRowsProps<T> {}

const TableColumns = ({ columns, sort }: ITableColumnsProps) => {
  const renderSortIcon = (column: ITableColumn) => {
    let result = null;

    switch (column.sort) {
      case SortDirection.ASCENDING:
        result = (
          <i className="oi table__column-sort" data-glyph="sort-descending"></i>
        );
        break;
      case SortDirection.DESCENDING:
        result = (
          <i className="oi table__column-sort" data-glyph="sort-ascending"></i>
        );
        break;
      case SortDirection.NONE:
      default:
        result = (
          <span
            className="spacer table__column-sort"
            style={{ width: "16px", display: "inline-block" }}
          ></span>
        );
        break;
    }
    return result;
  };

  return (
    <thead className="table__columns">
      <tr className="table__column-row">
        {columns.map((column: ITableColumn) => (
          <th
            className="table__column-cell"
            key={column.name}
            onClick={() => (sort ? sort(column) : null)}
          >
            {column.displayName ?? column.name}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableRows = <T extends unknown>({ rows }: ITableRowsProps<T>) => {
  return (
    <tbody className="table__rows">
      {Array.from(rows.entries()).map(([key, values]) => (
        <tr className="table__row" key={Math.random()}>
          {Object.entries(values).map(([key, value]) => (
            <td className="table__cell" key={Math.random()}>
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export const Table = <T extends unknown>({ columns, rows }: ITableProps<T>) => {
  const [allColumns, setAllColumns] = useState(columns);
  const [allRows, setAllRows] = useState(rows);

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
      case "string":
      default:
        _a = _a.toString();
        _b = _b.toString();
        break;
    }
    return _a > _b ? 1 : -1;
  };

  const sort = (sortColumn: ITableColumn) => {
    const indexOfColumn = allColumns.findIndex(
      (column: ITableColumn) => column.name === sortColumn.name
    );
    //Somehow this copy keeps state updated ?
    const updatedColumns = [...allColumns];
    const column = updatedColumns[indexOfColumn];

    column.sort =
      column.sort === (SortDirection.DESCENDING || SortDirection.NONE)
        ? SortDirection.ASCENDING
        : SortDirection.DESCENDING;

    updatedColumns.forEach((column: ITableColumn, i: number) => {
      column.sort = i === indexOfColumn ? column.sort : SortDirection.NONE;
    });

    let result = 0;
    const sortedItems = new Map(
      [...allRows].sort((a, b) => {
        switch (column.sort) {
          case SortDirection.DESCENDING:
          case SortDirection.NONE:
            result = comparison(a[1], b[1], column.name, column.type);
            break;
          case SortDirection.ASCENDING:
          default:
            result = comparison(b[1], a[1], column.name, column.type);
            break;
        }
        return result;
      })
    );

    //setAllColumns(updatedColumns);
    setAllRows(sortedItems);
  };

  console.log("Render!");
  return (
    <>
      <table className="table">
        <caption className="table__caption">Title</caption>
        <TableColumns columns={allColumns} sort={sort} />
        <TableRows rows={allRows} />
      </table>
    </>
  );
};