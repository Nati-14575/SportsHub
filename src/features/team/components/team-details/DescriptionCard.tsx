export function DescriptionCard({ description }: { description: string }) {
  return (
    <div className="card bg-base-100 p-8 shadow-xl border rounded-3xl hover:shadow-2xl transition-all">
      <h2 className="text-2xl font-heading font-semibold mb-6">
        About the Club
      </h2>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="leading-relaxed whitespace-pre-line text-base-content/80">
          {description}
        </p>
      </div>
    </div>
  );
}
