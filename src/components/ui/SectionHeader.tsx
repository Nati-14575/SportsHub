import { H2 } from "./Typography";

export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-12">
      <H2>{title}</H2>
    </div>
  );
}
