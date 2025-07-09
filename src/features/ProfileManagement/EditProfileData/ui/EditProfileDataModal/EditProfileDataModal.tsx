import { memo, Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";
import { Modal } from "shared/ui/Modal/Modal";
import { EditProfileDataForm } from "../..";
import cls from "./EditProfileDataModal.module.scss";

interface EditProfileDataModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const EditProfileDataModal = memo((props: EditProfileDataModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <div className={cls.EditProfileDataModal}>
      <Modal onClose={onClose} isOpen={isOpen} lazy>
        <Suspense fallback={<Loader />}>
          <EditProfileDataForm
            onSuccess={() => {
              onClose?.();
            }}
          />
        </Suspense>
      </Modal>
    </div>
  );
});
