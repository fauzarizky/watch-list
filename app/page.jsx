import Image from "next/image";
import AuthForm from "../components/ui/AuthForm";

export default function Home() {
  return (
    <div>
      <div className="container flex flex-col justify-center items-center min-h-screen mx-auto py-8">
        <Image src="/welcome_cats.svg" alt="Welcome Cats" width={300} height={300} />
        <div className="shadow-md p-5 my-4 rounded-md w-full md:w-[50vw]">
          <AuthForm />
        </div>
        <p className="text-sm text-center">Your personal space to manage a wishlist of your favorite watches.</p>
      </div>
    </div>
  );
}
