import Head from 'next/head';

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

const defaultTitle = 'ForgeCircle - Alumni Networking Platform';
const defaultDescription = 'Connect and engage with your alumni network using ForgeCircle, the complete solution for schools and universities.';

export default function SeoHead({ title, description, image }: Props) {
  return (
    <Head>
      <title>{title ? `${title} | ForgeCircle` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title ? `${title} | ForgeCircle` : defaultTitle} />
      <meta property="og:site_name" content="ForgeCircle" />
      <meta property="og:description" content={description || defaultDescription} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ForgeCircle` : defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="theme-color" content="#1f6feb" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
}
