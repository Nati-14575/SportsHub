import { ErrorCircle } from "./Icons";

export function ErrorSection({ message }: { message: string }) {
  return (
    <div className="alert alert-error shadow-lg rounded-2xl border border-error/20 max-w-2xl mx-auto">
      <ErrorCircle />
      <div>
        <h3 className="font-bold">Search Error</h3>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
