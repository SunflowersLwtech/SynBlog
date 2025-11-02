import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  const projects = [
    {
      title: t('project1.title'),
      period: t('project1.period'),
      role: t('project1.role'),
      highlights: [
        t('project1.highlight1'),
        t('project1.highlight2'),
        t('project1.highlight3')
      ],
      tags: ["Python", "TensorFlow", "PyTorch", "CUDA", "DeepFace", "React"]
    },
    {
      title: t('project2.title'),
      period: t('project2.period'),
      role: t('project2.role'),
      highlights: [
        t('project2.highlight1'),
        t('project2.highlight2'),
        t('project2.highlight3')
      ],
      tags: ["Python", "Flask", "GPT-4", "Deepgram", "WebSocket", "Redis"]
    },
    {
      title: t('project3.title'),
      period: t('project3.period'),
      role: t('project3.role'),
      highlights: [
        t('project3.highlight1'),
        t('project3.highlight2'),
        t('project3.highlight3'),
        t('project3.highlight4')
      ],
      tags: ["NestJS", "PostgreSQL", "Redis", "DeepSeek AI"]
    },
    {
      title: t('project4.title'),
      period: t('project4.period'),
      role: t('project4.role'),
      highlights: [
        t('project4.highlight1'),
        t('project4.highlight2')
      ],
      tags: ["Google Vertex AI", "Gemini", "FastAPI", "Streamlit"]
    },
    {
      title: t('project5.title'),
      period: t('project5.period'),
      role: t('project5.role'),
      highlights: [
        t('project5.highlight1'),
        t('project5.highlight2')
      ],
      tags: ["TypeScript", "RAG", "Ollama", "NestJS"]
    }
  ];

  const skills = [
    {
      category: t('skills.programming'),
      items: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"]
    },
    {
      category: t('skills.backend'),
      items: ["NestJS", "FastAPI", "Node.js", "Socket.IO", language === 'zh' ? "微服务架构" : "Microservices"]
    },
    {
      category: t('skills.frontend'),
      items: ["React", "Redux Toolkit", "HTML/CSS", "Tailwind CSS", "Streamlit"]
    },
    {
      category: t('skills.database'),
      items: ["PostgreSQL", "TypeORM", "SQL Server", "Redis"]
    },
    {
      category: t('skills.ai'),
      items: [
        "TensorFlow", "PyTorch", "CUDA",
        "DeepFace", "FasNet", "RetinaFace", "MTCNN",
        "OpenAI GPT-4", "Deepgram STT/TTS", language === 'zh' ? "RAG架构" : "RAG",
        language === 'zh' ? "GPU加速" : "GPU Acceleration", language === 'zh' ? "性能调优" : "Performance Tuning"
      ]
    },
    {
      category: t('skills.cloud'),
      items: ["Google Cloud Platform", "Vertex AI", "Render", "Git", "Docker"]
    }
  ];

  const certifications = language === 'zh' ? [
    "Python for Everybody 专项课程 (密歇根大学)",
    "C for Everyone: Programming Fundamentals (加州大学圣克鲁斯分校)",
    "Introduction to Networking (NVIDIA)"
  ] : [
    "Python for Everybody Specialization (University of Michigan)",
    "C for Everyone: Programming Fundamentals (UC Santa Cruz)",
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
              {t('nav.about')}
            </a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.skills')}
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.contact')}
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
              className="flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === 'zh' ? 'EN' : '中文'}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold tracking-tight">
                {t('hero.title')} {language === 'zh' && <span className="text-muted-foreground text-3xl">/ LIUWEI</span>}
              </h1>
              <p className="text-xl text-blue-400">{t('hero.subtitle')}</p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed" id="about">
              {t('hero.description')}
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
                alt={t('hero.title')}
                className="relative w-80 h-80 object-cover rounded-2xl border-2 border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8">{t('education.title')}</h2>
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">{t('education.school')}</CardTitle>
            <CardDescription className="text-base">{t('education.period')}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-lg">{t('education.degree')}</p>
            <p className="text-lg font-semibold text-blue-400">{t('education.gpa')}</p>
            <p className="text-muted-foreground">{t('education.scholarship')}</p>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="container py-16" id="projects">
        <h2 className="text-3xl font-bold mb-8">{t('projects.title')}</h2>
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
        <h2 className="text-3xl font-bold mb-8">{t('skills.title')}</h2>
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
        <h2 className="text-3xl font-bold mb-8">{t('certifications.title')}</h2>
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
        <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
        <Card className="border-border/50">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:sunflowerslw0607@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-accent transition-colors"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
                  <p className="font-medium">sunflowerslw0607@gmail.com</p>
                </div>
              </a>
              <a 
                href="tel:+8618355366842"
                className="flex items-center gap-3 p-4 rounded-lg bg-card hover:bg-accent transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.phone')}</p>
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
          <p>{t('footer.copyright')}</p>
        </div>
      </footer>
    </div>
  );
}
