import { useAddNewCommentForm } from "features/AddNewCommentForm/model/hooks/useAddNewCommentForm";
import { AddNewCommentFormReducer } from "features/AddNewCommentForm/model/slice/AddNewCommentFormSlice";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text";
import { TextThemes } from "shared/ui/Text/ui/Text";
import cls from "./AddNewCommentForm.module.scss";

export interface AddNewCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddNewCommentForm = (props: AddNewCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const { text, error, setText } = useAddNewCommentForm();

  const reducers: ReducersList = {
    addNewCommentForm: AddNewCommentFormReducer,
  };

  const onCommentTextChange = useCallback((value: string) => {
    setText(value);
  }, []);

  const onSendCommentHandler = useCallback(() => {
    if (text) {
      onSendComment(text);
      onCommentTextChange("");
    }
  }, [text]);

  if (error) return <Text isCenter textTheme={TextThemes.ERROR} text={error} />;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.AddNewCommentForm, {}, [className])}>
        <Input
          className={cls.commentInput}
          placeholder={"Введите комментарий"}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          buttonTheme={ButtonTheme.OUTLINE}
          size={ButtonSize.L}
          className={cls.sendButton}
          onClick={onSendCommentHandler}
        >
          Отправить
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(AddNewCommentForm);
