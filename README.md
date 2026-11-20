# AGY Genomic Bridge | Human-in-the-Loop Pre-marital Genomic Screening

A privacy-preserving, culturally adapted digital bridge connecting genomic screening laboratories, couples, and accredited genetic counselors in Abu Dhabi's healthcare ecosystem (integrating simulated **UAE Pass** authentication, **Malaffi Health Information Exchange (HIE)**, and **Department of Health (DoH)** clinical triage protocols).

---

## 🎯 UI Samples Mapping

The application faithfully implements all 6 UI samples provided:

| UI Sample | Target Screen in Application | Description |
|-----------|------------------------------|-------------|
| **Image 1** | **Genetic Counselor Hub (`counselor` role)** | Soft sage green dashboard with donut patient chart, new/old metrics, analytics wave, daily case schedule, patient cards, and live **Support Chat** widget with automated counselor replies. |
| **Image 2** | **Privacy & Compliance (`citizen` -> `privacy` tab)** | Granular consent history table with Active / Expiring Soon / Revoked status badges, UAE Pass channels, and an interactive **Download Consent Receipt (PDF)** modal. |
| **Image 3** | **Nucleus Family Planning (`citizen` -> `preview` tab)** | Editorial serif header, glowing blue card with overlapping Venn circles (PSI match), beige "Simulate your baby" card, partner status cards (Peter & Julia / Saeed & Fatima), and stop sharing control. |
| **Image 4** | **Nucleus Health Summary (`citizen` -> `home` tab)** | Editorial serif header, segmented colored risk bar (Elevated, Average, Decreased, Low), top genetic risks carousel, **100-Person Icon Array Visualizer**, and recessive carrier de-stigmatization framework. |
| **Image 5** | **Wellness+ Telehealth Booking (`citizen` -> `appointments` tab)** | Telehealth appointment scheduling with video/phone/in-person toggles, interactive calendar, time slots grid (Morning/Afternoon), counselor summary card with DoH accreditation, Thiqa subsidy, and **Values Clarification** preparation. |
| **Image 6** | **MedFlow Audit Log & Traceability (`governance` role)** | Immutable compliance audit ledger with 4 summary metric cards, filterable action tags (`ZKP_MATCH`, `CREATE`, `UPDATE`, `READ`, `DELETE`), module tags, and zero-leakage security proofs. |

---

## 🚀 How to Open and Run

### Option 1: Direct File Preview (Instant, Zero Server Needed)
Double-click or open the following file in Google Chrome, Microsoft Edge, or Safari:
`C:\Users\DHRUVI\.gemini\antigravity\scratch\genomic-bridge-uae\index.html`

The file is self-contained with React 18, Tailwind CSS, Lucide Icons, and Babel Standalone.

### Option 2: Local HTTP Server via Antigravity Node
Run the built-in HTTP server:
```powershell
cd C:\Users\DHRUVI\.gemini\antigravity\scratch\genomic-bridge-uae
agy-node.cmd server.js
```
Then visit: `http://127.0.0.1:3000/`

---

## 🧬 Key Features

1. **Role Switcher (Top Bar):**
   - 👤 **Citizen & Couple Portal**: Access Family Planning, Health Summary, Appointments, and Privacy.
   - 🩺 **Genetic Counselor Hub**: Access clinical triage, scheduled cases, and live patient messaging.
   - 🛡️ **Malaffi & DoH Governance**: Inspect the immutable audit log and compliance traceability.

2. **Pre-configured Clinical Scenarios:**
   - 🔴 **Tier 3 (Concordant Match):** Both partners carry pathogenic variants in *HBB* (Beta-Thalassemia). Locks automated reproductive advice and mandates genetic counselor consultation.
   - 🟡 **Tier 2 (Discordant Match):** Partner carries *G6PD*; non-overlapping variant remains completely private to the partner via Zero-Knowledge PSI.
   - 🟢 **Tier 1 (Clear / Low Risk):** Baseline screen with no concordant pathogenic variants.

3. **Interactive Cryptographic PSI Inspector:**
   - Click the **"ZKP / PSI Inspector"** button in the header to view live SHA-256 allele hashing, Diffie-Hellman exponentiated salt blinding, and set intersection math.

4. **Bilingual Localization:**
   - Instant toggle between **English (LTR)** and **Emirati Arabic (RTL)** with authentic terminology (برنامج الجينوم الإماراتي، منظومة ملفي، دائرة الصحة - أبوظبي، فحص ما قبل الزواج).

5. **Teach-Back Comprehension Module:**
   - Conversational 3-question comprehension check assessing understanding of healthy carrier biology vs clinical illness before unlocking advanced reproductive options.

6. **Values Clarification Worksheet:**
   - Reflective pre-counseling exercise assessing family timelines, comfort with PGT-M / IVF, and spiritual/cultural considerations.
