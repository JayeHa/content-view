import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  noPaddingX?: boolean;
};

export const Section = ({ children, noPaddingX }: Props) => {
  return (
    <section className="bg-white py-4 my-2 shadow-sm">
      <div className={!noPaddingX ? "px-4" : ""}>{children}</div>
    </section>
  );
};
