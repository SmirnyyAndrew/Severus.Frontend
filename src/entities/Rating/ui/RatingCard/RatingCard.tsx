import { useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Card } from "shared/ui/Card";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { Input } from "shared/ui/Input/Input";
import { Modal } from "shared/ui/Modal/Modal";
import { Column, Row } from "shared/ui/Stack";
import { StarRate, StarRating } from "shared/ui/StarRating/StarRating";
import { Text, TextSize } from "shared/ui/Text";
import * as cls from "./RatingCard.module.scss";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedBack?: boolean;
  onCancel?: (starsCount: StarRate) => void;
  onAccept?: (starsCount: StarRate, feedback?: string) => void;
}

export const RatingCard = (props: RatingCardProps) => {
  const { className, title, feedbackTitle, hasFeedBack, onCancel, onAccept } =
    props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedBack, setFeedBack] = useState("");

  const onSelect = useCallback(
    (selectedStarsCount: StarRate) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedBack) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
      setIsModalOpen(true);
    },
    [feedBack, onAccept]
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount as StarRate, feedBack);
  }, [feedBack, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount as StarRate);
  }, [onCancel, starsCount]);

  const modalContent = (
    <Column maxWidth gap="16">
      <Text size={TextSize.XS} title={title} />
      <Input placeholder="Ваш отзыв" onChange={setFeedBack} />
      <Row justifyContents="space_between">
        <Button onClick={cancelHandler}>Отменить</Button>
        <Button
          onClick={acceptHandler}
          buttonTheme={ButtonTheme.BACKGROUND_INVERTED}
        >
          Отправить
        </Button>
      </Row>
    </Column>
  );

  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <Column alignItems="center" gap="8">
        <Text title={title} text="" />
        <StarRating starRate={5} onSelect={onSelect} />
      </Column>

      <BrowserView>
        <Modal onClose={cancelHandler} isOpen={isModalOpen} lazy>
          {modalContent}
        </Modal>
      </BrowserView>

      <MobileView>
        <Drawer lazy onClose={cancelHandler} isOpen={isModalOpen}>
          {modalContent}
        </Drawer>
      </MobileView>
    </Card>
  );
};
