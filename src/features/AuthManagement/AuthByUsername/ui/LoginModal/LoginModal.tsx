import { Store } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { useProfile } from "entities/Profile";
import { userReducer } from "entities/User";
import { memo, Suspense } from "react";
import { useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Routes } from "shared/const/router";
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
  const { getProfileDataFromDB } = useProfile();
  const store = useStore() as Store<StateSchema>;

  const reducers: ReducersList = {
    user: userReducer,
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Modal onClose={onClose} isOpen={isOpen} lazy>
        <Suspense fallback={<Loader />}>
          <LoginForm
            onSuccess={async () => {
              const state = store.getState();
              const id = state.user?.authData?.id;

              await getProfileDataFromDB(id);

              if (id && location.pathname !== Routes.Profile.Info(id)) {
                navigate(Routes.Profile.Info(id));
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
