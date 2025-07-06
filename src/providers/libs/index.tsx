import { ToasterProvider } from "@/providers/libs/ToasterProvider";
import { SessionProvider } from "next-auth/react";
import { LibProvidersProps } from "..";
import { TanstackQueryProvider } from "./TanstackQueryProvider";

export const LibProviders: React.FC<LibProvidersProps> = ({ children }) => (
  <SessionProvider>
    <TanstackQueryProvider>
      <ToasterProvider>{children}</ToasterProvider>
    </TanstackQueryProvider>
  </SessionProvider>
);
