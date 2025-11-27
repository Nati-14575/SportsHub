import { Card } from "@/components/ui/Card";
import { H3, P } from "@/components/ui/Typography";

export default function DescriptionCard({
  description,
}: {
  description: string;
}) {
  return (
    <Card className="p-8 bg-base-100 space-y-6 shadow-xl border rounded-3xl hover:shadow-2xl transition-all">
      <H3>About the Club</H3>

      <P className="leading-relaxed whitespace-pre-line">{description}</P>
    </Card>
  );
}
