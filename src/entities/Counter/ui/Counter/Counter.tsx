import { useCounter } from "entities/Counter/model/hooks/useCounter";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { Column, Row } from "shared/ui/Stack";
import { Text } from "shared/ui/Text";
import * as cls from "./Counter.module.scss";

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const { value, decrement, increment } = useCounter();

  return (
    <Column
      alignItems="center"
      justifyContents="end"
      className={classNames(cls.Counter, {}, [className])}
    >
      <Text data-testid="value-title" text={`Value: ${value}`} />
      <Row className={cls.buttons}>
        <Button data-testid="decrement-btn" onClick={decrement}>
          Decrement
        </Button>
        <Button data-testid="increment-btn" onClick={increment}>
          Increment
        </Button>
      </Row>
    </Column>
  );
};
