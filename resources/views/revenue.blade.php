<!DOCTYPE html>
<html>
<head>
    <title>Revenue</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
</head>
<body>
<div class="container">

    <graph :keys="{{ $revenue->keys() }}" :values="{{ $revenue->values() }}"></graph>

</div>


<script src="/js/revenue/revenue.js"></script>
</body>
</html>
