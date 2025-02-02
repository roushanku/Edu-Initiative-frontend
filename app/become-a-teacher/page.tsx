import BecomeATutor from "@/components/BecomeATutor/BecomeATutor";
import { title } from "@/components/Primitives";
import SignInSide from "@/components/sign-in-side/SignInSide";

export default function BecomeATeacher() {
  return (
    <div className="w-full">
      <h1 className={title()}>Become a Tutor</h1>
      <BecomeATutor />
    </div>
  );
}
