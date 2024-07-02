import { File } from "lucide-react";

function NoItems() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mt-10">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <File className="w-10 h-10 text-primary" />
      </div>
      <h2 className="mt-6 text-xl font-semibold">
        Sorry no listings for this category found...
      </h2>
      <p className="mt-2 text-sm leading-6 text-gray-400">
        Please check out another category or create your own listing!
      </p>
    </div>
  );
}

export default NoItems;
