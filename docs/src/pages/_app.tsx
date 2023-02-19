export default function MyApp({ Component, pageProps }) {
  return (
    <div style={{ padding: 20 }}>
      <Component {...pageProps} />
    </div>
  );
}
