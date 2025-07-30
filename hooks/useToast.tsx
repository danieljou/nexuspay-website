import { LanguageProvider } from "../context/LanguageContext";
import { ToastProvider } from "../context/ToastContext";

export default function App({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </LanguageProvider>
  );
}
