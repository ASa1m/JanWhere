![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.001.png)

**NATIONAL UNIVERSITY OF SCIENCES AND TECHNOLOGY** School of Electrical Engineering and Computer Sciences 

**Web Engineering (CS-344) Project Report** 

**Dr. Qaiser Riaz BSCS-11-C** 

**Mahad Mohtashim (379889) Mehran. (375327)** 

**Abdullah Saim (375503) Haider Ali Kayani (365855) Laiba Shafqat (373703)** 

Technological Overview:

MERN is a popular web development stack that consists of four main technologies: MongoDB, Express.js, React.js, and Node.js. Each of these technologies handles an aspect of web development and together they provide a powerful and efficient framework for building full-stack web applications. Below is a brief description of these components:  

1. MongoDB: MongoDB is a NoSQL database that stores data in a flexible format, similar to JSON files. It is known for its scalability, high performance, and ease of use. MongoDB allows developers to store and retrieve data in a structured manner using documents. 
1. Express.js: Express.js is a lightweight web application framework for Node.js. It provides a set of features and  ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.002.png)![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.003.png)tools that help in building web  applications  and  APIs.  Express.js  simplifies  the  process  of  handling  HTTP  requests,  routing,  middleware,  and  managing  application-level functionality. 
1. React.js:  React.js  is  a  JavaScript  library  for  building  user  interfaces.  It  allows developers  to  create  reusable  UI  components  and  efficiently  update  the  user interface based on changes in data. Because of this architecture, it makes it easy to manage and manipulate complex UI structures. 
1. Node.js: Node.js is a JavaScript runtime environment for the server-side execution. It provides an event-driven model that makes it efficient and scalable. Node.js enables building server-side logic, handling network requests, and interacting with databases. 

Together,  the  MERN  stack  enables  developers  to  build  modern  and  dynamic  web applications using JavaScript throughout the entire development process. The use of a single  programming  language  for  both  the  client  and  server-side  makes  it  easier  to maintain and develop applications. 

Our idea: 

From the snowy peaks of the Himalayas to the vast deserts of Thar, Pakistan boasts a remarkable array of indigenous animal species that inhabit its diverse landscapes. The snow leopard, an elusive and endangered predator, thrives in the ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.004.png)![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.005.png) mountainous  regions  of  the  Karakoram  and  Himalayas, adorned with its stunning spotted coat. Another iconic species is the markhor, a regal and endangered wild goat known for its spiraling horns, agile climbing abilities, and presence in the lofty Hindu Kush and Karakoram ranges. The Indus River dolphin, a critically endangered freshwater mammal, navigates the murky waters of the Indus River system, utilizing echolocation to locate prey. These are just a glimpse of the diverse range of indigenous animal species that contribute to the ecological tapestry of Pakistan, highlighting the importance of their conservation and protection. 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.006.png)![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.007.png) ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.008.png)

Our app, JANWHERE, is designed to harness the power of technology and community participation to raise awareness and conserve the indigenous animal species of Pakistan and aims to provide a recreational experience for users. The app provides users with an interactive  map  interface  where  they  can  locate  and  mark  the  presence  of  various indigenous animals across the country. Additionally, the app's picture posting feature adds a recreational element as well. Users can capture and share their wildlife encounters by uploading pictures of the indigenous animals they come across. This not only enables them to create a personal wildlife gallery but also allows them to share their experiences with others, sparking conversations and fostering a sense of community among like- minded individuals. Below is an extensive list of the features provided in the application: 

1. **User Authentication and Profiles:** The app allows users to create accounts and authenticate themselves. User authentication is implemented using technologies such as token generators for secure password storage and session management. Once logged in, users can create and manage their posts, track their contributions, and interact with other users. 
1. **Map Interface with Google Maps API:** The app utilizes the Google Maps API to display an interactive map interface. Users can navigate, zoom in and out, and explore different regions of Pakistan. The Google Maps API provides various features and functionalities, such as custom markers, overlays, and event handling, enhancing the user experience and allowing seamless integration with other app features. 
1. **Indigenous Animal Markers:** The app uses markers on the map to pinpoint the locations of indigenous animal species. Each marker represents a specific animal species and contains relevant information such as the species name and habitat. 
1. **Picture Posting and Image Storage:** Users can capture pictures of indigenous animals they encounter and post them on the respective markers. The app handles the image upload process, which involves storing the images in a secure and scalable manner.  
1. **Data Management with MongoDB:** The MongoDB database is utilized to store and manage the app's data, including information about indigenous animal species, user profiles, markers, and associated images. MongoDB's flexibility and scalability make it suitable for handling complex and evolving data structures, ensuring efficient data management for the app. 
1. **Discover Page:** The app provides comprehensive information about each indigenous animal species. This data is fetched from the MongoDB database and displayed in a user-friendly manner. Users can access details and pictures taken by other users. Filters can be applied to improve searchability. 
1. **New Post Creation:** The app provides a dedicated page where users can create a new post by uploading images of indigenous animals they have encountered. As users upload images for their post, the app generates a preview section where the uploaded images are displayed in a gallery-like format. To provide context 

and improve searchability, the page includes an option for users to add animal name tag related to the indigenous animal species featured in their post.** 

GUI :  

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.009.jpeg)

*HomePage – Desktop – Without Login* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.010.jpeg) ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.011.jpeg) ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.012.jpeg)

*HomePage – Mobile* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.013.jpeg)

*Discover – Desktop* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.014.jpeg) ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.015.jpeg)

*Discover – Mobile* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.016.jpeg)

*Post – Desktop* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.017.jpeg) ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.018.jpeg)

*Post – Mobile* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.019.jpeg)

*About Us – Desktop* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.020.jpeg) ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.021.jpeg)

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.022.jpeg)

*Concat Us* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.023.jpeg)

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.024.jpeg)

*Login* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.025.jpeg)

*Login – Mobile* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.026.jpeg)

*SignUp – Desktop* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.027.jpeg)

*SignUp - Mobile* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.028.jpeg)

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.029.jpeg)

Map – Post Markers and Clusters 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.030.jpeg)

*Map  – Info box on Mouse Hover* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.031.png)

*Map – Search Animals* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.032.jpeg)

*Map – Filter posts based on animals* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.033.png)

*Navbar – Mobile – Responsive* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.034.jpeg)

*Navbar – Active Link* 

*Navbar – Without Authentication ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.035.png)![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.036.png)*

*Navbar – With Authentication ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.037.png)![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.038.png)*

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.039.png) ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.040.png)

*Sticky Button – After Login* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.041.png)

*Post – Keep Track of Likes* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.042.jpeg) ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.043.jpeg)

*Comments Available – Authentic User* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.044.jpeg)

*Post  – Copies Link on Share button* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.045.jpeg)

*Navbar – Without Authentication* 

Database: 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.046.jpeg)

*MongoDB – Atlas (Remote Database)* 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.047.jpeg)

*User – Password Encrypted Hashing* 

Code: 

![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.048.jpeg) ![](Aspose.Words.d89ac818-1736-4878-8a9e-e732a19b33cc.049.png)

*Code  – Important Configuration* 

Configuration: 

**Available Scripts** 

In the project directory, you can run: 

**Start Frontend Server** 

- Get inside the frontend folder
- Run npm install to install required packages 

Open React App URL on[ http://localhost:3000/ ](http://localhost:3000/)to view it in the browser. 

**Start Backend Server** 

- Get inside the backend folder
- Run npm install to install required packages 

**Open API URL on[ http://localhost:5000/ ](http://localhost:5000/)to view it in the browser.** npm run dev

Launch both server and client simultaneously 

- First install concurrently globally in Node.js using npm install concurrently -g
- Set node options to use openssl-legacy mode using $env:NODE\_OPTIONS="--openssl- legacy-provider
- Now run the command npm run dev
