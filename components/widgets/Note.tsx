import { InformationDiamondIcon } from "hugeicons-react";

const Note = () => {
  return (
    <section className="bg-blue-50 dark:bg-slate-800 not-prose">
      <div className=" px-4 sm:px-6 py-4 text-md text-center font-medium">
        <span className="font-bold">
          <InformationDiamondIcon className="w-5 h-5 inline-block align-text-bottom" />
          Philosophy:
        </span>{" "}
        Simplicity, Best Practices and High Performance
      </div>
    </section>
  );
};
export default Note;
