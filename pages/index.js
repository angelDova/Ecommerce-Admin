import { useSession } from "next-auth/react";
import Nav from "@/components/Nav";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 text-black gap-1 rounded-lg overflow-hidden">
          <Image
            src={session?.user?.image}
            // className="h-8 w-8"
            height="24"
            width="24"
            alt="user image"
          />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
