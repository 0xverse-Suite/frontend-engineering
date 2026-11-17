# Class Notes Extracted from the JavaScript Lesson Screenshot

These notes summarize what the class covered and clarify small mistakes in the screenshot.

## 1. Declaring variables

- `var`: the older way to declare a variable; recognize it, but prefer modern declarations in new code.
- `let`: a binding whose value may be reassigned (example: a nickname changes).
- `const`: a binding that cannot be reassigned after declaration (example: the academy name).

The class changed a name from "Homie" to "Divine" with `let` and printed both values.

## 2. Naming styles

| Convention | Example |
| --- | --- |
| lowercase | `course` |
| UPPERCASE | `NAME` |
| camelCase | `studentName`, `myAge` |
| PascalCase | `StudentName`, `CourseName` |
| snake_case | `student_name`, `my_course` |
| SCREAMING_SNAKE_CASE | `MAX_SCORE`, `MY_COURSE` |

Class notes spelled PascalCase as "PaschalCasing" and "screaming" as "screming"; use the standardized spellings in your assignment. Use camelCase as your default variable naming style.

## 3. Strings and numbers

Strings can use single quotes, double quotes, or backticks. Backticks also support template-literal interpolation (putting a variable into a sentence). A string's `.length` gives its number of UTF-16 code units; for ordinary English letters this matches the character count used in class.

**Important correction:** a grade written with backticks around 16 is a **string**. A grade written as the number 16 is a **number**. Do not mix them up.

The screenshot also used an integer (25), decimal (3.142), and scientific-notation number (`10e5`, which equals 1000000).

## 4. Other values

- Boolean: `true` or `false`.
- `null`: deliberately represents no value.
- `undefined`: commonly appears when a variable was declared but not assigned.
- Object: stores named properties inside braces `{}`.
- Array: stores an ordered list of items inside brackets `[]`. An array can mix types.

## 5. Array methods and positions

- `.length` gives the number of elements in an array.
- `.indexOf("Apple")` finds the **first matching index**, starting from 0; if not found, the result is -1.

The screenshot's mixed array contains six elements: number 16, string "20", string "Apple", boolean true, an object, and null. Its length is **6**, and the index of "Apple" is **2**.

## 6. Tools and code organization

The screenshot used `console.log()` to display values and access object properties. Keep this assignment focused on terminal-based JavaScript—no webpage is required.

For learning purposes, explain each section with short comments, but write your own code rather than retyping the screenshot unchanged.
