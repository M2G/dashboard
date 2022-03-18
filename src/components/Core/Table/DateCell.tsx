/*eslint-disable*/
import { string } from 'prop-types';

function DateCell({ date }: any): any {
  return (
    <div className="date_cell">
      <div>{new Date(date).toLocaleDateString()}</div>
      <div>{new Date(date).toLocaleTimeString()}</div>
    </div>
  );
}

DateCell.propTypes = {
  date: string.isRequired,
};

export default DateCell;
