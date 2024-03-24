type Props = JSX.IntrinsicElements["img"];

export const Image = ({ ...props }: Props) => {
  return (
    <div>
      <img className="block w-full" {...props} />
    </div>
  );
};
