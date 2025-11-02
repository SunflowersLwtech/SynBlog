import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "SynCVE - 实时情绪识别与反欺骗检测系统",
      period: "2025-至今",
      role: "核心开发者 & AI算法负责人",
      highlights: [
        "模型开发与集成: 独立负责技术选型，集成 DeepFace 框架与 FasNet 轻量级反欺骗模型，成功实现对7种核心情绪的高精度分类（准确率达 85-95%）和高效的活体检测功能。",
        "GPU性能优化: 深入研究并配置 CUDA 11.8 环境，实现对 TensorFlow 和 PyTorch 双框架的GPU加速。通过模型并行处理与内存管理优化，将端到端检测延迟从15秒大幅降低至 1-2秒，性能提升 87%。",
        "算法问题解决: 独立排查并解决了在Windows环境下因DLL依赖问题导致的 PyTorch CUDA (WinError 127) 初始化失败，为团队成员编写了详细的环境配置与故障排除文档。"
      ],
      tags: ["Python", "TensorFlow", "PyTorch", "CUDA", "DeepFace", "React"]
    },
    {
      title: "SynPod - AI驱动的智能旅行语音助手平台",
      period: "2025-至今",
      role: "核心开发者 & AI算法负责人",
      highlights: [
        "LLM与语音模型集成: 集成 OpenAI GPT-4 (通过Function Calling) 与 Deepgram Nova-2 (STT) / Aura-2 (TTS) API，构建了一个支持实时语音交互和长篇播客内容生成的双模式AI助手。",
        "高性能系统架构: 为解决外部API速率限制，独立设计并实现了基于 Token Bucket算法 的生产级速率控制器，并构建了一个包含5个状态的有限状态机（FSM）来管理复杂的生成流程。",
        "实时性能优化: 设计并实现了小于 300ms 的低延迟语音中断响应系统，通过持久化WebSocket连接、智能文本分块及内容预取等策略，显著降低了语音交互的延迟。"
      ],
      tags: ["Python", "Flask", "GPT-4", "Deepgram", "WebSocket", "Redis"]
    },
    {
      title: "SynText - AI驱动的企业级实时翻译 SaaS平台",
      period: "2024-至今",
      role: "项目负责人 & 首席架构师",
      highlights: [
        "主导NestJS微服务架构，集成PostgreSQL与Redis，实现核心API毫秒级响应。",
        "自研语音转文本引擎，优化语音识别精度。",
        "集成DeepSeek AI并优化，提升翻译质量。",
        "设计订阅分级与优惠券等商业化功能。"
      ],
      tags: ["NestJS", "PostgreSQL", "Redis", "DeepSeek AI"]
    },
    {
      title: "马来西亚智能旅游AI助手",
      period: "2025-至今",
      role: "核心开发者 & AI算法负责人",
      highlights: [
        "模型微调与应用: 基于 Google Vertex AI 平台对 Gemini 2.5 Flash 模型进行微调，使其更符合马来西亚语境。",
        "设计四阶段对话引擎，并使用FastAPI和Streamlit实现多模态交互。"
      ],
      tags: ["Google Vertex AI", "Gemini", "FastAPI", "Streamlit"]
    },
    {
      title: "AIT Systems - 智能企业管理平台 (与大金工业合作)",
      period: "2025-至今",
      role: "技术负责人",
      highlights: [
        "设计基于TypeScript的微服务架构与RAG技术栈，集成Ollama本地大模型。",
        "通过RBAC确保数据安全，并构建企业级AI助手，提升内部知识检索效率。"
      ],
      tags: ["TypeScript", "RAG", "Ollama", "NestJS"]
    }
  ];

  const skills = [
    {
      category: "编程语言",
      items: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"]
    },
    {
      category: "后端开发",
      items: ["NestJS", "FastAPI", "Node.js", "Socket.IO", "微服务架构"]
    },
    {
      category: "前端开发",
      items: ["React", "Redux Toolkit", "HTML/CSS", "Tailwind CSS", "Streamlit"]
    },
    {
      category: "数据库与缓存",
      items: ["PostgreSQL", "TypeORM", "SQL Server", "Redis"]
    },
    {
      category: "AI与机器学习",
      items: [
        "TensorFlow", "PyTorch", "CUDA",
        "DeepFace", "FasNet", "RetinaFace", "MTCNN",
        "OpenAI GPT-4", "Deepgram STT/TTS", "RAG架构",
        "GPU加速", "性能调优"
      ]
    },
    {
      category: "云原生与DevOps",
      items: ["Google Cloud Platform", "Vertex AI", "Render", "Git", "Docker"]
    }
  ];

  const certifications = [
    "Python for Everybody 专项课程 (密歇根大学)",
    "C for Everyone: Programming Fundamentals (加州大学圣克鲁斯分校)",
    "Introduction to Networking (NVIDIA)"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              LIUWEI
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              关于我
            </a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              项目经历
            </a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              技能
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              联系方式
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tight">
                刘维 <span className="text-muted-foreground text-3xl">/ LIUWEI</span>
              </h1>
              <p className="text-xl text-blue-400">AI Engineer & Full-Stack Developer</p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed" id="about">
              具备扎实的AI理论基础与丰富的项目实战经验，专注于深度学习、计算机视觉与大语言模型应用。
              拥有从模型选型、优化、部署到全栈AI应用开发的完整项目经验。热衷于解决高性能AI系统中的技术挑战，
              对模型开发与训练岗位充满热情，渴望在实际业务场景中创造价值。
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/SunflowersLwtech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/liu-wei-936468338" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
              <img 
                src="/profile.jpg" 
                alt="刘维" 
                className="relative w-80 h-80 object-cover rounded-2xl border-2 border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8">教育背景</h2>
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">马来西亚亚太科技大学 (APU) & 英国德蒙福特大学 (DMU)</CardTitle>
            <CardDescription className="text-base">2024-2027 (预期)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-lg">计算机科学理学荣誉学士 (双学位)</p>
            <p className="text-lg font-semibold text-blue-400">CGPA: 3.87 / 4.00 (一等荣誉学位)</p>
            <p className="text-muted-foreground">荣获入学奖学金 (Entrance Scholarship)</p>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="container py-16" id="projects">
        <h2 className="text-3xl font-bold mb-8">项目经历</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-border/50 hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.role}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">{project.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground leading-relaxed">
                      • {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container py-16" id="skills">
        <h2 className="text-3xl font-bold mb-8">技能</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8">专业证书</h2>
        <Card className="border-border/50">
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-muted-foreground">{cert}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section className="container py-16" id="contact">
        <h2 className="text-3xl font-bold mb-8">联系方式</h2>
        <Card className="border-border/50">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:sunflowerslw0607@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-accent transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-muted-foreground">邮箱</p>
                  <p className="font-medium">sunflowerslw0607@gmail.com</p>
                </div>
              </a>
              <a 
                href="tel:+8618355366842"
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-accent transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-muted-foreground">电话</p>
                  <p className="font-medium">+86 18355366842</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 刘维. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
