import React from "react";
import Head from 'next/head'
import classNames from "classnames";
import {BasePropsWithChildren} from "./types";
import styled from "styled-components";

const siteTitle = 'IPFS SCAN'

export interface Props extends BasePropsWithChildren {
  title?: string
}

function Page_(p: Props) {
  const {
    className,
    title = siteTitle,
    children
  } = p
  return (
    <div className={classNames(className)}>
      <Head>
        <meta
          name="description"
          content="Base Next"
        />
        <meta name="og:title" content={title}/>
        <title>{title}</title>
      </Head>
      <div className='page'>
        {children}
      </div>
    </div>
  )
}

export const Page = React.memo<Props>(styled(Page_)`
  .page {
    width: 100vw;
  }
`)

export default Page
