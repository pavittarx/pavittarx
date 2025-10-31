import Script from "next/script";

declare const window: any;

const HotjarScript = () => {
  if (typeof window === "undefined") return <> </>;

  return (
    <>
      <Script src="https://t.contentsquare.net/uxa/7c4b899f43218.js"></Script>
    </>
  );
};

export default HotjarScript;
