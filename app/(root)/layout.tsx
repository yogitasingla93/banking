import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  // If user is not logged in, redirect to the sign-in page
  //if (!loggedIn) redirect("/sign-in");

  // Extract profile image URL from loggedIn user data
  const profileImg = loggedIn?.profileImg || "/icons/eddy.png"; // Fallback image

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} profileImg={profileImg} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <MobileNav user={loggedIn} profileImg={profileImg} />
          
          {/* Search Bar and Profile Image */}
          <div className="flex items-center justify-between sm:px-6 bg-white p-4">
            <div className="flex items-center border rounded-lg py-1 px-2 focus-within:ring focus-within:ring-bankGradient w-full sm:w-auto">
            <Image
                src="/icons/search.png"
                alt="Search"
                width={16} 
                height={16}
                className="text-gray-500 mr-2"
              />
              <input
                type="text"
                placeholder="Search for something"
                className="outline-none text-sm w-full"
              />
            </div>

            {/* Profile Image */}
            <Image
              src={profileImg}
              alt="Profile"
              width={32}
              height={32}
              className=" rounded-full cursor-pointer"
            />

          </div>
        </div>

        {/* Render children content */}
        {children}
      </div>
    </main>
  );
}
