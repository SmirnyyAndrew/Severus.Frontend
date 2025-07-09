import { userReducer } from "entities/User";
import { useUserAuth } from "entities/User/model/hooks/useUserAuth";
import { memo, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Loader } from "shared/ui/Loader/Loader";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../..";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { isOpen, onClose } = props;
  const navigate = useNavigate();
  const { authData } = useUserAuth();
  const id = authData?.id;

  const reducers: ReducersList = {
    user: userReducer,
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Modal onClose={onClose} isOpen={isOpen} lazy>
        <Suspense fallback={<Loader />}>
          <LoginForm
            onSuccess={() => {
              if (location.pathname !== RoutePath.profile && id) {
                navigate(`${RoutePath.profile}${id}`);
              } else {
                onClose?.();
              }
            }}
          />
        </Suspense>
      </Modal>
    </DynamicModuleLoader>
  );
});
