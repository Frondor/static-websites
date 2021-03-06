<?php 
// upload.php de http://webtips.krajee.com/ajax-based-file-uploads-using-fileinput-plugin/
if (empty($_FILES['ticket'])) {
    return; // or process or throw an exception
}
 
// get the files posted
$ticket = $_FILES['ticket'];
 
// get server posted
$server = empty($_POST['server']) ? '' : $_POST['server'];
 
// get user name posted
$user = empty($_POST['user']) ? '' : $_POST['user'];
 
// a flag to see if everything is ok
$success = null;
 
// file paths to store
$paths= [];
 
// loop and process files
for($i=0; $i < count($ticket); $i++){
    $ext = explode('.', basename($ticket['name'][$i]));
    $target = "tickets/" . md5(uniqid()) . "." . array_pop($ext);
    if(move_uploaded_file($ticket['tmp_name'][$i], $target)) {
        $success = true;
        $paths[] = $target;
    } else{
        $success = false;
        break;
    }
}
 
// check and process based on successful status 
if ($success === true) {
    // call the function to save all data to database
    // code for the following function `save_data` is not 
    // mentioned in this example
    save_data($userid, $username, $paths);
 
    // store a successful response (default at least an empty array). You
    // could return any additional response info you need to the plugin for
    // advanced implementations.
    $output = [];
} elseif ($success === false) {
    $output = ['error'=>'Error while uploading ticket. Contact the system administrator'];
    // delete any uploaded files
    foreach ($paths as $file) {
        unlink($file);
    }
} else {
    $output = ['error'=>'No files were processed.'];
}
 
// return a json encoded response for plugin to process successfully
echo json_encode($output);
?>