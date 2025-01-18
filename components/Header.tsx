import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      search
      <div className="header-wrapper">
        file uploader
        <form>
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
