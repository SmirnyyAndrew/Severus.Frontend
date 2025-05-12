import { useCounter } from "entities/Counter/model/hook/useCounter";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import cls from "./Counter.module.scss";

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const { decrement, value, increment } = useCounter();

  return (
    <div className={classNames(cls.Counter, {}, [className])}>
      <h1 data-testid="value-title">Value: {value}</h1>
      <div className={cls.buttons}>
        <Button data-testid="decrement-btn" onClick={decrement}>
          Decrement
        </Button>
        <Button data-testid="increment-btn" onClick={increment}>
          Increment
        </Button>
      </div>
    </div>
  );
};
