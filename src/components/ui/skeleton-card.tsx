import { cn } from "@/lib/utils";

interface SkeletonCardProps {
    className?: string;
}

export function SkeletonCard({ className }: SkeletonCardProps) {
    return (
        <div className={cn("rounded-2xl overflow-hidden bg-card border border-border/50", className)}>
            {/* Image Skeleton */}
            <div className="relative aspect-[4/3] bg-muted animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skeleton-shimmer" />
            </div>

            {/* Content Skeleton */}
            <div className="p-6 space-y-4">
                <div className="h-6 w-2/3 bg-muted rounded animate-pulse" />
                <div className="space-y-2">
                    <div className="h-4 w-full bg-muted/60 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-muted/60 rounded animate-pulse" />
                </div>

                {/* Footer/Action Skeleton */}
                <div className="pt-4 flex items-center justify-between border-t border-border/40">
                    <div className="h-4 w-1/3 bg-muted/60 rounded animate-pulse" />
                    <div className="h-10 w-28 bg-muted rounded-full animate-pulse" />
                </div>
            </div>
        </div>
    );
}
