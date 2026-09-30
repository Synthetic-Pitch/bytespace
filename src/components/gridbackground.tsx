import { useLayoutEffect, useRef, useState } from "react";

const GridBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [cellSize, setCellSize] = useState(100);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => setCellSize(el.offsetHeight / 10); // always exactly 9 rows

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute top-0 h-full w-full grid-background"
      style={{ ["--cell-size" as any]: `${cellSize}px` }}
    />
  );
};

export default GridBackground;