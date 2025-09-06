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
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-primary">
                Capacita IA
              </span>
              <br />
              <span className="text-foreground">
                O Futuro da Educação em IA
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transforme sua carreira com os melhores cursos de Inteligência Artificial. 
              Aprenda com especialistas e desenvolva as habilidades mais procuradas do mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/cursos">
                <Button size="lg" className="text-lg px-8">
                  Explorar Cursos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que escolher o Capacita IA?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nossa plataforma oferece a melhor experiência de aprendizado em IA, 
              com metodologias inovadoras e conteúdo sempre atualizado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-accent transition-all duration-300 group">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cursos em Destaque</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Descubra nossos cursos mais populares e comece sua jornada na Inteligência Artificial hoje mesmo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/cursos">
              <Button size="lg" variant="outline">
                Ver Todos os Cursos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Sobre o Programa Capacita IA</h2>
              <p className="text-muted-foreground leading-relaxed">
                O Capacita IA é um programa inovador de educação em Inteligência Artificial, 
                desenvolvido para democratizar o acesso ao conhecimento em IA e formar os 
                profissionais do futuro.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa missão é transformar vidas através da educação de qualidade, oferecendo 
                cursos práticos e atualizados com as últimas tendências tecnológicas do mercado.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card border rounded-lg">
                  <div className="text-2xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">Alunos Formados</div>
                </div>
                <div className="text-center p-4 bg-card border rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Cursos Disponíveis</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Benefícios Exclusivos</h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Home;