export interface Topic {
  id: string;
  title: string;
  arabicTerm?: string;
  description: string;
  keyPoints: string[];
  examples?: string[];
  comparison?: {
    islamic: string;
    conventional: string;
  };
  memorization?: string;
}

export interface Module {
  id: string;
  title: string;
  level: 'Foundation' | 'Products' | 'Financing' | 'Advanced';
  icon: string;
  description: string;
  topics: Topic[];
}

export interface FlashCard {
  id: string;
  moduleId: string;
  front: string;
  back: string;
  arabicTerm?: string;
}

export interface QuizQuestion {
  id: string;
  moduleId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const modules: Module[] = [
  {
    id: 'foundations',
    title: 'Islamic Banking Foundations',
    level: 'Foundation',
    icon: '🕌',
    description: 'Core principles and ethical framework of Islamic Banking',
    topics: [
      {
        id: 'what-is-islamic-banking',
        title: 'What is Islamic Banking?',
        description: 'Islamic Banking is a financial system that operates according to Shariah (Islamic law) principles, ensuring all transactions are ethical, fair, and free from exploitation.',
        keyPoints: [
          'Based on Shariah (Islamic law) principles',
          'Prohibits interest (Riba)',
          'Promotes risk-sharing and ethical investments',
          'Focuses on real economic activities',
          'Emphasizes social justice and welfare'
        ],
        examples: [
          'Instead of charging interest on loans, Islamic banks share profits and losses with customers',
          'Banks cannot invest in businesses dealing with alcohol, gambling, or weapons'
        ],
        memorization: 'Think: "SHARE not CHARGE" - Islamic Banking shares risk rather than charging fixed interest'
      },
      {
        id: 'riba',
        title: 'Riba (Interest/Usury)',
        arabicTerm: 'الربا',
        description: 'Riba refers to any predetermined, guaranteed increase on a loan or debt. It is strictly prohibited in Islam as it leads to exploitation and economic imbalance.',
        keyPoints: [
          'Literally means "increase" or "addition"',
          'Refers to any unjustified increase in capital',
          'Two types: Riba Al-Nasiah (interest on loans) and Riba Al-Fadl (unequal exchange)',
          'Creates wealth without productive effort',
          'Leads to economic inequality'
        ],
        comparison: {
          islamic: 'No fixed interest. Banks share profit/loss based on actual business performance',
          conventional: 'Fixed interest charged regardless of profit or loss'
        },
        memorization: 'RIBA = "Really Isn\'t Business Activity" - money making money without real economic activity'
      },
      {
        id: 'gharar',
        title: 'Gharar (Uncertainty)',
        arabicTerm: 'الغرر',
        description: 'Gharar means excessive uncertainty or ambiguity in contracts. Transactions must be clear and transparent with all terms known to both parties.',
        keyPoints: [
          'Means uncertainty, ambiguity, or deception',
          'Contracts must have clear terms and conditions',
          'Subject matter must exist and be deliverable',
          'Price and payment terms must be known',
          'Protects parties from exploitation'
        ],
        examples: [
          '❌ Selling fish still in the sea (uncertain outcome)',
          '✅ Selling fish already caught (certain outcome)',
          '❌ Selling a car without specifying which car',
          '✅ Selling a specific car with all details disclosed'
        ],
        memorization: 'GHARAR = "Get Honest And Real About Risk" - eliminate uncertainty through transparency'
      },
      {
        id: 'maysir',
        title: 'Maysir (Gambling/Speculation)',
        arabicTerm: 'الميسر',
        description: 'Maysir refers to gambling or speculation where gain is dependent purely on chance rather than productive effort.',
        keyPoints: [
          'Prohibits gambling and games of chance',
          'Wealth must be earned through legitimate work',
          'Speculative derivatives are forbidden',
          'Insurance based on chance is not allowed',
          'Promotes productive economic activity'
        ],
        examples: [
          '❌ Lottery tickets, casino gambling',
          '❌ Speculative derivatives (betting on price movements)',
          '✅ Investment based on real business performance',
          '✅ Takaful (Islamic insurance with mutual contribution)'
        ],
        memorization: 'MAYSIR = "Money Ain\'t Your Speculative Investment Reward" - earn through work, not chance'
      },
      {
        id: 'halal-haram',
        title: 'Halal and Haram Investments',
        description: 'Islamic banks can only invest in businesses and activities that are permissible (Halal) under Shariah law.',
        keyPoints: [
          'Halal: Permissible and ethical businesses',
          'Haram: Prohibited activities that harm society',
          'Strict screening process for all investments',
          'Regular Shariah compliance audits',
          'Focus on socially responsible investing'
        ],
        examples: [
          '✅ Halal: Technology, healthcare, education, manufacturing, retail',
          '❌ Haram: Alcohol, gambling, weapons, tobacco, pork products, conventional interest-based banks'
        ],
        memorization: 'HALAL = "Helping All Lives Advance Lawfully" - investments that benefit society'
      }
    ]
  },
  {
    id: 'casa',
    title: 'CASA (Current & Savings Accounts)',
    level: 'Products',
    icon: '🏦',
    description: 'Day-to-day banking accounts based on Shariah principles',
    topics: [
      {
        id: 'wadiah',
        title: 'Wadiah (Safekeeping)',
        arabicTerm: 'الوديعة',
        description: 'Wadiah is a safekeeping or custody contract where the bank acts as a custodian of customer funds. The bank guarantees the full return of the principal amount.',
        keyPoints: [
          'Bank acts as trustee/custodian of funds',
          'Full capital guarantee',
          'No guaranteed return for customers',
          'Bank may give Hibah (gift/bonus) at its discretion',
          'Commonly used for current accounts'
        ],
        comparison: {
          islamic: 'Wadiah Current Account: No guaranteed return, bank may give voluntary gift (Hibah)',
          conventional: 'Current Account: May pay minimal fixed interest'
        },
        examples: [
          'You deposit $10,000 in a Wadiah current account',
          'Bank safely keeps your money and may use it for investments',
          'Your $10,000 is fully guaranteed',
          'Bank may voluntarily give you a gift (Hibah) of $50, but not obligated'
        ],
        memorization: 'WADIAH = "We Are Definitely Invested As Honest" - bank is a trustworthy keeper'
      },
      {
        id: 'mudharabah-savings',
        title: 'Mudharabah Savings Account',
        arabicTerm: 'المضاربة',
        description: 'Mudharabah is a profit-sharing partnership where customers provide capital and the bank manages it. Profits are shared according to pre-agreed ratios.',
        keyPoints: [
          'Customer is Rabbul Mal (capital provider)',
          'Bank is Mudarib (entrepreneur/manager)',
          'Profit shared in pre-agreed ratio (e.g., 60:40)',
          'Loss borne by capital provider (customer)',
          'Bank loses its effort if there\'s a loss'
        ],
        comparison: {
          islamic: 'Mudharabah: Profit sharing 60% customer, 40% bank. Loss borne by customer',
          conventional: 'Savings Account: Fixed interest rate (e.g., 2% p.a.) regardless of bank performance'
        },
        examples: [
          'You deposit $50,000 in Mudharabah savings',
          'Bank invests in Shariah-compliant ventures',
          'If bank earns $5,000 profit: You get $3,000 (60%), Bank gets $2,000 (40%)',
          'If there\'s a loss: You bear the capital loss, bank loses its management effort'
        ],
        memorization: 'MUDHARABAH = "My Deposit, You Deliver As Best Able, Half" - we share the results'
      },
      {
        id: 'qard',
        title: 'Qard Hassan (Benevolent Loan)',
        arabicTerm: 'القرض الحسن',
        description: 'Qard Hassan is an interest-free loan given by the bank for welfare purposes. Only the principal amount is repaid, with no profit to the bank.',
        keyPoints: [
          'Interest-free benevolent loan',
          'Only principal amount to be repaid',
          'Given for welfare and emergency needs',
          'No profit motive for the bank',
          'Demonstrates social responsibility'
        ],
        examples: [
          'Student needs $5,000 for emergency medical treatment',
          'Bank provides Qard Hassan of $5,000',
          'Student repays exactly $5,000 over time, no extra charges',
          'Bank earns no profit but fulfills social obligation'
        ],
        memorization: 'QARD = "Quite A Real Deal" - truly interest-free, given with compassion'
      }
    ]
  },
  {
    id: 'deposits',
    title: 'Islamic Deposit Products',
    level: 'Products',
    icon: '💰',
    description: 'Investment and term deposit products based on profit-sharing',
    topics: [
      {
        id: 'mudharabah-deposits',
        title: 'Mudharabah Term Deposits',
        arabicTerm: 'المضاربة',
        description: 'Term deposits where customers invest for a fixed period and share in the profits generated by the bank\'s investments.',
        keyPoints: [
          'Fixed investment period (e.g., 3, 6, 12 months)',
          'Profit-sharing based on pre-agreed ratio',
          'Higher profit ratios for longer tenures',
          'Capital not guaranteed (though rare to have losses)',
          'Returns depend on bank\'s investment performance'
        ],
        comparison: {
          islamic: 'Returns vary based on actual profit: Could be 3-5% depending on performance',
          conventional: 'Fixed rate known upfront: Guaranteed 4% per annum'
        },
        examples: [
          '3-month deposit: Profit ratio 50:50 (customer:bank)',
          '12-month deposit: Profit ratio 70:30 (customer:bank)',
          'Longer tenure = better profit sharing ratio for customer'
        ],
        memorization: 'Think: "Time Earns More" - longer deposits get better profit-sharing ratios'
      },
      {
        id: 'commodity-murabahah',
        title: 'Commodity Murabahah Deposit',
        arabicTerm: 'مرابحة السلع',
        description: 'A deposit structure using commodity trade transactions to generate returns. The bank buys and sells commodities on behalf of the depositor.',
        keyPoints: [
          'Based on actual commodity transactions',
          'Bank buys commodity (e.g., palm oil) and sells at markup',
          'Returns are more predictable',
          'Capital is generally protected',
          'Commonly used for institutional deposits'
        ],
        examples: [
          'Customer deposits $100,000',
          'Bank buys palm oil commodities worth $100,000',
          'Bank sells to customer at $104,000 (4% markup)',
          'Customer sells back to market at $104,000',
          'Customer gets $104,000 back ($4,000 profit)'
        ],
        memorization: 'Commodity = "Commerce Makes Money Orderly Delivered In Transparent Years"'
      },
      {
        id: 'investment-account',
        title: 'Investment Accounts (Unrestricted Mudharabah)',
        description: 'Investment accounts where the bank has full discretion to invest in any Shariah-compliant venture. Higher risk, potentially higher returns.',
        keyPoints: [
          'Bank has unrestricted investment authority',
          'Diversified investment portfolio',
          'Higher potential returns',
          'Higher risk compared to savings accounts',
          'Profit-sharing based on actual performance'
        ],
        comparison: {
          islamic: 'Returns fluctuate: 4-7% depending on investment performance',
          conventional: 'Investment products: Similar risk-return profile but may include non-Shariah compliant assets'
        },
        memorization: 'INVESTMENT = "In Noble Ventures Earnings Surely Transform Money Entirely Naturally Together"'
      }
    ]
  },
  {
    id: 'financing-products',
    title: 'Islamic Financing Products',
    level: 'Financing',
    icon: '🏠',
    description: 'Shariah-compliant financing for various needs',
    topics: [
      {
        id: 'murabahah',
        title: 'Murabahah (Cost-Plus Sale)',
        arabicTerm: 'المرابحة',
        description: 'Murabahah is a cost-plus financing where the bank purchases an asset and sells it to the customer at cost plus a disclosed profit markup. Payment is deferred.',
        keyPoints: [
          'Bank buys the asset first',
          'Sells to customer at cost + markup',
          'Markup (profit) is disclosed upfront',
          'Payment typically in installments',
          'Most common Islamic financing mode'
        ],
        comparison: {
          islamic: 'Murabahah: Bank buys car for $20,000, sells to you for $24,000 (disclosed markup)',
          conventional: 'Auto Loan: Borrow $20,000 at 10% interest per year'
        },
        examples: [
          '🚗 Car Financing:',
          '1. You choose a car worth $20,000',
          '2. Bank purchases the car for $20,000',
          '3. Bank sells to you for $24,000 ($4,000 profit)',
          '4. You pay $24,000 in monthly installments over 5 years',
          '5. Total payment is fixed at $24,000 regardless of early settlement'
        ],
        memorization: 'MURABAHAH = "My Ultimate Real Asset: Bank Actually Has And Hands" - bank owns first, then sells'
      },
      {
        id: 'ijarah',
        title: 'Ijarah (Leasing)',
        arabicTerm: 'الإجارة',
        description: 'Ijarah is an Islamic lease where the bank purchases an asset and leases it to the customer for regular rental payments. Ownership may transfer at the end.',
        keyPoints: [
          'Bank owns the asset, customer uses it',
          'Customer pays rent for usage',
          'Ownership can transfer at end (Ijarah Muntahia Bittamleek)',
          'Bank responsible for major maintenance',
          'Flexible: Can return asset after lease period'
        ],
        comparison: {
          islamic: 'Ijarah: Bank owns property, you pay rent $1,500/month. Option to own after 25 years',
          conventional: 'Mortgage: You own property, pay interest on loan $1,500/month'
        },
        examples: [
          '🏠 Home Financing:',
          '1. Bank purchases house for $300,000',
          '2. You lease it for $2,000/month',
          '3. After 20 years, ownership transfers to you',
          '4. Bank handles major repairs (roof, structure)',
          '5. You handle minor maintenance'
        ],
        memorization: 'IJARAH = "I Just Rent Asset, Haven\'t" - you\'re renting until ownership transfers'
      },
      {
        id: 'musharakah',
        title: 'Musharakah (Partnership)',
        arabicTerm: 'المشاركة',
        description: 'Musharakah is a partnership where both bank and customer contribute capital to a business or project. Profits and losses are shared according to agreed ratios.',
        keyPoints: [
          'Joint ownership between bank and customer',
          'Both contribute capital',
          'Profit shared per agreed ratio',
          'Loss shared per capital contribution ratio',
          'Used for business financing and home financing (Diminishing Musharakah)'
        ],
        examples: [
          '🏢 Business Partnership:',
          '1. You contribute $60,000 (60%)',
          '2. Bank contributes $40,000 (40%)',
          '3. Profit sharing: 70% you, 30% bank (negotiable)',
          '4. Loss sharing: 60% you, 40% bank (based on capital)',
          '5. Both parties manage or appoint manager'
        ],
        memorization: 'MUSHARAKAH = "Me U Share Absolutely Risk And Kash And Headaches" - true partnership'
      },
      {
        id: 'diminishing-musharakah',
        title: 'Diminishing Musharakah',
        arabicTerm: 'المشاركة المتناقصة',
        description: 'A form of Musharakah where the bank\'s ownership share gradually decreases as the customer buys out the bank\'s portion over time.',
        keyPoints: [
          'Joint ownership initially',
          'Customer gradually buys bank\'s share',
          'Customer pays rent on bank\'s portion',
          'Eventually, customer becomes sole owner',
          'Common for home financing'
        ],
        examples: [
          '🏠 Home Financing:',
          '1. House costs $200,000',
          '2. You contribute $20,000 (10%), Bank $180,000 (90%)',
          '3. You pay rent on bank\'s 90% share',
          '4. Each month, you buy 1% of bank\'s share',
          '5. After ~7 years, you own the entire house'
        ],
        memorization: 'DIMINISHING = "Decreasing Investment Means I Now Invest Serving Home Ownership" - buying out bank gradually'
      },
      {
        id: 'istisna',
        title: 'Istisna (Manufacturing Contract)',
        arabicTerm: 'الاستصناع',
        description: 'Istisna is a contract for manufacturing or construction where the bank finances the manufacture of an asset according to customer specifications.',
        keyPoints: [
          'For assets to be manufactured/constructed',
          'Specifications agreed upfront',
          'Price fixed in advance',
          'Delivery at future date',
          'Payment can be in installments'
        ],
        examples: [
          '🏗️ House Construction:',
          '1. You want a house built per your design',
          '2. Bank agrees to construct for $250,000',
          '3. Construction takes 12 months',
          '4. Bank pays contractor during construction',
          '5. You pay bank in installments during or after construction'
        ],
        memorization: 'ISTISNA = "I Say This Idea Specify Now, Act" - you specify, bank manufactures'
      },
      {
        id: 'salam',
        title: 'Salam (Forward Purchase)',
        arabicTerm: 'السلم',
        description: 'Salam is a forward purchase contract where full payment is made upfront for goods to be delivered at a future date. Commonly used in agriculture.',
        keyPoints: [
          'Full payment made in advance',
          'Delivery of goods at future date',
          'Goods must be specified clearly',
          'Commonly used for agricultural products',
          'Helps farmers get capital before harvest'
        ],
        examples: [
          '🌾 Agricultural Financing:',
          '1. Farmer needs $10,000 to plant crops',
          '2. Bank pays $10,000 today',
          '3. Farmer agrees to deliver 10 tons of wheat after harvest (6 months)',
          '4. Price and quality specifications are clear',
          '5. Bank can sell wheat in market after receiving it'
        ],
        memorization: 'SALAM = "Seller Asks Lump-sum Amount Money" - full payment upfront'
      }
    ]
  },
  {
    id: 'advanced-concepts',
    title: 'Advanced Islamic Banking',
    level: 'Advanced',
    icon: '📈',
    description: 'Advanced products and concepts in Islamic finance',
    topics: [
      {
        id: 'sukuk',
        title: 'Sukuk (Islamic Bonds)',
        arabicTerm: 'الصكوك',
        description: 'Sukuk are Islamic investment certificates that represent ownership in an underlying asset, not debt. They provide returns from the asset\'s profit.',
        keyPoints: [
          'Asset-backed securities',
          'Represent ownership, not debt',
          'Returns from asset performance',
          'Must be tradeable only at market value',
          'Various structures: Ijarah Sukuk, Murabahah Sukuk, etc.'
        ],
        comparison: {
          islamic: 'Sukuk: Certificate of ownership in rental property. Earn rental income share',
          conventional: 'Bonds: Certificate of debt. Earn fixed interest'
        },
        examples: [
          'Government issues $100 million Ijarah Sukuk',
          'Backed by government buildings',
          'Investors buy certificates, own share of buildings',
          'Government pays rent for using buildings',
          'Investors receive rental income proportional to their holdings'
        ],
        memorization: 'SUKUK = "Share U Keep, U Know" - you own a share of real assets'
      },
      {
        id: 'takaful',
        title: 'Takaful (Islamic Insurance)',
        arabicTerm: 'التكافل',
        description: 'Takaful is Islamic insurance based on mutual cooperation and donation. Participants contribute to a common pool to help those who suffer losses.',
        keyPoints: [
          'Based on mutual cooperation (Ta\'awun)',
          'Participants are contributors, not policy buyers',
          'Contributions go into common pool',
          'Surplus shared among participants',
          'No gambling element'
        ],
        comparison: {
          islamic: 'Takaful: Mutual fund model. Members donate to help each other. Surplus returned',
          conventional: 'Insurance: Company keeps premiums as income. Profit goes to company'
        },
        examples: [
          '100 people contribute $1,000 each to Takaful fund',
          'Total pool: $100,000',
          'Claims during year: $60,000',
          'Operating expenses: $10,000',
          'Surplus: $30,000 redistributed to participants'
        ],
        memorization: 'TAKAFUL = "Together All Keep And Fund Useful Losses" - we help each other'
      },
      {
        id: 'wakalah',
        title: 'Wakalah (Agency)',
        arabicTerm: 'الوكالة',
        description: 'Wakalah is an agency contract where one party appoints another to act on their behalf. Common in investment and Takaful operations.',
        keyPoints: [
          'Principal appoints agent (Wakil)',
          'Agent acts on behalf of principal',
          'Agent may receive fixed fee',
          'Used in investment management',
          'Common in Takaful operations'
        ],
        examples: [
          'You give $50,000 to Islamic bank as Wakalah investment',
          'Bank acts as your agent to invest in Shariah-compliant assets',
          'Bank charges 1% agency fee',
          'All profits above the fee go to you',
          'You bear the investment risk'
        ],
        memorization: 'WAKALAH = "We Act Keeping All Legal And Halal" - acting on your behalf'
      },
      {
        id: 'shariah-governance',
        title: 'Shariah Governance & Compliance',
        description: 'The framework ensuring all Islamic banking operations comply with Shariah principles through oversight and auditing.',
        keyPoints: [
          'Shariah Supervisory Board (SSB) oversight',
          'Shariah audit and compliance functions',
          'Regular product screening and approval',
          'Fatwas (religious rulings) on products',
          'Purification of non-compliant income'
        ],
        examples: [
          'Bank develops new product',
          'Submits to Shariah Board for review',
          'Board analyzes compliance with Shariah',
          'Issues Fatwa approving or rejecting',
          'Annual Shariah audit ensures ongoing compliance'
        ],
        memorization: 'GOVERNANCE = "God Oversees Via Ethical Rules Nurturing All Noble Community Enterprises"'
      },
      {
        id: 'risk-management',
        title: 'Risk Management in Islamic Banking',
        description: 'Managing unique risks in Islamic banking while maintaining Shariah compliance.',
        keyPoints: [
          'Cannot use conventional hedging (derivatives)',
          'Asset-liability management challenges',
          'Displaced commercial risk (DCR)',
          'Rate of return risk',
          'Shariah non-compliance risk'
        ],
        examples: [
          'Profit Equalization Reserve: Setting aside profits in good times to stabilize returns',
          'Investment Risk Reserve: Buffer for potential losses',
          'Asset diversification for risk mitigation',
          'Alternative hedging using Shariah-compliant instruments'
        ],
        memorization: 'Think: "REAL RISKS" - Returns Earned Annually Linked to Real Investment, Special Knowledge required'
      }
    ]
  }
];

export const flashcards: FlashCard[] = [
  { id: 'fc1', moduleId: 'foundations', front: 'What does Riba mean?', back: 'Interest or usury - any predetermined increase on a loan. Strictly prohibited in Islam.', arabicTerm: 'الربا' },
  { id: 'fc2', moduleId: 'foundations', front: 'What is Gharar?', back: 'Excessive uncertainty or ambiguity in contracts. Transactions must be clear and transparent.', arabicTerm: 'الغرر' },
  { id: 'fc3', moduleId: 'foundations', front: 'What is Maysir?', back: 'Gambling or speculation where gain depends on chance rather than productive effort.', arabicTerm: 'الميسر' },
  { id: 'fc4', moduleId: 'casa', front: 'What is Wadiah?', back: 'Safekeeping contract where bank acts as custodian. Full capital guaranteed, no guaranteed return.', arabicTerm: 'الوديعة' },
  { id: 'fc5', moduleId: 'casa', front: 'What is Mudharabah?', back: 'Profit-sharing partnership. Customer provides capital, bank manages. Profits shared per agreed ratio.', arabicTerm: 'المضاربة' },
  { id: 'fc6', moduleId: 'casa', front: 'What is Qard Hassan?', back: 'Interest-free benevolent loan. Only principal repaid, no profit for bank.', arabicTerm: 'القرض الحسن' },
  { id: 'fc7', moduleId: 'financing-products', front: 'What is Murabahah?', back: 'Cost-plus sale. Bank buys asset and sells to customer at cost + disclosed markup.', arabicTerm: 'المرابحة' },
  { id: 'fc8', moduleId: 'financing-products', front: 'What is Ijarah?', back: 'Islamic lease. Bank owns asset, customer pays rent. Ownership may transfer at end.', arabicTerm: 'الإجارة' },
  { id: 'fc9', moduleId: 'financing-products', front: 'What is Musharakah?', back: 'Partnership where both bank and customer contribute capital. Profits and losses shared.', arabicTerm: 'المشاركة' },
  { id: 'fc10', moduleId: 'financing-products', front: 'What is Istisna?', back: 'Manufacturing contract. Bank finances manufacture of asset per customer specifications.', arabicTerm: 'الاستصناع' },
  { id: 'fc11', moduleId: 'financing-products', front: 'What is Salam?', back: 'Forward purchase. Full payment upfront for goods delivered at future date.', arabicTerm: 'السلم' },
  { id: 'fc12', moduleId: 'advanced-concepts', front: 'What is Sukuk?', back: 'Islamic bonds. Asset-backed certificates representing ownership, not debt.', arabicTerm: 'الصكوك' },
  { id: 'fc13', moduleId: 'advanced-concepts', front: 'What is Takaful?', back: 'Islamic insurance based on mutual cooperation. Participants contribute to help each other.', arabicTerm: 'التكافل' },
  { id: 'fc14', moduleId: 'advanced-concepts', front: 'What is Wakalah?', back: 'Agency contract. One party appoints another to act on their behalf.', arabicTerm: 'الوكالة' },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    moduleId: 'foundations',
    question: 'What is the main difference between Islamic and conventional banking?',
    options: [
      'Islamic banks are larger',
      'Islamic banks prohibit interest (Riba) and follow Shariah principles',
      'Islamic banks only serve Muslims',
      'Islamic banks don\'t give loans'
    ],
    correctAnswer: 1,
    explanation: 'Islamic banking operates according to Shariah principles, prohibiting interest (Riba) and promoting risk-sharing and ethical investments.'
  },
  {
    id: 'q2',
    moduleId: 'foundations',
    question: 'Which of the following is an example of Gharar (excessive uncertainty)?',
    options: [
      'Selling a specific car with all details disclosed',
      'Selling fish still in the sea',
      'Selling a house with clear price and terms',
      'Buying gold at current market price'
    ],
    correctAnswer: 1,
    explanation: 'Selling fish still in the sea involves excessive uncertainty as the outcome is unknown. Islamic contracts require certainty and transparency.'
  },
  {
    id: 'q3',
    moduleId: 'casa',
    question: 'In a Mudharabah savings account, how are profits shared?',
    options: [
      'Bank keeps all profits',
      'Customer gets fixed interest',
      'Profits shared per pre-agreed ratio between customer and bank',
      'Customer gets all profits'
    ],
    correctAnswer: 2,
    explanation: 'Mudharabah is a profit-sharing partnership where profits are shared according to a pre-agreed ratio (e.g., 60:40), not fixed interest.'
  },
  {
    id: 'q4',
    moduleId: 'casa',
    question: 'What is the key feature of Wadiah accounts?',
    options: [
      'Guaranteed high returns',
      'Bank acts as custodian with full capital guarantee',
      'Customer must share in losses',
      'Only for business customers'
    ],
    correctAnswer: 1,
    explanation: 'Wadiah is a safekeeping contract where the bank acts as custodian and guarantees the full return of capital, though returns are not guaranteed.'
  },
  {
    id: 'q5',
    moduleId: 'financing-products',
    question: 'In Murabahah financing, what must the bank do first?',
    options: [
      'Give cash loan to customer',
      'Purchase the asset that customer wants',
      'Charge interest on the loan',
      'Take customer\'s asset as collateral'
    ],
    correctAnswer: 1,
    explanation: 'In Murabahah, the bank must first purchase the asset, then sell it to the customer at cost plus a disclosed profit markup.'
  },
  {
    id: 'q6',
    moduleId: 'financing-products',
    question: 'Who owns the asset in an Ijarah (leasing) contract?',
    options: [
      'Customer owns it immediately',
      'Bank owns it, customer uses it',
      'Both own it equally',
      'Neither owns it'
    ],
    correctAnswer: 1,
    explanation: 'In Ijarah, the bank owns the asset and leases it to the customer. Ownership may transfer to the customer at the end of the lease period.'
  },
  {
    id: 'q7',
    moduleId: 'financing-products',
    question: 'In Musharakah, how are losses shared?',
    options: [
      'Based on profit-sharing ratio',
      'Based on capital contribution ratio',
      'Bank bears all losses',
      'Customer bears all losses'
    ],
    correctAnswer: 1,
    explanation: 'In Musharakah, losses are shared strictly according to capital contribution ratio, while profits can be shared per agreed ratio.'
  },
  {
    id: 'q8',
    moduleId: 'advanced-concepts',
    question: 'What do Sukuk represent?',
    options: [
      'Debt obligations with fixed interest',
      'Ownership in underlying assets',
      'Government grants',
      'Charitable donations'
    ],
    correctAnswer: 1,
    explanation: 'Sukuk are asset-backed certificates representing ownership in underlying assets, not debt obligations like conventional bonds.'
  },
  {
    id: 'q9',
    moduleId: 'advanced-concepts',
    question: 'What is the basis of Takaful insurance?',
    options: [
      'Gambling on risk',
      'Company profit maximization',
      'Mutual cooperation and donation',
      'Individual investment'
    ],
    correctAnswer: 2,
    explanation: 'Takaful is based on mutual cooperation (Ta\'awun) where participants contribute to a common pool to help those who suffer losses.'
  },
  {
    id: 'q10',
    moduleId: 'financing-products',
    question: 'What makes Salam different from regular sales?',
    options: [
      'Payment is made in installments',
      'Full payment made upfront for future delivery',
      'No payment required',
      'Only goods currently available can be sold'
    ],
    correctAnswer: 1,
    explanation: 'Salam is a forward purchase where full payment is made in advance for goods to be delivered at a future date, commonly used in agriculture.'
  }
];
