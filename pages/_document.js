import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang='en'>
            <title>Grids and Guides</title>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta charset="utf-8" />
                <meta name="author" content="Grids and Guides Web Design Company in Chennai" />
                <meta name="robots" content="all, index, follow" />
                <meta name="description" content="We grids and guides is a best web design company in chennai specialize in providing services on Blockchain, AI, web designing &amp; development, mobile application creation and web promotions." />
                <meta property="og:image" content="https://www.gridsandguides.com/images/g2.jpg" />
                <meta property="og:title" content="Web Design Company in Chennai | Grids and Guides" />
                <meta property="og:description" content="We grids and guides is a best web design company in chennai specialize in providing services on Blockchain, AI,Android,IOS Development, web designing, and development, mobile application creation and web promotions." />
                <meta name="Author" content="Grids and Guides" />
                <meta property="og:site_name" content="www.gridsandguides.com" />
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
                <link rel="canonical" href="https://www.gridsandguides.com" />
                <meta name="robots" content="index" />
                <meta name="description" content="Grids and Guides is a top Web Design Company in Chennai Started in 2010 with a small team and now we have established our branches in Chennai and Bangalore, We provide quality websites, mobile application and web based software." />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
                <meta NAME="geo.placename" CONTENT="Tamil Nadu" />
                <meta NAME="geo.region" CONTENT="India" />
                <Script src="https://www.googletagmanager.com/gtag/js?id=AW-992542297" />
                <Script id="google-analytics">
                    {`
                    window.dataLayer = window.dataLayer || []; 
                    function gtag(){
                        dataLayer.push(arguments);
                    } 
                    gtag('js', new Date()); 
                    gtag('config', 'AW-992542297');
                    gtag('event', 'conversion', {'send_to': 'AW-992542297/GNLmCJbc5PIYENn8o9kD'});
                  `}
                </Script>
                <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-PHH8JRF');
                    ` }}>
                </Script>
            </Head>
            <body>
                <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PHH8JRF" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}></noscript>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}