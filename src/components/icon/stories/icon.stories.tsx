import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../../text';
import { Icon } from '../Icon';

library.add(fas);

export default { title: 'Icon' };

export const withText = () => (
  <Text icon="coffee" iconSize={24} iconColor="green" color="purple">
    hello
  </Text>
);

export const stopCircle = () => <Icon name="stop-circle" size={50} color="purple" />;
