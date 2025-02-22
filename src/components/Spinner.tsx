
interface SpinnerProps {
  loading?: boolean;
}

const Spinner = ({ loading = false }: SpinnerProps) => {
  if (!loading) return null;
  
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 z-50">
      <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
    </div>
  );
};

export default Spinner;
