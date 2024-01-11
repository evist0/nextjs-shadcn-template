import { forwardRef } from 'react';

import Image, { type ImageProps } from 'next/image';

import { cn } from '~/shared/lib/utils';

export type ThumbnailProps = ImageProps;

export const Thumbnail = forwardRef<HTMLImageElement, ThumbnailProps>(
  ({ className, ...props }, ref) => {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text -- alt prop are passed down
      <Image {...props} className={cn('rounded-md', className)} ref={ref} />
    );
  },
);

Thumbnail.displayName = 'Thumbnail';
