import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Clock, 
  Award, 
  Download, 
  Play, 
  CheckCircle, 
  Calendar,
  Star,
  TrendingUp
} from 'lucide-react';

const StudentArea = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const enrolledCourses = [
    {
      id: '1',
      title: 'Fundamentos de Inteligência Artificial',
      progress: 75,
      status: 'Em Progresso',
      enrolledDate: '2024-01-15',
      completedLessons: 15,
      totalLessons: 20,
      nextLesson: 'Introdução ao Deep Learning'
    },
    {
      id: '2',
      title: 'Python para Data Science',
      progress: 100,
      status: 'Concluído',
      enrolledDate: '2023-11-20',
      completedLessons: 24,
      totalLessons: 24,
      completedDate: '2024-01-10',
      certificateId: 'CERT-2024-001'
    },
    {
      id: '3',
      title: 'Machine Learning na Prática',
      progress: 45,
      status: 'Em Progresso',
      enrolledDate: '2024-02-01',
      completedLessons: 11,
      totalLessons: 25,
      nextLesson: 'Algoritmos de Classificação'
    }
  ];

  const certificates = [
    {
      id: 'CERT-2024-001',
      courseName: 'Python para Data Science',
      issueDate: '2024-01-10',
      credentialId: 'PDS-2024-001-789'
    },
    {
      id: 'CERT-2023-045',
      courseName: 'Ética e Responsabilidade em IA',
      issueDate: '2023-12-15',
      credentialId: 'ERA-2023-045-456'
    }
  ];

  const achievements = [
    { title: 'Primeiro Curso Concluído', date: '2024-01-10', icon: Award },
    { title: 'Estudante Dedicado', date: '2024-01-25', icon: Star },
    { title: 'Progresso Consistente', date: '2024-02-05', icon: TrendingUp }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído':
        return 'bg-accent/20 text-accent-foreground border-accent/30';
      case 'Em Progresso':
        return 'bg-primary/20 text-primary-foreground border-primary/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Layout>
      <div className="py-8 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Área do Aluno
              </span>
            </h1>
            <p className="text-foreground/70">Acompanhe seu progresso e gerencie seus cursos</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:inline-flex">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="courses">Meus Cursos</TabsTrigger>
              <TabsTrigger value="certificates">Certificados</TabsTrigger>
              <TabsTrigger value="achievements">Conquistas</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Cursos Inscritos</p>
                        <p className="text-2xl font-bold">{enrolledCourses.length}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-accent rounded-lg">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Certificados</p>
                        <p className="text-2xl font-bold">{certificates.length}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Horas Estudadas</p>
                        <p className="text-2xl font-bold">156h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-accent rounded-lg">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Progresso Médio</p>
                        <p className="text-2xl font-bold">
                          {Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length)}%
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle>Atividade Recente</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {enrolledCourses.slice(0, 3).map(course => (
                    <div key={course.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-primary rounded">
                          <BookOpen className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{course.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {course.completedLessons}/{course.totalLessons} aulas concluídas
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{course.progress}%</p>
                        <Progress value={course.progress} className="w-24 mt-1" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="courses" className="space-y-6">
              <div className="grid gap-6">
                {enrolledCourses.map(course => (
                  <Card key={course.id} className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold">{course.title}</h3>
                            <Badge className={getStatusColor(course.status)}>
                              {course.status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>Inscrito em {new Date(course.enrolledDate).toLocaleDateString('pt-BR')}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <BookOpen className="h-4 w-4" />
                              <span>{course.completedLessons}/{course.totalLessons} aulas</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progresso</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="w-full" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        {course.status === 'Em Progresso' && course.nextLesson ? (
                          <div className="text-sm">
                            <span className="text-muted-foreground">Próxima aula: </span>
                            <span className="font-medium">{course.nextLesson}</span>
                          </div>
                        ) : course.status === 'Concluído' ? (
                          <div className="flex items-center space-x-2 text-accent">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-sm">Concluído em {new Date(course.completedDate!).toLocaleDateString('pt-BR')}</span>
                          </div>
                        ) : null}
                        
                        <div className="flex space-x-2">
                          {course.status === 'Em Progresso' && (
                            <Button size="sm" className="bg-gradient-primary">
                              <Play className="h-4 w-4 mr-2" />
                              Continuar
                            </Button>
                          )}
                          {course.certificateId && (
                            <Button size="sm" variant="outline">
                              <Award className="h-4 w-4 mr-2" />
                              Certificado
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certificates" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {certificates.map(cert => (
                  <Card key={cert.id} className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-accent rounded-lg flex-shrink-0">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{cert.courseName}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            Emitido em {new Date(cert.issueDate).toLocaleDateString('pt-BR')}
                          </p>
                          <p className="text-xs text-muted-foreground mb-4">
                            ID: {cert.credentialId}
                          </p>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                            <Button size="sm" variant="outline">
                              Verificar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="bg-gradient-card border-border/50 text-center">
                    <CardContent className="p-6">
                      <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                        <achievement.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Conquistado em {new Date(achievement.date).toLocaleDateString('pt-BR')}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default StudentArea;