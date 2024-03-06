import { forwardRef, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';

export const APP_LINK_COLOR = 'textSecondary'; // 'primary' // 'secondary'
export const APP_LINK_UNDERLINE = 'hover'; // 'always

export const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

export interface AppLinkProps extends Omit<MuiLinkProps, 'href'>, LinkProps {
  children: ReactNode;
  to?: string;
  openInNewTab?: boolean;
}

/**
 * アプリ内ナビゲーションのリンクを再構築。"to "プロップによる内部リンクと "href "プロップによる外部リンクをサポート。
 * @component AppLink
 * @param {object|function} children - content to wrap with <a> tag
 * @param {string} [to] - internal link URI
 * @param {string} [href] - external link URI
 * @param {boolean} [openInNewTab] - link will be opened in new tab when true
 */
const AppLink = forwardRef<any, AppLinkProps>(
  (
    {
      children,
      color = 'textSecondary',
      underline = 'hover',
      to = '',
      openInNewTab = false, // デフォルトで外部リンクを新しいタブで開く
      ...restOfProps
    },
    ref
  ) => {
    const propsToRender = {
      color,
      underline,
      ...(openInNewTab && EXTERNAL_LINK_PROPS),
      ...restOfProps,
    };
    return (
      <MuiLink ref={ref} component={Link} to={to as string} {...propsToRender}>
        {children}
      </MuiLink>
    );
  }
);
AppLink.displayName = 'AppLink';

export default AppLink;
