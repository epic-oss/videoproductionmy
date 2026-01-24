"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface QuoteContextType {
  isModalOpen: boolean;
  selectedCompany: string | null;
  openModal: (companyName?: string) => void;
  closeModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const openModal = (companyName?: string) => {
    setSelectedCompany(companyName || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  };

  return (
    <QuoteContext.Provider value={{ isModalOpen, selectedCompany, openModal, closeModal }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
