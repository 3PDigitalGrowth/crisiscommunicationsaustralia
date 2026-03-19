'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

import type { LeadMagnetContextValue, ModalTrigger } from "@/types";

import { LeadMagnetModal } from "./LeadMagnetModal";

const LeadMagnetContext = createContext<LeadMagnetContextValue | null>(null);

export function LeadMagnetModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const triggerRef = useRef<ModalTrigger>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openModal = useCallback((trigger?: ModalTrigger) => {
    triggerRef.current = trigger ?? null;
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  }, []);

  const value = useMemo<LeadMagnetContextValue>(
    () => ({
      isOpen,
      toastMessage,
      openModal,
      closeModal,
      showToast,
    }),
    [closeModal, isOpen, openModal, showToast, toastMessage],
  );

  return (
    <LeadMagnetContext.Provider value={value}>
      {children}
      <LeadMagnetModal />
    </LeadMagnetContext.Provider>
  );
}

export function useLeadMagnetModal() {
  const context = useContext(LeadMagnetContext);

  if (!context) {
    throw new Error(
      "useLeadMagnetModal must be used within a LeadMagnetModalProvider",
    );
  }

  return context;
}
