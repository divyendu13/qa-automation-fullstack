# QA Automation Full-Stack Showcase

## 🚀 Overview
A production-grade QA automation project demonstrating how to test, run, and report quality across **unit, API, and UI layers** using modern CI/CD practices.

This is not a demo-only project — it reflects real-world constraints, failures, and design decisions.

---

## 🧱 Tech Stack
- Application: Next.js (TypeScript)
- Unit Testing: Vitest
- API & UI Testing: Playwright
- Containerization: Docker
- CI/CD: GitHub Actions
- Test Execution: EC2 (offloaded E2E)
- Reporting: Playwright HTML → Amazon S3
- Notifications: Email (Gmail App Password)

---

## 🧪 Testing Strategy
| Layer | Tool | Purpose |
|------|------|--------|
| Unit | Vitest | Business logic validation |
| API | Playwright | Backend contract testing |
| UI  | Playwright | User-visible confidence only |

✔ No redundant coverage  
✔ Stable E2E design  
✔ Production build testing  

---

## ⚙️ CI/CD Workflow
1. Code pushed to GitHub
2. Unit tests run on CI runner (fast fail)
3. E2E tests run in Docker on EC2
4. Playwright HTML report generated
5. Report uploaded to S3
6. Email sent with report link

---

## 📊 Test Reports
Latest report (public):
👉 https://qa-playwright-reports-sdet-div.s3.amazonaws.com/latest/index.html

---

## 🔐 Security Decisions
- No AWS access keys stored
- EC2 uses IAM role
- Email uses app-specific password
- Secrets managed via GitHub Actions

---

## 🧠 Key Learnings
- Next.js App Router caching vs E2E
- Playwright Docker version alignment
- CI ergonomics and feedback optimization
- Cost-aware cloud design

---

## 🔮 Future Enhancements
- Slack / Teams notifications
- Presigned S3 URLs
- Parallel E2E execution
- EKS-based test runners
