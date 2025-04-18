import { ModeToggle } from "@/components/mode-toggler";
import BlurFade from "@/components/ui/blur-fade";
import Link from "next/link";

interface TopBarProps {
  username: string;
}

export default function TopBar({ username }: TopBarProps) {
  return (
    <BlurFade delay={0.3}>
      <div className="z-50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href={"/" + username} className="text-sm font-medium">
            @{username}
          </Link>
          <ModeToggle />
        </div>
      </div>
    </BlurFade>
  );
}