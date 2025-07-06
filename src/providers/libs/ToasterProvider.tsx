import { Toaster } from "sonner";
import { LibProvidersProps } from "..";

export const ToasterProvider: React.FC<LibProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster richColors />
      {children}
    </>
  );
};
