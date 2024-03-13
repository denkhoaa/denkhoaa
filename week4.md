<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="style.css"> </head>
<body>
    <header>
        <h1>My Website</h1>
        <nav> <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="grid-container"> <article>
                <h2>Section Title</h2>
                <p>Content for this section...</p>
                <img src="image1.jpg" alt="Image description" style="box-sizing: border-box; padding: 10px; border: 2px solid #ddd; border-radius: 5px;">
            </article>
            <article>
                <h2>Another Section Title</h2>
                <p>Content for another section...</p>
                <img src="image2.jpg" alt="Image description" style="box-sizing: border-box; padding: 10px; border: 2px solid #ddd; border-radius: 5px;">
            </article>
        </section>

        <section class="flex-container"> <h2>Section with Multiple Images</h2>
            <div>
                <img src="image3.jpg" alt="Image description" style="box-sizing: border-box; padding: 10px; border: 2px solid #ddd; border-radius: 0;"> <img src="image4.jpg" alt="Image description" style="box-sizing: border-box; padding: 10px; border: 2px solid #ddd; border-radius: 50%;"> </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>





/* Skip to Main Content link styling */
a:focus[href="#skip"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Ensures the link covers the entire viewport */
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    color: #fff; /* White text color */
    z-index: 999; /* Bring the link to the front */
}

/* Navigation bar styling */
nav {
    display: flex; /* Use flexbox for horizontal layout */
    justify-content: space-between; /* Space items evenly */
    padding: 10px 20px;
    background-color: #eee;
}

nav ul {
    list-style: none; /* Remove default bullet points */
    margin: 0; /* Remove default margin */
    padding: 0;
}

nav li {
    display: inline-block; /* Allow text wrapping */
    margin: 0 10px; /* Add spacing between list items */
}

nav a {
    text-decoration: none; /* Remove underline */
    color: #333;
}

nav a:hover {
    color: #000; /* Change color on hover */
}

/* Image styling */
img {
    max-width: 100%; /* Adjust image width as needed */
    height: auto; /* Maintain aspect ratio */
}

/* Grid layout */
.grid-container {
    display:
