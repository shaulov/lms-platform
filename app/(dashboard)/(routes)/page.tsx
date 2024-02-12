import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <p className="text-7xl">This protected page</p>
      <UserButton afterSignOutUrl="/"/>
    </>
  );
}
