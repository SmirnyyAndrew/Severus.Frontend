import { useCallback, useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { Card } from "shared/ui/Card";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { Input } from "shared/ui/Input/Input";
import { Modal } from "shared/ui/Modal/Modal";
import { Column, Row } from "shared/ui/Stack";
import {
  StarRate,
  StarRating,
  StarRatingProps,
} from "shared/ui/StarRating/StarRating";
import { Text, TextSize } from "shared/ui/Text";

interface RatingCardProps extends StarRatingProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedBack?: boolean;
  onCancel?: () => void;
  onAccept?: (starsCount: StarRate, feedback?: string) => void;
}

export const RatingCard = (props: RatingCardProps) => {
  const {
    className,
    title,
    forbiddenChange = false,
    hasFeedBack,
    starRate,
    onCancel,
    onAccept,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(starRate);
  const [feedBack, setFeedBack] = useState("");

  useEffect(() => {
    if (starRate !== undefined) {
      setStarsCount(starRate);
    }
  }, [starRate]);

  const onSelect = useCallback(
    (selectedStarsCount: StarRate) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedBack) {
        setIsModalOpen(true);
      } else {
      }
      setIsModalOpen(true);
    },
    [hasFeedBack]
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount as StarRate, feedBack);
  }, [feedBack, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.();
    setStarsCount(undefined);
  }, [onCancel]);

  const modalContent = (
    <Column maxWidth gap="16">
      <Text size={TextSize.XS} title={title} />
      <Input
        data-testid="RatingCard.FeedbackInput"
        placeholder="Ваш отзыв"
        onChange={setFeedBack}
      />
      <Row justifyContents="space_between">
        <Button onClick={cancelHandler}>Отменить</Button>
        <Button
          data-testid="RatingCard.SendFeedback"
          onClick={acceptHandler}
          buttonTheme={ButtonTheme.BACKGROUND_INVERTED}
        >
          Отправить
        </Button>
      </Row>
    </Column>
  );

  return (
    <Card className={className}>
      <Column alignItems="center" gap="8">
        <Text title={title} text="" />
        <StarRating
          forbiddenChange={forbiddenChange}
          starRate={starsCount}
          onSelect={onSelect}
        />
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
