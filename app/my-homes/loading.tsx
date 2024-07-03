import SkeletonCard from "../components/SkeletonCard";

export default function MyHomesLoading() {
  return (
    <section>
      <h2 className="text-3xl font-semibold tracking-tight mt-8">Your Homes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </section>
  );
}
