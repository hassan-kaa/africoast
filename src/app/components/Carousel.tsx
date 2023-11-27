"use client";
import React, { useRef, MouseEvent } from "react";

function Carousel({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null); // Specify the ref type

  let pos = { left: 0, x: 0 };

  const mouseMoveHandler = function (e: MouseEvent) {
    if (!containerRef.current) return;
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    if (containerRef.current) {
      containerRef.current.scrollLeft = pos.left - dx;
    }
  };

  const mouseDownHandler = function (e: MouseEvent) {
    if (!containerRef.current) return;

    pos = {
      // The current scroll
      left: containerRef.current.scrollLeft,
      // Get the current mouse position
      x: e.clientX,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseUpHandler = function () {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  return (
    <div className="flex w-full select-none flex-col gap-5 overflow-hidden px-4 py-8">
      <div
        id="container"
        ref={containerRef}
        onMouseDown={mouseDownHandler}
        className="flex gap-6 overflow-y-hidden scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-blue-900"
      >
        {children}
      </div>
    </div>
  );
}

export default Carousel;
