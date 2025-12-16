"use client";

import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <div>
      Future Store Modal Content
    </div>
  );
};