import React from 'react';
import styled from 'styled-components';
import { 
  color, 
  space, 
  layout, 
  ColorProps,
  SpaceProps, 
  LayoutProps 
} from 'styled-system';
import { Button } from '../button';

interface InputProps
  extends ColorProps,
  SpaceProps,
  LayoutProps {};

const View = styled.div<InputProps>`
  ${color}
  ${layout}
  ${space}
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
`;

export const Boobee: React.FC<any> = props => {
    return (
        <View {...props}>
            <Button>
                {props.children}
            </Button>
        </View>
    );
};
