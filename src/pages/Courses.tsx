import { useState } from 'react';
import Layout from '@/components/Layout';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      id: '1',
      title: 'Fundamentos de Inteligência Artificial',
      description: 'Aprenda os conceitos básicos de IA, machine learning e suas aplicações práticas no mercado atual. Este curso aborda desde a história da IA até as técnicas mais modernas.',
      duration: '8 semanas',
      students: 1250,
      rating: 4.8,
      level: 'Iniciante' as const,
      category: 'Inteligência Artificial'
    },
    {
      id: '2',
      title: 'Machine Learning na Prática',
      description: 'Desenvolva modelos de ML do zero usando Python, scikit-learn e TensorFlow em projetos reais. Inclui análise de dados, feature engineering e deployment.',
      duration: '12 semanas',
      students: 890,
      rating: 4.9,
      level: 'Intermediário' as const,
      category: 'Machine Learning'
    },
    {
      id: '3',
      title: 'Deep Learning e Redes Neurais',
      description: 'Construa redes neurais avançadas para visão computacional e processamento de linguagem natural. Aprenda CNN, RNN, LSTM e Transformers.',
      duration: '16 semanas',
      students: 456,
      rating: 4.7,
      level: 'Avançado' as const,
      category: 'Deep Learning'
    },
    {
      id: '4',
      title: 'Python para Data Science',
      description: 'Domine Python aplicado à ciência de dados com pandas, numpy, matplotlib e seaborn. Base essencial para trabalhar com IA.',
      duration: '6 semanas',
      students: 2100,
      rating: 4.6,
      level: 'Iniciante' as const,
      category: 'Programação'
    },
    {
      id: '5',
      title: 'Computer Vision com OpenCV',
      description: 'Aprenda a processar e analisar imagens usando OpenCV e técnicas modernas de visão computacional. Inclui projetos práticos.',
      duration: '10 semanas',
      students: 650,
      rating: 4.8,
      level: 'Intermediário' as const,
      category: 'Computer Vision'
    },
    {
      id: '6',
      title: 'Natural Language Processing',
      description: 'Processamento de linguagem natural com spaCy, NLTK e transformers. Construa chatbots, analisadores de sentimento e mais.',
      duration: '14 semanas',
      students: 380,
      rating: 4.9,
      level: 'Avançado' as const,
      category: 'NLP'
    },
    {
      id: '7',
      title: 'Ética e Responsabilidade em IA',
      description: 'Compreenda os aspectos éticos e sociais da IA. Viés algorítmico, privacidade, transparência e desenvolvimento responsável.',
      duration: '4 semanas',
      students: 920,
      rating: 4.5,
      level: 'Iniciante' as const,
      category: 'Ética em IA'
    },
    {
      id: '8',
      title: 'IA para Negócios',
      description: 'Como implementar soluções de IA em empresas. ROI, casos de uso, gestão de projetos de IA e transformação digital.',
      duration: '8 semanas',
      students: 1150,
      rating: 4.7,
      level: 'Intermediário' as const,
      category: 'Business Intelligence'
    }
  ];

  const categories = [
    'Inteligência Artificial',
    'Machine Learning',
    'Deep Learning',
    'Programação',
    'Computer Vision',
    'NLP',
    'Ética em IA',
    'Business Intelligence'
  ];

  const levels = ['Iniciante', 'Intermediário', 'Avançado'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <Layout>
      <div className="py-8 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Catálogo de Cursos
              </span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Explore nossa seleção completa de cursos de Inteligência Artificial. 
              Encontre o curso perfeito para o seu nível e objetivos profissionais.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50 border-border/50"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-none lg:flex lg:space-x-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-background/50 border-border/50">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as categorias</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="bg-background/50 border-border/50">
                  <SelectValue placeholder="Nível" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os níveis</SelectItem>
                  {levels.map(level => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="border-primary/30 hover:bg-primary/5"
            >
              <Filter className="h-4 w-4 mr-2" />
              Limpar Filtros
            </Button>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-foreground/70">
              Mostrando {filteredCourses.length} curso(s) de {courses.length}
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Nenhum curso encontrado</h3>
              <p className="text-foreground/70 mb-4">
                Tente ajustar os filtros ou pesquisar por outros termos.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                }}
                className="bg-gradient-primary"
              >
                Ver Todos os Cursos
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Courses;