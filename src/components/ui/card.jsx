import clsx from "clsx";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={clsx("border rounded-lg shadow-sm p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={clsx("p-2", className)} {...props}>
      {children}
    </div>
  );
}