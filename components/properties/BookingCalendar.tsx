"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

const BookingCalendar = () => {
  const currentDate = new Date();
  const defaultSelected: DateRange | undefined = {
    from: undefined,
    to: undefined,
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
    />
  );
};

export default BookingCalendar;
