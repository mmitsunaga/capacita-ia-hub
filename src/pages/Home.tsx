import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import CourseCard from '@/components/CourseCard';
import { Brain, Target, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'Inteligência Artificial',
      description: 'Aprenda as mais modernas tecnologias de IA com especialistas da área'
    },
    {
      icon: Target,
      title: 'Foco Prático',
      description: 'Projetos reais e cases de sucesso para aplicar o conhecimento imediatamente'
    },
    {
      icon: Award,
      title: 'Certificação',
      description: 'Certificados reconhecidos pelo mercado para impulsionar sua carreira'
    },
    {
      icon: Users,
      title: 'Comunidade',
      description: 'Conecte-se com outros profissionais e expanda sua rede de contatos'
    }
  ];

  const featuredCourses = [
    {
      id: '1',
      title: 'Fundamentos de Inteligência Artificial',
      description: 'Aprenda os conceitos básicos de IA, machine learning e suas aplicações práticas no mercado atual.',
      duration: '8 semanas',
      students: 1250,
      rating: 4.8,
      level: 'Iniciante' as const,
      category: 'Inteligência Artificial'
    },
    {
      id: '2',
      title: 'Machine Learning na Prática',
      description: 'Desenvolva modelos de ML do zero usando Python, scikit-learn e TensorFlow em projetos reais.',
      duration: '12 semanas',
      students: 890,
      rating: 4.9,
      level: 'Intermediário' as const,
      category: 'Machine Learning'
    },
    {
      id: '3',
      title: 'Deep Learning e Redes Neurais',
      description: 'Construa redes neurais avançadas para visão computacional e processamento de linguagem natural.',
      duration: '16 semanas',
      students: 456,
      rating: 4.7,
      level: 'Avançado' as const,
      category: 'Deep Learning'
    }
  ];

  const benefits = [
    'Acesso vitalício aos materiais',
    'Suporte especializado 24/7',
    'Projetos práticos com feedback',
    'Certificação reconhecida',
    'Comunidade exclusiva',
    'Atualizações constantes de conteúdo'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary font-medium">✨ Transforme sua carreira com IA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Capacita IA
              </span>
              <br />
              <span className="text-foreground">
                O Futuro da Educação
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Domine as tecnologias mais revolucionárias do século. Aprenda Inteligência Artificial 
              com os melhores especialistas e projetos práticos do mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/cursos">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-500 text-lg px-10 py-4 rounded-full">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 rounded-full border-2 hover:bg-secondary/50">
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Por que escolher o Capacita IA?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nossa plataforma oferece uma experiência de aprendizado revolucionária, 
              com metodologias inovadoras e tecnologia de ponta.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-glow">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-accent font-medium">🚀 Cursos Populares</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Cursos em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Descubra nossos cursos mais procurados e comece sua jornada na Inteligência Artificial 
              com conteúdo de alta qualidade e projetos práticos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/cursos">
              <Button size="lg" className="bg-gradient-accent hover:shadow-accent transition-all duration-500 text-lg px-10 py-4 rounded-full">
                Ver Todos os Cursos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <span className="text-primary font-medium">💡 Sobre Nós</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">Programa Capacita IA</h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Capacita IA é uma plataforma educacional de vanguarda, criada para democratizar 
                o acesso ao conhecimento em Inteligência Artificial e formar os profissionais 
                que irão moldar o futuro da tecnologia.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Combinamos metodologias pedagógicas inovadoras com as mais recentes descobertas 
                em IA, oferecendo uma experiência de aprendizado única e transformadora.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-elegant border border-primary/10">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">10k+</div>
                  <div className="text-sm font-medium text-muted-foreground">Alunos Certificados</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-elegant border border-accent/10">
                  <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-sm font-medium text-muted-foreground">Cursos Especializados</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-elegant border border-secondary/20">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Benefícios Exclusivos</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-muted-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;