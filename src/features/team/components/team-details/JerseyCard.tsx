import { Shirt } from "lucide-react";

export function JerseyCard({ src, color }: { src: string; color: string }) {
  return (
    <div className="card bg-base-100 p-8 shadow-xl border rounded-3xl hover:shadow-2xl transition-all">
      <h2 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-3">
        <Shirt className={`w-6 h-6 text-${color}`} />
        Team Jersey
      </h2>

      <div className="flex justify-center">
        <img
          src={src}
          alt="Team Jersey"
          className="h-64 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
