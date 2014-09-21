<?php
  class Teammate {
    public $first_name  = "";
    public $last_name  = "";
    public $hobbies  = "";
  }
  $teammate_meta = new Teammate();
    $teammate_meta->first_name = "Hunter";
    $teammate_meta->last_name = "O'Brian";
    $teammate_meta->hobbies  = "Hacker";

  header('Content-Type: application/json');
  $json_encoded_data = json_encode($teammate_meta);
  error_log("Teammate meta = " . print_r($json_encoded_data, true) );
  echo $json_encoded_data;
