import { LoginForm } from "features/AuthByUsername";
import { memo, Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";
import { Modal } from "shared/ui/Modal/Modal";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal onClose={onClose} isOpen={isOpen} lazy>
      <Suspense fallback={<Loader />}>
        <LoginForm onSuccess={() => {}} />
      </Suspense>
    </Modal>
  );
});
