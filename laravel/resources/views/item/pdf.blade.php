<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>
<body>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">nombre</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($items as $item)
            <tr>
                <td>{{$item->id}}</td>
                <td>{{$item->nombre}}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    
</body>
</html>
