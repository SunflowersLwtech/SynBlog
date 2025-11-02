import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  zh: {
    // Navigation
    'nav.about': '关于我',
    'nav.projects': '项目经历',
    'nav.skills': '技能',
    'nav.contact': '联系方式',
    
    // Hero
    'hero.title': '刘维',
    'hero.subtitle': 'AI Engineer & Full-Stack Developer',
    'hero.description': '具备扎实的AI理论基础与丰富的项目实战经验，专注于深度学习、计算机视觉与大语言模型应用。拥有从模型选型、优化、部署到全栈AI应用开发的完整项目经验。热衷于解决高性能AI系统中的技术挑战，对模型开发与训练岗位充满热情，渴望在实际业务场景中创造价值。',
    
    // Education
    'education.title': '教育背景',
    'education.school': '马来西亚亚太科技大学 (APU) & 英国德蒙福特大学 (DMU)',
    'education.period': '2024-2027 (预期)',
    'education.degree': '计算机科学理学荣誉学士 (双学位)',
    'education.gpa': 'CGPA: 3.87 / 4.00 (一等荣誉学位)',
    'education.scholarship': '荣获入学奖学金 (Entrance Scholarship)',
    
    // Projects
    'projects.title': '项目经历',
    
    // Skills
    'skills.title': '技能',
    'skills.programming': '编程语言',
    'skills.backend': '后端开发',
    'skills.frontend': '前端开发',
    'skills.database': '数据库与缓存',
    'skills.ai': 'AI与机器学习',
    'skills.cloud': '云原生与DevOps',
    
    // Certifications
    'certifications.title': '专业证书',
    
    // Contact
    'contact.title': '联系方式',
    'contact.email': '邮箱',
    'contact.phone': '电话',
    
    // Footer
    'footer.copyright': '© 2025 刘维. All rights reserved.',
    
    // Project 1
    'project1.title': 'SynCVE - 实时情绪识别与反欺骗检测系统',
    'project1.period': '2025-至今',
    'project1.role': '核心开发者 & AI算法负责人',
    'project1.highlight1': '模型开发与集成: 独立负责技术选型，集成 DeepFace 框架与 FasNet 轻量级反欺骗模型，成功实现对7种核心情绪的高精度分类（准确率达 85-95%）和高效的活体检测功能。',
    'project1.highlight2': 'GPU性能优化: 深入研究并配置 CUDA 11.8 环境，实现对 TensorFlow 和 PyTorch 双框架的GPU加速。通过模型并行处理与内存管理优化，将端到端检测延迟从15秒大幅降低至 1-2秒，性能提升 87%。',
    'project1.highlight3': '算法问题解决: 独立排查并解决了在Windows环境下因DLL依赖问题导致的 PyTorch CUDA (WinError 127) 初始化失败，为团队成员编写了详细的环境配置与故障排除文档。',
    
    // Project 2
    'project2.title': 'SynPod - AI驱动的智能旅行语音助手平台',
    'project2.period': '2025-至今',
    'project2.role': '核心开发者 & AI算法负责人',
    'project2.highlight1': 'LLM与语音模型集成: 集成 OpenAI GPT-4 (通过Function Calling) 与 Deepgram Nova-2 (STT) / Aura-2 (TTS) API，构建了一个支持实时语音交互和长篇播客内容生成的双模式AI助手。',
    'project2.highlight2': '高性能系统架构: 为解决外部API速率限制，独立设计并实现了基于 Token Bucket算法 的生产级速率控制器，并构建了一个包含5个状态的有限状态机（FSM）来管理复杂的生成流程。',
    'project2.highlight3': '实时性能优化: 设计并实现了小于 300ms 的低延迟语音中断响应系统，通过持久化WebSocket连接、智能文本分块及内容预取等策略，显著降低了语音交互的延迟。',
    
    // Project 3
    'project3.title': 'SynText - AI驱动的企业级实时翻译 SaaS平台',
    'project3.period': '2024-至今',
    'project3.role': '项目负责人 & 首席架构师',
    'project3.highlight1': '主导NestJS微服务架构，集成PostgreSQL与Redis，实现核心API毫秒级响应。',
    'project3.highlight2': '自研语音转文本引擎，优化语音识别精度。',
    'project3.highlight3': '集成DeepSeek AI并优化，提升翻译质量。',
    'project3.highlight4': '设计订阅分级与优惠券等商业化功能。',
    
    // Project 4
    'project4.title': '马来西亚智能旅游AI助手',
    'project4.period': '2025-至今',
    'project4.role': '核心开发者 & AI算法负责人',
    'project4.highlight1': '模型微调与应用: 基于 Google Vertex AI 平台对 Gemini 2.5 Flash 模型进行微调，使其更符合马来西亚语境。',
    'project4.highlight2': '设计四阶段对话引擎，并使用FastAPI和Streamlit实现多模态交互。',
    
    // Project 5
    'project5.title': 'AIT Systems - 智能企业管理平台 (与大金工业合作)',
    'project5.period': '2025-至今',
    'project5.role': '技术负责人',
    'project5.highlight1': '设计基于TypeScript的微服务架构与RAG技术栈，集成Ollama本地大模型。',
    'project5.highlight2': '通过RBAC确保数据安全，并构建企业级AI助手，提升内部知识检索效率。',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'LIUWEI',
    'hero.subtitle': 'AI Engineer & Full-Stack Developer',
    'hero.description': 'Experienced AI engineer with solid theoretical foundation and rich practical experience, specializing in deep learning, computer vision, and large language model applications. Possess complete project experience from model selection, optimization, deployment to full-stack AI application development. Passionate about solving technical challenges in high-performance AI systems, eager to create value in real business scenarios.',
    
    // Education
    'education.title': 'Education',
    'education.school': 'Asia Pacific University (APU) & De Montfort University (DMU)',
    'education.period': '2024-2027 (Expected)',
    'education.degree': 'BSc (Hons) Computer Science (Dual Degree)',
    'education.gpa': 'CGPA: 3.87 / 4.00 (First Class Honours)',
    'education.scholarship': 'Entrance Scholarship Recipient',
    
    // Projects
    'projects.title': 'Projects',
    
    // Skills
    'skills.title': 'Skills',
    'skills.programming': 'Programming Languages',
    'skills.backend': 'Backend Development',
    'skills.frontend': 'Frontend Development',
    'skills.database': 'Database & Cache',
    'skills.ai': 'AI & Machine Learning',
    'skills.cloud': 'Cloud & DevOps',
    
    // Certifications
    'certifications.title': 'Certifications',
    
    // Contact
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    
    // Footer
    'footer.copyright': '© 2025 LIUWEI. All rights reserved.',
    
    // Project 1
    'project1.title': 'SynCVE - Real-time Emotion Recognition & Anti-spoofing System',
    'project1.period': '2025-Present',
    'project1.role': 'Core Developer & AI Algorithm Lead',
    'project1.highlight1': 'Model Development & Integration: Led technical selection, integrated DeepFace framework and FasNet anti-spoofing model, achieving 7-emotion classification with 85-95% accuracy and efficient liveness detection.',
    'project1.highlight2': 'GPU Performance Optimization: Configured CUDA 11.8 environment for TensorFlow/PyTorch dual-framework GPU acceleration. Reduced end-to-end detection latency from 15s to 1-2s through model parallelization and memory optimization, achieving 87% performance improvement.',
    'project1.highlight3': 'Algorithm Problem Solving: Independently resolved PyTorch CUDA initialization failure (WinError 127) on Windows due to DLL dependencies, documented detailed environment configuration and troubleshooting guide for team members.',
    
    // Project 2
    'project2.title': 'SynPod - AI-Powered Intelligent Travel Voice Assistant',
    'project2.period': '2025-Present',
    'project2.role': 'Core Developer & AI Algorithm Lead',
    'project2.highlight1': 'LLM & Voice Model Integration: Integrated OpenAI GPT-4 (via Function Calling) and Deepgram Nova-2 (STT) / Aura-2 (TTS) APIs, built a dual-mode AI assistant supporting real-time voice interaction and long-form podcast generation.',
    'project2.highlight2': 'High-Performance System Architecture: Designed and implemented production-grade rate limiter based on Token Bucket algorithm to address external API rate limits, built a 5-state finite state machine (FSM) to manage complex generation workflows.',
    'project2.highlight3': 'Real-time Performance Optimization: Designed and implemented <300ms low-latency voice interruption response system, significantly reduced voice interaction latency through persistent WebSocket connections, intelligent text chunking, and content prefetching strategies.',
    
    // Project 3
    'project3.title': 'SynText - AI-Powered Enterprise Real-time Translation SaaS Platform',
    'project3.period': '2024-Present',
    'project3.role': 'Project Lead & Chief Architect',
    'project3.highlight1': 'Led NestJS microservice architecture, integrated PostgreSQL and Redis, achieved millisecond-level API response.',
    'project3.highlight2': 'Developed proprietary speech-to-text engine, optimized speech recognition accuracy.',
    'project3.highlight3': 'Integrated and optimized DeepSeek AI, improved translation quality.',
    'project3.highlight4': 'Designed subscription tiers and coupon system for commercialization.',
    
    // Project 4
    'project4.title': 'Malaysia Intelligent Tourism AI Assistant',
    'project4.period': '2025-Present',
    'project4.role': 'Core Developer & AI Algorithm Lead',
    'project4.highlight1': 'Model Fine-tuning & Application: Fine-tuned Gemini 2.5 Flash model on Google Vertex AI platform to better align with Malaysian context.',
    'project4.highlight2': 'Designed 4-stage dialogue engine, implemented multimodal interaction using FastAPI and Streamlit.',
    
    // Project 5
    'project5.title': 'AIT Systems - Intelligent Enterprise Management Platform (Daikin Industries)',
    'project5.period': '2025-Present',
    'project5.role': 'Technical Lead',
    'project5.highlight1': 'Designed TypeScript-based microservice architecture with RAG tech stack, integrated Ollama local LLM.',
    'project5.highlight2': 'Ensured data security through RBAC, built enterprise-grade AI assistant to improve internal knowledge retrieval efficiency.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
