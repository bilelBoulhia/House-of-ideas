import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";

import "@/style/globals.css";
import Header from "@/app/sections/Header";
import Footer from "@/app/sections/Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Welcome to house of Ideas",
  description: "AVE DOMINUS NOX",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
    <head>
      <title>Create Next App</title>
      <link rel="icon" />
      <script key="stloader" type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
    (function(e,r,n,t,s){var a=[];e[s]=function(){a.push(arguments)};e[s].queue=a;  var o=[];var i=[];var c=true;var p=void 0;if(window.PerformanceObserver&&  window.PerformanceObserver.supportedEntryTypes&&(  PerformanceObserver.supportedEntryTypes.indexOf("longtask")>=0||  PerformanceObserver.supportedEntryTypes.indexOf("element")>=0)){  p=new PerformanceObserver(function(e){e.getEntries().forEach(function(e){  switch(e.entryType){case"element":i.push(e);break;case"longtask":o.push(e);break;  default:break}})});p.observe({entryTypes:["longtask","element"]})}e[s+"lt"]={  longTasks:o,timingElements:i,inPageLoad:c,observer:p};if(t){var u=r.createElement(n);  u.async=1;u.src=t;var f=r.getElementsByTagName(n)[0];f.parentNode.insertBefore(u,f)}})
    (window,document,"script","//cdn.sematext.com/experience.js","strum");
  `
      }}/>
      <script key="stconfig" type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
    strum('config', { token: 'dde1f8ec-0d7a-46a6-b357-25d7f3b41051', 'receiverUrl': 'https://rum-receiver.eu.sematext.com' });
    var oldPushState = history.pushState;
    history.pushState = function(state, title, url) {
      window['strum']('routeChange', url);
      return oldPushState.apply(history, arguments);
    };
 `
      }}/>
    </head>
    <body className="bg-background text-foreground">

    <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
      <Header/>
      <main className="min-h-screen overflow-x-hidden  flex flex-col z-0 items-center">
        {children}
      </main>
      <Footer/>
    </ThemeProvider>
    </body>
    </html>
  );
}
