import {
  ImgHTMLAttributes,
  memo,
  ReactElement,
  useLayoutEffect,
  useState,
} from "react";
import { GENERAL_IMAGE_ERROR } from "shared/const/plugFiles";
import { TestProps } from "shared/types/tests/testProps";

interface LazyImageProps
  extends ImgHTMLAttributes<HTMLImageElement>,
    TestProps {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const LazyImage = memo((props: LazyImageProps) => {
  const {
    className,
    src,
    fallback,
    errorFallback,
    alt = "image",
    "data-testid": testId = "LazyImage",
    ...otherProps
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(true);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? GENERAL_IMAGE_ERROR;
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return (
    <img
      data-testid={testId}
      className={className}
      alt={alt}
      src={src}
      {...otherProps}
    />
  );
});
