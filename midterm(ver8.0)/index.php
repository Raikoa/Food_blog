
<!DOCTYPE html>
<?php

// $servername = "localhost";
// $username = "root";
// $password = "";
// $conn = new mysqli($servername, $username, $password);
// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }

// $sql="CREATE DATABASE IF NOT EXISTS Taste_Trail";
// if ($conn->query($sql) === TRUE) {
//   echo "Database created successfully\n";
// } else {
//   echo "Error creating database: " . $conn->error . "\n";
// }
// $conn->select_db("Taste_Trail");
// $sql = "DROP TABLE IF EXISTS blogs;"; //delete this, only here for debug purpose
// $conn->query($sql);
// $sql="CREATE TABLE blogs(
//   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
//   title VARCHAR(30) NOT NULL,
//   subtitle VARCHAR(100),
//   main_text TEXT NOT NULL,
//   sub_text TEXT NOT NULL,
//   file_path VARCHAR(255) NOT NULL
// )";


// if ($conn->query($sql) === TRUE) {
//   echo "table created successfully\n";
// } else {
//   echo "Error creating table: " . $conn->error . "\n";
// }


// $stmt = $conn-> prepare("INSERT INTO blogs (title, subtitle, main_text, sub_text, file_path)
// VALUES(?,?,?,?,?)");
// $stmt->bind_param("sssss", $title, $sub_title, $main_text, $sub_text, $file_path);

// $title= "Udon";
// $sub_title = "A type of noodle made from wheat that originated in Japan.";
// $main_text= "Originating from Japan, udon noodles are one of the most popular types of noodles in
//                 Taiwan. The thickness and length of udon noodles are strictly regulated, and these standards are key to
//                 creating their unique texture. Udon noodles are chewy, smooth, and easy to eat, providing a satisfying
//                 sense of fullness,
//                 making them suitable for people of all ages. I love udon noodles because they are versatile and can be
//                 cooked in many ways;
//                 no matter how they're prepared, they taste great. Additionally, udon noodles are lower in calories
//                 compared to other noodles,
//                 making them a lighter choice without the feeling of heaviness.";

// $sub_text = "Udon noodles can be prepared in various ways. The most
//                 common is udon noodle
//                 soup, served with a variety of toppings, and for those who prefer a richer flavor, stir-fried udon is a
//                 great choice.
//                 Additionally, there are options like curry udon and cold udon, each of which is worth trying. ";

// $file_path = "ref/udon.jpg";
            
// $stmt->execute();

// $title= "barbeque";
// $sub_title = "Simple methods, multiple flavors.";
// $main_text= "Barbecuing is one of the most ancient cooking methods. Despite its simplicity,
//                 this way of cooking has evolved into diverse and rich dishes across various cultures. In Taiwan,
//                 barbecuing became a Mid-Autumn Festival tradition due to a soy sauce company's advertisement, giving
//                 it a unique significance here. I enjoy barbecuing because grilling enhances the flavors of many
//                 foods, and pairing grilled foods with different sauces allows me to taste a variety of flavors.";

// $sub_text = "Regular grilled meats can be enjoyed with barbecue sauce,
//                 lettuce, toast, and more.
//                 In Hong Kong, Cantonese-style roast meats were developed, while Beijing is famous for Peking duck—unique
//                 barbecue dishes well worth trying.
//                 Japan has also created its own style, called Yakiniku, where different cuts of meat are grilled and
//                 paired with Japanese sauces, making it incredibly
//                 delicious as well. 
// ";

// $file_path = "ref/barbeque.jpg";
            
// $stmt->execute();

// $title= "Ramen";
// $sub_title = "The chashu is the soul";
// $main_text= "When traveling in Japan, if I am burned out from all the walking, I just pop in at a station or some
//                 place along the road
//                 to eat a bowl of ramen, it makes me feel alive again. The broth, simmered with all kinds of meaty bones,
//                 the noodles with a uniquely chewy texture, and the smoky aroma unique to ramen shops make it incredibly
//                 satisfying. The chashu pork on top is the essence of the entire bowl. Somehow, the chashu is
//                 well-marinated and
//                 fatty but not greasy, it makes the whole bowl of noodles taste even better. By the way, I feel that the
//                 best ramen shops
//                 often appear in unassuming little alleyways.
// ";

// $sub_text = "The Ramen in the photo is the best I have ever eatten,
//                 the chashu on top is also amazing, the best even,
//                 it's broth is shimmered with pork and chicked bones, and konbu，
//                 it strikes a wonderful balance.

// ";

// $file_path = "ref/ramen1.png";
            
// $stmt->execute();

// $title= "matcha ice cream";
// $sub_title = "and the red bean paste on the side";
// $main_text= "Because I am a matcha maniac, so everytime I went to kyoto I make sure to grab
//                 the famous Ujinotsuyu matcha, among the multiple matcha dessert, the one that speaks
//                 to me the most is the delightful matcha ice cream; it's flavor is something else, with
//                 a thick matcha smell, you get a perfect balance of bitterness and sweetness, it is not an
//                 exaggeration that it is the peak of matcha. I was truely shaken to my core when I ate it.

// ";

// $sub_text = "The red bean paste on the side is actually not sweet at all if you eat it alone,
//                 but when paired with the ice cream, it miraculously brings out the sweetness and aroma of
//                 both the ice cream and the red bean paste, blending the two flavors together, flawlessly.
// ";

// $file_path = "ref/matcha1.png";
            
// $stmt->execute();


// $title= "Donburi";
// $sub_title = "Simple and approachable Japanese cuisine";
// $main_text= "Donburi is a general term for Japanese rice bowl dishes, consisting of a
//                 large bowl of rice topped with various simmered ingredients. Due to historical and cultural exchanges,
//                 donburi has also become a popular dish in Taiwan. Its affordable price makes it a common choice for
//                 students. I enjoy donburi because of its variety of toppings, and it can be paired with ingredients
//                 like green onions and cheese to enhance its texture. Its low price also allows me to enjoy Japanese
//                 cuisine at a minimal cost.
// ";

// $sub_text = "There are many varieties of donburi. Simple options
//                 like beef or pork already create a delicious flavor, and for extra taste, you can add
//                 toppings like green onions or cheese. More premium choices include tempura, seafood, and eel,
//                  each of which is exceptionally tasty. 
// ";

// $file_path = "ref/Donburimono.jpg";
            
// $stmt->execute();


// $sql = "SELECT * FROM blogs";
// $result = $conn->query($sql);
// if ($result->num_rows > 0) {
//   while($row = $result->fetch_assoc()) {
//     echo $row["title"]. "<br>";
//   }
// } else {
//   echo "0 results";
// }

// // 使用者的登入資料庫建立
// $sqlFilePath = 'sql/users_data.sql';

// // 檢查檔案是否存在
// if (!file_exists($sqlFilePath)) {
//     die("<br>" . "SQL file not found: " . $sqlFilePath);
// }

// // 讀取 .sql 檔案內容
// $sqlContent = file_get_contents($sqlFilePath);

// // 將 SQL 語句分割成多個單獨的語句（以分號 ";" 為分隔符）
// $sqlStatements = explode(';', $sqlContent);

// // 執行每個 SQL 語句
// foreach ($sqlStatements as $statement) {
//     $statement = trim($statement); // 去除多餘的空格或換行
//     if (!empty($statement)) { // 忽略空語句
//         if ($conn->query($statement) === TRUE) {
//             echo "Query executed successfully: " . $statement . "<br>";
//         } else {
//             echo "Error executing query: " . $conn->error . "<br>";
//         }
//     }
// }
// $conn->close();

?>

<?php 
  session_start();
  include("start.php");
  include("connection.php");
  include("function.php");
  $user_data = check_login($con);

?>

<html class="autumn_back" lang="en">

<head>
  <title>taste trail</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="jquery.js"></script>
  <script src="myscript.js"></script>
  <script src="search.js"></script>
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <link rel="stylesheet" href="autumn.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Kaushan+Script&display=swap" rel="stylesheet">
<!--fonts-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Agu+Display&family=Caveat:wght@400..700&family=Fredericka+the+Great&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&family=Rancho&family=Sedgwick+Ave&family=Syne+Mono&family=Yomogi&display=swap" rel="stylesheet">


  <!-- 簡昱安用於木牌上的字體 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,100..900;1,100..900&family=Gloria+Hallelujah&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

  <!--
  <style>
    body {
      font-family: "Pacifico";


    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Playfair Display";
      letter-spacing: 5px;
    }
  </style>
-->


</head>


  <body>

    <!--<script src="houdini_style.js"></script>-->


    <!-- Navbar (sit on top) -->
    <!--
<div class="w3-top">
  <div class="w3-bar w3-white w3-padding w3-card" style="letter-spacing:4px;">
    <a href="#home" class="w3-bar-item w3-button" >Gourmet au Catering</a>
    -->

    <!-- Right-sided navbar links. Hide them on small screens -->
    <!--
    <div class="w3-right w3-hide-small">
      <a href="#about" class="w3-bar-item w3-button">About</a>
      <a href="#menu" class="w3-bar-item w3-button">Menu</a>
      <a href="#contact" class="w3-bar-item w3-button">Contact</a>
    </div>
  </div>
</div>
-->
<div id="fullscreen-loader" style="display:none;">
    <div class="spinner"></div>
</div>
    <div class="w3-top">
      <div class="w3-bar w3-white w3-padding w3-card navi" style="letter-spacing:4px;">
        <a href="#home" class="home">Taste trail</a>
        <span id="title_circle"></span>
        <div class="head_style">
          <hr id="title_line">
        </div>

        <!-- Right-sided navbar links. Hide them on small screens -->

        <!--<div id="time"></div>-->


        <div class="pText" id="pText">
          <a href="#article_1" class="w3-bar-item w3-button">Blogpost</a>
       
          <button id="showFav" class="w3-bar-item w3-button showFav">Saved</button>
    
          <button id="showmenu" class="w3-bar-item w3-button showmenu">Menu</button>
          
          <!-- login & logout-->
          <?php if(isset($_SESSION["user_id"])): ?>
            <button class="logout-js w3-bar-item w3-button">Logout</button>
          <?php else: ?>
            <button class="login-js w3-bar-item w3-button">Login</button>
          <?php endif; ?>

          <button id="others" class="w3-bar-item w3-button">Others</button>

          <!-- welcome -->
          <?php if(isset($_SESSION["user_id"])): ?>
            <span id="welcome" class="w3-bar-item">Welcome <?php echo $user_data['user_name'] ?></span>
          <?php else: ?>
            <span id="welcome" class="w3-bar-item">Welcome Visitor</span>
          <?php endif; ?>

          <!--
          <div class="btn">
            <span class="button_circle"></span>
            <button class="button" id="blogs">BlogPosts</button>
          </div>
          <div class="btn">
            <span class="button_circle"></span>
            <button class="button" id="contact">Contact</button>
          </div>
          <div class="btn">
            <span class="button_circle"></span>
            <button id="showmenu" class="button">Menu</button>
          </div>
        -->

        </div>

        <ul id="sidebar" class="sidebar">
          <li><button id="sidebar-close" class="sidebar-button">X</button></li>
          <li><button id="sidebar-blogpost" class="sidebar-button">Blogpost</button></li>
          <li ><button class="sidebar-button showFav">Saved</button></li>
          <li><button class="sidebar-button showmenu">Menu</button></li>

          <li>
            <?php if(isset($_SESSION["user_id"])): ?>
              <button class="logout-js sidebar-button">Logout</button>
            <?php else: ?>
              <button class="login-js sidebar-button">Login</button>
            <?php endif; ?>
          </li>
        </ul>

      </div>
    </div>
    

    <!-- Header -->
    <header class="w3-display-container w3-content w3-wide" id="home">
      <img id="banner_img" src="ref/web_banner_winter.png" alt="banner">
      <div id="Bannermodal" class="modal">

        <button class="close">✘</button>
        <br><br>
        <img class="modal-img-slim" id="img-modal">
        <div id="caption"></div>
      </div>
      <div class="w3-display-bottomleft w3-padding-large w3-opacity">

      </div>
    </header>

    
    <div id="Saves" class="modal">
      <div class = "backdrop">
        <p id="saved_text">Saved blogs</p>
          <ul id="favs">
          <!-- 黃柏偉耍蠢 -->
          </ul>
       
      </div>
      <button class="close">✘</button>  
    </div>

    <div id="Suggests" class="modal">
      <div class = "backdrop">
          <hr id="su_line">
          <div id="suggest_area">
          <ul id="u_su">
          
          </ul>
          </div>
          
      
        <div id="button_bar_requ">
          <?php if (isset($_SESSION['user_id']) && $user_data['user_name'] == "admin"): ?>
          <button class="delete" id="su_del">Delete</button>
          <?php endif; ?>
          <?php if (isset($_SESSION['user_id'])): ?>
            <div id="add_part"></div>
          <?php else:?>
            <p>You need to login!</p>  
          <?php endif; ?>
          </div>
         
      </div>
      <button class="close">✘</button> 
    </div>

    <div id="su_form" class="modal">
      
    <form action="addNewSU.php" id="su_add_form" method="POST" data-ajax="true" enctype="multipart/form-data">
            <input type="hidden" name="username" value="<?php echo $_SESSION['user_name']?>">
            <input type="hidden" name="blog_id" id="blog_ids">
            <div id="Su_ta"><span id="su_label">Text:</span> <input type="text" name="SU_text" required minlength="1" maxlength="10" id="su_area" placeholder="comment here"><br>
            <p class="maxSuerror">You've reached the word limit!</p>
            <br>
            <div class="btn" id="form_btn">
              <span class="button_circle"></span>
              <button class="button" type="submit">Add Blog</button>
            </div>
      </form>
      </div>
          <button class="close">✘</button> 
      </div>




    <div id="Menumodal" class="modal">
      <!--
      <div class="rectangle"><span>Udon</span></div>
      <div class="rectangle"><span>Barbeque</span></div>
      <div class="rectangle"><span>Ramen</span></div>
      <div class="rectangle"><span>Matcha Ice Cream</span></div>
      <div class="rectangle"><span>Donburi</span></div>
  -->
      <?php include 'addMenu.php'?>
      <button class="close">✘</button>  
      <!-- ✘✕ -->
    </div>

    <div class="topbar" id="stick">
      <div id="leaves">
        <div class="leafremove"><img src="ref/leaf_top.png" width="400px" height="300px" id="leaf_top_1"></div>
        <div class="leafB"><img src="ref/leaf_top.png" width="400px" height="300px" id="leaf_top_2"></div>

      </div>
    </div>
    <div class="maple hidden" id="maple_1">
      <div class="playground">
        <div class="maple-leaf">
          <div class="top trapezium"></div>
          <div class="mid">
            <div class="left trapezium"></div>
            <div class="center"></div>
            <div class="right trapezium"></div>
          </div>
          <div class="branch"></div>
        </div>
      </div>
    </div>
    <div class="maple1 hidden" id="maple_2">
      <div class="playground">
        <div class="maple-leaf">
          <div class="top trapezium"></div>
          <div class="mid">
            <div class="left trapezium"></div>
            <div class="center"></div>
            <div class="right trapezium"></div>
          </div>
          <div class="branch"></div>
        </div>
      </div>
    </div>

    <div id="bodys" class="border_autumn">
    <div id="intro">
      <h1><i><strong>Hello</strong></i></h1>
      
      <h2 id="intro_text">Welcome to our blog<br>
        <div id="container">
        <div class="object">
          <div class="square"></div>
          <hr id="bridge">
        </div>
        <span id="logo">Taste Trail
        
        </span> 
        <div class="object">
          <div class="square"></div>
        </div>
        </div>
      </h2>
      <div id="endpoint" height="100px"></div><br>
      <h3>From street food to gourmet delights. Join us on a journey of taste, one mouthwatering bite at a time.</h3>
  
      <label id="themes">Today is 
          <select name="theme" id="theme_select">
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>
          </label>
    </div>
    
    <div class="w3-content" style="max-width:1100px">
      <hr class="separator separator--line sep_autumn" id="top_sep"/>
      <div class="diamonds">
        <div class="dia dia_autumn"></div>
        <div class="dia dia_autumn"></div>
        <div class="dia dia_autumn"></div>
      </div>
      
      <!-- Ver7.2更新 若使用者是admin才顯示 -->
      <?php if(isset($_SESSION['user_id']) && $user_data['user_name'] == "admin"): ?>
        <div id="buttonbar"><button id="addButton">Add</button><button id="DelButton">Delete</button><button id="EditButton">Edit</button></div>
      <?php endif; ?>
      
      <?php
      if (isset($_GET['error']) && $_GET['error'] === 'no_results') {
          $errorMessage = "No results found. Please try a different search term.";
      }
      ?>
      <div class="searchbar">
          <form method="GET" action="search.php">
              <div class="search">
                  <input class="search-bar" type="text" name="search" id="search" placeholder="search up to 20" maxlength="20">
                  <button class="search-btn"><img id="btn-image" src="ref/winter_magnifier.png"></button>
              </div>
          </form>
          <?php if (!empty($errorMessage)): ?>
              <div class="search_error"><?php echo htmlspecialchars($errorMessage); ?></div>
          <?php endif; ?>
      </div>

    <div id="AddForm" class="modal">
      <div class = "backdrop">
        <div class="Formcontainer">
          <form action="addNew.php" method="POST" id="addform" data-ajax="true" enctype="multipart/form-data">
            Title: <input type="text" name="title" required minlength="2" maxlength="30"><br>
            Subtitle: <input type="text" name="subtitle" maxlength="100"><br>
            Text: <textarea name="main_text" required minlength="50" rows="8" cols="60" class="MainTextInput"></textarea><br>
            <p class="maxMainerror">You've reached the word limit!</p>
            sub_text: <textarea name="sub_text" rows="5" cols="60" class="SubTextInput"></textarea><br>
            <p class="maxerror">You've reached the word limit!</p>
          
            <div id="picture">
        
            <input type="file" name = "image" id="photoInput" accept="image/*" required>
            <label for="photoInput" class="custom-file-label">Choose File</label>
            </div>
            <div class="btn" id="form_btn">
              <span class="button_circle"></span>
              <button class="button" type="submit">Add Blog</button>
            </div>
          </form>
        </div>
     
      </div>
      <button class="close">✘</button>  
    </div>

    <div id="noticeForm" class="modal">
    <div class="backdrop">
    <div id="popupBox">
      <div id="popupSpace">
      </div>
      <button class="Ok" id="Result">Okay</button>
    </div>
    
    </div>
    <button class="close">✘</button>  
    </div>

    <div id="DelForm" class="modal">
        <div class = "backdrop">
          <h2 style="text-align:center;">Are You Sure?</h2> 
          <div id="button_bar_del">
            <form action="delete.php" class="del_menu" method="POST" data-ajax="true" id="del_okay_form">
              
             <button type="submit" id="Del_confirm">Yes</button><!-- Make new buttons style for here -->
              
            </form>
            <button id="Cancel">No</button>
          </div>
         
      </div>
      <button class="close">✘</button> 
    </div>

    <div id="EditForm" class="modal">
      <div class = "backdrop">
        <div class="Formcontainer">
          <form action="Edit.php" method="POST" id="editform" data-ajax="true" enctype="multipart/form-data">
            Title: <input type="text" name="title" required minlength="2" id="edit_title"><br>
            Subtitle: <input type="text" name="subtitle" id="edit_subtitle"><br>
            Text: <textarea name="main_text" required minlength="50" rows="8" cols="65" id="edit_text" class="MainTextInput"></textarea><br>
            <p class="maxMainerror">You've reached the word limit!</p>
            sub_text: <textarea name="sub_text" rows="5" cols="65" id="edit_subtext" class="SubTextInput"></textarea><br>
            <p class="maxerror">You've reached the word limit!</p>
            <div id="picture">
              <input type="file" name = "image" accept="image/*" id="edit_image">
              <label for="edit_image" class="edit-file-label">Choose File</label>
            </div>
            <div id="preview">
              <p>Preview Image:</p>
              <img id="current_image_preview" style="max-width: 100%; margin-top: 10px;" />
            </div>
            <div class="btn" id="form_btn">
              <span class="button_circle"></span>
              <button class="button" type="submit" id="edit_confirm">finish edit</button>
            </div>
          </form>
          
        </div>
        
      </div>
      <button class="close">✘</button> 
    </div>



      <div id="blogs">
         <?php include 'addblogs.php'; ?>
      </div>
      <div class="diamonds">
        <div class="dia dia_autumn"></div>
        <div class="dia dia_autumn"></div>
        <div class="dia dia_autumn"></div>
      </div>
      <hr class="separator separator--line sep_autumn" id="bottom_sep"/>
  </div>

      <!-- Contact Section -->
      <div class="w3-container w3-padding-64 " id="Contact">

        <h1 class="contact-large" id="Create">Creators</h1>
        <p class="contact_text">Do you have any suggestions? What are some of your favorite food? feel free to share
          with us!
        </p>
        <!--
        <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a
          message
          here:</p>
        <form action="/action_page.php" target="_blank">
          <p><input class="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"></p>
          <p><input class="w3-input w3-padding-16" type="number" placeholder="How many people" required name="People">
          </p>
          <p><input class="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required
              name="date" value="2020-11-16T20:00"></p>
          <p><input class="w3-input w3-padding-16" type="text" placeholder="Message \ Special requirements" required
              name="Message"></p>
          <div class="btn">
            <span class="button_circle"></span>
            <button class="button" type="submit">SEND MESSAGE</button>
          </div>
        </form>
      -->
        <div id="creators">
          
          <div class="creator" data-aos="zoom-in">
            <div class="photo_container">
            <img src="ref/selfie.jpg" width="350px" height="400px">
            <div class="profiles"></div>
            </div>
            <p class="contact_text name">Bob</p>
          </div>
          <div class="creator" data-aos="zoom-in">
            <div class="photo_container">
              <img src="ref/wong.jpg" width="350px" height="400px">
              <div class="profiles"></div>
            </div>
            <p class="contact_text name">Wang hao-yu</p>
          </div>
          <div class="creator" data-aos="zoom-in">
            <div class="photo_container">
              <img src="ref/chiang.jpg" width="350px" height="400px">
              <div class="profiles"></div>
            </div>
            
            <p class="contact_text name">fish an</p>
          </div>
          <div class="creator" data-aos="zoom-in">
            <div class="photo_container">
              <img src="ref/jackfu.jpg" width="350px" height="400px">
              <div class="profiles"></div>
            </div>
           
            <p class="contact_text name">jack fu</p>
          </div>
        </div>
        <p class="contact_text email">You can contact us by email <a href="mailto:example@email.com">example@email.com</a></p>
      </div>
      <!--
      <p class="contact_text" id="form_text">or you can send us a
          message
          here:</p>
      <form action="/action_page.php" target="_blank" id="footer_form">
        <p><input class="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"></p>
        <p><input class="w3-input w3-padding-16" type="number"  required name="People">
        </p>
        <p><input class="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required
            name="date" value="2020-11-16T20:00"></p>
        <p><input class="w3-input w3-padding-16" type="text"  required
            name="Message"></p>
        <div class="btn">
          <span class="button_circle"></span>
          <button class="button" type="submit">SEND MESSAGE</button>
        </div>
      </form>-->
    </div>

  </div>
  <br><br>

  
    <!-- Footer -->
    <p class="w3-center footer_text" id="powered">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank"
    class="w3-hover-text-green">w3.css</a></p>
    <footer id="footer">
    
        <div class="bonfire" id="effect">
        <div class="smoke-container">
            <div class="smoke"></div>
            <div class="smoke"></div>
            <div class="smoke"></div>
        </div>
        </div>
        <div id="glow"></div>
        <!--<img src="ref/summer-bird.svg" id="summer_footer">-->
        <img src="" id="endimg">
    </footer>
    

  </body>


</html>