<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <!-- how you cane make this uisng react   -->
  <div id="root">
   
  </div>
    

   
  <!-- //these are the cdn link to add react in html 
   this rect is made by facebook developers\
   its just kind of java script code-->

   <!-- this first link is core react link -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>

  <!-- this is for desctop application like react document object model  -->
   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> 

  <script src="03_jsxjs.js"></script>
</body>
</html>


<!-- Why Use a CDN in HTML?
A Content Delivery Network (CDN) is used in HTML to load external libraries, scripts, stylesheets, and assets efficiently. Instead of hosting these files on your server, you use a CDN URL to fetch them from globally distributed servers.

Benefits of Using a CDN
✅ 1. Faster Load Times
CDNs have multiple servers worldwide, ensuring files are delivered from the nearest location, reducing latency.
✅ 2. Reduced Server Load
Since the assets are served from a CDN, your web server handles fewer requests, improving performance.
✅ 3. Caching and Improved Performance
Browsers cache CDN files, meaning users don’t have to download the same file multiple times if they visit different sites using the same CDN.
✅ 4. Automatic Updates
You always get the latest stable version of the library (if using versioned URLs like latest).
✅ 5. Improved Reliability
If your server goes down, CDN-hosted files remain accessible.
✅ 6. Security Enhancements
Reputable CDNs provide security features like DDoS protection and SSL/TLS encryption. -->



<!-- In React (or any web application), Cross-Origin refers to situations where a web application running on one domain
  (origin) tries to request resources (like APIs, images, or fonts) from a different domain. This is controlled by the 
  Same-Origin Policy (SOP) and Cross-Origin Resource Sharing (CORS). -->


    //this is react dom how can create html code or create element in html
    React.createElement("div",{id:"container1"},[

    const containerDiv = React.createElement('div',{id:"container"},  //first you need select root node
        React.createElement('h1',{className:"h1"},"hey this is react h1"),
        React.createElement('h2',{className:"h1"},"hey this is react h2")
    ]),
    React.createElement("div",{id:"container2"},[
        React.createElement('h1',{className:"h1"},"hey this is react h1"),
        React.createElement('h2',{className:"h1"},"hey this is react h2")
    ])
)

const root = ReactDOM.createRoot(document.getElementById('root')); //this where you need to render
root.render(containerDiv);

<!-- 
this is long process or complex process to follow this . ita not optimized -->
</body>
</html>