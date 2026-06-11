const PointsBadge = ({ points }: { points: number }) => (
  <span className="shrink-0 whitespace-nowrap rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-center text-sm font-semibold text-primary">
    {points}
    <span className="hidden md:inline"> pontos</span>
  </span>
);

export default PointsBadge;