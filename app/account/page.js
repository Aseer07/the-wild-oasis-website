import { auth } from "@/app/_lib/auth";

async function page() {
  const session = await auth();
  const lastName = session.user.name.split(" ").at(1);
  return (
    <h2 className="font-semibold text-2xl text-amber-400 mb-7">
      Welcome, {lastName}
    </h2>
  );
}

export default page;
