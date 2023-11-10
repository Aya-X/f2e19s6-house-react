declare module 'hotel-datepicker' {
  interface HotelDatepickerOptions {
    format?: string;
    infoFormat?: string;
    container?: string | HTMLElement;
    inline?: boolean;
    clearButton?: boolean;
    submitButton?: boolean;
    moveBothMonths?: boolean;
    showTopbar?: boolean;
    topbarPosition?: string;
    endDate?: string;
    disabledDates?: string[];
    onSelectRange?: () => void;
  }

  class HotelDatepicker {
    constructor(inputElement: HTMLInputElement, options?: HotelDatepickerOptions);

    getNights(): number {
      // throw new Error('Method not implemented.');
      return this.nights;
    }

    getValue(): string {
      // throw new Error('Method not implemented.');
      return this.value;
    }

  }

  export default HotelDatepicker;
}