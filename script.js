<!DOCTYPE html>
<html>
<head>
<script>
$(document).ready(Function(){
	$("Button").click(Function(){
		$.getJSON("team.json", Function(result){
			$.each(result, Function(i, field){
				$("div").append(field + " ");
			});
			
		});
	});
})
</script>
</head>
<body>

<button>Get JSON data</button>

<div></div>

</body>
</html>
