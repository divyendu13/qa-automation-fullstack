##Book Library — QA Automation Showcase
#Overview

A full-stack QA automation project demonstrating modern testing practices across unit, API, and UI layers, executed locally, in Docker, and in CI.

Tech Stack

App: Next.js 14 (TypeScript, App Router)

Unit Testing: Vitest

API & E2E Testing: Playwright

Containerization: Docker (Playwright official image)

CI/CD: GitHub Actions

Testing Strategy
Layer	Tool	Purpose
Unit	Vitest	Business logic validation
API	Playwright	Backend contract testing
UI	Playwright	User-visible confidence

✔ No redundant coverage
✔ Deterministic tests
✔ Fast feedback

Docker Execution
docker build -t qa-playwright .
docker run --rm qa-playwright


Runs:

App server

API tests

UI tests

Generates Playwright HTML report

CI Pipeline

Triggered on PR & push

Starts app

Runs full test suite

Uploads HTML report artifact

Key Learnings

Next.js App Router runtime behavior

Server-side caching vs E2E testing

Playwright Docker version alignment

Single-root dependency management

Future Enhancements

S3 upload for reports

Email notifications (SES/Gmail)

Kubernetes Job execution

Auth & role-based flows
