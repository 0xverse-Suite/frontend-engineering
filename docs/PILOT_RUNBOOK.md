# Frontend First-Cohort Pilot Runbook

## Scope

Run the first pilot with one real Frontend tutor and 5–10 real students. Use only the three unassigned Issues labeled `pilot-example`. Do not begin the capstone during this pilot.

## Before students arrive

1. Add the tutor to `frontend-tutors`; verify repository `maintain` and Project access.
2. Tutor reviews the assignment template, Project fields, and three pilot Issues.
3. Academy assigns the real cohort identifier, such as `cohort-2`, and the tutor replaces `[PILOT]` in copied assignment titles.
4. Add students to `frontend` only; verify each can clone and push a branch but cannot push to `main`.
5. Complete the student onboarding checklist and confirm Git identity/email attribution.

## Pilot sequence

1. Copy or refine one pilot Issue, set Cohort, Priority, Due Date, Assignment Type, and Workflow = ASSIGNED, then assign students.
2. Students create `feature/<github-username>/<task>` branches and submit pull requests.
3. Tutor reviews, requests one realistic revision where useful, and moves Workflow through REVIEW and CHANGES REQUESTED.
4. Students revise the same branch; tutor approves and merges after protection requirements pass.
5. Move the Issue to DONE and evaluate portfolio readiness separately.
6. Repeat with the next assignment only after recording friction from the previous one.

## Pilot success checks

- 5–10 students can authenticate, clone, branch, commit, push, and open a pull request.
- Commits are attributed to the correct student GitHub profiles.
- Tutor can assign Issues, update the Project, request changes, approve, and merge.
- No direct `main` push, secret exposure, permission escalation, or personal-data publication occurs.
- At least one assignment completes the full revision loop.
- Problems and proposed changes are reviewed before other courses launch.
