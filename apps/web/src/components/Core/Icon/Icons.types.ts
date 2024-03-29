import type { ComponentType, SVGAttributes } from 'react';

enum IconNames {
  ARROW_DOWN = 'ArrowDown',
  ARROW_UP = 'ArrowUp',
  DELETE = 'Delete',
  EDIT = 'Edit',
}

export type IconComponent = ComponentType<SVGAttributes<SVGElement>>;

export default IconNames;
