import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Download, 
  Play,
  CheckCircle,
  Award,
  Calendar,
  Target,
  Lightbulb
} from 'lucide-react';
import { toast } from 'sonner';

const CourseDetail = () => {
  const { id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Mock course data - in a real app, this would come from an API
  const course = {
    id: id || '1',
    title: 'Fundamentos de Inteligência Artificial',
    description: 'Um curso abrangente que introduce os conceitos fundamentais da Inteligência Artificial, desde os princípios básicos até aplicações práticas no mundo real.',
    longDescription: 'Este curso oferece uma jornada completa pelos fundamentos da Inteligência Artificial. Você aprenderá sobre a história da IA, algoritmos de machine learning, redes neurais, processamento de linguagem natural e visão computacional. O curso é projetado para iniciantes, mas também oferece insights valiosos para profissionais que desejam solidificar seus conhecimentos.',
    instructor: 'Dr. Ana Silva',
    duration: '8 semanas',
    students: 1250,
    rating: 4.8,
    level: 'Iniciante',
    category: 'Inteligência Artificial',
    price: 'Gratuito',
    startDate: '2024-03-01',
    workload: '20 horas',
    certificate: true,
    image: '/course-placeholder.jpg'
  };

  const modules = [
    {
      id: 1,
      title: 'Introdução à Inteligência Artificial',
      lessons: 4,
      duration: '2h 30min',
      completed: true,
      topics: ['História da IA', 'Tipos de IA', 'Aplicações Atuais', 'Futuro da IA']
    },
    {
      id: 2,
      title: 'Machine Learning Básico',
      lessons: 5,
      duration: '3h 15min',
      completed: true,
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Algoritmos Básicos', 'Avaliação de Modelos', 'Overfitting']
    },
    {
      id: 3,
      title: 'Redes Neurais Fundamentais',
      lessons: 4,
      duration: '2h 45min',
      completed: false,
      topics: ['Perceptron', 'Backpropagation', 'Arquiteturas Básicas', 'Funções de Ativação']
    },
    {
      id: 4,
      title: 'Processamento de Linguagem Natural',
      lessons: 3,
      duration: '2h 10min',
      completed: false,
      topics: ['Tokenização', 'Análise de Sentimento', 'Modelos de Linguagem']
    },
    {
      id: 5,
      title: 'Visão Computacional',
      lessons: 4,
      duration: '3h 00min',
      completed: false,
      topics: ['Processamento de Imagens', 'CNNs Básicas', 'Detecção de Objetos', 'Reconhecimento Facial']
    }
  ];

  const materials = [
    {
      id: 1,
      title: 'Apostila Completa do Curso',
      type: 'PDF',
      size: '15.2 MB'
    },
    {
      id: 2,
      title: 'Códigos de Exemplo',
      type: 'ZIP',
      size: '8.5 MB'
    },
    {
      id: 3,
      title: 'Datasets para Prática',
      type: 'ZIP',
      size: '25.1 MB'
    },
    {
      id: 4,
      title: 'Slides das Aulas',
      type: 'PPTX',
      size: '12.3 MB'
    }
  ];

  const requirements = [
    'Conhecimento básico de matemática',
    'Noções de programação (preferencialmente Python)',
    'Acesso a computador com internet',
    'Interesse em tecnologia e inovação'
  ];

  const learningObjectives = [
    'Compreender os conceitos fundamentais de IA',
    'Aplicar algoritmos básicos de machine learning',
    'Desenvolver projetos práticos de IA',
    'Analisar casos de uso reais da indústria',
    'Preparar-se para cursos avançados'
  ];

  const completedModules = modules.filter(m => m.completed).length;
  const totalModules = modules.length;
  const progress = (completedModules / totalModules) * 100;

  const handleEnroll = () => {
    setIsEnrolled(true);
    toast.success('Inscrição realizada com sucesso!', {
      description: 'Você já pode começar a estudar. Acesse a área do aluno para acompanhar seu progresso.'
    });
  };

  return (
    <Layout>
      <div className="py-8 px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className="bg-primary/20 text-primary-foreground border-primary/30">
                    {course.level}
                  </Badge>
                  <Badge variant="outline">{course.category}</Badge>
                </div>
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  {course.longDescription}
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} alunos</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-current text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.workload}</span>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                <span>Instrutor: </span>
                <span className="font-medium text-foreground">{course.instructor}</span>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-card border-border/50 sticky top-24">
                <CardHeader>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">{course.price}</div>
                    {course.certificate && (
                      <div className="flex items-center justify-center space-x-2 text-accent">
                        <Award className="h-4 w-4" />
                        <span className="text-sm">Certificado incluso</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEnrolled && (
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Seu Progresso</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="w-full" />
                      <p className="text-xs text-muted-foreground">
                        {completedModules} de {totalModules} módulos concluídos
                      </p>
                    </div>
                  )}
                  
                  <Button 
                    className={`w-full ${
                      isEnrolled 
                        ? 'bg-gradient-accent' 
                        : 'bg-gradient-primary hover:shadow-glow'
                    } transition-all duration-300`}
                    onClick={isEnrolled ? undefined : handleEnroll}
                  >
                    {isEnrolled ? (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Continuar Estudos
                      </>
                    ) : (
                      'Inscrever-se Gratuitamente'
                    )}
                  </Button>
                  
                  <div className="text-center space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Início: {new Date(course.startDate).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <p>Acesso vitalício ao conteúdo</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="modules" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="modules">Módulos</TabsTrigger>
              <TabsTrigger value="materials">Materiais</TabsTrigger>
              <TabsTrigger value="requirements">Requisitos</TabsTrigger>
              <TabsTrigger value="objectives">Objetivos</TabsTrigger>
            </TabsList>

            <TabsContent value="modules" className="space-y-4">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Conteúdo do Curso</h3>
                <p className="text-foreground/70">
                  {modules.length} módulos • {modules.reduce((acc, m) => acc + m.lessons, 0)} aulas • 
                  {modules.reduce((acc, m) => {
                    const [hours, minutes] = m.duration.split('h ');
                    return acc + parseInt(hours) + (parseInt(minutes) || 0) / 60;
                  }, 0).toFixed(1)}h de conteúdo
                </p>
              </div>

              {modules.map((module) => (
                <Card key={module.id} className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold">{module.title}</h4>
                          {module.completed && (
                            <CheckCircle className="h-5 w-5 text-accent" />
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <span>{module.lessons} aulas</span>
                          <span>{module.duration}</span>
                        </div>
                        <div className="space-y-1">
                          {module.topics.map((topic, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm text-foreground/70">
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {isEnrolled && (
                        <Button 
                          size="sm" 
                          variant={module.completed ? "outline" : "default"}
                          className={!module.completed ? "bg-gradient-primary" : ""}
                        >
                          {module.completed ? (
                            <>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Revisar
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Assistir
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="materials" className="space-y-4">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Materiais do Curso</h3>
                <p className="text-foreground/70">
                  Downloads disponíveis para complementar seus estudos
                </p>
              </div>

              {materials.map((material) => (
                <Card key={material.id} className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-primary rounded-lg">
                          <Download className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{material.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {material.type} • {material.size}
                          </p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        disabled={!isEnrolled}
                        className={isEnrolled ? "hover:bg-primary/5 border-primary/30" : ""}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        {isEnrolled ? 'Download' : 'Inscreva-se'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="requirements" className="space-y-4">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Pré-requisitos</h3>
                <p className="text-foreground/70">
                  O que você precisa saber antes de começar este curso
                </p>
              </div>

              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {requirements.map((req, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/70">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="objectives" className="space-y-4">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Objetivos de Aprendizagem</h3>
                <p className="text-foreground/70">
                  O que você será capaz de fazer ao final deste curso
                </p>
              </div>

              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {learningObjectives.map((objective, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-1 bg-gradient-primary rounded-full mt-1">
                          <Target className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-foreground/70">{objective}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;