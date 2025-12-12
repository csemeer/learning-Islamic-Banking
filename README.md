# Islamic Banking + Oracle Flexcube UBS - Complete Learning Platform

A **comprehensive, production-ready learning platform** for mastering Islamic Banking principles and Oracle Flexcube Universal Banking Solution (UBS) implementation - from foundations to advanced solution architect level.

## 🎯 Platform Overview

This platform combines **Islamic Banking Shariah principles** with **Oracle Flexcube UBS technical implementation**, providing a complete end-to-end learning journey for:

- **Islamic Banking Students** - Learn Shariah-compliant banking from scratch
- **Banking Professionals** - Master Islamic finance products and operations
- **Solution Architects** - Implement Islamic banking in Oracle Flexcube UBS
- **Business Analysts** - Design Islamic banking workflows and processes
- **Developers & Testers** - Understand complete product lifecycle and GL flows

## 📊 Course Statistics

- **18 Major Modules** - Complete Islamic banking ecosystem
- **88+ Topics** - Comprehensive coverage with real-world examples
- **7,000+ Lines** - Detailed explanations, examples, and configurations
- **500KB+ Content** - Production-ready learning material
- **10+ Product Types** - CASA, Deposits, Financing, Cards, Treasury, Zakat
- **Complete GL Flows** - All accounting entries with Flexcube table references
- **SQL Examples** - Database queries for troubleshooting and reporting
- **Shariah Compliance** - Full SSB approval workflows and audit procedures

## 🏗️ Complete Module Structure

### **Level 1: Foundation (4 Modules)**

#### 1️⃣ Islamic Banking Foundations
- Riba (Interest) Prohibition
- Gharar (Uncertainty) & Maysir (Gambling)
- Halal Investment Principles
- Islamic vs Conventional Banking Comparison

#### 2️⃣ CASA Products (Current & Savings Accounts)
- Wadiah (Safekeeping) - Zero profit guarantee
- Mudharabah (Profit-sharing) - Investment accounts
- Qard Hassan (Benevolent Loan)
- **Flexcube Configuration:** Product setup, GL mapping, profit distribution

#### 3️⃣ Islamic Deposits
- Term Deposits (Mudharabah Investment)
- Profit Calculation & Distribution
- Early Withdrawal & Penalties
- **Flexcube Implementation:** TD product parameters, maturity processing, EOD jobs

#### 4️⃣ Islamic Financing Foundations
- Asset-backed Financing Principle
- Ownership Requirements
- Profit vs Interest Calculation
- Risk Sharing Mechanisms

### **Level 2: Products & Services (6 Modules)**

#### 5️⃣ Murabahah (Cost-Plus Sale) Financing
- **Complete Lifecycle:** Asset purchase → Markup → Sale → Installments → Settlement
- Asset Ownership Requirement (Critical Shariah principle)
- Early Settlement with Ibra (Rebate)
- Late Payment Handling (No penalties to income - Charity only!)
- **Flexcube Tables:** ICLB_MURABAHAH_MASTER, ACTB_MURABAHAH_SCHEDULE
- **GL Flows:** Complete accounting from disbursement to closure

#### 6️⃣ Ijarah (Islamic Leasing)
- **9-Stage Lifecycle:** Asset purchase → Lease → Rental → Maintenance → Ownership transfer
- Depreciation Accounting (Bank owns asset)
- Takaful Insurance
- Early Termination & Default Handling
- **Flexcube Configuration:** Ijarah product parameters, rental calculation, asset management

#### 7️⃣ Musharakah (Partnership Financing)
- Regular Musharakah - Business partnerships
- **Diminishing Musharakah** - Home financing (240-month flow)
- Monthly payment breakdown: Rental + Ownership purchase
- Ownership transfer tracking
- **Complete Example:** $200K home - 80% bank, 20% customer → Full customer ownership

#### 8️⃣ Islamic Cards (IC)
- **Debit Cards:** Wadiah-based with no credit facility
- **Credit Cards:** Tawarruq-based (commodity Murabahah)
- Transaction Processing & Settlement
- Shariah-Compliant Rewards (No interest-based cashback)

#### 9️⃣ Islamic Treasury & Investment
- Sukuk (Islamic Bonds) - Asset-backed securities
- Wakala Investment Accounts - Agency-based investments
- Islamic Money Market Instruments
- Treasury Accounting & Fair Value Measurement

#### 🔟 Zakat Calculation & Management
- **Zakat Fundamentals:** Nisab (85g gold), Hawl (354 days), 2.5% rate
- **Automated Calculation:** Flexcube STZAKAT configuration
- **SQL Logic:** Customer aggregation, Nisab checking, deduction
- **Special Cases:** Business zakat, mixed investments, cryptocurrency
- **Compliance:** Customer statements, SSB review, regulatory reporting

### **Level 3: Technical Implementation (4 Modules)**

#### 1️⃣1️⃣ Gateway (GW) - Multi-channel Integration
- ATM, Mobile Banking, Internet Banking, POS
- ISO 8583 Message Processing
- Transaction Routing & Authorization
- Reconciliation & Settlement

#### 1️⃣2️⃣ Batch Input (DE) - Data Entry & Upload
- Bulk Transaction Upload (CSV, Excel, FTP)
- Batch Validation & Error Handling
- Maker-Checker Workflow
- Batch Accounting & Reversal

#### 1️⃣3️⃣ Provisioning & ECL (IFRS 9)
- Expected Credit Loss Calculation
- 3-Stage Model (Stage 1, 2, 3)
- Lifetime ECL vs 12-month ECL
- Provision GL Entries
- **Flexcube Tables:** PROV_MASTER, PROV_CALCULATION

#### 1️⃣4️⃣ Collections & Recovery
- Delinquency Stages (DPD tracking)
- Collection Strategies & Workflows
- Restructuring & Rescheduling
- Write-off & Recovery Accounting

### **Level 4: Advanced Operations (4 Modules)**

#### 1️⃣5️⃣ Accounting & General Ledger (GL)
- **Complete GL Account Structure** (10000-99999)
  - 10000: Assets (Cash, Financing Receivables, Fixed Assets)
  - 20000: Liabilities (Customer Deposits, Payables)
  - 30000: Equity (Capital, Reserves, Retained Earnings)
  - 40000: Income (Financing Income, Fees, FX Gains)
  - 50000: Expenses (Profit Distribution, Operating Expenses)
- **Event Accounting Engine** - Automated GL posting framework
- **Complete GL Flows** for all products (Murabahah, Ijarah, Musharakah, etc.)
- Multi-currency Accounting & FX Gain/Loss

#### 1️⃣6️⃣ Flexcube Product Parameters Reference
- **CASA Parameters:** Product code, currency, Shariah contract type, Hibah settings
- **Murabahah Parameters:** Asset ownership flags, profit calculation, early settlement, collateral
- **Ijarah Parameters:** Asset configuration, rental calculation, maintenance responsibility
- **Critical Parameter Checklist** - 20+ must-configure parameters
- **All Flexcube Screens:** STDPRD, STDACMNT, STDINTRT, STDACCEVT, etc.

#### 1️⃣7️⃣ Shariah Governance Framework
- **Shariah Supervisory Board (SSB)** Structure
- **8-Stage Product Approval Process** (Concept → Launch → Annual Review)
- **Compliance Monitoring** - Transaction audit, income purification
- **Shariah Audit Procedures** - Annual audit checklist

#### 1️⃣8️⃣ Troubleshooting & Common Issues
- **GL Mismatch & Reconciliation** - SQL queries for debugging
- **Batch Job & EOD Failures** - Recovery procedures
- **Shariah Compliance Errors** - Violation remediation (e.g., late fees to charity)
- **Transaction Processing Errors** - Timeout, duplicates, currency mismatch
- **Performance Optimization** - Indexing, batch tuning, memory management

## 🎓 Learning Outcomes

After completing this course, you will be able to:

### Islamic Banking Expertise
✅ **Explain Shariah principles** - Riba, Gharar, Maysir, and their application
✅ **Design Islamic products** - Structure compliant CASA, deposits, financing
✅ **Ensure Shariah compliance** - Identify violations, apply remediation
✅ **Navigate SSB approval** - Prepare product proposals, obtain Shariah approval

### Oracle Flexcube UBS Mastery
✅ **Configure Islamic products** - Set up CASA, Murabahah, Ijarah, Musharakah in Flexcube
✅ **Implement GL accounting** - Map event accounting, configure GL entries
✅ **Troubleshoot issues** - Debug GL mismatches, resolve batch failures
✅ **Optimize performance** - Index databases, tune batch jobs, manage memory

### Solution Architect Skills
✅ **End-to-end implementation** - Product setup → Transaction processing → Accounting → Reporting
✅ **Integration design** - Gateway channels, batch upload, external systems
✅ **Data modeling** - Understand 50+ Flexcube tables and relationships
✅ **SQL expertise** - Write queries for reconciliation, reporting, troubleshooting

### Operations & Compliance
✅ **Zakat management** - Configure automated calculation, generate customer statements
✅ **Provisioning (IFRS 9)** - Implement ECL calculation, stage classification
✅ **Collections** - Design collection workflows, handle restructuring
✅ **Regulatory reporting** - Prepare annual reports, Shariah audit disclosures

## 💡 Key Features

### 📚 **Interactive Learning System**
- **Progressive Modules** - Foundation → Products → Implementation → Operations
- **Real-World Examples** - Complete transaction lifecycles with GL entries
- **Flexcube Tables** - All database references (ACTB_*, ICLB_*, GLTB_*, etc.)
- **SQL Queries** - Production-ready queries for reporting and troubleshooting
- **Flashcards** - Memorize key terms with Arabic translations
- **Quizzes** - Test your knowledge with instant feedback

### 🔧 **Hands-On Technical Content**
- **Event Accounting** - Automated GL posting configuration
- **Product Parameters** - Complete parameter guides with screen references
- **Batch Processing** - EOD jobs, interest accrual, profit distribution
- **Error Handling** - Common issues and resolution procedures
- **Performance Tuning** - Optimization techniques for large-scale operations

### ⚖️ **Shariah Compliance Focus**
- **Critical Warnings** - Riba violations, Gharar issues, asset ownership requirements
- **Income Purification** - Late fees to charity (NOT income!)
- **Hibah Clarity** - PURELY discretionary (NO promises!)
- **SSB Workflows** - Complete product approval process
- **Audit Checklists** - 30+ compliance checkpoints

### 📊 **Complete GL Accounting**
- **All Product GL Flows** - Murabahah, Ijarah, Musharakah, CASA, TD, Cards
- **Multi-currency** - FX gain/loss accounting
- **Provision Accounting** - IFRS 9 ECL entries
- **Zakat Accounting** - Customer deduction and distribution
- **Reconciliation** - GL balancing and mismatch resolution

## 🛠️ Technology Stack

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool (sub-second HMR)
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **Local Storage** - Progress tracking (no backend required)

## 🚀 Getting Started

### Prerequisites

- **Node.js 16+** and npm
- Modern browser (Chrome/Edge recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/csemeer/learning-Islamic-Banking.git
cd learning-Islamic-Banking

# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Quick Start Guide

1. **Start with Foundation** - Master Riba, Gharar, and core principles
2. **Learn CASA & Deposits** - Understand Wadiah and Mudharabah
3. **Master Financing Products** - Murabahah, Ijarah, Musharakah flows
4. **Study GL Accounting** - Learn complete accounting entries
5. **Practice Troubleshooting** - Use SQL queries to debug issues
6. **Complete Shariah Governance** - Understand SSB approval workflows

## 📖 Learning Approach

### 1️⃣ **Learn** - Read comprehensive explanations
- Detailed Shariah principles with Islamic jurisprudence references
- Complete product lifecycles (9+ stages for each financing type)
- Real-world examples with actual amounts and calculations
- Flexcube configuration with screen references

### 2️⃣ **Understand** - Study technical implementation
- Event Accounting setup (STDACCEVT)
- Product parameters (STDPRD, STDACMNT, STDINTRT)
- Database tables and relationships
- SQL queries for operations and troubleshooting

### 3️⃣ **Practice** - Apply knowledge
- Flashcards for Arabic terms (Murabahah, Ijarah, Musharakah, etc.)
- Quizzes to test understanding
- GL entry exercises (DR/CR practice)
- Troubleshooting scenarios

### 4️⃣ **Master** - Achieve expertise
- Complete module coverage (88+ topics)
- Track progress and achievements
- Earn certificates (Bronze → Silver → Gold → Platinum → Master)
- Apply to real-world Islamic banking implementations

## 📋 Module Details

### Example: Murabahah Financing Module Content

**Topics Covered:**
1. **Murabahah Foundations** - Shariah principles, asset ownership requirement
2. **Product Configuration** - Flexcube setup, parameters, GL mapping
3. **Complete Lifecycle** - 7 stages from application to closure:
   - Application & Approval
   - Asset Purchase (Bank buys asset)
   - Asset Sale to Customer (Cost + Markup)
   - Disbursement & Customer Account Debit
   - Installment Collection
   - Early Settlement with Ibra (Rebate)
   - Account Closure & Final Settlement
4. **GL Accounting** - Complete entries for all stages
5. **Event Accounting** - Automated posting configuration
6. **Late Payment Handling** - Shariah-compliant (Charity only, NOT income!)
7. **Troubleshooting** - Common issues and SQL queries

**Key Learning Points:**
- 🔴 **Critical:** Bank MUST own asset first (Shariah requirement)
- Asset ownership period (even 1 day minimum)
- Markup calculation: Cost + Profit Margin
- Early settlement: Customer entitled to Ibra (rebate) - NOT mandatory but encouraged
- Late fees: MUST go to charity (GL 20901), NEVER income (violation of Riba prohibition)

**Flexcube References:**
- Tables: ICLB_MURABAHAH_MASTER, ACTB_MURABAHAH_SCHEDULE, GLTB_TRANSACTION
- Screens: STDPRD, ICDMUR, STDACCEVT
- Events: MURABAHAH_DISBURSEMENT, MURABAHAH_INSTALLMENT, MURABAHAH_SETTLEMENT

## 🎯 Target Audience

### Islamic Banking Students
- Complete foundation in Shariah principles
- Understanding of all Islamic contracts (Murabahah, Ijarah, Musharakah, etc.)
- Comparison with conventional banking
- Real-world product examples

### Banking Professionals
- Product design and structuring
- Operational workflows
- Shariah compliance requirements
- SSB interaction and approval process

### Solution Architects
- Complete Flexcube UBS configuration
- Database design and table relationships
- Integration architecture (Gateway, Batch, APIs)
- Performance optimization

### Business Analysts
- Functional flows for all products
- Requirement documentation
- Shariah compliance checklists
- Test case design

### Developers & QA
- Database queries (SELECT, INSERT, UPDATE)
- Event Accounting logic
- Batch job processing
- Error handling and troubleshooting

## 🏆 Achievement System

Track your progress through 5 mastery levels:

- 🥉 **Bronze** - 0-20% complete (Beginner)
- 🥈 **Silver** - 21-40% complete (Learner)
- 🥇 **Gold** - 41-60% complete (Intermediate)
- 💎 **Platinum** - 61-80% complete (Advanced)
- 👑 **Master** - 81-100% complete (Expert)

## 📱 Browser Support

Fully tested on:
- ✅ Chrome/Edge 90+ (Recommended)
- ✅ Firefox 88+
- ✅ Safari 14+

## 🔐 Data Privacy

- **100% Local Storage** - All progress saved in browser
- **No Backend** - No data sent to servers
- **No Tracking** - Privacy-first design
- **Offline Capable** - Works without internet after initial load

## 🤝 Contributing

This is an educational project. Contributions welcome for:
- Additional Islamic banking products (Salam, Istisna expansion)
- More troubleshooting scenarios
- Enhanced quiz questions
- Translation to Arabic
- Additional Flexcube table references

## 📄 License

MIT License - Free for educational and commercial use.

## 🙏 Acknowledgments

**Islamic Banking Content:**
- AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions)
- Islamic Financial Services Board (IFSB)
- Shariah scholars and Islamic banking practitioners

**Oracle Flexcube UBS:**
- Oracle Flexcube Universal Banking 11.3+ documentation
- Real-world implementation experience
- Production deployment best practices

## 📚 Additional Resources

**Recommended Reading:**
- AAOIFI Shariah Standards
- Islamic Finance: Principles and Practice
- Oracle Flexcube UBS Product Guide

**Online Resources:**
- Islamic Finance News (IFN)
- Thomson Reuters Islamic Finance Gateway
- Oracle Flexcube Documentation Portal

---

## 🎓 Course Completion Certificate

Upon completing all 88 topics, learners achieve **Master** status and gain comprehensive expertise in:

✅ Islamic Banking Shariah Principles
✅ Oracle Flexcube UBS Implementation
✅ Solution Architecture & Design
✅ GL Accounting & Financial Reporting
✅ Shariah Compliance & Governance
✅ Operations & Troubleshooting

---

**Start Your Journey Today! 🚀**

*From Zero to Islamic Banking + Flexcube UBS Solution Architect*

**Build production-ready Islamic banking systems with confidence.**
