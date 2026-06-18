import React, { useState, useEffect } from 'react';
import { Search, Users, BookOpen, Activity, Award, Settings, ChevronRight, Star, MapPin, Clock, Zap, Shield, Heart, TrendingUp, Eye, Grid, User, Home, Database, Network, Sparkles, CheckCircle, AlertCircle, ArrowRight, Plus, Play, BarChart3, Target, Layers, MessageCircle, Phone, Mail, Globe, X, Send, Menu, ChevronDown, Building2, GraduationCap, Briefcase, HeartPulse, Scale, DollarSign, FileText, Car, HandHeart, Calendar, Trophy, TrendingUp as TrendUp, ArrowUpRight, Bot, UserCircle, ChevronLeft, Sparkle, BookMarked, Compass, Rocket, Stethoscope, Baby, TreePine, Landmark, Wallet, CreditCard, Gavel, Vote, BadgeCheck, HelpCircle, Info, Check, Wrench, PenTool, Truck, Utensils, Bed, Camera, Lock, Unlock, PhoneCall, Video, Mic, MicOff, Volume2, VolumeX, Maximize2, Minimize2, Paperclip, Image, File } from 'lucide-react';

// ===== DESIGN TOKENS =====
const tokens = {
  colors: {
    threadGold: '#C4A962',
    patternBlack: '#1A1A1A',
    selvageWhite: '#F5F3EF',
    stitchAccent: '#E85D4C',
    craftBlue: '#2D5A7B',
    warmGray: '#8B8680',
    deepCharcoal: '#0D0D0D',
    artiquity: '#9B6B4F',
    enginuity: '#4A7C8C',
    hopeGreen: '#5A8F6E',
    warmth: '#B89A6A',
  }
};

// ===== MOCK DATA =====
const reentryProviders = [
  {
    id: 1,
    name: "Project Return",
    location: "Nashville, TN",
    services: ["Jobs", "Housing", "Training", "Digital Literacy"],
    description: "3-day Job Readiness Course → guaranteed employment. 12-month coaching. Nashville's oldest reentry org (est. 1979).",
    contact: "(615) 327-9654",
    email: "pri@projectreturninc.org",
    address: "109 Lafayette Street, Nashville",
    eligibility: "Justice-involved individuals in Middle TN",
    tags: ["Employment", "Housing", "Coaching", "Chattanooga"],
    verified: true,
    featured: true,
  },
  {
    id: 2,
    name: "Men of Valor",
    location: "Nashville & Knoxville, TN",
    services: ["Residential", "Faith-Based", "Discipleship", "Job Readiness"],
    description: "Christ-centered residential discipleship. 1-year program at 'The Ridge' in Antioch (~93 men) and Knoxville campus (~30 men).",
    contact: "men-of-valor.org",
    email: "",
    address: "504 Valor Way, Nashville",
    eligibility: "Men exiting TDOC facilities",
    tags: ["Residential", "Faith-Based", "Long-Term"],
    verified: true,
    featured: true,
  },
  {
    id: 3,
    name: "Tennessee Prison Outreach Ministry",
    location: "Nashville & Memphis, TN",
    services: ["Transitional Housing", "Job Placement", "Counseling"],
    description: "TDOC-approved transitional homes. 16-bed men's and 20-bed women's homes in Nashville. 10-bed men's facility in Memphis.",
    contact: "office@tpom.org",
    email: "office@tpom.org",
    address: "Nashville, TN",
    eligibility: "Men and women exiting incarceration",
    tags: ["Housing", "Job Placement", "Memphis"],
    verified: true,
    featured: false,
  },
  {
    id: 4,
    name: "Free Hearts",
    location: "Statewide, TN",
    services: ["Direct Services", "Organizing", "Legal Aid", "Family Support"],
    description: "Led by formerly incarcerated women. Participatory Defense Hub, Bail Fund, Clemency Works, Free Minds counseling, Inside Out programs.",
    contact: "(615) 745-1117",
    email: "",
    address: "2013 25th Ave N, Nashville",
    eligibility: "Women and families impacted by incarceration",
    tags: ["Women", "Legal", "Family", "Advocacy"],
    verified: true,
    featured: true,
  },
  {
    id: 5,
    name: "Thistle Farms / Magdalene",
    location: "Nashville, TN",
    services: ["Residential", "Addiction Recovery", "Employment", "Social Enterprise"],
    description: "Two-year free residential program for women survivors of trafficking, prostitution, and addiction. Peer-led Benedictine community.",
    contact: "(615) 298-1140",
    email: "",
    address: "5122 Charlotte Pike, Nashville",
    eligibility: "Women survivors of trafficking, addiction, prostitution",
    tags: ["Women", "Residential", "Recovery", "Social Enterprise"],
    verified: true,
    featured: true,
  },
  {
    id: 6,
    name: "Persevere",
    location: "Memphis & Statewide, TN",
    services: ["Coding", "Certifications", "Job Placement", "Transitional Housing"],
    description: "Behind-the-walls coding program. Network+, Security+, AWS Cloud, full-stack web dev certifications. 6-month on-the-job training.",
    contact: "perseverenow.org",
    email: "",
    address: "Memphis, TN",
    eligibility: "Justice-involved individuals",
    tags: ["Tech", "Education", "Certifications", "Employment"],
    verified: true,
    featured: false,
  },
  {
    id: 7,
    name: "Dismas House",
    location: "Nashville, TN",
    services: ["Residential", "Reentry", "Community"],
    description: "TDOC-approved residential reentry program. 56 beds for men. Minimum 90-day stay, no maximum. Holistic services.",
    contact: "dismas.org",
    email: "",
    address: "Nashville, TN",
    eligibility: "Men returning from TN prisons and county jails",
    tags: ["Residential", "Men", "Community"],
    verified: true,
    featured: false,
  },
  {
    id: 8,
    name: "The Next Door",
    location: "Nashville, TN",
    services: ["Residential", "Addiction Recovery", "Mental Health", "Reentry"],
    description: "Women's residential addiction recovery and reentry. Medication-assisted treatment and trauma-informed care.",
    contact: "thenextdoor.org",
    email: "",
    address: "Nashville, TN",
    eligibility: "Women in recovery and reentry",
    tags: ["Women", "Recovery", "Mental Health", "Residential"],
    verified: true,
    featured: false,
  },
];

const knowledgeEntries = [
  { id: 1, title: "How to Get Your ID in Tennessee", contributor: "Re-Entre Guide", category: "IDs & Documents", views: 1247, type: "step-by-step", icon: FileText },
  { id: 2, title: "Pell Grants for Incarcerated Students", contributor: "Federal Education Guide", category: "Education", views: 892, type: "guide", icon: GraduationCap },
  { id: 3, title: "Fair-Chance Employer Directory", contributor: "TN Workforce", category: "Employment", views: 2103, type: "directory", icon: Briefcase },
  { id: 4, title: "Finding Housing After Release", contributor: "Re-Entre Guide", category: "Housing", views: 1567, type: "step-by-step", icon: Building2 },
  { id: 5, title: "Medicaid & Health Coverage Guide", contributor: "TN Health", category: "Health", views: 945, type: "guide", icon: Stethoscope },
  { id: 6, title: "Child Support & Family Reunification", contributor: "Re-Entre Guide", category: "Family", views: 678, type: "guide", icon: Baby },
  { id: 7, title: "Expungement & Record Clearing in TN", contributor: "Just City", category: "Legal", views: 1823, type: "step-by-step", icon: Scale },
  { id: 8, title: "Voting Rights Restoration", contributor: "Free Hearts", category: "Legal", views: 534, type: "guide", icon: Vote },
  { id: 9, title: "Digital Literacy Basics", contributor: "Project Return", category: "Skills", views: 445, type: "video", icon: BookMarked },
  { id: 10, title: "Building Credit After Incarceration", contributor: "Re-Entre Guide", category: "Finance", views: 723, type: "guide", icon: CreditCard },
  { id: 11, title: "Transportation Resources", contributor: "TN Transit", category: "Transport", views: 312, type: "directory", icon: Truck },
  { id: 12, title: "Mental Health & Peer Support", contributor: "SAMHSA", category: "Health", views: 889, type: "guide", icon: HeartPulse },
];

const userProfile = {
  name: "Marcus",
  releaseDate: "2026-03-15",
  currentStage: "Early Stabilization",
  daysSinceRelease: 95,
  topGoals: ["Secure Housing", "Find Employment", "Reconnect with Family"],
  dimensions: {
    stability: 6.2,
    hope: 7.8,
    connection: 5.4,
    skills: 6.8,
    health: 7.1,
  },
  tags: ["Veteran", "Parent", "Job-Ready", "Needs Housing"],
  bio: "Building a new foundation. Father of two. Served 8 years. Ready to work, ready to grow, ready to come home fully.",
};

const journeyStages = [
  { name: "Pre-Release", status: "completed", description: "Planning before release day" },
  { name: "First 72 Hours", status: "completed", description: "The critical first days" },
  { name: "Early Stabilization", status: "active", description: "1-6 months: finding your footing" },
  { name: "Long-Term Reintegration", status: "upcoming", description: "6+ months: building a new life" },
];

const domainProgress = [
  { name: "Housing", progress: 35, status: "In Progress", icon: Building2 },
  { name: "Employment", progress: 60, status: "Active Search", icon: Briefcase },
  { name: "Education", progress: 45, status: "Exploring", icon: GraduationCap },
  { name: "Health", progress: 70, status: "On Track", icon: HeartPulse },
  { name: "Family", progress: 25, status: "Starting", icon: Baby },
  { name: "Legal", progress: 80, status: "Nearly Done", icon: Scale },
];

const omegaMetrics = {
  resourcesAccessed: 23,
  connectionsMade: 7,
  daysInStage: 95,
  goalsCompleted: 4,
  conversations: 31,
  providersContacted: 3,
};

const chatOpeners = [
  { id: 1, text: "I need help finding housing", icon: Building2, category: "Housing" },
  { id: 2, text: "How do I get my ID?", icon: FileText, category: "Documents" },
  { id: 3, text: "I'm feeling overwhelmed", icon: Heart, category: "Support" },
  { id: 4, text: "What's the Pell Grant?", icon: GraduationCap, category: "Education" },
  { id: 5, text: "Find me a job", icon: Briefcase, category: "Employment" },
  { id: 6, text: "Help me reconnect with family", icon: Baby, category: "Family" },
  { id: 7, text: "I need a ride / transport", icon: Truck, category: "Transport" },
  { id: 8, text: "My rights at work", icon: Scale, category: "Legal" },
];

const simulatedResponses = {
  "I need help finding housing": "I hear you. Housing is one of the hardest parts of coming home, but you're not alone in this. Let me pull up the housing options in your area. In Nashville, you've got Dismas House (56 beds, men), Tennessee Prison Outreach Ministry (16-bed men's home), and if you're a woman, Thistle Farms has a two-year residential program. What's your situation — are you looking for something tonight, or do you have a few days to plan?",
  "How do I get my ID?": "Getting your ID is step one, and I can walk you through it. In Tennessee, TDOC should provide at least 2 forms of ID at release — birth certificate and state ID. If you didn't get those, or if you need a Social Security card, here's what to do: First, go to the DMV with your release papers and birth certificate. If you don't have your birth certificate, we can request one from the state where you were born. Need me to look up the exact steps for your state?",
  "I'm feeling overwhelmed": "I'm glad you said something. Coming home is overwhelming for almost everyone — it doesn't mean you're not strong enough. It means you're human. Can you tell me what's weighing heaviest right now? Is it housing, work, family, or something else? We can take it one piece at a time. You don't have to carry all of it at once.",
  "What's the Pell Grant?": "Good question — this could be a game-changer for you. Pell Grants for incarcerated students were fully restored in July 2023. That means if you're in a prison education program (PEP) or planning to enroll, you can get federal financial aid to cover tuition. In Tennessee, programs like THEI, Lipscomb LIFE, and Persevere all work with Pell. The amount varies, but it can cover a big chunk of costs. Are you interested in college, trade certification, or coding?",
  "Find me a job": "Let's get you connected. In Tennessee, Project Return runs a 3-day Job Readiness Course that leads to guaranteed employment — they've placed over 1,500 people. Men of Valor has job readiness built into their program. Persevere offers coding certifications with job placement through Banyan Labs. And the state has American Job Centers that serve justice-involved individuals. What's your background — construction, tech, hospitality, or something else?",
  "Help me reconnect with family": "That's brave of you to want to reconnect. Family repair takes time, but it starts with one honest step. Free Hearts in Nashville specializes in family reunification and has programs for incarcerated parents. Sesame Street in Communities has a toolkit for incarcerated parents too. What's your situation — are you trying to reach kids, a partner, parents? I can point you to the right resources.",
  "I need a ride / transport": "Transport is a real barrier. Project Return has a van fleet for getting to work. Some transit systems offer reduced fares. And in some areas, rideshare voucher programs exist. Where are you trying to get to — work, appointments, housing, family? I can find what's available in your area.",
  "My rights at work": "You have rights, and knowing them matters. The Fair Chance Act means federal employers and contractors can't ask about your record until after a conditional offer. Tennessee's Reentry Success Act of 2021 includes an employer liability shield — that means employers get protection when they hire people with records. You also qualify for the Work Opportunity Tax Credit (up to $9,600 for your employer). Are you dealing with a specific situation at work, or just getting informed?",
};

// ===== COMPONENTS =====

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'federation', label: 'Community', icon: Users },
    { id: 'knowledge', label: 'Resources', icon: BookOpen },
    { id: 'omega', label: 'My Journey', icon: Activity },
    { id: 'iam', label: 'Me', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D0D0D] to-[#1A1A1A] border-t border-[#C4A962]/20 px-2 py-2 z-50 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="max-w-6xl mx-auto flex justify-around md:justify-start md:gap-1">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 py-2 rounded-lg transition-all ${
              activeTab === id 
                ? 'text-[#C4A962] bg-[#C4A962]/10' 
                : 'text-[#8B8680] hover:text-[#F5F3EF]'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs md:text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

const Hero = ({ onStartChat }) => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="weave" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10h20M10 0v20" stroke="#C4A962" strokeWidth="0.5" fill="none"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#weave)"/>
      </svg>
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#F5F3EF]">
          Re<span className="text-[#C4A962]">-Entre</span>
        </h1>
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C4A962]"/>
          <span className="text-[#C4A962] text-sm tracking-[0.3em] uppercase">Your Companion Home</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C4A962]"/>
        </div>
      </div>

      <p className="text-xl md:text-2xl text-[#8B8680] font-light leading-relaxed mb-8 max-w-2xl mx-auto">
        An AI companion that walks with you — from the day before release 
        through every step of <span className="text-[#C4A962]">coming home</span>.
      </p>

      <div className="flex justify-center gap-8 md:gap-16 mb-12">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-light text-[#C4A962]">7</div>
          <div className="text-xs text-[#8B8680] tracking-wide uppercase">Life Domains</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-light text-[#C4A962]">24/7</div>
          <div className="text-xs text-[#8B8680] tracking-wide uppercase">Always On</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-light text-[#C4A962]">TN</div>
          <div className="text-xs text-[#8B8680] tracking-wide uppercase">Pilot Home</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={onStartChat}
          className="px-8 py-4 bg-[#C4A962] text-[#0D0D0D] font-medium rounded-lg hover:bg-[#D4B972] transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle size={18} />
          Talk to Re-Entre
        </button>
        <button className="px-8 py-4 border border-[#C4A962]/30 text-[#C4A962] font-medium rounded-lg hover:bg-[#C4A962]/10 transition-colors flex items-center justify-center gap-2">
          <Compass size={18} />
          Explore Resources
        </button>
      </div>
    </div>
  </section>
);

const ProviderCard = ({ provider, onClick, compact = false }) => (
  <div 
    onClick={onClick}
    className={`bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl overflow-hidden hover:border-[#C4A962]/40 transition-all cursor-pointer group ${compact ? 'p-4' : 'p-6'}`}
  >
    <div className="flex items-start gap-4">
      <div className={`${compact ? 'w-12 h-12' : 'w-16 h-16'} rounded-full bg-gradient-to-br from-[#9B6B4F] to-[#4A7C8C] flex items-center justify-center text-[#F5F3EF] font-light ${compact ? 'text-sm' : 'text-lg'}`}>
        {provider.name.split(' ').map(w => w[0]).join('').substring(0, 2)}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className={`font-medium text-[#F5F3EF] truncate ${compact ? 'text-sm' : 'text-lg'}`}>
            {provider.name}
          </h3>
          {provider.verified && <CheckCircle size={14} className="text-[#C4A962] flex-shrink-0" />}
          {provider.featured && <Star size={14} className="text-[#E85D4C] flex-shrink-0" />}
        </div>

        <p className={`text-[#8B8680] ${compact ? 'text-xs' : 'text-sm'}`}>{provider.services.slice(0, 3).join(' · ')}</p>

        <div className="flex items-center gap-3 mt-2 text-xs text-[#8B8680]">
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {provider.location}
          </span>
        </div>
      </div>
    </div>

    {!compact && (
      <>
        <div className="mt-4 space-y-2">
          <p className="text-sm text-[#8B8680] leading-relaxed">{provider.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {provider.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-[#C4A962]/10 text-[#C4A962] text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#C4A962]/10">
          <div className="flex items-center gap-4 text-xs text-[#8B8680]">
            <span className="flex items-center gap-1">
              <Phone size={12} />
              {provider.contact}
            </span>
          </div>
          <span className="text-xs text-[#C4A962]">View Details →</span>
        </div>
      </>
    )}
  </div>
);

const ProviderDetail = ({ provider, onClose }) => (
  <div className="fixed inset-0 bg-[#0D0D0D]/95 z-50 overflow-y-auto">
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <button onClick={onClose} className="mb-6 text-[#8B8680] hover:text-[#F5F3EF] flex items-center gap-2">
          <ChevronLeft size={18} /> Back to Community
        </button>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-8 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9B6B4F] to-[#4A7C8C] flex items-center justify-center text-[#F5F3EF] text-2xl font-light">
              {provider.name.split(' ').map(w => w[0]).join('').substring(0, 2)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-medium text-[#F5F3EF]">{provider.name}</h1>
                {provider.verified && (
                  <span className="flex items-center gap-1 px-2 py-1 bg-[#C4A962]/20 text-[#C4A962] text-xs rounded">
                    <CheckCircle size={12} /> Verified
                  </span>
                )}
              </div>
              <p className="text-[#8B8680] mb-4">{provider.services.join(' · ')}</p>
              <p className="text-[#F5F3EF]/80 text-sm leading-relaxed">{provider.description}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-medium text-[#F5F3EF] mb-4 flex items-center gap-2">
            <Info size={18} className="text-[#C4A962]" /> Details
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#C4A962] mt-1" />
              <div>
                <p className="text-sm text-[#F5F3EF]">{provider.address}</p>
                <p className="text-xs text-[#8B8680]">{provider.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-[#C4A962] mt-1" />
              <p className="text-sm text-[#F5F3EF]">{provider.contact}</p>
            </div>
            {provider.email && (
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#C4A962] mt-1" />
                <p className="text-sm text-[#F5F3EF]">{provider.email}</p>
              </div>
            )}
            <div className="flex items-start gap-3">
              <UserCircle size={16} className="text-[#C4A962] mt-1" />
              <p className="text-sm text-[#F5F3EF]">Eligibility: {provider.eligibility}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-medium text-[#F5F3EF] mb-4 flex items-center gap-2">
            <TagIcon size={18} className="text-[#C4A962]" /> Services
          </h2>
          <div className="flex flex-wrap gap-2">
            {provider.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-[#C4A962]/10 text-[#C4A962] text-sm rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 py-3 bg-[#C4A962] text-[#0D0D0D] font-medium rounded-lg hover:bg-[#D4B972] transition-colors">
            Contact Provider
          </button>
          <button className="py-3 px-6 border border-[#C4A962]/30 text-[#C4A962] rounded-lg hover:bg-[#C4A962]/10 transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
);

const TagIcon = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
    <circle cx="7" cy="7" r="1" />
  </svg>
);

const FederationView = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Housing', 'Employment', 'Education', 'Health', 'Women', 'Faith-Based', 'Residential'];

  const filtered = reentryProviders.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filter === 'All' || p.tags.includes(filter) || p.services.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {selectedProvider && (
        <ProviderDetail provider={selectedProvider} onClose={() => setSelectedProvider(null)} />
      )}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-light text-[#F5F3EF] mb-2">Community Network</h1>
          <p className="text-[#8B8680]">{reentryProviders.length} reentry organizations in Tennessee</p>
        </div>
      </div>

      <div className="relative mb-8">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B8680]" />
        <input
          type="text"
          placeholder="Search organizations, services, or locations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-[#1A1A1A] border border-[#C4A962]/20 rounded-lg text-[#F5F3EF] placeholder-[#8B8680] focus:outline-none focus:border-[#C4A962]/50"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map(f => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter === f 
                ? 'bg-[#C4A962] text-[#0D0D0D]' 
                : 'bg-[#1A1A1A] text-[#8B8680] hover:text-[#F5F3EF] border border-[#C4A962]/20'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(provider => (
          <ProviderCard 
            key={provider.id} 
            provider={provider} 
            onClick={() => setSelectedProvider(provider)}
          />
        ))}
      </div>
    </div>
  );
};

const KnowledgeView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'IDs & Documents', 'Housing', 'Employment', 'Education', 'Health', 'Family', 'Legal', 'Finance', 'Skills', 'Transport'];

  const filtered = knowledgeEntries.filter(k => {
    const matchesSearch = k.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'All' || k.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-light text-[#F5F3EF] mb-2">Resource Library</h1>
          <p className="text-[#8B8680]">Guides, directories, and step-by-steps for every step home</p>
        </div>
      </div>

      <div className="relative mb-8">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B8680]" />
        <input
          type="text"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-[#1A1A1A] border border-[#C4A962]/20 rounded-lg text-[#F5F3EF] placeholder-[#8B8680] focus:outline-none focus:border-[#C4A962]/50"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(c => (
          <button 
            key={c}
            onClick={() => setFilter(c)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              filter === c 
                ? 'bg-[#C4A962] text-[#0D0D0D]' 
                : 'bg-[#1A1A1A] text-[#8B8680] hover:text-[#F5F3EF] border border-[#C4A962]/20'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(entry => {
          const Icon = entry.icon;
          return (
            <div key={entry.id} className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-6 hover:border-[#C4A962]/40 transition-all cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C4A962]/10 flex items-center justify-center text-[#C4A962]">
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#F5F3EF] font-medium mb-1 group-hover:text-[#C4A962] transition-colors">{entry.title}</h3>
                  <p className="text-xs text-[#8B8680] mb-2">{entry.contributor} · {entry.category}</p>
                  <p className="text-xs text-[#8B8680] flex items-center gap-1">
                    <Eye size={12} /> {entry.views} views
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const OmegaView = () => (
  <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="mb-8">
      <h1 className="text-2xl font-light text-[#F5F3EF] mb-2">My Journey</h1>
      <p className="text-[#8B8680]">Your path from release to reintegration — tracked and supported</p>
    </div>

    {/* Journey Stages */}
    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-6 mb-8">
      <h2 className="text-lg font-medium text-[#F5F3EF] mb-6 flex items-center gap-2">
        <Rocket size={18} className="text-[#C4A962]" /> Journey Stages
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        {journeyStages.map((stage, i) => (
          <div key={stage.name} className={`flex-1 p-4 rounded-lg border ${
            stage.status === 'completed' ? 'border-[#5A8F6E]/30 bg-[#5A8F6E]/5' :
            stage.status === 'active' ? 'border-[#C4A962]/30 bg-[#C4A962]/5' :
            'border-[#8B8680]/20 bg-[#0D0D0D]'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {stage.status === 'completed' ? <CheckCircle size={16} className="text-[#5A8F6E]" /> :
               stage.status === 'active' ? <Target size={16} className="text-[#C4A962]" /> :
               <Clock size={16} className="text-[#8B8680]" />}
              <span className={`text-sm font-medium ${
                stage.status === 'completed' ? 'text-[#5A8F6E]' :
                stage.status === 'active' ? 'text-[#C4A962]' :
                'text-[#8B8680]'
              }`}>{stage.name}</span>
            </div>
            <p className="text-xs text-[#8B8680]">{stage.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Domain Progress */}
    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-6 mb-8">
      <h2 className="text-lg font-medium text-[#F5F3EF] mb-6 flex items-center gap-2">
        <BarChart3 size={18} className="text-[#C4A962]" /> Life Domains
      </h2>
      <div className="space-y-4">
        {domainProgress.map(domain => {
          const Icon = domain.icon;
          return (
            <div key={domain.name} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C4A962]/10 flex items-center justify-center text-[#C4A962]">
                <Icon size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-[#F5F3EF]">{domain.name}</span>
                  <span className="text-xs text-[#8B8680]">{domain.status}</span>
                </div>
                <div className="h-2 bg-[#0D0D0D] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#C4A962] to-[#9B6B4F] rounded-full transition-all"
                    style={{ width: `${domain.progress}%` }}
                  />
                </div>
              </div>
              <span className="text-sm text-[#C4A962] w-12 text-right">{domain.progress}%</span>
            </div>
          );
        })}
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[
        { label: "Resources Accessed", value: omegaMetrics.resourcesAccessed, icon: BookOpen },
        { label: "Connections Made", value: omegaMetrics.connectionsMade, icon: Users },
        { label: "Days in Stage", value: omegaMetrics.daysInStage, icon: Calendar },
        { label: "Goals Completed", value: omegaMetrics.goalsCompleted, icon: CheckCircle },
        { label: "Conversations", value: omegaMetrics.conversations, icon: MessageCircle },
        { label: "Providers Contacted", value: omegaMetrics.providersContacted, icon: Phone },
      ].map(stat => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-4 text-center">
            <Icon size={20} className="text-[#C4A962] mx-auto mb-2" />
            <div className="text-2xl font-light text-[#F5F3EF]">{stat.value}</div>
            <div className="text-xs text-[#8B8680]">{stat.label}</div>
          </div>
        );
      })}
    </div>
  </div>
);

const IAmView = () => (
  <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="mb-8">
      <h1 className="text-2xl font-light text-[#F5F3EF] mb-2">My Profile</h1>
      <p className="text-[#8B8680]">Your story, your strengths, your journey</p>
    </div>

    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-8 mb-6">
      <div className="flex items-start gap-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9B6B4F] to-[#4A7C8C] flex items-center justify-center text-[#F5F3EF] text-3xl font-light">
          {userProfile.name[0]}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-medium text-[#F5F3EF] mb-1">{userProfile.name}</h1>
          <p className="text-[#8B8680] mb-4">Released {new Date(userProfile.releaseDate).toLocaleDateString()} · {userProfile.currentStage}</p>
          <p className="text-[#F5F3EF]/80 text-sm leading-relaxed">{userProfile.bio}</p>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-6 mb-6">
      <h2 className="text-lg font-medium text-[#F5F3EF] mb-4 flex items-center gap-2">
        <Target size={18} className="text-[#C4A962]" /> Top Goals
      </h2>
      <div className="flex flex-wrap gap-2">
        {userProfile.topGoals.map(goal => (
          <span key={goal} className="px-3 py-1.5 bg-[#C4A962]/10 text-[#C4A962] text-sm rounded-lg">
            {goal}
          </span>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-6 mb-6">
      <h2 className="text-lg font-medium text-[#F5F3EF] mb-4 flex items-center gap-2">
        <Sparkle size={18} className="text-[#C4A962]" /> My Dimensions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(userProfile.dimensions).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-2">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#C4A962" strokeWidth="2" opacity="0.2"/>
                <circle 
                  cx="50" cy="50" r="45" fill="none" stroke="#C4A962" strokeWidth="3"
                  strokeDasharray={`${value * 10 * 2.83} 283`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
                <text x="50" y="50" textAnchor="middle" dy="0.3em" fill="#C4A962" fontSize="20" fontWeight="300">
                  {value}
                </text>
              </svg>
            </div>
            <h3 className="text-[#F5F3EF] text-sm capitalize">{key}</h3>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-6">
      <h2 className="text-lg font-medium text-[#F5F3EF] mb-4 flex items-center gap-2">
        <Layers size={18} className="text-[#C4A962]" /> Tags & Identities
      </h2>
      <div className="flex flex-wrap gap-2">
        {userProfile.tags.map(tag => (
          <span key={tag} className="px-3 py-1.5 bg-[#4A7C8C]/10 text-[#4A7C8C] text-sm rounded-lg">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ChatView = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey Marcus. I'm Re-Entre. I'm here to help you navigate — housing, jobs, IDs, family, whatever's on your mind. What's going on today?", sender: 'bot' }
  ]);
  const [selectedOpener, setSelectedOpener] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleOpenerClick = (opener) => {
    setSelectedOpener(opener.id);
    setMessages(prev => [...prev, { id: Date.now(), text: opener.text, sender: 'user' }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = simulatedResponses[opener.text] || "I'm here to help with that. Let me find the right information for you.";
      setMessages(prev => [...prev, { id: Date.now() + 1, text: response, sender: 'bot' }]);
      setIsTyping(false);
      setSelectedOpener(null);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-[#0D0D0D] z-50 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-[#C4A962]/20">
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="text-[#8B8680] hover:text-[#F5F3EF]">
            <ChevronLeft size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9B6B4F] to-[#4A7C8C] flex items-center justify-center">
            <Bot size={16} className="text-[#F5F3EF]" />
          </div>
          <div>
            <h3 className="text-[#F5F3EF] font-medium">Re-Entre</h3>
            <p className="text-xs text-[#8B8680]">{isTyping ? 'Typing...' : 'Online'}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-[#8B8680] hover:text-[#F5F3EF]">
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-xl ${
              msg.sender === 'user' 
                ? 'bg-[#C4A962] text-[#0D0D0D]' 
                : 'bg-[#1A1A1A] text-[#F5F3EF] border border-[#C4A962]/20'
            }`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-[#1A1A1A] border border-[#C4A962]/20 rounded-xl p-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#C4A962] rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-[#C4A962] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-[#C4A962] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-[#C4A962]/20">
        <div className="flex flex-wrap gap-2 mb-3">
          {chatOpeners.map(opener => {
            const Icon = opener.icon;
            return (
              <button
                key={opener.id}
                onClick={() => handleOpenerClick(opener)}
                disabled={isTyping || selectedOpener === opener.id}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all ${
                  selectedOpener === opener.id
                    ? 'bg-[#C4A962]/30 text-[#C4A962]'
                    : 'bg-[#1A1A1A] text-[#8B8680] hover:text-[#F5F3EF] hover:bg-[#C4A962]/10 border border-[#C4A962]/20'
                }`}
              >
                <Icon size={14} />
                {opener.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const HomeView = ({ onStartChat }) => (
  <div className="max-w-6xl mx-auto px-4 py-8">
    <Hero onStartChat={onStartChat} />

    {/* Quick Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {[
        { label: "Days Home", value: 95, icon: Calendar },
        { label: "Goals Done", value: 4, icon: CheckCircle },
        { label: "Resources", value: 23, icon: BookOpen },
        { label: "Connections", value: 7, icon: Users },
      ].map(stat => {
        const Icon = stat.icon;
        return (
          <div key={stat.label} className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-4 text-center">
            <Icon size={20} className="text-[#C4A962] mx-auto mb-2" />
            <div className="text-2xl font-light text-[#F5F3EF]">{stat.value}</div>
            <div className="text-xs text-[#8B8680]">{stat.label}</div>
          </div>
        );
      })}
    </div>

    {/* Quick Actions */}
    <div className="mt-8">
      <h2 className="text-xl font-light text-[#F5F3EF] mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Find Housing", icon: Building2, color: "#C4A962" },
          { label: "Get an ID", icon: FileText, color: "#9B6B4F" },
          { label: "Find a Job", icon: Briefcase, color: "#4A7C8C" },
          { label: "Talk to Someone", icon: MessageCircle, color: "#5A8F6E" },
        ].map(action => {
          const Icon = action.icon;
          return (
            <button 
              key={action.label}
              onClick={action.label === "Talk to Someone" ? onStartChat : undefined}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#C4A962]/20 rounded-xl p-4 hover:border-[#C4A962]/40 transition-all"
            >
              <Icon size={24} style={{ color: action.color }} className="mx-auto mb-2" />
              <span className="text-sm text-[#F5F3EF]">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>

    {/* Featured Providers */}
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-light text-[#F5F3EF]">Featured Community</h2>
        <button className="text-sm text-[#C4A962] hover:text-[#D4B972]">View All →</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {reentryProviders.filter(p => p.featured).map(provider => (
          <ProviderCard key={provider.id} provider={provider} onClick={() => {}} compact />
        ))}
      </div>
    </div>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F3EF] font-sans">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="pb-24 md:pt-20">
        {activeTab === 'home' && <HomeView onStartChat={() => setChatOpen(true)} />}
        {activeTab === 'federation' && <FederationView />}
        {activeTab === 'knowledge' && <KnowledgeView />}
        {activeTab === 'omega' && <OmegaView />}
        {activeTab === 'iam' && <IAmView />}
      </main>

      {chatOpen && <ChatView onClose={() => setChatOpen(false)} />}

      {!chatOpen && (
        <button 
          onClick={() => setChatOpen(true)}
          className="fixed bottom-20 right-4 md:bottom-8 md:right-8 w-14 h-14 bg-[#C4A962] rounded-full flex items-center justify-center shadow-lg hover:bg-[#D4B972] transition-colors z-40"
        >
          <MessageCircle size={24} className="text-[#0D0D0D]" />
        </button>
      )}
    </div>
  );
};

export default App;
