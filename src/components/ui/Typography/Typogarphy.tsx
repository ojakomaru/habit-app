import {
  Typography as MuiTypography,
  type TypographyProps,
} from '@mui/material';
import React from 'react';

// sizeとweightをconst assertionで定義
const FontSizeStyle = {
  extraSmall: '0.75rem',
  small: '1rem',
  medium: '1.25rem',
  large: '1.5rem',
  extraLarge: '2rem',
} as const;

const FontWeightStyle = {
  regular: 400,
  bold: 700,
} as const;

interface Props extends TypographyProps {
  size?: keyof typeof FontSizeStyle;
  weight?: keyof typeof FontWeightStyle;
  children: React.ReactNode;
}

const Typography: React.FC<Props> = ({
  size = FontSizeStyle.medium,
  weight = FontWeightStyle.regular,
  children,
  ...rest
}) => {
  return (
    <MuiTypography
      {...rest}
      style={{
        fontSize: size,
        fontWeight: weight,
      }}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
