const PointsBadge = ({ points }: { points: number }) => (
  <span className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary text-center">
    {points} <span className="hidden sm:inline">pontos</span>
  </span>
);

export default PointsBadge