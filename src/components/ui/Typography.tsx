import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type TypographyProps = ComponentPropsWithoutRef<"p"> & {
  className?: string;
  as?: React.ElementType;
  children: React.ReactNode;
};

export function H1({
  as: Tag = "h1",
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Tag
      className={cn(
        "text-4xl md:text-5xl font-extrabold text-base-content",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function H2({
  as: Tag = "h2",
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Tag
      className={cn("text-3xl font-bold text-base-content", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function H3({
  as: Tag = "h3",
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Tag
      className={cn("text-2xl font-semibold text-base-content", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function P({
  as: Tag = "p",
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Tag
      className={cn("text-base-content/70 leading-relaxed", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
