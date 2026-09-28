# Student GitHub Guide

## Join and set up

1. Accept the 0xVerse Suite invitation and confirm you can see your course team and repository.
2. Set your Git identity to an email connected to your GitHub account (or your GitHub-provided `noreply` email):

   ```bash
   git config --global user.name "Your GitHub display name"
   git config --global user.email "your-connected-email@example.com"
   gh auth status
   ```

3. In GitHub email settings, verify the address is added and verified. Contributions count on your profile when commits use an associated email and land on the repository's default branch.

## Complete an assignment

```bash
gh repo clone 0xverse-suite/<course-repository>
cd <course-repository>
gh issue list --assignee @me
git switch main
git pull --ff-only
git switch -c feature/<your-github-username>/<task>
# create, test, or document your work
git add <files>
git commit -m "feat: describe the result"
git push -u origin HEAD
gh pr create --fill --body "Closes #<issue-number>"
```

Read tutor feedback, update the same branch, push revisions, and ask for re-review. Do not push directly to `main`.

## Build your portfolio safely

- Link the merged pull request or public academy project from your profile README or portfolio.
- Fork a public academy repository when you want a GitHub-visible copy and the license/assignment permits it.
- Create your own repository for a genuinely independent project, then credit collaborators and the academy accurately.
- Write a case study explaining the problem, your role, process, decisions, and result.
- Never copy confidential briefs, restricted data, secrets, unlicensed assets, or teammates' work.

The academy will not create or modify your personal repositories without your explicit authorization. Ask your tutor before showcasing anything whose publication rights are unclear.

