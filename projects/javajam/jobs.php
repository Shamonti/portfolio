<!doctype html>
<html>

<head>
	<title>Home - JavaJam Coffee House</title>
  <script type="text/javascript" src="login.js">
		</script>
		<meta charset="utf-8">
		<link rel="stylesheet" href="javajam.css">
		<style>
			label {
				float: left;
				display: block;
				width: 100px;
			}
		</style>
</head>

<body>
	<div id="wrapper">
		<header></header>

		<nav>
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="menu.html">Menu</a></li>
				<li><a href="music.html">Music</a></li>
				<li><a href="jobs.php">Jobs</a></li>
			</ul>
		</nav>
		<div id="content">
			<h2>Jobs at JavaJam</h2>
			<p> Required fields are marked with an asterisk *</p>

			<form action="show_get_jobs.php" method="POST" id="loginform">
				<label for="name">*Name:</label>
				<input type="text" name="name" id="name" required><br><br>
				<label for="email">*Email:</label>
				<input type="email" name="email" id="name" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" required><br><br>
				<label for="date">Start Date:</label>

				<!----------------------------------------------------------------------- -->
        <!--                          Add Calendar                                -->
				<!----------------------------------------------------------------------- -->
				<!-- <input type="date" name="date" id="name"><br><br> -->
				<input name="date" id="name"><br><br>


				<label for="ex">*Experience: </label>

				<!----------------------------------------------------------------------- -->
        <!--                          Add Text in Experience                      -->
				<!----------------------------------------------------------------------- -->
				<!-- <textarea id="ex" name="experience" placeholder="Enter relevant qualifications here" rows="3" cols="30"
					required></textarea> -->

				<textarea id="ex" name="experience" rows="3" cols="30"
				required></textarea>

				<div class="row">
					<input type="submit" value="Apply Now!">
				</div>
			</form>

		</div>
		<footer>
			<small>
				<i>Copyright &copy; 2014 JavaJam Coffee House<br>
					<a href="mailto:fjf@hjh.com">sdvd@dfsdv.com</a></i>
			</small>
		</footer>
	</div>
</body>

</html>