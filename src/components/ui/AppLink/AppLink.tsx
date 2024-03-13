import { forwardRef, type ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import MuiLink, { type LinkProps as MuiLinkProps } from '@mui/material/Link'

export const APP_LINK_COLOR = 'textSecondary' // 'primary' // 'secondary'
export const APP_LINK_UNDERLINE = 'hover' // 'always

export const EXTERNAL_LINK_PROPS = {
  target: '_blank',
  rel: 'noopener noreferrer'
}

export interface AppLinkProps extends MuiLinkProps {
  children: ReactNode
  href?: string
  openInNewTab?: boolean
}

/**
 * アプリ内ナビゲーションのリンクを再構築。"to "プロップによる内部リンクと "href "プロップによる外部リンクをサポート。
 * @component AppLink
 * @param children - コンテント
 * @param href - external link URI
 * @param openInNewTab - trueの場合、リンクは新しいタブで開かれる
 */
const AppLink = forwardRef<any, AppLinkProps>(
  (
    {
      children,
      color = 'textSecondary',
      underline = 'hover',
      href = '/',
      openInNewTab = false, // デフォルトで外部リンクを新しいタブで開く
      ...restOfProps
    },
    ref
  ) => {
    const propsToRender = {
      color,
      underline,
      ...(openInNewTab && EXTERNAL_LINK_PROPS),
      ...restOfProps
    }
    return (
      <MuiLink ref={ref} component={Link} href={href} {...propsToRender}>
        {children}
      </MuiLink>
    )
  }
)
AppLink.displayName = 'AppLink'

export default AppLink
