import Image from "next/image";
import Link from "next/link";
import { useCountries } from "../lib/getCountries";

interface iAppProps {
  imagePath: string;
  description: string;
  location: string;
  price: number;
}

export default function ListingCard({
  description,
  location,
  imagePath,
  price,
}: iAppProps) {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);

  return (
    <>
      <div className="flex flex-col">
        <div className="relative h-72">
          <Image
            src={`https://gesmkzznvfqmzkcwmlkz.supabase.co/storage/v1/object/public/images/${imagePath}`}
            alt="Image of Listing"
            fill
            className="rounded-lg h-full object-cover mb-3"
          />
        </div>

        <Link href={"/"}>
          <h3 className="font-medium text-base">
            {country?.label}/{country?.region}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
          <p className="pt-2 text-muted-foreground">
            <span className="font-medium text-black">₹{price}</span> /Night
          </p>
        </Link>
      </div>
    </>
  );
}
