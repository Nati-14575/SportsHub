interface Props {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: Props) {
  return (
    <div className="alert alert-error flex-col shadow-lg rounded-2xl p-4">
      <div className="font-bold text-lg">{message}</div>

      {onRetry && (
        <button onClick={onRetry} className="btn btn-error btn-sm mt-3 w-fit">
          Retry
        </button>
      )}
    </div>
  );
}
