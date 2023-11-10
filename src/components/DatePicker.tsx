import { useEffect } from 'react';
import HotelDatePicker from 'hotel-datepicker';

import 'hotel-datepicker/dist/css/hotel-datepicker.css';

interface IDatePickerProps {
  setSelectedDate: (value: object) => void;
  disabledDates: string[];
}

function DatePicker(props: IDatePickerProps) {
  const { setSelectedDate, disabledDates } = props;

  useEffect(() => {
    const inputElement = document.getElementById('input-id');

    if (inputElement) {
      const datepicker = new HotelDatePicker(inputElement as HTMLInputElement, {
        // container: '#datepicker',
        inline: true,
        clearButton: false,
        submitButton: false,
        moveBothMonths: true,
        showTopbar: false,
        endDate: '2023-12-15',
        disabledDates: [
          ...disabledDates,
          '2023-11-17',
          '2023-11-13',
          '2023-11-16',
          '2023-11-18',
          '2023-11-21',
          '2023-12-01',
        ],
        onSelectRange() {
          console.log('Date range selected!');
          console.log('getNights:::', datepicker.getNights());
          console.log('getNights:::', datepicker.getValue());
          setSelectedDate({
            value: datepicker.getValue(),
            nights: datepicker.getNights(),
          });
        },
      });
      console.log(datepicker);
    }
  }, []);

  return (
    <div id="datepicker">
      <input
        id="input-id"
        type="text"
        placeholder="Check-in"
        aria-label="Check-in and check-out dates"
      />
    </div>
  );
}

export default DatePicker;
