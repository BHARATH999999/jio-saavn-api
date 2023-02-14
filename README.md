<h1 align="center">Hi 👋, Welcome to <a target="_blank" href = "http://34.207.57.230/">Jio Saavn Api </a></h1>
<h3 align="center">An unofficial Music api built with ❤️ using Express.js, cheerio and Javascript</h3>
<img align="center" alt = "Music" width = "100%" height = "666px" src = "https://m.media-amazon.com/images/I/61sKrIdMneL.jpg">
<h2> </h2>
<h2> 
Routes to acess this Api:
</h2>   
        <h3> /homePageDetails </h3>
        <h4> get the home page details of jio-saavn.</h4>
        <h3> /albumId/xalbumName</h3> 
        <h4> get AlbumId of a particular album, which will be used for fetching album information. </h4>
        <h3> /album/xalbumId     </h3> 
        <h4> get Album information for a particular AlbumId. </h4>
        <h3> /album/songs/xalbumId</h3> 
        <h4> get all the Songs in an album with the given albumId. </h4>
        <h3> /songId/xsongName</h3> 
        <h4> get SongId of a particular Song, which will be used for fetching song information. </h4>
        <h3> /songDetails/xsongId</h3> 
        <h4> get the Song details with the given songId. </h4>
        <h3> /songMediaUrl/xsongId</h3> 
        <h4> get Song-media-url with the given songId, which will be used for listening and downloading the song. </h4>
        <h3> /lyrics/xsongId</h3> 
        <h4> get the Lyrics(if available) with the given songId. </h4>
        <h3> /playlistId/xplaylistName</h3> 
        <h4> get the PlaylistId of a particular Playlist, which will be used for fetching playlist information. </h4>
        <h3> /playlist/xplaylistId</h3> 
        <h4> get the Playlists information with the given playlistId. </h4>
        <h3> /search/xquery</h3> 
        <h4> get the general search results for a particular Query. </h4>
        <h3> /getAllLanguageData</h3> 
        <h4> get the links of all language data i.e. newly releases, weekly top, featured playlists and featured albums. </h4>
        <h3> /getLanguageData/xlanguage</h3> 
        <h4> get the links as said above for a particular language like Hindi, English, Tamil, Telugu, Punjabi, Marathi, Gujarati, Bengali, Kannada, Bhojpuri, Malayalam, Urdu, Haryanvi, Rajasthani, Odia, Assamese </h4>
        <h3> /getAllAlbums/xlanguage</h3> 
        <h4> get the details(name and link) of All the Albums in a Language(Note:- Takes some time to fetch all the data. </h4>
        <h3> /getAllAlbums/xlanguage/xstartsWith</h3> 
        <h4> get the details(name and link) of All the Albums in a Language which starts with a particular character. --> use any characters from a to z for albums starting with alphabet and for data starting with numbers kindly use "0-9" as startsWith.</h4>
        <h3>Note 1:- </h3>
        <h4>hostname should be used before all these routes. Hostname is http://34.207.57.230/ </h4>
        <h3>Example 1:-</h3>
        <h4>http://34.207.57.230/songId/believer fetches the songId of the song (Believer) as 'BeXBcbVK'. </h4>
        <h3>Example 2:-</h3>
        <h4>http://34.207.57.230/songMediaUrl/BeXBcbVK fetches the songMediaUrl of the song (Believer) as 'https://aac.saavncdn.com/248/a6b1b78b396245f712abda8f1daefee0_320.mp4' which can be used to listen or download the same. </h4>
        <h3>Note 2:- </h3>
        <h4>replace a particular xparameter with the respective details : Example:- xlanguage can be replaced with English </h4>
        <h4> And many more to come...</h4>

 
 <h2></h2>
 <h3 align="left">Languages and Tools:</h3>
<p align="left"> 
        <a align = "center" target="_blank" href ="https://expressjs.com/" rel="noreferrer">
                <img src="https://avatars.githubusercontent.com/u/5658226?s=200&v=4" alt="Express" width="45" height="45"/> 
        </a>
        <a target="_blank" href ="https://cheerio.js.org/" rel="noreferrer">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIAPmdeXbdwHRGCgUnelx64Ig_zAsJaS__BhjuFY3plSu6EFrQEJiI7xMM9I3wwc_57Q&usqp=CAU"                        alt="Cheerio" width="100" height="45"/> 
        </a>
        <a target="_blank" href ="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" rel="noreferrer">
                <img src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/79f52915-94fb-47db-85a2-46cfe4dffd47_600x600.png"                       alt="Javascript" width="45" height="45"/> 
        </a>
        <a target="_blank" href ="https://axios-http.com/" rel="noreferrer">
                <img src="https://avatars.githubusercontent.com/u/32372333?s=200&v=4" alt="Axios" width="45" height="45"/> 
        </a>
        <a target="_blank" href ="https://www.npmjs.com/package/cors" rel="noreferrer">
                <img src="https://cdn.pellerex.com/public/ecosystem/web/content/api-cors/pellerex-asp-net-5-web-api-cors.png" alt="CORS" width="111" height="45"/> 
        </a>
        <a target="_blank" href ="https://www.jiosaavn.com/" rel="noreferrer">
                <img src="https://play-lh.googleusercontent.com/gUR8xEKvCngapSZGkZUgoNETAYuhhkCr0Npza-lPSjbRCM55zdS0SK_KxBj1tg2RoQ=w240-h480-rw" alt="Jio Saavn" width="45" height="45"/>
        <a target="_blank" href ="https://nodemon.io/" rel="noreferrer">
                <img src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" alt="nodemon" width="45" height="45"/>
        </a>
        <a align = "center" target="_blank" href ="https://postman.com/" rel="noreferrer">
                <img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="Postman" width="45" height="45"/> 
        </a>
        <a align = "center" target="_blank" href ="https://aws.amazon.com/" rel="noreferrer">
                <img src="https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo-700x394.png" alt="AWS" width="65" height="45"/> 
        </a>
        <a align = "center" target="_blank" href ="https://aws.amazon.com/ec2/" rel="noreferrer">
                <img src="https://cdn-fiejl.nitrocdn.com/yNfvfiSxoeXhsQRaJFUuQCCZqugXTTRV/assets/images/optimized/rev-e551b5a/blog/wp-content/uploads/2021/11/amazon-ec2-logo.jpg" alt="EC2" width="65" height="45"/> 
        </a>
        <a align = "center" target="_blank" href ="https://pm2.keymetrics.io/" rel="noreferrer">
                <img src="https://pm2.keymetrics.io/assets/pm2-logo-1.png" alt="pm2" width="100" height="45"/> 
        </a>
</p>
 <h2></h2>
 <h4> If you like my work... Rate this Repsitory❤️😊</h2>
 <h4> Feel free to Comment and mention your reviews and tell me about any futher enhancements that can be done. </h4>
 <h4> Old Link -- <a target="_blank" href ="https://d68j0s.sse.codesandbox.io/"> Jio Saavn Api </a> </h4>
 <h4> Soon I am going to launch a full fledged website with the documentation and completely working api. Rate and Share my work. </h4>
 <h4> I am bound to copyrights...😊 </h4>
