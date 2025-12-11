import { Badge } from '../types';

export const badges: Badge[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete your first topic',
    icon: '🎯',
    requirement: 1,
    type: 'topics',
  },
  {
    id: 'foundation-master',
    name: 'Foundation Master',
    description: 'Complete all Foundation topics',
    icon: '🕌',
    requirement: 5,
    type: 'topics',
  },
  {
    id: 'product-expert',
    name: 'Product Expert',
    description: 'Master CASA and Deposit products',
    icon: '🏦',
    requirement: 10,
    type: 'topics',
  },
  {
    id: 'financing-guru',
    name: 'Financing Guru',
    description: 'Complete all Financing topics',
    icon: '🏠',
    requirement: 15,
    type: 'topics',
  },
  {
    id: 'scholar',
    name: 'Islamic Banking Scholar',
    description: 'Complete all topics in the platform',
    icon: '📚',
    requirement: 25,
    type: 'topics',
  },
  {
    id: 'quiz-novice',
    name: 'Quiz Novice',
    description: 'Take your first quiz',
    icon: '✏️',
    requirement: 1,
    type: 'quiz',
  },
  {
    id: 'quiz-master',
    name: 'Quiz Master',
    description: 'Score 100% on any quiz',
    icon: '🎓',
    requirement: 100,
    type: 'quiz',
  },
  {
    id: 'streak-3',
    name: 'Consistency',
    description: 'Study for 3 days in a row',
    icon: '🔥',
    requirement: 3,
    type: 'streak',
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: 'Study for 7 days in a row',
    icon: '⚡',
    requirement: 7,
    type: 'streak',
  },
  {
    id: 'streak-30',
    name: 'Monthly Champion',
    description: 'Study for 30 days in a row',
    icon: '👑',
    requirement: 30,
    type: 'streak',
  },
  {
    id: 'points-100',
    name: 'Centurion',
    description: 'Earn 100 points',
    icon: '💯',
    requirement: 100,
    type: 'points',
  },
  {
    id: 'points-500',
    name: 'Point Master',
    description: 'Earn 500 points',
    icon: '⭐',
    requirement: 500,
    type: 'points',
  },
  {
    id: 'points-1000',
    name: 'Legendary Learner',
    description: 'Earn 1000 points',
    icon: '🏆',
    requirement: 1000,
    type: 'points',
  },
];

export interface CaseStudy {
  id: string;
  title: string;
  category: 'casa' | 'financing' | 'investment' | 'sukuk' | 'compliance';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  scenario: string;
  challenge: string;
  solution: string;
  keyLearnings: string[];
  relatedTopics: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Home Financing for Young Professional',
    category: 'financing',
    difficulty: 'beginner',
    scenario: 'Ahmed, a 28-year-old software engineer, wants to buy his first home worth $250,000. He has $50,000 saved for down payment. He approaches an Islamic bank for financing.',
    challenge: 'Which Islamic financing product would be most suitable for Ahmed, and how would the transaction be structured?',
    solution: 'The bank offers Diminishing Musharakah:\n\n1. Ahmed contributes: $50,000 (20%)\n2. Bank contributes: $200,000 (80%)\n3. Both jointly own the property\n4. Ahmed pays monthly rent on bank\'s share (80%)\n5. Each month, Ahmed also buys a portion of bank\'s share\n6. Over 20 years, Ahmed gradually owns 100%\n7. Rent decreases as bank\'s ownership decreases\n\nMonthly Payment Structure:\n- Rent: $1,200 (on bank\'s remaining share)\n- Purchase amount: $833 (buying bank\'s share)\n- Total: ~$2,033/month',
    keyLearnings: [
      'Diminishing Musharakah is ideal for home financing',
      'True partnership with decreasing bank ownership',
      'Customer pays rent + purchase amount',
      'More transparent than conventional mortgage',
    ],
    relatedTopics: ['diminishing-musharakah', 'musharakah', 'ijarah'],
  },
  {
    id: 'cs2',
    title: 'Car Purchase Through Murabahah',
    category: 'financing',
    difficulty: 'beginner',
    scenario: 'Sarah wants to buy a car worth $30,000. She has $10,000 saved and needs financing for the remaining $20,000. She visits an Islamic bank.',
    challenge: 'How will the Murabahah transaction be structured for Sarah\'s car purchase?',
    solution: 'Murabahah Transaction Process:\n\n1. Sarah selects the car (make, model, specifications)\n2. Bank purchases the car from dealer for $20,000\n3. Bank takes ownership and title of the car\n4. Bank sells car to Sarah at $24,000 (cost + $4,000 profit)\n5. Sarah pays $10,000 down payment\n6. Remaining $14,000 paid in 36 monthly installments\n7. Monthly payment: $389 × 36 months\n\nKey Points:\n- Bank MUST own the asset before selling\n- Profit markup ($4,000) is disclosed upfront\n- Fixed selling price ($24,000) cannot change\n- Sarah owns the car after full payment',
    keyLearnings: [
      'Bank must own asset before selling (no debt trading)',
      'Profit markup is transparent and disclosed',
      'Selling price is fixed and cannot increase',
      'Different from interest-based loan',
    ],
    relatedTopics: ['murabahah'],
  },
  {
    id: 'cs3',
    title: 'Business Partnership Using Musharakah',
    category: 'financing',
    difficulty: 'intermediate',
    scenario: 'Omar wants to expand his halal restaurant business. He needs $100,000 additional capital. He has expertise and $40,000 to contribute. He approaches an Islamic bank for partnership financing.',
    challenge: 'How should the Musharakah partnership be structured, and how will profits and losses be shared?',
    solution: 'Musharakah Partnership Structure:\n\nCapital Contribution:\n- Omar: $40,000 (40%)\n- Bank: $60,000 (60%)\n- Total: $100,000\n\nProfit Sharing (Negotiated):\n- Omar: 60% (higher due to expertise and management)\n- Bank: 40%\n\nLoss Sharing (Based on Capital):\n- Omar: 40% of losses\n- Bank: 60% of losses\n\nScenario 1: Restaurant earns $50,000 profit\n- Omar receives: $30,000 (60%)\n- Bank receives: $20,000 (40%)\n\nScenario 2: Restaurant loses $20,000\n- Omar bears: $8,000 (40%)\n- Bank bears: $12,000 (60%)',
    keyLearnings: [
      'Profit sharing can differ from capital contribution',
      'Loss sharing MUST match capital contribution ratio',
      'Bank shares in both profit AND loss (true partnership)',
      'Entrepreneur\'s expertise is valued in profit distribution',
    ],
    relatedTopics: ['musharakah', 'diminishing-musharakah'],
  },
  {
    id: 'cs4',
    title: 'Corporate Sukuk Issuance',
    category: 'sukuk',
    difficulty: 'advanced',
    scenario: 'A large Islamic company wants to raise $500 million for expansion. Instead of issuing conventional bonds, they decide to issue Ijarah Sukuk backed by their corporate real estate assets.',
    challenge: 'How is the Sukuk structured, and what returns do investors receive?',
    solution: 'Ijarah Sukuk Structure:\n\n1. Company identifies real estate assets worth $500M\n2. Company sells these assets to SPV (Special Purpose Vehicle)\n3. SPV issues Sukuk certificates worth $500M to investors\n4. Investors own proportional share of the real estate\n5. Company leases back the properties from SPV\n6. Company pays rent to SPV periodically\n7. SPV distributes rental income to Sukuk holders\n8. At maturity, company buys back the assets\n\nInvestor Returns:\n- Annual rental income: 5% = $25M total\n- Each investor receives proportional share\n- If investor owns $1M Sukuk = $50,000 annual income\n- At maturity: Original investment ($1M) returned\n\nKey Difference from Bonds:\n- Sukuk holders OWN assets (not lenders)\n- Returns from actual rental income (not interest)\n- Asset-backed (real ownership)',
    keyLearnings: [
      'Sukuk represents asset ownership, not debt',
      'Returns come from asset performance (rent)',
      'Company remains responsible for asset maintenance',
      'Shariah-compliant alternative to bonds',
    ],
    relatedTopics: ['sukuk', 'ijarah'],
  },
  {
    id: 'cs5',
    title: 'Handling Non-Shariah Compliant Income',
    category: 'compliance',
    difficulty: 'intermediate',
    scenario: 'An Islamic bank discovers that $50,000 of its annual income came from a temporarily non-compliant transaction due to an oversight. The Shariah board has flagged this in their annual audit.',
    challenge: 'What should the Islamic bank do with this non-compliant income?',
    solution: 'Purification Process:\n\n1. Shariah Board confirms non-compliance\n2. Bank calculates exact non-compliant amount: $50,000\n3. Bank CANNOT keep this money as profit\n4. Bank CANNOT distribute to shareholders\n5. Money must be "purified" through charity\n\nPurification Actions:\n- Donate $50,000 to registered charities\n- Focus on social welfare causes\n- Education, healthcare, poverty relief\n- Document all donations for transparency\n- Disclose in annual Shariah compliance report\n\nKey Principles:\n- No one should profit from non-compliant income\n- Money must benefit society instead\n- Full transparency required\n- Continuous improvement to prevent recurrence',
    keyLearnings: [
      'Non-compliant income must be purified through charity',
      'Bank cannot profit from Shariah violations',
      'Transparency and disclosure are mandatory',
      'Shariah governance ensures ongoing compliance',
    ],
    relatedTopics: ['shariah-governance'],
  },
];

export interface PracticeProblem {
  id: string;
  moduleId: string;
  question: string;
  type: 'calculation' | 'scenario' | 'identification' | 'comparison';
  difficulty: 'easy' | 'medium' | 'hard';
  answer: string;
  explanation: string;
  hints?: string[];
}

export const practiceProblems: PracticeProblem[] = [
  {
    id: 'pp1',
    moduleId: 'casa',
    question: 'An Islamic bank\'s Mudharabah savings account earns $10,000 profit in a month. If the profit-sharing ratio is 60:40 (customer:bank), how much does a customer with a $50,000 deposit receive, assuming total deposits are $500,000?',
    type: 'calculation',
    difficulty: 'medium',
    answer: '$600',
    explanation: 'Step 1: Calculate customer\'s share of total deposits = $50,000 / $500,000 = 10%\nStep 2: Calculate customer\'s portion of total profit = 60% × $10,000 = $6,000\nStep 3: Calculate individual customer\'s profit = 10% × $6,000 = $600',
    hints: [
      'First find what percentage of total deposits the customer has',
      'Then calculate the customer pool\'s share (60% of total profit)',
      'Finally, apply the customer\'s percentage to the customer pool',
    ],
  },
  {
    id: 'pp2',
    moduleId: 'financing-products',
    question: 'A bank uses Murabahah to finance a $25,000 equipment purchase. The bank adds a 20% profit margin. If the customer pays over 2 years in equal monthly installments, what is the monthly payment?',
    type: 'calculation',
    difficulty: 'easy',
    answer: '$1,250',
    explanation: 'Step 1: Calculate total selling price = $25,000 + (20% × $25,000) = $25,000 + $5,000 = $30,000\nStep 2: Number of months = 2 years × 12 = 24 months\nStep 3: Monthly payment = $30,000 / 24 = $1,250',
    hints: [
      'Add the profit margin to the cost price to get selling price',
      'Convert years to months',
      'Divide total by number of months',
    ],
  },
  {
    id: 'pp3',
    moduleId: 'financing-products',
    question: 'Identify whether this transaction is compliant: A bank promises to buy a customer\'s car in 3 years at a predetermined price while leasing it back to them.',
    type: 'identification',
    difficulty: 'medium',
    answer: 'Potentially Non-Compliant (contains Gharar)',
    explanation: 'This transaction contains elements of "Two contracts in one" and future price certainty for an asset that will depreciate unpredictably. The predetermined buyback price 3 years in advance creates Gharar (uncertainty) because:\n1. The asset\'s condition in 3 years is unknown\n2. Market value will change\n3. Creating a guaranteed exit at fixed price removes risk-sharing\n\nA compliant alternative would be a separate sale and leaseback without the predetermined future buyback price.',
    hints: [
      'Consider if there\'s excessive uncertainty (Gharar)',
      'Think about the time gap and asset depreciation',
      'Is the future price reasonable given unknown conditions?',
    ],
  },
  {
    id: 'pp4',
    moduleId: 'advanced-concepts',
    question: 'Compare: An investor buys $100,000 of Sukuk yielding 5% vs conventional bonds at 5%. Both for 5 years. What are the key structural differences?',
    type: 'comparison',
    difficulty: 'medium',
    answer: 'See explanation',
    explanation: 'Key Differences:\n\nSukuk ($100,000 @ 5%):\n- Investor OWNS underlying assets (e.g., real estate)\n- Returns from asset performance (rental income)\n- Asset risk shared (if asset value drops, investor affected)\n- Can be traded at market value\n- Shariah-compliant\n- Returns: $5,000/year from rent\n\nConventional Bonds ($100,000 @ 5%):\n- Investor is a CREDITOR (lender)\n- Returns are fixed interest (not from asset performance)\n- No asset ownership or risk sharing\n- Can be traded (usually at face value + accrued interest)\n- Interest-based (Riba)\n- Returns: $5,000/year from interest\n\nWhile both yield 5%, the legal structure and risk-return relationship are fundamentally different.',
  },
  {
    id: 'pp5',
    moduleId: 'financing-products',
    question: 'A farmer needs $50,000 to plant crops that will be harvested in 6 months. Which Islamic financing mode is most appropriate: Murabahah, Salam, or Ijarah? Explain why.',
    type: 'scenario',
    difficulty: 'hard',
    answer: 'Salam',
    explanation: 'SALAM is most appropriate because:\n\n1. Farmer needs immediate capital (Salam provides full payment upfront)\n2. Product will exist in future (harvest in 6 months)\n3. Agricultural products are ideal for Salam\n4. Specifications can be clearly defined (crop type, quality, quantity)\n\nHow Salam works here:\n- Bank pays $50,000 TODAY\n- Farmer agrees to deliver specific quantity/quality of crops after harvest\n- Price, quantity, and quality agreed upfront\n- Farmer gets working capital immediately\n- Bank receives goods at harvest time\n- Bank can sell crops in market\n\nWhy not others:\n- Murabahah: For purchasing existing goods, not financing production\n- Ijarah: For leasing assets, not commodity production\n\nSalam is specifically designed for agricultural and manufacturing scenarios.',
    hints: [
      'Consider the timing: farmer needs money NOW for future production',
      'Think about what exists today vs what will exist in 6 months',
      'Which mode provides upfront capital for future delivery?',
    ],
  },
];

export interface CareerGuide {
  id: string;
  title: string;
  category: 'roles' | 'skills' | 'interview' | 'certifications' | 'industry';
  content: string;
  relatedTopics: string[];
}

export const careerGuides: CareerGuide[] = [
  {
    id: 'cg1',
    title: 'Islamic Banking Career Paths',
    category: 'roles',
    content: `# Career Opportunities in Islamic Banking

## Entry Level Positions

### 1. Shariah Banking Officer
- **Role**: Execute Islamic banking transactions
- **Requirements**: Basic Islamic finance knowledge, banking degree
- **Growth**: Product specialist → Manager
- **Salary Range**: $35,000 - $50,000

### 2. Customer Service Representative (Islamic Banking)
- **Role**: Assist customers with Islamic banking products
- **Requirements**: Customer service skills, Islamic banking awareness
- **Growth**: Relationship manager
- **Salary Range**: $30,000 - $45,000

## Mid-Level Positions

### 3. Islamic Finance Product Manager
- **Role**: Develop and manage Islamic banking products
- **Requirements**: 3-5 years experience, product knowledge
- **Growth**: Head of Products
- **Salary Range**: $60,000 - $90,000

### 4. Shariah Compliance Officer
- **Role**: Ensure operations comply with Shariah
- **Requirements**: Islamic finance certification, audit experience
- **Growth**: Head of Compliance → Shariah Board
- **Salary Range**: $55,000 - $85,000

## Senior Level Positions

### 5. Head of Islamic Banking
- **Role**: Lead Islamic banking division
- **Requirements**: 10+ years, strategic leadership
- **Salary Range**: $120,000 - $200,000

### 6. Shariah Board Member
- **Role**: Provide religious guidance and approvals
- **Requirements**: Islamic scholar + finance expertise
- **Salary Range**: $150,000 - $300,000+

## Specialized Roles

### 7. Sukuk Structurer
- **Role**: Design and structure Sukuk issuances
- **Requirements**: Advanced finance, Islamic law
- **Salary Range**: $80,000 - $150,000

### 8. Islamic Fund Manager
- **Role**: Manage Shariah-compliant investment portfolios
- **Requirements**: Investment expertise, Shariah knowledge
- **Salary Range**: $90,000 - $180,000`,
    relatedTopics: ['foundations', 'financing-products', 'advanced-concepts'],
  },
  {
    id: 'cg2',
    title: 'Essential Skills for Islamic Banking Professionals',
    category: 'skills',
    content: `# Key Skills for Success in Islamic Banking

## Technical Skills

### 1. Islamic Finance Knowledge ⭐⭐⭐⭐⭐
- Core principles (Riba, Gharar, Maysir)
- Product structures (Murabahah, Ijarah, Sukuk)
- Shariah compliance requirements
- **How to develop**: Complete this platform, pursue certifications

### 2. Conventional Banking Understanding ⭐⭐⭐⭐
- Banking operations and processes
- Risk management
- Financial analysis
- **Why important**: Islamic banks operate in conventional banking environment

### 3. Financial Analysis ⭐⭐⭐⭐
- Financial statements reading
- Ratio analysis
- Credit risk assessment
- **Application**: Evaluating financing applications

### 4. Regulatory Knowledge ⭐⭐⭐⭐
- AAOIFI standards
- Local banking regulations
- Basel requirements
- **Stay updated**: Regular regulatory training

## Soft Skills

### 5. Communication ⭐⭐⭐⭐⭐
- Explain complex concepts simply
- Present to Shariah boards
- Customer education
- **Critical for**: Product development, customer service

### 6. Ethical Judgment ⭐⭐⭐⭐⭐
- Navigate complex Shariah issues
- Make principled decisions
- Maintain integrity
- **Core value**: Islamic banking foundation

### 7. Analytical Thinking ⭐⭐⭐⭐
- Problem-solving
- Structure solutions
- Risk assessment
- **Used in**: Product structuring, compliance

## Language Skills

### 8. Arabic (Beneficial) ⭐⭐⭐
- Read Shariah texts
- Understand terminology
- Communicate with scholars
- **Level needed**: Reading proficiency helpful

## Technology Skills

### 9. Banking Software ⭐⭐⭐
- Core banking systems
- Islamic banking modules
- Reporting tools
- **Increasingly important**: Digital transformation

## Continuous Learning

### 10. Stay Current ⭐⭐⭐⭐⭐
- Industry trends
- New products
- Regulatory changes
- Market developments
- **How**: Journals, conferences, networking`,
    relatedTopics: ['foundations', 'shariah-governance'],
  },
  {
    id: 'cg3',
    title: 'Common Islamic Banking Interview Questions',
    category: 'interview',
    content: `# Islamic Banking Interview Preparation

## Fundamental Questions

### Q1: What is the difference between Islamic and conventional banking?
**Expected Answer**:
- Islamic banking follows Shariah principles
- Prohibits interest (Riba), speculation (Maysir), uncertainty (Gharar)
- Based on profit-sharing and asset-backed transactions
- Emphasizes ethical investing and social responsibility
- Risk-sharing vs risk-transfer model

### Q2: Explain Murabahah with an example
**Expected Answer**:
- Cost-plus financing mode
- Bank purchases asset customer needs
- Sells to customer at cost + disclosed profit margin
- Example: Customer needs $20K car. Bank buys for $20K, sells for $24K
- Customer pays in installments
- Key: Bank must own asset first

### Q3: How is Ijarah different from conventional leasing?
**Expected Answer**:
- Similar structure but different principles
- Ijarah: Bank owns asset, rents to customer
- Bank responsible for major repairs (as owner)
- Can end with ownership transfer (Ijarah Muntahia Bittamleek)
- No interest component, rental is for asset usage
- Ownership risks remain with lessor

### Q4: What is Sukuk? How does it differ from bonds?
**Expected Answer**:
- Sukuk = asset-backed certificates
- Represents ownership in underlying assets
- Returns from asset performance (rent, profit)
- Bonds = debt instruments with fixed interest
- Sukuk holders are owners, bondholders are creditors
- Risk-return profile differs fundamentally

## Scenario-Based Questions

### Q5: A customer wants home financing. Which product would you recommend?
**Strong Answer**:
"I would recommend Diminishing Musharakah because:
- True partnership structure
- Customer and bank jointly own property
- Customer gradually buys bank's share
- Customer eventually owns 100%
- Alternatively, Ijarah Muntahia Bittamleek if customer prefers rental structure
- Choice depends on customer preference and bank's offering"

### Q6: How would you handle a potential Shariah compliance issue?
**Strong Answer**:
"I would:
1. Immediately document the issue
2. Escalate to Shariah compliance department
3. Pause any questionable transactions
4. Consult with Shariah advisor/board
5. Implement corrective measures
6. Review processes to prevent recurrence
7. Maintain transparency throughout"

## Technical Questions

### Q7: Calculate Mudharabah profit distribution
**Setup**: Bank earns $100K, ratio 60:40 (customer:bank)
**Answer**: Customers get $60K, bank gets $40K
**Show your work**: Demonstrates understanding

### Q8: What is Takaful? How does it work?
**Expected Answer**:
- Islamic insurance based on mutual cooperation
- Participants contribute to common pool
- Claims paid from pool
- Surplus redistributed to participants
- Not-for-profit model vs conventional insurance
- Eliminates Gharar and Maysir

## Behavioral Questions

### Q9: Why do you want to work in Islamic banking?
**Strong Answer** (be genuine):
- Interest in ethical finance
- Appreciate risk-sharing model
- Growing industry with opportunities
- Alignment with personal values
- Desire to serve Muslim community

### Q10: How do you stay updated with Islamic finance developments?
**Strong Answer**:
- Follow industry publications
- Attend Islamic finance conferences
- Professional certifications (CIFE, CIFP)
- Network with professionals
- Read AAOIFI standards updates
- Online courses and platforms like this`,
    relatedTopics: ['foundations', 'casa', 'financing-products', 'advanced-concepts'],
  },
];

export const pointsSystem = {
  topicCompleted: 10,
  quizPassed: 20,
  quiz100Percent: 50,
  dailyChallengeCompleted: 30,
  streakDay: 5,
  flashcardReviewed: 2,
  noteCreated: 5,
  caseStudyCompleted: 25,
  practiceProblemSolved: 15,
};
