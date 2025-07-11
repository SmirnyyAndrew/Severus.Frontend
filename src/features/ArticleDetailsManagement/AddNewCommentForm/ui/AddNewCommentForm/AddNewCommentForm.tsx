import { useAddNewCommentForm } from "features/ArticleDetailsManagement/AddNewCommentForm/model/hooks/useAddNewCommentForm";
import { AddNewCommentFormReducer } from "features/ArticleDetailsManagement/AddNewCommentForm/model/slice/AddNewCommentFormSlice";
import { useArticleDetailsComments } from "pages/ArticleManagement/ArticleDetailsPage";
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
import { Row } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import { TextThemes } from "shared/ui/Text/model/types/TextThemes";
import cls from "./AddNewCommentForm.module.scss";

export interface AddNewCommentFormProps {
  className?: string;
}

const AddNewCommentForm = (props: AddNewCommentFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { text, error, setText } = useAddNewCommentForm();

  const { sendComment } = useArticleDetailsComments();

  const reducers: ReducersList = {
    addNewCommentForm: AddNewCommentFormReducer,
  };

  const onCommentTextChange = useCallback((value: string) => {
    setText(value);
  }, []);

  const onSendCommentHandler = useCallback(() => {
    if (text) {
      sendComment(text);
      setText("");
    }
  }, [text]);

  if (error) return <Text textTheme={TextThemes.ERROR} text={error} />;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Row
        justifyContents="space_between"
        className={classNames(cls.AddNewCommentForm, {}, [className])}
      >
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
      </Row>
    </DynamicModuleLoader>
  );
};

export default memo(AddNewCommentForm);
