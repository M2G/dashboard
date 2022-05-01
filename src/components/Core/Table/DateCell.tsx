/*eslint-disable*/
import { instanceOf } from 'prop-types';

function dateIsValid(date: Date | number): boolean {
  return date && (new Date(date) !== "Invalid Date" as any) && !isNaN(new Date(date) as any) as any;
}

function DateCell({ date }: Date | number | string | any) {
  const isValid = dateIsValid(date);
  return (
    <div className="date_cell">
      {isValid ? (
        <>
          <div>{new Date(date).toLocaleDateString()}</div>
          <div>{new Date(date).toLocaleTimeString()}</div>
        </>
      ) : (
        '-'
      )}
    </div>
  );
}

DateCell.propTypes = {
  date: instanceOf(Date),
};

export default DateCell;
