import * as React from 'react';
import cn from 'classnames';

import { Displays, SpacingScale } from '../theme';

type BoxOwnProps = {
  /**
   * Define the element type
   * @default 'div'
   */
  as?: React.ElementType;
  /**
   * Control the display box type of an element.
   * @default null
   */
  display?: Displays | Displays[];
  /**
   * Control the horizontal space between elements using the space-x-{amount} utilities.
   * @default null
   */
  sx?: SpacingScale | SpacingScale[];
  /**
   * Control the vertical space between elements using the space-y-{amount} utilities.
   * @default null
   */
  sy?: SpacingScale | SpacingScale[];
};

const Box: React.FC<BoxOwnProps> = ({
  as: Component = 'div',
  display,
  sx,
  sy,
  children,
}) => {
  return (
    <Component
      className={cn({
        [`${display}`]: display,
        [`space-x-${sx}`]: sx,
        [`space-y-${sy}`]: sy,
      })}
    >
      {children}
    </Component>
  );
};

export default Box;