import { IItem } from "../../interface/interface";
import { ITableColumn } from "./TableColumns";

export interface ITableRowProps<T> {
  item: T;
  isSelected?: boolean;
  columns: ITableColumn<T>[];
  canDelete?: boolean;
  canEdit?: boolean;
  canSelect?: boolean;
  onDeleteRow?: (item: T) => void;
  onEditRow?: (item: T) => void;
  onSelectRow?: (item: T) => void;
}

export const TableRow = <T extends IItem>({
  item,
  isSelected = false,
  columns,
  canEdit,
  canDelete,
  canSelect,
  onDeleteRow,
  onEditRow,
  onSelectRow,
}: ITableRowProps<T>) => {
  return (
    <tr className="table__row">
      {canSelect && (
        <td className="table__cell">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isSelected}
            onChange={onSelectRow && (() => onSelectRow(item))}
          />
        </td>
      )}
      {columns.map((column: ITableColumn<T>, index: number) => (
        <td className="table__cell" key={`${item.id}-${index}`}>
          {column.customRender
            ? column.customRender(item)
            : (item as any)[column.field]}
        </td>
      ))}
      {(canEdit || canDelete) && (
        <td className="table__cell">
          {canEdit && (
            <button
              className="mx-1 border-0 btn btn-sm"
              onClick={onEditRow && (() => onEditRow(item))}
            >
              <span className="oi" data-glyph="pencil"></span>
            </button>
          )}
          {canDelete && (
            <button
              className="mx-1 border-0 btn btn-sm "
              onClick={onDeleteRow && (() => onDeleteRow(item))}
            >
              <span className="oi" data-glyph="trash"></span>
            </button>
          )}
        </td>
      )}
    </tr>
  );
};
