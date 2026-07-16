"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ContactSuccessContextValue = {
  contactSuccessVersion: number;
  isContactSuccessVisible: boolean;
  dismissContactSuccess: () => void;
  showContactSuccess: () => void;
};

const ContactSuccessContext = createContext<ContactSuccessContextValue | null>(null);

export function ContactSuccessProvider({ children }: { children: ReactNode }) {
  const [isContactSuccessVisible, setIsContactSuccessVisible] = useState(false);
  const [contactSuccessVersion, setContactSuccessVersion] = useState(0);

  const dismissContactSuccess = useCallback(() => {
    setIsContactSuccessVisible(false);
  }, []);

  const showContactSuccess = useCallback(() => {
    setContactSuccessVersion((version) => version + 1);
    setIsContactSuccessVisible(true);
  }, []);

  const value = useMemo(
    () => ({
      contactSuccessVersion,
      isContactSuccessVisible,
      dismissContactSuccess,
      showContactSuccess,
    }),
    [contactSuccessVersion, dismissContactSuccess, isContactSuccessVisible, showContactSuccess],
  );

  return <ContactSuccessContext.Provider value={value}>{children}</ContactSuccessContext.Provider>;
}

export function useContactSuccess() {
  const context = useContext(ContactSuccessContext);

  if (!context) {
    throw new Error("useContactSuccess must be used within ContactSuccessProvider.");
  }

  return context;
}

export function ContactSuccessBanner() {
  const {
    contactSuccessVersion,
    dismissContactSuccess,
    isContactSuccessVisible,
  } = useContactSuccess();

  useEffect(() => {
    if (!isContactSuccessVisible) {
      return;
    }

    const timer = window.setTimeout(() => {
      dismissContactSuccess();
    }, 10000);

    return () => window.clearTimeout(timer);
  }, [contactSuccessVersion, dismissContactSuccess, isContactSuccessVisible]);

  if (!isContactSuccessVisible) {
    return null;
  }

  return (
    <div role="status" aria-live="polite" className="border-b-[3px] border-ink bg-lime text-ink">
      <div className="site-wrap flex min-h-14 items-center justify-between gap-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="border-2 border-ink bg-ink px-3 py-1 font-mono text-xs font-bold uppercase text-lime sm:text-sm">
            Sent
          </span>
          <p className="text-sm font-bold leading-5 sm:text-base">
            Message received. Thanks, Garret will get back to you soon.
          </p>
        </div>

        <button
          type="button"
          onClick={dismissContactSuccess}
          aria-label="Dismiss message sent notification"
          className="pressable flex size-10 shrink-0 items-center justify-center border-[3px] border-ink bg-paper font-display text-lg font-black leading-none shadow-brutal-sm hover:bg-ink hover:text-lime"
        >
          <span aria-hidden="true">X</span>
        </button>
      </div>
    </div>
  );
}

