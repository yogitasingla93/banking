export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const loggedIn = await getLoggedInUser();

 // if(!loggedIn) redirect('/sign-in')
  const loggedIn = 'Eddy';

  return (
    <main className="flex h-screen w-full font-inter dashboard bg-dash">
      

      <div className="flex size-full flex-col">
        <div className="root-layout">
       
        </div>
        {children}
      </div>
    </main>
  );
}