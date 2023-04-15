/* eslint-disable @next/next/no-css-tags */
import 'bootstrap/dist/css/bootstrap.css';
import '/public/fontawesome-6.4.0-free/css/all.min.css';
import '../styles/index.scss';
import { useUser } from '@/libs/auth-service';
import { useEffect, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Router } from 'next/router';
import { ConfigProvider } from 'antd';
import Head from 'next/head';

const LayoutApp = ({ Component, ...rest}) => {
  const {data: user, refetch} = useUser();
  return <Component {...rest} user={user} userRefetch={refetch} />
}

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
      Router.events.on('routeChangeComplete', end);
      Router.events.on('routeChangeError', end);
    return () => {
      Router.events.on('routeChangeStart', start);
      Router.events.on('routeChangeComplete', end);
      Router.events.on('routeChangeError', end);
    };
  }, []);

  return typeof window !== undefined ? (
    <QueryClientProvider client={queryClient} >
      <Hydrate state={pageProps.dehydratedState}>
        <ConfigProvider>
          {
            loading ?
            <div>aaaa</div>
            :
            <LayoutApp {...pageProps} Component={Component} />
          }
        </ConfigProvider>
      </Hydrate>
    </QueryClientProvider>
  ) : null
}