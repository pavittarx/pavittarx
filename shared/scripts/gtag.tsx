import Script from "next/script";

const GTagScript = () => {

  const initGTag = () => {
    if(typeof window === "undefined") return;

    const dataLayer = window.dataLayer || [];
    window.dataLayer = dataLayer;

    function gtag(...args: unknown[]) {
      dataLayer.push(args);
    }

    gtag("js", new Date());
    gtag("config", "G-7GLPMTL7EN");
  }

  return <> 
<Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-7GLPMTL7EN"></Script>
<Script>
  {
    initGTag()
  }
</Script>
  </>;

}

export default GTagScript;