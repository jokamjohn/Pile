<!DOCTYPE html>
<html>
<head>
    <title>Laravel</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>
<body>
<div class="container">

    <wins-graph :player="{{ json_encode($kagga) }}" :opponent="{{ json_encode($aysher) }}"></wins-graph>

</div>


<script src="/js/win/wins.js"></script>
</body>
</html>
