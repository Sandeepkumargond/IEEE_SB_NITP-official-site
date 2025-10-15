import clsx from "clsx";

export function Button({ className, children, asChild = false, ...props }) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      className={clsx(
        "bg-white text-black text-md px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
