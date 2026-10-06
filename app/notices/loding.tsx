export default function NoticesLoading() {
  <div className="flex flex-col gap-4">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="h-16 animate-pulse rounded-lg bg-black/[.04] dark:bg-white/[.06]"
      />
    ))}
  </div>
}
