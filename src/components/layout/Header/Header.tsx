import { Button } from '@/components/ui/button';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header
      className={`
        flex
        h-16
        w-full
        items-center
        px-4
      `}
    >
      <div
        className={`
          hidden
          w-1/2
          justify-start
          md:flex
        `}
      ></div>
      <div
        className={`
          flex
          w-1/2
          justify-start
          md:hidden
        `}
      ></div>
      <div
        className={`
            shrink-0
          `}
      >
        <h1
          className={`
            hidden
            py-2
            text-center
            text-xl
            font-bold
            md:block
          `}
        >
          Velocitor Solutions QR Code Manager
        </h1>
        <h1
          className={`
            block
            py-2
            text-center
            text-xl
            font-bold
            md:hidden
          `}
        >
          QR Code Manager
        </h1>
      </div>
      <div
        className={`
          flex
          w-1/2
          justify-end
        `}
      >
        <div
          className={`
            hidden
            md:flex
            `}
        >
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button
                className={`
              `}
              >
                Sign in
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
