function Skeleton({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-lg bg-muted motion-reduce:animate-none ${className}`}
    />
  );
}

export default function DashboardLoading() {
  return (
    <main
      aria-busy="true"
      className="min-h-screen bg-muted/20"
    >
      <p role="status" className="sr-only">
        Memuat workspace deployment…
      </p>

      <header className="sticky top-0 z-10 border-b border-border bg-background/85">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-8 w-28" />
        </div>
      </header>

      <div className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <Skeleton className="h-6 w-44" />
          <Skeleton className="h-9 w-72 max-w-full" />
          <Skeleton className="h-5 w-full max-w-2xl" />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} className="h-28 rounded-2xl" />
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
          <Skeleton className="hidden h-[28rem] rounded-2xl lg:block" />
          <div className="space-y-6">
            <Skeleton className="h-64 rounded-2xl" />
            <Skeleton className="h-96 rounded-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
