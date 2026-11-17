import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function Select({
  className,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <span className="relative block w-full">
      <select
        data-slot="select"
        className={cn(
          "flex h-10 w-full min-w-0 appearance-none rounded-lg border border-input bg-background px-3 py-2 pr-9 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow,border-color] hover:border-ring/60 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
    </span>
  );
}

export { Select };
