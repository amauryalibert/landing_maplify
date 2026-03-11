"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import WaitlistModal from "./WaitlistModal";

type WaitlistContextValue = {
  openModal: () => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlist must be used within WaitlistProvider");
  }
  return context;
}

export default function WaitlistProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const value = useMemo(() => ({ openModal }), [openModal]);

  return (
    <WaitlistContext.Provider value={value}>
      {children}
      <WaitlistModal open={open} onClose={closeModal} />
    </WaitlistContext.Provider>
  );
}
