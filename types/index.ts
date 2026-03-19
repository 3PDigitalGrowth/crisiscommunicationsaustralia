export type FormStatus = "idle" | "success" | "error";

export type FormState = {
  status: FormStatus;
  message: string;
};

export type ModalTrigger = HTMLElement | null;

export type LeadMagnetContextValue = {
  isOpen: boolean;
  toastMessage: string | null;
  openModal: (trigger?: ModalTrigger) => void;
  closeModal: () => void;
  showToast: (message: string) => void;
};

export const initialFormState: FormState = {
  status: "idle",
  message: "",
};
