import { useState } from "react";

export const Pagination = ({
  totalRecords,
  onPageChange,
}: {
  totalRecords: number;
  onPageChange: (page: number) => void;
}) => {
  const [activePageState, setActivePageState] = useState(1);
  const noOfPages = Math.max(1, Math.ceil(totalRecords / 10));

  const handlePageChange = (page: number) => {
    if (page < 1 || page > noOfPages) return;
    setActivePageState(page);
    onPageChange(page);
  };

  const getPagesToShow = () => {
    const last = noOfPages;
    if (last <= 5) return Array.from({ length: last }, (_, i) => i + 1);

    // We want: [1] [maybe ...] [start..end] [maybe ...] [last]
    let start = activePageState - 1;
    let end = activePageState + 1;

    if (start < 2) {
      start = 2;
      end = 4;
    }

    if (end > last - 1) {
      end = last - 1;
      start = last - 3;
    }

    const pages: number[] = [1];
    for (let i = start; i <= end; i++) pages.push(i);
    pages.push(last);
    return pages;
  };

  const pagesToShow = getPagesToShow();

  return (
    <div className="flex items-center gap-x-3">
      <button
        className="bg-white text-black shadow-2xl border border-gray-300 px-3 py-1 rounded"
        onClick={() => handlePageChange(activePageState - 1)}
        aria-label="Previous page"
      >
        {"<"}
      </button>

      {/* render pages and ellipses when gaps exist */}
      {pagesToShow.map((page, idx) => {
        const prev = pagesToShow[idx - 1];
        const showLeftEllipsis = prev !== undefined && page - prev > 1;

        return (
          <span key={page} className="flex items-center">
            {showLeftEllipsis && <div className="px-2">...</div>}

            <button
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-lg ${
                page === activePageState ? "" : "bg-white border-gray-300 text-black"
              }`}
            >
              {page}
            </button>
          </span>
        );
      })}

      <button
        className="bg-white text-black shadow-2xl border border-gray-300 px-3 py-1 rounded"
        onClick={() => handlePageChange(activePageState + 1)}
        aria-label="Next page"
      >
        {">"}
      </button>
    </div>
  );
};
