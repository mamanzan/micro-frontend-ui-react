import { useEffect, useRef } from "react";
import { ITableColumn } from "./TableColumns";

export interface ITableRowProps<T> {
  item: T;
  columns: ITableColumn<T>[];
  canDelete?: boolean;
  canEdit?: boolean;
  canSelect?: boolean;
  isSelected?: boolean;
  onDeleteRow?: (item: T) => void;
  onEditRow?: (item: T) => void;
  onSelectRow?: (item: T) => void;
}

export const TableRow = <T extends any>({
  item,
  canEdit,
  columns,
  canDelete,
  canSelect,
  isSelected = false,
  onDeleteRow,
  onEditRow,
  onSelectRow,
}: ITableRowProps<T>) => {
  console.log("TableRow Render", isSelected);
  return (
    <tr className="table__row">
      {canSelect && (
        <td>
          <input
            className="form-check-input"
            type="checkbox"
            checked={isSelected}
            onChange={onSelectRow && (() => onSelectRow(item))}
          />
        </td>
      )}
      {columns.map((column: ITableColumn<T>, index: number) => (
        <td className="table__cell" key={`${(item as any).id}-${index}`}>
          {column.customRender
            ? column.customRender(item)
            : (item as any)[column.field]}
        </td>
      ))}
      {(canEdit || canDelete) && (
        <td>
          {canEdit && (
            <button
              className="mx-1 border-0 btn btn-sm"
              onClick={onEditRow && (() => onEditRow(item))}
            >
              <i className="bi bi-pencil-fill"></i>
            </button>
          )}
          {canDelete && (
            <button
              className="mx-1 border-0 btn btn-sm "
              onClick={onDeleteRow && (() => onDeleteRow(item))}
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          )}
        </td>
      )}
    </tr>
  );
};
