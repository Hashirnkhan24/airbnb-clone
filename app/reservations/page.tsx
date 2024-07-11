import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ListingCard from "../components/ListingCard";
import NoItems from "../components/NoItems";
import prisma from "../lib/db";
import { redirect } from "next/navigation";

async function getData(userId: string) {
  const data = await prisma.reservation.findMany({
    where: {
      userId: userId,
    },
    select: {
      Home: {
        select: {
          photo: true,
          id: true,
          price: true,
          country: true,
          description: true,
          Favorite: {
            where: {
              userId: userId,
            },
          },
        },
      },
    },
  });

  return data;
}

export default async function ReservationsRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/");
  const data = await getData(user.id);

  return (
    <>
      <section className="container mx-auto px-5 lg:px-10 mt-10">
        <h2 className="text-3xl font-semibold tracking-tight">
          Your Reservations
        </h2>

        {data.length === 0 ? (
          <NoItems
            title="Hey! You don't have any reservations."
            description="Please make reservations to see them right here!"
          />
        ) : (
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {data.map((item) => (
              <ListingCard
                key={item.Home?.id}
                description={item.Home?.description as string}
                imagePath={item.Home?.photo as string}
                location={item.Home?.country as string}
                price={item.Home?.price as number}
                userId={user.id}
                favoriteId={item.Home?.Favorite[0]?.id as string}
                isInFavoriteList={
                  (item.Home?.Favorite.length as number) > 0 ? true : false
                }
                homeId={item.Home?.id as string}
                pathname="/favorites"
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
