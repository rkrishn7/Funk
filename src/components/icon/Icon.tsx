import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconName, findIconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IconProps extends Omit<FontAwesomeIconProps, 'size' | 'icon'> {
  name: IconName;
  size?: number;
}

export const Icon: React.FC<IconProps> & { children?: never } = ({
  name,
  size = 30,
  color = 'white',
  ...props
}) => {
  const icon = findIconDefinition({ prefix: 'fas', iconName: name });
  return (
    <FontAwesomeIcon icon={icon} color={color} style={{ width: size, height: size }} {...props} />
  );
};
