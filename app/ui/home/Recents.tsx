"use client";

import { Reorder } from "framer-motion";
import { useState } from "react";

export default function Recents() {
  const initialHeadings = [
    { id: 1, text: "RecentsRecentsRecentsRecents", size: "text-3xl" },
    { id: 2, text: "RecentsRecentsRecentsRecents", size: "text-2xl" },
    { id: 3, text: "RecentsRecentsRecentsRecents", size: "text-xl" },
    { id: 4, text: "RecentsRecentsRecentsRecents", size: "text-lg" },
    { id: 5, text: "RecentsRecentsRecentsRecents", size: "text-md" },
    { id: 6, text: "RecentsRecentsRecentsRecents", size: "text-sm" },
    { id: 7, text: "RecentsRecentsRecentsRecents", size: "text-sm" },
    { id: 8, text: "RecentsRecentsRecentsRecents", size: "text-md" },
    { id: 9, text: "RecentsRecentsRecentsRecents", size: "text-lg" },
    { id: 10, text: "RecentsRecentsRecentsRecents", size: "text-xl" },
    { id: 11, text: "RecentsRecentsRecentsRecents", size: "text-2xl" },
    { id: 12, text: "RecentsRecentsRecentsRecents", size: "text-3xl" },
    { id: 13, text: "RecentsRecentsRecentsRecents", size: "text-3xl" },
    { id: 14, text: "RecentsRecentsRecentsRecents", size: "text-2xl" },
    { id: 15, text: "RecentsRecentsRecentsRecents", size: "text-xl" },
    { id: 16, text: "RecentsRecentsRecentsRecents", size: "text-lg" },
    { id: 17, text: "RecentsRecentsRecentsRecents", size: "text-md" },
    { id: 18, text: "RecentsRecentsRecentsRecents", size: "text-sm" },
  ];

  const [headings, setHeadings] = useState(initialHeadings);

  return (
    <div className="w-1/2 flex flex-col items-start justify-center text-gray-600 font-semibold">
      <Reorder.Group axis="y" onReorder={setHeadings} values={headings}>
        {headings.map((heading) => (
          <Reorder.Item key={heading.id} value={heading}>
            <div className={heading.size}>{heading.text}</div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
}
