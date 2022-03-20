/*eslint-disable*/
import { string } from 'prop-types';

function DateCell({ date }: Date | number | string | any) {
  const isValid = !isNaN(new Date(date) as any);
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
  date: string,
};

export default DateCell;
