# 🌐 Web Development Lab Programs

Welcome to my **Web Development Lab Repository!** 💻

This repository contains practical programs developed using **HTML, CSS, JavaScript, PHP, and MySQL**. These programs demonstrate fundamental web development concepts, including form validation, array manipulation, event handling, dynamic calendar generation, database connectivity, and interactive web pages.

The purpose of this repository is to practice web development concepts through simple, practical implementations.

---

## 🛠️ Technologies Used

- **HTML5:** Structure of web pages
- **CSS3:** Styling and layout
- **JavaScript:** Client-side interactivity and event handling
- **PHP:** Server-side programming and form processing
- **MySQL:** Database management
- **XAMPP:** Local PHP and MySQL development environment

---

## 📂 Programs Included

### 🐘 PHP Programs

| No. | File Name | Program Description |
|---|---|---|
| 1 | `a.php` | Form Validation Using PHP |
| 2 | `b.php` | Electricity Bill Calculator |
| 3 | `c.php` | Sorting Arrays in Ascending and Descending Order |
| 4 | `d.php` | Displaying Indian Cricket Players Using Arrays |
| 5 | `e.php` | Displaying Student Marks Using PHP and MySQL |

### 🌐 HTML, CSS, and JavaScript Programs

| No. | File Name | Program Description |
|---|---|---|
| 6 | `a7.html` | Dynamic Calendar Generator |
| 7 | `a8.html` | JavaScript Event Listener Demonstration |
| 8 | `a9.html` | Changing Background Color Dynamically |
| 9 | `a10.html` | Image Hover Effects and Text Changes |
| 10 | `a11.html` | Registration Form with JavaScript Validation |
| 11 | `a11.css` | Styling for the Registration Form |
| 12 | `a11.js` | JavaScript Validation for the Registration Form |

---

## 📖 Program Details

### 1. Form Validation Using PHP

**File:** `a.php`

This program demonstrates server-side form validation using PHP.

**Features:**
- Accepts name, email, mobile number, username, and password.
- Validates the user's name.
- Checks the email format.
- Validates a 10-digit mobile number.
- Checks password length.
- Ensures the password contains uppercase letters, lowercase letters, and numbers.
- Displays validation messages.

### 2. Electricity Bill Calculator

**File:** `b.php`

This program calculates an electricity bill based on the number of units consumed.

**Features:**
- Accepts the consumer number and consumer name.
- Takes the number of electricity units consumed.
- Validates user input.
- Calculates the bill using different unit-based rates.
- Displays the consumer details and total bill amount.

**Billing rates used in the program:**

| Units Consumed | Rate |
|---|---:|
| First 100 units | ₹5 per unit |
| Next 100 units | ₹7.50 per unit |
| Above 200 units | ₹10 per unit |

The calculation uses progressive rates, meaning each rate applies only to the units within its corresponding range.

### 3. PHP Array Sorting

**File:** `c.php`

This program demonstrates sorting an array using PHP's built-in functions.

**Features:**
- Creates an array containing student names.
- Displays the original array.
- Sorts the array in ascending order using `asort()`.
- Sorts the array in descending order using `arsort()`.

### 4. Displaying Indian Cricket Players

**File:** `d.php`

This program demonstrates how to store and display data using PHP arrays.

**Features:**
- Stores Indian cricket players' names in an array.
- Uses a `foreach` loop to access each player.
- Displays the names in an HTML table.

### 5. Student Marks Using PHP and MySQL

**File:** `e.php`

This program demonstrates database connectivity using PHP and MySQL.

**Features:**
- Connects to a MySQL database.
- Retrieves student records from the `student` table.
- Displays roll numbers and student names.
- Displays marks for DS, ASE, DFCA, and MFC.
- Uses `mysqli_query()` to execute an SQL query.
- Uses `mysqli_fetch_assoc()` to retrieve database records.

**Database configuration used in the program:**
- Database name: `college1`
- Table name: `student`

**Note:** The MySQL database and table must be created before running this program.

### 6. Dynamic Calendar Generator

**File:** `a7.html`

This program generates a calendar for a selected month and year.

**Features:**
- Accepts a year and month.
- Calculates the first day of the selected month.
- Determines the number of days in the month.
- Displays the calendar in a table.
- Highlights the calendar header using CSS.
- Generates the calendar dynamically using JavaScript.

### 7. JavaScript Event Listener

**File:** `a8.html`

This program demonstrates how JavaScript event listeners respond to user interactions.

**Features:**
- Displays a clickable button.
- Shows an alert when the button is clicked.
- Changes the button background to green when the mouse enters.
- Changes the button background to red when the mouse leaves.

**Concepts used:**
- `addEventListener()`
- Click events
- Mouseover events
- Mouseout events

### 8. Dynamic Background Color Changer

**File:** `a9.html`

This program changes the webpage background color when the user clicks a button.

**Features:**
- Displays a background-color button.
- Generates a random hexadecimal color.
- Updates the page background dynamically.
- Uses JavaScript's `Math.random()` and `Math.floor()` functions.

### 9. Image Hover Effects

**File:** `a10.html`

This program demonstrates interactive image and text changes using mouse events.

**Features:**
- Displays an image inside a content container.
- Changes the displayed image when the mouse moves over or away from the container.
- Hides and displays different headings.
- Uses JavaScript event listeners to handle mouse interactions.
- Uses CSS to style the content container.

**Required image files:**
- `img1.jpg`
- `1mg2.jpg`

Keep the images in the appropriate location referenced by the HTML file.

### 10. Registration Form with JavaScript Validation

**Files:** `a11.html`, `a11.css`, and `a11.js`

This program demonstrates client-side validation using HTML, CSS, and JavaScript.

**Features:**
- Accepts the user's full name.
- Validates the email address.
- Checks the password length.
- Validates an Indian mobile number.
- Displays error messages beside the corresponding fields.
- Prevents form submission when the entered details are invalid.
- Uses CSS to create a styled registration form.

The program separates the HTML structure, CSS styling, and JavaScript validation logic into three files.

---

## 🚀 How to Run the Programs

### Step 1: Install XAMPP

Download and install [XAMPP](https://www.apachefriends.org/) to run the PHP programs locally.

### Step 2: Copy the Project Files

Place your PHP, HTML, CSS, JavaScript, and required image files inside the XAMPP `htdocs` directory.

For example:

```text
C:/xampp/htdocs/web-development/
```

Your project folder should contain:

```text
web-development/
├── a.php
├── b.php
├── c.php
├── d.php
├── e.php
├── a7.html
├── a8.html
├── a9.html
├── a10.html
├── a11.html
├── a11.css
├── a11.js
├── img1.jpg
└── 1mg2.jpg
```

### Step 3: Start the Services

Open the XAMPP Control Panel and start:
- Apache
- MySQL, if you are running the database program

### Step 4: Run PHP Programs

Open your browser and enter:

```text
http://localhost/web-development/a.php
```

Replace `a.php` with the PHP filename you want to execute.

**Important:** PHP files must be served through a PHP-enabled web server. Opening them directly as local files will not execute their PHP code.

### Step 5: Run HTML Programs

You can open the HTML programs directly in your browser.

For example:

```text
file:///path/to/a7.html
```

Alternatively, place them in the XAMPP project folder and open:

```text
http://localhost/web-development/a7.html
```

Make sure the required CSS, JavaScript, and image files are available in the expected locations.

---

## 🗄️ Database Setup for the Student Marks Program

The `e.php` program requires a MySQL database named `college1` and a table named `student`.

The table should contain the following columns:

| Column | Description |
|---|---|
| `roll_no` | Student roll number |
| `name` | Student name |
| `ds` | Data Structures marks |
| `ase` | ASE marks |
| `dfca` | DFCA marks |
| `mfc` | MFC marks |

Create the database and table in phpMyAdmin or MySQL, then insert student records before running the program.

The PHP database connection must use the correct database credentials for your local environment.

---

## 🎯 Learning Objectives

The objectives of these programs are:

- To understand HTML page structure.
- To apply CSS styling to web pages.
- To implement JavaScript event handling.
- To validate user input using JavaScript and PHP.
- To understand PHP arrays and array sorting.
- To generate dynamic content using JavaScript.
- To perform calculations using PHP.
- To connect PHP applications to MySQL databases.
- To retrieve and display database records.
- To understand the interaction between frontend and backend technologies.

---

## 📚 Concepts Practiced

| Category | Concepts |
|---|---|
| HTML | Forms, tables, inputs, headings |
| CSS | Selectors, colors, spacing, borders, shadows |
| JavaScript | Events, DOM manipulation, random colors, validation |
| PHP | Variables, arrays, loops, conditions, form handling |
| MySQL | Database connections, SQL queries, retrieving records |
| Web Development | Client-side and server-side programming |

-
