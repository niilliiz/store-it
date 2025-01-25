import { Button } from "@/components/ui/button";
import Image from "next/image";
import FileUploader from "@/components/FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";
import Search from "@/components/Search";

export default function Header({
  userId,
  accountId,
}: {
  userId: string;
  accountId: string;
}) {
  async function handleSignOut() {
    "use server";
    try {
      await signOutUser();
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <form action={handleSignOut}>
          <Button type="submit" className="sign-out-button">
            <Image
              src="/assets/icons/logout.svg"
              alt="Logout"
              width={24}
              height={24}
              className="w-6"
            />
          </Button>
        </form>
      </div>
    </header>
  );
}
