Lab 5 by Kevin Yong

Goal: Dropdown menu frontend, that redirects to the backend and allows adding/editting of the backend files.
Learn how to make dropdown menu.
Learn how to connect frontend to backend.
Learn how to add/edit backend files.
Learn how to use js,html,css.

To test, run npm start on lab4 and lab5 folder.

Storyboard:
Home
New Car -> Fill in form OR View Confirmation 
Changing an email -> Choose which record to change -> Prompts user to type email then gives button to press Update.

Make a multi-level dropdown. (Credits to @Ibaslogic and his tutorial.)
Features: On smaller screens, click to open the dropdown. On larger screens, hovering can open the dropdown.
▪ Registering a new car: Click on ‘New car’ -> Fill in form, click submit -> View
confirmation page with detail saved
▪ Changing an email: Select a record from list of active car owners => update
field(s), click submit

While in the CISC-3140-Kevin-Yong folder, GIT Bash and create lab5 folder for react: npx create-react-app lab5
Import the Sample data: git submodule add -f https://gist.github.com/d66a59b6db4e59c16efd4c42ad411f8e.git data

Known bugs:
Add should insert email to the database.
Update should change current email of the database.
