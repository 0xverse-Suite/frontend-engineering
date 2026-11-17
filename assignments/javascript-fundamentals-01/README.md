# JavaScript Fundamentals 01 — Variables, Values, Strings, Objects & Arrays

**0xVerse Academy · Frontend Development · Individual practical assignment**  
**Level:** Beginner · **Score:** 100 marks · **Due:** See your Student Portal (Lagos/WAT time)

## What you will learn

This assignment practices only topics introduced in class: variable declarations (`var`, `let`, `const`), reassignment, naming conventions, strings and template literals, numbers, booleans, `null`, `undefined`, objects, arrays, `.length`, and `.indexOf()`.

**You do not need HTML, CSS, functions, loops, conditions, DOM work, or external packages.** Write JavaScript that runs in a terminal with Node.js and displays results using `console.log()`.

## Before you begin

1. Install/open VS Code, Git, and Node.js. In VS Code open **Terminal > New Terminal**.
2. Clone the course repository **after the tutor announces the assignment is available on main**:

~~~bash
git clone https://github.com/0xverse-Suite/frontend-engineering.git
cd frontend-engineering
git switch main
git pull --ff-only
git switch -c feature/YOUR_GITHUB_USERNAME/js-fundamentals-01
~~~

3. In VS Code, open the **assignments/javascript-fundamentals-01** folder.
4. Create a personal folder: **submissions/YOUR_GITHUB_USERNAME/**. Copy all four JavaScript starter files into it (do not modify the shared starter files). Also copy REFLECTION_TEMPLATE.md to your folder and rename it REFLECTION.md.
5. Complete the TODO comments. Use **fictional** example details; do not publish private personal information.

Example of your finished folder:

~~~text
assignments/javascript-fundamentals-01/
  submissions/
    your-github-username/
      01-variables.js
      02-strings-and-types.js
      03-arrays-and-objects.js
      04-student-profile.js
      REFLECTION.md
~~~

## Part A — Variables and declarations (15 marks)

Edit **01-variables.js**.

- Declare a student name, age, and academy/course using `let` and `const` appropriately.
- Print the original name, reassign the name using `let`, and print the updated name.
- Write one comment about why a value declared with `const` should not be reassigned.
- Give an example of `var` in a comment; you may use it for demonstration, but prefer `let` and `const` in new code.
- Use understandable variable names rather than single letters.

## Part B — Naming, strings, and values (20 marks)

Edit **02-strings-and-types.js**.

- Give one valid example each of camelCase, PascalCase, snake_case, and SCREAMING_SNAKE_CASE.
- Create three strings: one with double quotes, one with single quotes, and one with backticks.
- Use a **template literal** to display a sentence with your fictional student name, course, and test score out of 20.
- Print the string sentence, then print its `.length`.
- Write numeric variables for an integer, decimal, and scientific notation (such as `10e5`) and print them.
- Create a boolean, a `null` variable, and a declared-but-unassigned variable. Use `console.log()` to inspect each.
- Explain in a comment why a backtick-wrapped number such as `16` is a **string**, while 16 without quotes is a **number**.

## Part C — Objects and arrays (20 marks)

Edit **03-arrays-and-objects.js**.

- Create an object for a fictional student, including name, age, course, school, and enrollment boolean.
- Print at least **three object properties** using dot notation.
- Create a fruits array with at least four strings; print the array and its length.
- Find the position of one fruit using `.indexOf()`, then print the result. Remember: array positions start at 0; a missing item returns -1.
- Create a mixed array with a number, a string, a boolean, an object, and `null`. Print its length and the index of one string value.
- Add comments to distinguish `[]` (array) from `{}` (object).

## Part D — Mini-project: 0xVerse Student Record (35 marks)

Edit **04-student-profile.js**. This is your independent project.

Create an imaginary student's record, with:

- An immutable academy name (`const`) and a changeable student nickname (`let`).
- A student object containing name, age, course, feePaid boolean, and a skills array.
- A template-literal summary using properties from the object.
- A subject/test score as a **number**, displayed as "X out of 20".
- A string length, a skills-array length, and an `.indexOf()` result.
- A mixed array demonstrating at least four different value types.
- An output before and after changing the nickname.

Make the terminal output easy to read, with clear labels. **Do not use features we have not yet taught.**

## Part E — Reflection, GitHub, and portal submission (10 marks)

Complete **REFLECTION.md** in your personal submission folder. Explain `let` versus `const`, one naming convention, one data type distinction, what `.length` does, and what `.indexOf()` returns.

Run all four files, fixing any errors:

~~~bash
node assignments/javascript-fundamentals-01/submissions/YOUR_GITHUB_USERNAME/01-variables.js
node assignments/javascript-fundamentals-01/submissions/YOUR_GITHUB_USERNAME/02-strings-and-types.js
node assignments/javascript-fundamentals-01/submissions/YOUR_GITHUB_USERNAME/03-arrays-and-objects.js
node assignments/javascript-fundamentals-01/submissions/YOUR_GITHUB_USERNAME/04-student-profile.js
~~~

Then upload your work to GitHub:

~~~bash
git status
git add assignments/javascript-fundamentals-01/submissions/YOUR_GITHUB_USERNAME
git commit -m "feat: complete JavaScript fundamentals assignment"
git push -u origin HEAD
~~~

On GitHub, open a **pull request from your feature branch to main**. Give it a clear title such as "JavaScript Fundamentals 01 — YOUR_GITHUB_USERNAME". Do **not** merge it yourself. Ask your tutor to review it and apply feedback by pushing more commits to the same branch.

In your **0xVerse Student Portal > Assignments**, open this assignment:
- **If the portal offers GitHub link + written response:** submit your pull request URL and write a short summary of what you built and tested. Include a text file if asked.
- **If the portal only offers file upload:** make a small `.txt` file using SUBMISSION_TEMPLATE.txt, fill in your branch/PR URLs, and upload that file. **The portal submission must be completed**; a GitHub push alone is not a portal submission.
- If your tutor allows resubmission, revise the same pull request and follow the portal's resubmission instructions.

## Final checklist

- [ ] Four JavaScript files completed in my unique submissions/USERNAME folder
- [ ] Scripts run with Node.js and have readable `console.log()` output
- [ ] Used `let` and `const` correctly; showed a `let` reassignment
- [ ] Demonstrated naming styles and string/template-literal examples
- [ ] Demonstrated numbers, booleans, `null`, and `undefined`
- [ ] Demonstrated object properties, arrays, `.length`, `.indexOf()`
- [ ] Completed REFLECTION.md using my own words
- [ ] Pushed my own feature branch and opened a pull request
- [ ] Submitted evidence in my **Student Portal** before the deadline

**Academic integrity:** Work individually. You may consult class notes and ask questions, but the submitted explanations and code must be yours. Never commit passwords, API keys, or another person's details.
