"use client";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/app/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-amber-50 text-gray-900", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-lg font-bold text-gray-900",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-full"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-gray-700 bg-orange-100 rounded-md w-8 font-medium text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm text-gray-900 focus-within:relative focus-within:z-20",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal text-gray-900 hover:bg-orange-100"
        ),
        day_range_start: "bg-orange-600 text-white rounded-l-md",
        day_range_end: "bg-orange-600 text-white rounded-r-md",
        day_selected:
          "bg-orange-600 text-white hover:bg-orange-700 focus:bg-orange-700",
        day_today: "bg-orange-100 text-orange-600 font-bold",
        day_outside: "text-gray-500 opacity-50",
        day_disabled: "text-gray-400 opacity-50",
        day_range_middle: "bg-orange-200 text-gray-900",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronLeft className="h-5 w-5 text-orange-600" />
        ),
        IconRight: ({ ...props }) => (
          <ChevronRight className="h-5 w-5 text-orange-600" />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
