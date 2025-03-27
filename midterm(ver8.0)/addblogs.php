<?php
$servername = "localhost";
$username="root";
$password = "";
$conn = new mysqli($servername, $username, $password);
if($conn -> connect_error){
    die("Connection failed: " . $conn->connect_error);
}
$conn -> select_db("Taste_Trail");
$last_id_result = $conn->query("SELECT MAX(id) AS max_id FROM blogs");
$last_id_row = $last_id_result->fetch_assoc();
$last_id = $last_id_row['max_id'];
$sql= "SELECT * FROM blogs";
$result = $conn->query($sql);
if($result -> num_rows > 0){
    while($row = $result->fetch_assoc()){
        echo '
        <div class="pos">
        <div class="article">
          <div class="bird"></div>
         
          <div class="w3-row w3-padding-64 box" id="article_' . htmlspecialchars($row['id']) .'">
            <div class="w3-col m6 w3-padding-large w3-hide-small hide">
              <div class="flip-card">
                
                <img class="enlarge" src="'. htmlspecialchars($row['file_path']) .'" alt="back" id="Article_Img_'.htmlspecialchars($row['id']). '">
                <div class="chef" id="chef_'.htmlspecialchars($row['id']).'"></div>
                <div class="hat" id="hat_'.htmlspecialchars($row['id']).'"></div>
                <div class="hand" id="hand_'.htmlspecialchars($row['id']).'"></div>

              </div>
              <div class="blog-interaction">
                <button id="heart-'.htmlspecialchars($row['id']).'" class="like-button" onclick="likeBlog('.htmlspecialchars($row['id']).')">&#10084;</button>
                <span id="likes-'.htmlspecialchars($row['id']).'" class="likes-counter">0</span>
              </div>
            </div>
            

            <div class="m6 text" id="text_' .htmlspecialchars($row['id']). '">
              <div class="upper_text">
              <h1 class="w3-center title" id="Article_Title">'.htmlspecialchars($row['title']) .'</h1>
              <h4 class="w3-center" id="Article_Subtitle">'.htmlspecialchars($row['subtitle']) .'</h4>
              <p class="w3-large" id="Article_MainText">'.htmlspecialchars($row['main_text']) .'</p>
              </div>
              <hr class="text_linebreak">
              <div class="lower_text">
                <h4 class="w3-center">Eating Tips</h4>
                <p class="w3-large" id="Article_SubText">'.htmlspecialchars($row['sub_text']) .'</p>
                <div class="buttons">
                  
                  <div class="btn">
                    <span class="button_circle"></span>
                    <button class="button suggestion" id="pair_'.htmlspecialchars($row['id']) .'">suggestion</button>
                  </div>
                  
                  <div class="btn" id="image_button">
                    <span class="button_circle"></span>
                    <button class="button image" id="image_button_'.htmlspecialchars($row['id']) .'">image</button>
                  </div>

                  <form action="save.php" class="saveForm" method="POST"  data-ajax="true" id="saveForm">
                  <input type="hidden" name="id" value='.htmlspecialchars($row['id']) .' />
                  <div class="btn save" id="Save_button_'.htmlspecialchars($row['id']) .'">
                    <span class="button_circle"></span>
                    <button type="submit" class="button" data-id="save-item">Save</button>
                   
                  </div>
                  </form>
                  
                </div>
                
              </div>
              <div class="adminbox">
                
                <button class="del" id="del_' . htmlspecialchars($row['id']) . '">Delete</button>
                <button class="edit" id="edit_' . htmlspecialchars($row['id']) . '">Edit</button>
                </div>
            </div>
             
          </div>
          
        </div>
      </div>
      ';
      if($row['id'] != $last_id){
        echo '<hr class="sep">';
      }
    }
}else{
    echo "no blogs found";
}
$conn->close();
?>