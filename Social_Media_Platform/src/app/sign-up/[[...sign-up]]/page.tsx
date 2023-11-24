import Back from "@/components/Back";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <Back />
      <div className="flex justify-center items-center h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-gray-800">
        <SignUp />;
      </div>
    </div>
  );
}
