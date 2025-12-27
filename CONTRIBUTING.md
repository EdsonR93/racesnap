# Contributing to RaceSnap

Thanks for contributing! This repository is a **learning + portfolio project** built with **Senior‑level engineering practices**: clear ownership, small PRs, protected branches, and explicit reviews.

This document defines **how we work as a team** and what is expected when contributing.

---

## Quick Rules

- ❌ No direct pushes to `main` or `develop`
- ✅ All work starts from a **GitHub Issue**
- ✅ One branch per issue
- ✅ One Pull Request per issue
- ✅ Pull Requests require **at least 1 approval**
- ✅ PRs must reference and close their Issue

These rules exist to keep history clean, work traceable, and collaboration predictable.

---

## Branching Strategy

We follow a lightweight GitFlow-style approach:

### Branches
- `main` → production-ready, stable
- `develop` → integration branch
- `feature/*` → new features (from `develop`)
- `fix/*` → bug fixes (from `develop`)

### Branch Naming Convention

Always include the GitHub Issue number:

- `feature/123-backend-clean-architecture`
- `fix/245-mongo-connection-error`

---

## Workflow (Step-by-Step)

### 1) Create or Pick an Issue
- Use the **Story** or **Bug** template
- Apply labels:
  - `type:story` / `type:bug`
  - `area:*` (backend / frontend / infra / worker)
  - `prio:P0 | P1 | P2`
  - `epic:*`

---

### 2) Create a Branch from `develop`

```bash
git checkout develop
git pull
git checkout -b feature/<issue-number>-short-title
```

Example:
```bash
git checkout -b feature/18-auth-login
```

---

### 3) Commit Changes

Guidelines:
- Keep commits small and meaningful
- Use a conventional style:

Examples:
- `feat(auth): add login endpoint`
- `fix(db): handle missing mongo connection`
- `docs: update contributing guidelines`

Example commit:
```bash
git add .
git commit -m "feat(auth): add login endpoint"
```

---

### 4) Push and Open a Pull Request

```bash
git push -u origin feature/<issue-number>-short-title
```

PR requirements:
- Base branch: `develop`
- Reference the Issue in the PR description:

```text
Closes #18
```

---

### 5) Review & Merge
- At least **1 approval required**
- Resolve all comments
- Use **Squash and Merge** (recommended)

---

## Definition of Done (DoD)

A Story or Bug is considered **Done** when:

- [ ] Acceptance Criteria in the Issue are met
- [ ] Code compiles and runs locally
- [ ] Tests added or updated when applicable
- [ ] No secrets or `.env` files committed
- [ ] PR approved and merged into `develop`

---

## Architecture Boundaries (CLEAN)

Respect these boundaries:

- **Domain** → `domain/`  
  (Entities, business rules, no Express, no Mongo)

- **Application** → `application/`  
  (Use cases, orchestration)

- **Infrastructure** → `infrastructure/`  
  (Express routes, Mongo, Kafka, Azurite)

Express must remain a **thin HTTP adapter**.

---

## Local Development Expectations

Backend:
- `npm run dev` starts the API
- `/health` returns `{ "status": "ok" }`

Docker:
- `docker compose up --build` runs without errors

---

## Code Review Expectations

### As an Author
- Keep PRs small and focused
- Include “How to test”
- Add context where decisions were made

### As a Reviewer
- Check scope matches the Issue
- Enforce architecture boundaries
- Review naming, error handling, validation
- Ensure no secrets are committed

---

## Architecture Decisions

When a story requires a decision:
- Document it in the Issue comments:
  - Options considered
  - Pros / Cons
  - Chosen approach and reasoning

Written decisions improve consistency and portfolio quality.