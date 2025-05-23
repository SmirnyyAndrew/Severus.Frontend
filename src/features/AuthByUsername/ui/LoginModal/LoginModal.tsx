import { useProfile } from "entities/Profile";
import { LoginForm } from "features/AuthByUsername";
import { memo, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import { Loader } from "shared/ui/Loader/Loader";
import { Modal } from "shared/ui/Modal/Modal";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { isOpen, onClose } = props;
  const navigate = useNavigate();
  const { getProfileDataFromDB, profileData } = useProfile();

  return (
    <Modal onClose={onClose} isOpen={isOpen} lazy>
      <Suspense fallback={<Loader />}>
        <LoginForm
          onSuccess={() => {
            getProfileDataFromDB();
            console.log(profileData);
            navigate(RoutePath.profile);
          }}
        />
      </Suspense>
    </Modal>
  );
});
