// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { DollarSign, Heart, TrendingUp, PiggyBank, Menu, X, ArrowRight, Shield, Users, BarChart3, Target, Zap, Globe } from 'lucide-react';

// const SpareChangeHomepage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className="homepage">
//       <style jsx>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//           line-height: 1.6;
//           color: #333;
//         }

//         .homepage {
//           min-height: 100vh;
//         }

//         /* Header Styles */
//         .header {
//           position: fixed;
//           top: 0;
//           width: 100%;
//           background: rgba(255, 255, 255, 0.95);
//           backdrop-filter: blur(10px);
//           border-bottom: 1px solid #e0e0e0;
//           z-index: 1000;
//         }

//         .nav-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 2rem;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           height: 70px;
//         }

//         .logo {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: #2563eb;
//           text-decoration: none;
//         }

//         .nav-links {
//           display: flex;
//           list-style: none;
//           gap: 2rem;
//           align-items: center;
//         }

//         .nav-links a {
//           text-decoration: none;
//           color: #64748b;
//           font-weight: 500;
//           cursor: pointer;
//         }

//         .nav-links a:hover {
//           color: #2563eb;
//         }

//         .cta-button {
//           background: #2563eb;
//           color: white;
//           padding: 0.75rem 1.5rem;
//           border: none;
//           border-radius: 8px;
//           font-weight: 600;
//           cursor: pointer;
//           text-decoration: none;
//           display: inline-block;
//         }

//         .cta-button:hover {
//           background: #1d4ed8;
//         }

//         .mobile-menu-btn {
//           display: none;
//           background: none;
//           border: none;
//           cursor: pointer;
//           color: #64748b;
//         }

//         .mobile-menu {
//           display: none;
//           position: absolute;
//           top: 100%;
//           left: 0;
//           right: 0;
//           background: white;
//           border-bottom: 1px solid #e0e0e0;
//           padding: 1rem 2rem;
//         }

//         .mobile-menu.open {
//           display: block;
//         }

//         .mobile-nav-links {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//           list-style: none;
//         }

//         /* Hero Section */
//         .hero {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           color: white;
//           padding: 120px 2rem 80px;
//           text-align: center;
//         }

//         .hero-content {
//           max-width: 900px;
//           margin: 0 auto;
//         }

//         .hero h1 {
//           font-size: 3.5rem;
//           font-weight: 800;
//           margin-bottom: 1.5rem;
//           line-height: 1.2;
//         }

//         .hero p {
//           font-size: 1.25rem;
//           margin-bottom: 2rem;
//           opacity: 0.9;
//           max-width: 600px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .hero-example {
//           background: rgba(255, 255, 255, 0.1);
//           padding: 2rem;
//           border-radius: 12px;
//           margin: 2rem auto;
//           max-width: 500px;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .example-transaction {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 1rem;
//           font-size: 1.1rem;
//         }

//         .example-result {
//           border-top: 1px solid rgba(255, 255, 255, 0.3);
//           padding-top: 1rem;
//           font-weight: 600;
//           color: #fbbf24;
//         }

//         .hero-buttons {
//           display: flex;
//           gap: 1rem;
//           justify-content: center;
//           flex-wrap: wrap;
//           margin-top: 2rem;
//         }

//         .btn-primary {
//           background: white;
//           color: #2563eb;
//           padding: 1rem 2rem;
//           border: none;
//           border-radius: 8px;
//           font-weight: 600;
//           font-size: 1.1rem;
//           cursor: pointer;
//           text-decoration: none;
//           display: inline-block;
//         }

//         .btn-primary:hover {
//           background: #f8fafc;
//         }

//         .btn-secondary {
//           background: transparent;
//           color: white;
//           padding: 1rem 2rem;
//           border: 2px solid white;
//           border-radius: 8px;
//           font-weight: 600;
//           font-size: 1.1rem;
//           cursor: pointer;
//           text-decoration: none;
//           display: inline-block;
//         }

//         .btn-secondary:hover {
//           background: white;
//           color: #2563eb;
//         }

//         /* Three Pillars Section */
//         .three-pillars {
//           padding: 80px 2rem;
//           background: white;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .section-title {
//           text-align: center;
//           font-size: 2.5rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           color: #1e293b;
//         }

//         .section-subtitle {
//           text-align: center;
//           font-size: 1.2rem;
//           color: #64748b;
//           margin-bottom: 4rem;
//           max-width: 600px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .pillars-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//           gap: 3rem;
//         }

//         .pillar-card {
//           background: white;
//           padding: 3rem 2rem;
//           border-radius: 16px;
//           text-align: center;
//           border: 2px solid #e2e8f0;
//           position: relative;
//         }

//         .pillar-card.donate {
//           border-color: #ef4444;
//         }

//         .pillar-card.invest {
//           border-color: #10b981;
//         }

//         .pillar-card.save {
//           border-color: #f59e0b;
//         }

//         .pillar-icon {
//           width: 80px;
//           height: 80px;
//           border-radius: 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0 auto 1.5rem;
//           color: white;
//         }

//         .pillar-card.donate .pillar-icon {
//           background: linear-gradient(135deg, #ef4444, #dc2626);
//         }

//         .pillar-card.invest .pillar-icon {
//           background: linear-gradient(135deg, #10b981, #059669);
//         }

//         .pillar-card.save .pillar-icon {
//           background: linear-gradient(135deg, #f59e0b, #d97706);
//         }

//         .pillar-card h3 {
//           font-size: 1.8rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           color: #1e293b;
//         }

//         .pillar-card p {
//           color: #64748b;
//           margin-bottom: 1.5rem;
//           line-height: 1.6;
//         }

//         .pillar-features {
//           list-style: none;
//           text-align: left;
//         }

//         .pillar-features li {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           margin-bottom: 0.75rem;
//           color: #64748b;
//         }

//         .pillar-features li::before {
//           content: '✓';
//           color: #10b981;
//           font-weight: 600;
//         }

//         /* How It Works Section */
//         .how-it-works {
//           padding: 80px 2rem;
//           background: #f8fafc;
//         }

//         .process-flow {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 2rem;
//           margin-top: 4rem;
//         }

//         .process-step {
//           background: white;
//           padding: 2rem;
//           border-radius: 12px;
//           text-align: center;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
//           position: relative;
//         }

//         .step-number {
//           background: #2563eb;
//           color: white;
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 1.3rem;
//           font-weight: 700;
//           margin: 0 auto 1.5rem;
//         }

//         .process-step h3 {
//           font-size: 1.3rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//           color: #1e293b;
//         }

//         .transaction-example {
//           background: #f1f5f9;
//           padding: 1rem;
//           border-radius: 8px;
//           margin: 1rem 0;
//           font-family: 'Monaco', monospace;
//           font-size: 0.9rem;
//         }

//         /* Features Section */
//         .features {
//           padding: 80px 2rem;
//           background: white;
//         }

//         .features-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 2rem;
//           margin-top: 4rem;
//         }

//         .feature-card {
//           background: #f8fafc;
//           padding: 2rem;
//           border-radius: 12px;
//           border-left: 4px solid #2563eb;
//         }

//         .feature-card h3 {
//           font-size: 1.3rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//           color: #1e293b;
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//         }

//         .feature-card p {
//           color: #64748b;
//         }

//         /* Stats Section */
//         .stats {
//           background: #1e293b;
//           color: white;
//           padding: 80px 2rem;
//         }

//         .stats-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 3rem;
//           text-align: center;
//           margin-top: 3rem;
//         }

//         .stat-item h3 {
//           font-size: 3rem;
//           font-weight: 800;
//           margin-bottom: 0.5rem;
//           color: #60a5fa;
//         }

//         .stat-item p {
//           font-size: 1.1rem;
//           opacity: 0.9;
//         }

//         /* Use Cases Section */
//         .use-cases {
//           padding: 80px 2rem;
//           background: #f8fafc;
//         }

//         .use-cases-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//           gap: 2rem;
//           margin-top: 4rem;
//         }

//         .use-case-card {
//           background: white;
//           padding: 2rem;
//           border-radius: 12px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
//         }

//         .use-case-card h4 {
//           font-size: 1.2rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//           color: #1e293b;
//         }

//         .use-case-scenario {
//           background: #f1f5f9;
//           padding: 1rem;
//           border-radius: 8px;
//           margin: 1rem 0;
//           border-left: 3px solid #2563eb;
//         }

//         /* CTA Section */
//         .cta-section {
//           background: linear-gradient(135deg, #2563eb, #1d4ed8);
//           color: white;
//           padding: 80px 2rem;
//           text-align: center;
//         }

//         .cta-content h2 {
//           font-size: 2.5rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//         }

//         .cta-content p {
//           font-size: 1.2rem;
//           margin-bottom: 2rem;
//           opacity: 0.9;
//         }

//         .cta-features {
//           display: flex;
//           justify-content: center;
//           gap: 2rem;
//           flex-wrap: wrap;
//           margin: 2rem 0;
//         }

//         .cta-feature {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           font-weight: 500;
//         }

//         /* Footer */
//         .footer {
//           background: #1e293b;
//           color: white;
//           padding: 60px 2rem 30px;
//         }

//         .footer-content {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 3rem;
//         }

//         .footer-section h4 {
//           font-size: 1.2rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//           color: #60a5fa;
//         }

//         .footer-section ul {
//           list-style: none;
//         }

//         .footer-section ul li {
//           margin-bottom: 0.5rem;
//         }

//         .footer-section ul li a {
//           color: #cbd5e1;
//           text-decoration: none;
//         }

//         .footer-section ul li a:hover {
//           color: white;
//         }

//         .footer-bottom {
//           margin-top: 3rem;
//           padding-top: 2rem;
//           border-top: 1px solid #374151;
//           text-align: center;
//           color: #9ca3af;
//         }

//         /* Responsive Design */
//         @media (max-width: 768px) {
//           .mobile-menu-btn {
//             display: block;
//           }

//           .nav-links {
//             display: none;
//           }

//           .hero h1 {
//             font-size: 2.5rem;
//           }

//           .hero p {
//             font-size: 1.1rem;
//           }

//           .hero-buttons {
//             flex-direction: column;
//             align-items: center;
//           }

//           .pillars-grid {
//             grid-template-columns: 1fr;
//           }

//           .process-flow {
//             grid-template-columns: 1fr;
//           }

//           .features-grid {
//             grid-template-columns: 1fr;
//           }

//           .stats-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 2rem;
//           }

//           .use-cases-grid {
//             grid-template-columns: 1fr;
//           }

//           .cta-features {
//             flex-direction: column;
//             gap: 1rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .nav-container {
//             padding: 0 1rem;
//           }

//           .hero {
//             padding: 100px 1rem 60px;
//           }

//           .three-pillars, .how-it-works, .features, .stats, .use-cases, .cta-section {
//             padding: 60px 1rem;
//           }

//           .stat-item h3 {
//             font-size: 2.5rem;
//           }

//           .hero h1 {
//             font-size: 2rem;
//           }

//           .section-title {
//             font-size: 2rem;
//           }
//         }

//         html {
//           scroll-behavior: smooth;
//         }
//       `}</style>

//       {/* Header */}
//       <header className="header">
//         <nav className="nav-container">
//           <Link to="/" className="logo">
//             <DollarSign size={24}/>SpareChange
//           </Link>

          
//           {/* <ul className="nav-links">
//             <li><a onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
//             <li><a onClick={() => scrollToSection('features')}>Features</a></li>
//             <li><a onClick={() => scrollToSection('use-cases')}>Use Cases</a></li>
//             <li><a href="/Login">Login</a></li>
//             <li><a href="/signup" className="cta-button">Sign Up</a></li>
//           </ul> */}
//           <ul className="nav-links">
//             <li><a onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
//             <li><a onClick={() => scrollToSection('features')}>Features</a></li>
//             <li><a onClick={() => scrollToSection('use-cases')}>Use Cases</a></li>
//             <li><Link to="/invest" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>Invest</Link></li>
//             <li><Link to="/Login">Login</Link></li>
//             <li><Link to="/Signup">Sign Up</Link></li>
//             </ul>

//           <button 
//             className="mobile-menu-btn"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>

//           {/* <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
//             <ul className="mobile-nav-links">
//               <li><a onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
//               <li><a onClick={() => scrollToSection('features')}>Features</a></li>
//               <li><a onClick={() => scrollToSection('use-cases')}>Use Cases</a></li>
//               <li><a href="/login">Login</a></li>
//               <li><a href="/signup" className="cta-button">Sign Up</a></li>
//             </ul>
//           </div> */}

//           <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
//             <ul className="mobile-nav-links">
//                 <li><a onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
//                 <li><a onClick={() => scrollToSection('features')}>Features</a></li>
//                 <li><a onClick={() => scrollToSection('use-cases')}>Use Cases</a></li>
//                 <li><Link to="/invest" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>Invest</Link></li>
//                 <li><Link to="/Login">Login</Link></li>
//                 <li><Link to="/Signup">Sign Up</Link></li>
//             </ul>
//             </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h1>Turn Your Spare Change Into Impact</h1>
//           <p>
//             Automatically round up every transaction to the nearest ₹100 and transform 
//             your spare change into donations, investments, or savings.
//           </p>
          
//           <div className="hero-example">
//             <div className="example-transaction">
//               <span>Coffee Purchase:</span>
//               <span>₹175</span>
//             </div>
//             <div className="example-transaction">
//               <span>Rounded to:</span>
//               <span>₹200</span>
//             </div>
//             <div className="example-result">
//               Spare Change: ₹25 → Your Impact Wallet
//             </div>
//           </div>

//           {/* <div className="hero-buttons">
//             <a href="/signup" className="btn-primary">Start Saving Today</a>
//             <a onClick={() => scrollToSection('how-it-works')} className="btn-secondary">
//               Learn More
//             </a>
//           </div> */}


//           <div className="hero-buttons">
//             <Link to="/Signup" className="btn-primary">Start Saving Today</Link>
//             <a onClick={() => scrollToSection('how-it-works')} className="btn-secondary">
//                 Learn More
//             </a>
//         </div>
//         </div>
//       </section>

//       {/* Three Pillars Section */}
//       <section id="pillars" className="three-pillars">
//         <div className="container">
//           <h2 className="section-title">Three Ways to Make Impact</h2>
//           <p className="section-subtitle">
//             Your spare change, your choice. Donate to causes you care about, 
//             invest for your future, or save for your goals.
//           </p>
          
//           <div className="pillars-grid">
//             <div className="pillar-card donate">
//               <div className="pillar-icon">
//                 <Heart size={32} />
//               </div>
//               <h3>Donate to Charity</h3>
//               <p>
//                 Support verified NGOs and causes you care about. From education to 
//                 environment, make a difference with your spare change.
//               </p>
//               <ul className="pillar-features">
//                 <li>Verified NGO profiles with impact tracking</li>
//                 <li>AI-powered charity recommendations</li>
//                 <li>Tax deduction certificates</li>
//                 <li>Real-time impact reports</li>
//               </ul>
//             </div>

//             {/* <div className="pillar-card invest">
//               <div className="pillar-icon">
//                 <TrendingUp size={32} />
//               </div>
//               <h3>Micro-Investment</h3>
//               <p>
//                 Invest your spare change in diversified portfolios, mutual funds, 
//                 and ETFs. Build wealth gradually with minimal risk.
//               </p>
//               <ul className="pillar-features">
//                 <li>Low-risk mutual funds and ETFs</li>
//                 <li>Robo-advisor portfolio suggestions</li>
//                 <li>Risk assessment and management</li>
//                 <li>Real-time returns tracking</li>
//               </ul>
//             </div> */}

//                     <div className="pillar-card invest">
//         <div className="pillar-icon">
//             <TrendingUp size={32} />
//         </div>
//         <h3>Micro-Investment</h3>
//         <p>
//             Invest your spare change in diversified portfolios, mutual funds, 
//             and ETFs. Build wealth gradually with minimal risk.
//         </p>
//         <ul className="pillar-features">
//             <li>Low-risk mutual funds and ETFs</li>
//             <li>Robo-advisor portfolio suggestions</li>
//             <li>Risk assessment and management</li>
//             <li>Real-time returns tracking</li>
//         </ul>
//         {/* ADD THIS BUTTON */}
//         <div style={{ marginTop: '1.5rem' }}>
//             <Link 
//             to="/invest" 
//             className="btn-primary" 
//             style={{ 
//                 background: '#10b981', 
//                 color: 'white', 
//                 padding: '0.75rem 1.5rem', 
//                 borderRadius: '8px', 
//                 textDecoration: 'none', 
//                 display: 'inline-block',
//                 fontWeight: '600'
//             }}
//             >
//             Try Investment Dashboard →
//             </Link>
//         </div>
//         </div>

//             <div className="pillar-card save">
//               <div className="pillar-icon">
//                 <PiggyBank size={32} />
//               </div>
//               <h3>Smart Savings</h3>
//               <p>
//                 Build your emergency fund or save for specific goals. 
//                 Set targets and watch your spare change add up.
//               </p>
//               <ul className="pillar-features">
//                 <li>Goal-based saving plans</li>
//                 <li>Instant withdrawal anytime</li>
//                 <li>Saving streak gamification</li>
//                 <li>Automated milestone rewards</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section id="how-it-works" className="how-it-works">
//         <div className="container">
//           <h2 className="section-title">How SpareChange Works</h2>
//           <p className="section-subtitle">
//             Simple, automatic, and secure. Start building impact with every transaction.
//           </p>
          
//           <div className="process-flow">
//             <div className="process-step">
//               <div className="step-number">1</div>
//               <h3>Connect Your Bank</h3>
//               <p>Securely link your bank account or cards using bank-level encryption.</p>
//               <div className="transaction-example">
//                 Supported: All major banks in India<br/>
//                 Security: 256-bit SSL encryption
//               </div>
//             </div>

//             <div className="process-step">
//               <div className="step-number">2</div>
//               <h3>Make Normal Purchases</h3>
//               <p>Shop as usual. Every transaction gets automatically tracked and rounded up.</p>
//               <div className="transaction-example">
//                 Purchase: ₹1,847<br/>
//                 Rounded: ₹1,900<br/>
//                 Spare: ₹53
//               </div>
//             </div>

//             <div className="process-step">
//               <div className="step-number">3</div>
//               <h3>Choose Your Impact</h3>
//               <p>Decide how to use your pooled spare change across donations, investments, and savings.</p>
//               <div className="transaction-example">
//                 Weekly Pool: ₹425<br/>
//                 40% Donate | 40% Invest | 20% Save
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="features">
//         <div className="container">
//           <h2 className="section-title">Smart Features for Maximum Impact</h2>
//           <p className="section-subtitle">
//             Powered by machine learning and designed for simplicity
//           </p>
          
//           <div className="features-grid">
//             <div className="feature-card">
//               <h3>
//                 <BarChart3 size={20} />
//                 AI-Powered Recommendations
//               </h3>
//               <p>
//                 Our ML algorithms suggest charities and investment portfolios based on 
//                 your transaction patterns, interests, and financial goals.
//               </p>
//             </div>

//             <div className="feature-card">
//               <h3>
//                 <Shield size={20} />
//                 Bank-Level Security
//               </h3>
//               <p>
//                 Your financial data is protected with the same security standards used by 
//                 major banks. We never store your banking credentials.
//               </p>
//             </div>

//             <div className="feature-card">
//               <h3>
//                 <Target size={20} />
//                 Goal-Based Planning
//               </h3>
//               <p>
//                 Set specific savings targets, donation goals, or investment milestones. 
//                 Track your progress and celebrate achievements.
//               </p>
//             </div>

//             <div className="feature-card">
//               <h3>
//                 <Zap size={20} />
//                 Real-Time Tracking
//               </h3>
//               <p>
//                 Monitor your spare change contributions, investment returns, and donation 
//                 impact with live updates and detailed analytics.
//               </p>
//             </div>

//             <div className="feature-card">
//               <h3>
//                 <Users size={20} />
//                 Verified NGO Network
//               </h3>
//               <p>
//                 All charity partners are thoroughly vetted. See real impact reports and 
//                 track how your donations are making a difference.
//               </p>
//             </div>

//             <div className="feature-card">
//               <h3>
//                 <Globe size={20} />
//                 Tax Benefits
//               </h3>
//               <p>
//                 Automatic tax deduction certificates for donations under 80G. 
//                 Maximize your impact while minimizing your tax burden.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       {/* <section className="stats">
//         <div className="container">
//           <h2 className="section-title">Impact by Numbers</h2>
//           <div className="stats-grid">
//             <div className="stat-item">
//               <h3>₹15Cr+</h3>
//               <p>Spare Change Collected</p>
//             </div>
//             <div className="stat-item">
//               <h3>2.5L+</h3>
//               <p>Active Users</p>
//             </div>
//             <div className="stat-item">
//               <h3>150+</h3>
//               <p>Verified NGO Partners</p>
//             </div>
//             <div className="stat-item">
//               <h3>₹890</h3>
//               <p>Average Monthly Savings</p>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Use Cases Section */}
//       <section id="use-cases" className="use-cases">
//         <div className="container">
//           <h2 className="section-title">Real User Stories</h2>
//           <p className="section-subtitle">
//             See how SpareChange users are making impact and building wealth
//           </p>
          
//           <div className="use-cases-grid">
//             <div className="use-case-card">
//               <h4>The Conscious Consumer - Priya, Mumbai</h4>
//               <div className="use-case-scenario">
//                 <strong>Goal:</strong> Support education NGOs<br/>
//                 <strong>Strategy:</strong> 60% Donate, 30% Save, 10% Invest<br/>
//                 <strong>Result:</strong> Donated ₹12,000 to rural education in 8 months
//               </div>
//               <p>
//                 "I wanted to give back but never had a systematic way. SpareChange made 
//                 it effortless - I'm supporting 3 education NGOs just from my daily expenses."
//               </p>
//             </div>

//             <div className="use-case-card">
//               <h4>The Future Investor - Rahul, Bangalore</h4>
//               <div className="use-case-scenario">
//                 <strong>Goal:</strong> Build investment portfolio<br/>
//                 <strong>Strategy:</strong> 70% Invest, 20% Save, 10% Donate<br/>
//                 <strong>Result:</strong> ₹25,000 portfolio with 12% returns in 1 year
//               </div>
//               <p>
//                 "As a software engineer, I wanted to start investing but kept procrastinating. 
//                 SpareChange got me started with zero effort - now I have a growing portfolio!"
//               </p>
//             </div>

//             <div className="use-case-card">
//               <h4>The Balanced Saver - Anita, Delhi</h4>
//               <div className="use-case-scenario">
//                 <strong>Goal:</strong> Emergency fund + social impact<br/>
//                 <strong>Strategy:</strong> 40% Save, 35% Donate, 25% Invest<br/>
//                 <strong>Result:</strong> ₹18,000 emergency fund + ₹8,000 donated
//               </div>
//               <p>
//                 "I love that I can balance my personal financial goals with helping others. 
//                 The app makes it so easy to manage both priorities simultaneously."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="container">
//           <div className="cta-content">
//             <h2>Start Your SpareChange Journey Today</h2>
//             <p>
//               Join thousands of users who are already making impact with their spare change. 
//               Set up takes less than 5 minutes.
//             </p>
            
//             <div className="cta-features">
//               <div className="cta-feature">
//                 <Shield size={16} />
//                 <span>100% Secure</span>
//               </div>
//               <div className="cta-feature">
//                 <Zap size={16} />
//                 <span>Instant Setup</span>
//               </div>
//               <div className="cta-feature">
//                 <Users size={16} />
//                 <span>No Hidden Fees</span>
//               </div>
//             </div>

//             {/* <a href="/signup" className="btn-primary">Create Free Account</a> */}

//             <Link to="/Signup" className="btn-primary">Create Free Account</Link>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <div className="footer-section">
//               <h4>SpareChange</h4>
//               <p>Transforming spare change into meaningful impact through donations, investments, and smart savings.</p>
//               <div style={{ marginTop: '1rem' }}>
//                 <a href="/" className="logo" style={{ color: '#60a5fa', fontSize: '1.2rem' }}>
//                   <DollarSign size={20} />
//                   SpareChange
//                 </a>
//               </div>
//             </div>
            
//             <div className="footer-section">
//               <h4>Product</h4>
//               <ul>
//                 <li><a href="/features">Features</a></li>
//                 <li><a href="/security">Security</a></li>
//                 <li><a href="/integrations">Bank Integrations</a></li>
//                 <li><a href="/api">API Documentation</a></li>
//                 <li><a href="/pricing">Pricing</a></li>
//               </ul>
//             </div>
            
//             <div className="footer-section">
//               <h4>Impact</h4>
//               <ul>
//                 <li><a href="/charities">Partner NGOs</a></li>
//                 <li><a href="/investments">Investment Options</a></li>
//                 <li><a href="/impact-reports">Impact Reports</a></li>
//                 <li><a href="/success-stories">Success Stories</a></li>
//                 <li><a href="/transparency">Transparency</a></li>
//               </ul>
//             </div>
            
//             <div className="footer-section">
//               <h4>Support</h4>
//               <ul>
//                 <li><a href="/help">Help Center</a></li>
//                 <li><a href="/contact">Contact Us</a></li>
//                 <li><a href="/privacy">Privacy Policy</a></li>
//                 <li><a href="/terms">Terms of Service</a></li>
//                 <li><a href="/regulatory">Regulatory Info</a></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="footer-bottom">
//             <p>&copy; 2025 SpareChange. All rights reserved. | SEBI Registered Investment Advisor | ISO 27001 Certified</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default SpareChangeHomepage;

// // import React from "react";
// // import { Link } from "react-router-dom";

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col">
// //       {/* Navbar */}
// //       <header className="w-full shadow-md bg-white fixed top-0 z-50">
// //         <nav className="container mx-auto flex justify-between items-center py-4 px-6">
// //           <h1 className="text-2xl font-bold text-blue-600">SpareChange</h1>
// //           <ul className="flex gap-6">
// //             <li><Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link></li>
// //             <li><Link to="/wallet" className="text-gray-700 hover:text-blue-600 font-medium">Wallet</Link></li>
// //             <li><Link to="/donate" className="text-gray-700 hover:text-blue-600 font-medium">Donate</Link></li>
// //             <li><Link to="/invest" className="text-gray-700 hover:text-blue-600 font-medium">Invest</Link></li>
// //           </ul>
// //         </nav>
// //       </header>

// //       {/* Hero */}
// //       <section className="flex-1 flex flex-col justify-center items-center text-center px-6 pt-24">
// //         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
// //           Turn Your Spare Change Into <span className="text-blue-600">Impact</span>
// //         </h2>
// //         <p className="text-lg text-gray-600 max-w-2xl mb-6">
// //           SpareChange helps you round up your daily transactions and use the extra money
// //           for donations, social causes, or micro-investments. Small steps. Big impact.
// //         </p>
// //         <div className="flex gap-4">
// //           <Link to="/get-started" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
// //             Get Started
// //           </Link>
// //           <Link to="/learn-more" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
// //             Learn More
// //           </Link>
// //         </div>
// //       </section>

// //       {/* Features */}
// //       <section className="bg-white py-16">
// //         <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
// //           <div className="p-6 shadow-md rounded-2xl bg-gray-50 hover:shadow-lg transition">
// //             <h3 className="text-xl font-semibold mb-3 text-blue-600">Round-Up Wallet</h3>
// //             <p className="text-gray-600">Purchases are rounded up; the difference goes into your pooled wallet.</p>
// //           </div>
// //           <div className="p-6 shadow-md rounded-2xl bg-gray-50 hover:shadow-lg transition">
// //             <h3 className="text-xl font-semibold mb-3 text-blue-600">Donate</h3>
// //             <p className="text-gray-600">Support causes from your wallet in one click.</p>
// //           </div>
// //           <div className="p-6 shadow-md rounded-2xl bg-gray-50 hover:shadow-lg transition">
// //             <h3 className="text-xl font-semibold mb-3 text-blue-600">Invest</h3>
// //             <p className="text-gray-600">Grow savings via curated micro-investments.</p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-gray-800 text-white py-6 text-center">
// //         <p>&copy; {new Date().getFullYear()} SpareChange. All rights reserved.</p>
// //       </footer>
// //     </div>
// //   );
// // }



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Heart, TrendingUp, PiggyBank, Menu, X, ArrowRight, Shield, Users, BarChart3, Target, Zap, Globe } from 'lucide-react';

const SpareChangeHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="homepage">
      <style>{`
        /* CSS Variables */
        :root {
          --primary: #667eea; /* Blue */
          --primary-dark: #5a67d8;
          --secondary: #764ba2; /* Purple */
          --accent: #f093fb; /* Pink */
          --success: #48bb78; /* Green */
          --warning: #ed8936; /* Orange */
          --info: #4299e1; /* Light Blue */
          --danger: #e53e3e; /* Red */
          --dark: #1a202c; /* Dark text */
          --light: #f7fafc; /* Light background */
          --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .homepage {
          min-height: 100vh;
        }

        /* Header Styles */
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #e0e0e0;
          z-index: 1000;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary); /* Using CSS variable */
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: #64748b;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
        }

        .nav-links a:hover {
          color: var(--primary); /* Using CSS variable */
        }

        .cta-button {
          background: var(--primary); /* Using CSS variable */
          color: white;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease-in-out;
        }

        .cta-button:hover {
          background: var(--primary-dark); /* Using CSS variable */
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #64748b;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid #e0e0e0;
          padding: 1rem 2rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.05); /* Added shadow for mobile menu */
        }

        .mobile-menu.open {
          display: block;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          list-style: none;
        }
        .mobile-nav-links a {
            color: #64748b;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 0;
            display: block;
        }
        .mobile-nav-links a:hover {
            color: var(--primary);
        }


        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 120px 2rem 80px;
          text-align: center;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-example {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 12px;
          margin: 2rem auto;
          max-width: 500px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .example-transaction {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .example-result {
          border-top: 1px solid rgba(255, 255, 255, 0.3);
          padding-top: 1rem;
          font-weight: 600;
          color: #fbbf24; /* Amber color */
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .btn-primary {
          background: white;
          color: var(--primary); /* Using CSS variable */
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease-in-out;
        }

        .btn-primary:hover {
          background: #f8fafc;
        }

        .btn-secondary {
          background: transparent;
          color: white;
          padding: 1rem 2rem;
          border: 2px solid white;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
        }

        .btn-secondary:hover {
          background: white;
          color: var(--primary); /* Using CSS variable */
        }

        /* Three Pillars Section */
        .three-pillars {
          padding: 80px 2rem;
          background: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #64748b;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
        }

        .pillar-card {
          background: white;
          padding: 3rem 2rem;
          border-radius: 16px;
          text-align: center;
          border: 2px solid #e2e8f0;
          position: relative;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Added transition */
        }
        .pillar-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .pillar-card.donate {
          border-color: #ef4444; /* Red */
        }

        .pillar-card.invest {
          border-color: #10b981; /* Green */
        }

        .pillar-card.save {
          border-color: #f59e0b; /* Amber */
        }

        .pillar-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: white;
        }

        .pillar-card.donate .pillar-icon {
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        .pillar-card.invest .pillar-icon {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .pillar-card.save .pillar-icon {
          background: linear-gradient(135deg, #f59e0b, #d97706);
        }

        .pillar-card h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .pillar-card p {
          color: #64748b;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .pillar-features {
          list-style: none;
          text-align: left;
        }

        .pillar-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          color: #64748b;
        }

        .pillar-features li::before {
          content: '✓';
          color: #10b981; /* Green checkmark */
          font-weight: 600;
        }

        /* How It Works Section */
        .how-it-works {
          padding: 80px 2rem;
          background: #f8fafc;
        }

        .process-flow {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .process-step {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          position: relative;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Added transition */
        }
        .process-step:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }

        .step-number {
          background: var(--primary); /* Using CSS variable */
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
        }

        .process-step h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .transaction-example {
          background: #f1f5f9;
          padding: 1rem;
          border-radius: 8px;
          margin: 1rem 0;
          font-family: 'Monaco', monospace;
          font-size: 0.9rem;
          text-align: left; /* Ensure text alignment for code blocks */
        }

        /* Features Section */
        .features {
          padding: 80px 2rem;
          background: white;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .feature-card {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 12px;
          border-left: 4px solid var(--primary); /* Using CSS variable */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); /* Added shadow */
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Added transition */
        }
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }

        .feature-card h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .feature-card h3 svg { /* Style for icons within h3 */
            color: var(--primary);
        }

        .feature-card p {
          color: #64748b;
        }

        /* Stats Section - Re-added for completeness, though commented out in JSX */
        .stats {
          background: #1e293b;
          color: white;
          padding: 80px 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          text-align: center;
          margin-top: 3rem;
        }

        .stat-item h3 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: #60a5fa; /* Light blue */
        }

        .stat-item p {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        /* Use Cases Section */
        .use-cases {
          padding: 80px 2rem;
          background: #f8fafc;
        }

        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .use-case-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Added transition */
        }
        .use-case-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }

        .use-case-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e293b;
        }

        .use-case-scenario {
          background: #f1f5f9;
          padding: 1rem;
          border-radius: 8px;
          margin: 1rem 0;
          border-left: 3px solid var(--primary); /* Using CSS variable */
          font-size: 0.9rem;
          color: #475569; /* Darker gray for text */
          text-align: left; /* Ensure text alignment for code blocks */
        }
        .use-case-scenario strong {
            color: var(--dark); /* Make strong text stand out */
        }


        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #2563eb, #1d4ed8); /* Blue gradient */
          color: white;
          padding: 80px 2rem;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin: 2rem 0;
        }

        .cta-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }
        .cta-feature svg { /* Style for icons in CTA features */
            color: white;
        }

        /* Footer */
        .footer {
          background: #1e293b; /* Dark gray */
          color: white;
          padding: 60px 2rem 30px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }

        .footer-section h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #60a5fa; /* Light blue */
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 0.5rem;
        }

        .footer-section ul li a {
          color: #cbd5e1; /* Light gray */
          text-decoration: none;
          transition: color 0.2s ease-in-out;
        }

        .footer-section ul li a:hover {
          color: white;
        }

        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #374151; /* Darker gray border */
          text-align: center;
          color: #9ca3af; /* Lighter gray */
        }
        .footer-bottom p {
            font-size: 0.9rem;
        }


        /* Responsive Design */
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }

          .nav-links {
            display: none;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero p {
            font-size: 1.1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .pillars-grid {
            grid-template-columns: 1fr;
          }

          .process-flow {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .use-cases-grid {
            grid-template-columns: 1fr;
          }

          .cta-features {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 1rem;
          }

          .hero {
            padding: 100px 1rem 60px;
          }

          .three-pillars, .how-it-works, .features, .stats, .use-cases, .cta-section {
            padding: 60px 1rem;
          }

          .stat-item h3 {
            font-size: 2.5rem;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <nav className="nav-container">
          <Link to="/" className="logo">
            <DollarSign size={24}/>SpareChange
          </Link>

          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
            <li><a onClick={() => scrollToSection('features')}>Features</a></li>
            <li><a onClick={() => scrollToSection('use-cases')}>Use Cases</a></li>
            {/* Corrected Link paths to lowercase */}
            <li><Link to="/invest" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>Invest</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup" className="cta-button">Sign Up</Link></li> {/* Changed to Link */}
          </ul>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul className="mobile-nav-links">
                <li><a onClick={() => scrollToSection('how-it-works')}>How It Works</a></li>
                <li><a onClick={() => scrollToSection('features')}>Features</a></li>
                <li><a onClick={() => scrollToSection('use-cases')}>Use Cases</a></li>
                {/* Corrected Link paths to lowercase in mobile menu */}
                <li><Link to="/invest" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500' }}>Invest</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Signup" className="cta-button">Sign Up</Link></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Turn Your Spare Change Into Impact</h1>
          <p>
            Automatically round up every transaction to the nearest ₹100 and transform 
            your spare change into donations, investments, or savings.
          </p>
          
          <div className="hero-example">
            <div className="example-transaction">
              <span>Coffee Purchase:</span>
              <span>₹175</span>
            </div>
            <div className="example-transaction">
              <span>Rounded to:</span>
              <span>₹200</span>
            </div>
            <div className="example-result">
              Spare Change: ₹25 → Your Impact Wallet
            </div>
          </div>

          <div className="hero-buttons">
            <Link to="/signup" className="btn-primary">Start Saving Today</Link>
            <a onClick={() => scrollToSection('how-it-works')} className="btn-secondary">
                Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section id="pillars" className="three-pillars">
        <div className="container">
          <h2 className="section-title">Three Ways to Make Impact</h2>
          <p className="section-subtitle">
            Your spare change, your choice. Donate to causes you care about, 
            invest for your future, or save for your goals.
          </p>
          
          <div className="pillars-grid">
            <div className="pillar-card donate">
              <div className="pillar-icon">
                <Heart size={32} />
              </div>
              <h3>Donate to Charity</h3>
              <p>
                Support verified NGOs and causes you care about. From education to 
                environment, make a difference with your spare change.
              </p>
              <ul className="pillar-features">
                <li>Verified NGO profiles with impact tracking</li>
                <li>AI-powered charity recommendations</li>
                <li>Tax deduction certificates</li>
                <li>Real-time impact reports</li>
              </ul>
            </div>

            <div className="pillar-card invest">
                <div className="pillar-icon">
                    <TrendingUp size={32} />
                </div>
                <h3>Micro-Investment</h3>
                <p>
                    Invest your spare change in diversified portfolios, mutual funds, 
                    and ETFs. Build wealth gradually with minimal risk.
                </p>
                <ul className="pillar-features">
                    <li>Low-risk mutual funds and ETFs</li>
                    <li>Robo-advisor portfolio suggestions</li>
                    <li>Risk assessment and management</li>
                    <li>Real-time returns tracking</li>
                </ul>
                <div style={{ marginTop: '1.5rem' }}>
                    <Link 
                    to="/invest" 
                    className="btn-primary" 
                    style={{ 
                        background: '#10b981', 
                        color: 'white', 
                        padding: '0.75rem 1.5rem', 
                        borderRadius: '8px', 
                        textDecoration: 'none', 
                        display: 'inline-block',
                        fontWeight: '600'
                    }}
                    >
                    Try Investment Dashboard →
                    </Link>
                </div>
            </div>

            <div className="pillar-card save">
              <div className="pillar-icon">
                <PiggyBank size={32} />
              </div>
              <h3>Smart Savings</h3>
              <p>
                Build your emergency fund or save for specific goals. 
                Set targets and watch your spare change add up.
              </p>
              <ul className="pillar-features">
                <li>Goal-based saving plans</li>
                <li>Instant withdrawal anytime</li>
                <li>Saving streak gamification</li>
                <li>Automated milestone rewards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How SpareChange Works</h2>
          <p className="section-subtitle">
            Simple, automatic, and secure. Start building impact with every transaction.
          </p>
          
          <div className="process-flow">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Connect Your Bank</h3>
              <p>Securely link your bank account or cards using bank-level encryption.</p>
              <div className="transaction-example">
                Supported: All major banks in India<br/>
                Security: 256-bit SSL encryption
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Make Normal Purchases</h3>
              <p>Shop as usual. Every transaction gets automatically tracked and rounded up.</p>
              <div className="transaction-example">
                Purchase: ₹1,847<br/>
                Rounded: ₹1,900<br/>
                Spare: ₹53
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Choose Your Impact</h3>
              <p>Decide how to use your pooled spare change across donations, investments, and savings.</p>
              <div className="transaction-example">
                Weekly Pool: ₹425<br/>
                40% Donate | 40% Invest | 20% Save
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Smart Features for Maximum Impact</h2>
          <p className="section-subtitle">
            Powered by machine learning and designed for simplicity
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>
                <BarChart3 size={20} />
                AI-Powered Recommendations
              </h3>
              <p>
                Our ML algorithms suggest charities and investment portfolios based on 
                your transaction patterns, interests, and financial goals.
              </p>
            </div>

            <div className="feature-card">
              <h3>
                <Shield size={20} />
                Bank-Level Security
              </h3>
              <p>
                Your financial data is protected with the same security standards used by 
                major banks. We never store your banking credentials.
              </p>
            </div>

            <div className="feature-card">
              <h3>
                <Target size={20} />
                Goal-Based Planning
              </h3>
              <p>
                Set specific savings targets, donation goals, or investment milestones. 
                Track your progress and celebrate achievements.
              </p>
            </div>

            <div className="feature-card">
              <h3>
                <Zap size={20} />
                Real-Time Tracking
              </h3>
              <p>
                Monitor your spare change contributions, investment returns, and donation 
                impact with live updates and detailed analytics.
              </p>
            </div>

            <div className="feature-card">
              <h3>
                <Users size={20} />
                Verified NGO Network
              </h3>
              <p>
                All charity partners are thoroughly vetted. See real impact reports and 
                track how your donations are making a difference.
              </p>
            </div>

            <div className="feature-card">
              <h3>
                <Globe size={20} />
                Tax Benefits
              </h3>
              <p>
                Automatic tax deduction certificates for donations under 80G. 
                Maximize your impact while minimizing your tax burden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="stats">
        <div className="container">
          <h2 className="section-title">Impact by Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>0</h3>
              <p>Spare Change Collected</p>
            </div>
            <div className="stat-item">
              <h3>0</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h3>0</h3>
              <p>Verified NGO Partners</p>
            </div>
            <div className="stat-item">
              <h3>0</h3>
              <p>Average Monthly Savings</p>
            </div>
          </div>
        </div>

      </section> */}

      {/* Use Cases Section */}
      <section id="use-cases" className="use-cases">
        <div className="container">
          <h2 className="section-title">Real User Stories</h2>
          <p className="section-subtitle">
            See how SpareChange users are making impact and building wealth
          </p>
          
          <div className="use-cases-grid">
            <div className="use-case-card">
              <h4>The Conscious Consumer - Priya, Mumbai</h4>
              <div className="use-case-scenario">
                <strong>Goal:</strong> Support education NGOs<br/>
                <strong>Strategy:</strong> 60% Donate, 30% Save, 10% Invest<br/>
                <strong>Result:</strong> Donated ₹12,000 to rural education in 8 months
              </div>
              <p>
                "I wanted to give back but never had a systematic way. SpareChange made 
                it effortless - I'm supporting 3 education NGOs just from my daily expenses."
              </p>
            </div>

            <div className="use-case-card">
              <h4>The Future Investor - Rahul, Bangalore</h4>
              <div className="use-case-scenario">
                <strong>Goal:</strong> Build investment portfolio<br/>
                <strong>Strategy:</strong> 70% Invest, 20% Save, 10% Donate<br/>
                <strong>Result:</strong> ₹25,000 portfolio with 12% returns in 1 year
              </div>
              <p>
                "As a software engineer, I wanted to start investing but kept procrastinating. 
                SpareChange got me started with zero effort - now I have a growing portfolio!"
              </p>
            </div>

            <div className="use-case-card">
              <h4>The Balanced Saver - Anita, Delhi</h4>
              <div className="use-case-scenario">
                <strong>Goal:</strong> Emergency fund + social impact<br/>
                <strong>Strategy:</strong> 40% Save, 35% Donate, 25% Invest<br/>
                <strong>Result:</strong> ₹18,000 emergency fund + ₹8,000 donated
              </div>
              <p>
                "I love that I can balance my personal financial goals with helping others. 
                The app makes it so easy to manage both priorities simultaneously."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your SpareChange Journey Today</h2>
            <p>
              Join thousands of users who are already making impact with their spare change. 
              Set up takes less than 5 minutes.
            </p>
            
            <div className="cta-features">
              <div className="cta-feature">
                <Shield size={16} />
                <span>100% Secure</span>
              </div>
              <div className="cta-feature">
                <Zap size={16} />
                <span>Instant Setup</span>
              </div>
              <div className="cta-feature">
                <Users size={16} />
                <span>No Hidden Fees</span>
              </div>
            </div>

            <Link to="/signup" className="btn-primary">Create Free Account</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>SpareChange</h4>
              <p>Transforming spare change into meaningful impact through donations, investments, and smart savings.</p>
              <div style={{ marginTop: '1rem' }}>
                <Link to="/" className="logo" style={{ color: '#60a5fa', fontSize: '1.2rem' }}>
                  <DollarSign size={20} />
                  SpareChange
                </Link>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/security">Security</Link></li>
                <li><Link to="/integrations">Bank Integrations</Link></li>
                <li><Link to="/api">API Documentation</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Impact</h4>
              <ul>
                <li><Link to="/charities">Partner NGOs</Link></li>
                <li><Link to="/investments">Investment Options</Link></li>
                <li><Link to="/impact-reports">Impact Reports</Link></li>
                <li><Link to="/success-stories">Success Stories</Link></li>
                <li><Link to="/transparency">Transparency</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><Link to="/help">Help Center</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/regulatory">Regulatory Info</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 SpareChange. All rights reserved. | SEBI Registered Investment Advisor | ISO 27001 Certified</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SpareChangeHomepage;
