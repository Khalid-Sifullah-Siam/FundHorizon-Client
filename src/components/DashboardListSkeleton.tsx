export default function DashboardListSkeleton({ rows = 5, columns = 5 }: { rows?: number; columns?: number }) {
  return (
    <div className="card-surface mt-6 overflow-x-auto" role="status" aria-label="Loading list">
      <div className="grid min-w-max gap-4 bg-slate-50 px-4 py-4" style={{ gridTemplateColumns: `repeat(${columns}, minmax(80px, 1fr))` }}>
        {Array.from({ length: columns }, (_, index) => (
          <div key={index} className="h-3 animate-pulse rounded bg-slate-200" />
        ))}
      </div>
      <div className="divide-y divide-slate-100">
        {Array.from({ length: rows }, (_, row) => (
          <div key={row} className="grid min-w-max gap-4 px-4 py-4" style={{ gridTemplateColumns: `repeat(${columns}, minmax(80px, 1fr))` }}>
            {Array.from({ length: columns }, (_, column) => (
              <div key={column} className="h-4 animate-pulse rounded bg-slate-100" />
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
