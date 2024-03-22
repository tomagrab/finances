import NavigationIcon from '@/components/layout/Navbar/NavigationIcon/NavigationIcon';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <aside
      className={`
        navbar
        absolute
        bottom-0
        left-0
        right-0
        z-10
        flex
        h-16
        w-full
        items-center
        justify-around
        overflow-hidden
        md:static
        md:h-screen
        md:w-20
        md:flex-col
        md:justify-normal
        md:gap-4
        md:shadow-xl
      `}
    >
      <div
        className={`
          bg-celestial-blue
          hidden
          h-16
          w-full
          items-center
          justify-center
          md:flex
        `}
      >
        <h2
          className={`
            text-lg
          `}
        >
          TG
        </h2>
      </div>
      <div
        className={`
          hidden
          md:flex
          md:flex-col
          md:items-center
        `}
      >
        <NavigationIcon iconName={`home`} href={`/`} />
        <NavigationIcon iconName={`finances`} href={`/Finances`} />
        <NavigationIcon iconName={`analytics`} href={`/Analytics`} />
      </div>
      <div
        className={`
          flex
          w-full
          items-center
          justify-between
          md:hidden
        `}
      >
        <NavigationIcon iconName={`home`} href={`/`} />
        <NavigationIcon iconName={`finances`} href={`/Finances`} />
        <NavigationIcon iconName={`analytics`} href={`/Analytics`} />
        <div
          className={`
            flex
            h-16
            w-full
            items-center
            justify-center
          `}
        >
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <LogIn />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </aside>
  );
}
