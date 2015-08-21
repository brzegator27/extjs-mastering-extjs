<?php
	session_start();
	$_SESSION = array();
	session_destroy();

	$result = array();

	$result['success'] = true,
	$result['msg'] = 'Logged out';

	echo json_encode($result);

?>