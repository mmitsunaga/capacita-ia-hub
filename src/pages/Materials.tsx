import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Download, 
  Search, 
  FileText, 
  Video, 
  Image, 
  Archive,
  Calendar,
  Eye,
  Filter
} from 'lucide-react';

const Materials = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const materials = [
    {
      id: '1',
      title: 'Apostila Completa - Fundamentos de IA',
      type: 'PDF',
      course: 'Fundamentos de Inteligência Artificial',
      size: '15.2 MB',
      uploadDate: '2024-01-15',
      downloads: 1250,
      description: 'Material completo sobre os fundamentos da IA, incluindo exercícios práticos.'
    },
    {
      id: '2',
      title: 'Datasets para Machine Learning',
      type: 'ZIP',
      course: 'Machine Learning na Prática',
      size: '45.8 MB',
      uploadDate: '2024-01-20',
      downloads: 890,
      description: 'Conjunto de datasets utilizados nos projetos do curso de ML.'
    },
    {
      id: '3',
      title: 'Apresentação - Redes Neurais',
      type: 'PPTX',
      course: 'Deep Learning e Redes Neurais',
      size: '8.9 MB',
      uploadDate: '2024-01-25',
      downloads: 456,
      description: 'Slides da aula sobre arquiteturas de redes neurais.'
    },
    {
      id: '4',
      title: 'Código Fonte - Projeto Python',
      type: 'ZIP',
      course: 'Python para Data Science',
      size: '2.1 MB',
      uploadDate: '2024-02-01',
      downloads: 2100,
      description: 'Código fonte completo dos projetos desenvolvidos no curso.'
    },
    {
      id: '5',
      title: 'Vídeo Aula - OpenCV Básico',
      type: 'MP4',
      course: 'Computer Vision com OpenCV',
      size: '125.6 MB',
      uploadDate: '2024-02-05',
      downloads: 650,
      description: 'Aula prática sobre processamento de imagens com OpenCV.'
    },
    {
      id: '6',
      title: 'Checklist Ético para IA',
      type: 'PDF',
      course: 'Ética e Responsabilidade em IA',
      size: '3.2 MB',
      uploadDate: '2024-02-10',
      downloads: 920,
      description: 'Guia prático para desenvolvimento ético de sistemas de IA.'
    }
  ];

  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'mp4':
        return <Video className="h-5 w-5 text-blue-500" />;
      case 'zip':
        return <Archive className="h-5 w-5 text-yellow-500" />;
      case 'pptx':
        return <Image className="h-5 w-5 text-orange-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'mp4':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'zip':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'pptx':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || material.type.toLowerCase() === selectedType.toLowerCase();
    
    return matchesSearch && matchesType;
  });

  const materialsByType = materials.reduce((acc, material) => {
    const type = material.type.toLowerCase();
    if (!acc[type]) acc[type] = [];
    acc[type].push(material);
    return acc;
  }, {} as Record<string, typeof materials>);

  return (
    <Layout>
      <div className="py-8 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Materiais e Downloads
              </span>
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Acesse apostilas, códigos, datasets e outros materiais dos cursos. 
              Todo o conteúdo está organizado por curso e categoria.
            </p>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <TabsList>
                <TabsTrigger value="all">Todos os Materiais</TabsTrigger>
                <TabsTrigger value="recent">Recentes</TabsTrigger>
                <TabsTrigger value="popular">Populares</TabsTrigger>
              </TabsList>

              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Pesquisar materiais..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background/50 border-border/50 w-full sm:w-64"
                  />
                </div>
                
                <select 
                  value={selectedType} 
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-3 py-2 bg-background/50 border border-border/50 rounded-md text-sm"
                >
                  <option value="all">Todos os tipos</option>
                  <option value="pdf">PDF</option>
                  <option value="zip">ZIP</option>
                  <option value="mp4">Vídeo</option>
                  <option value="pptx">Apresentação</option>
                </select>
              </div>
            </div>

            <TabsContent value="all" className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{materials.length}</div>
                    <div className="text-sm text-muted-foreground">Total de Materiais</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-accent">{Object.keys(materialsByType).length}</div>
                    <div className="text-sm text-muted-foreground">Tipos de Arquivo</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary">
                      {Math.round(materials.reduce((acc, m) => acc + parseFloat(m.size), 0))} MB
                    </div>
                    <div className="text-sm text-muted-foreground">Tamanho Total</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-accent">
                      {materials.reduce((acc, m) => acc + m.downloads, 0).toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Downloads</div>
                  </CardContent>
                </Card>
              </div>

              {/* Materials List */}
              <div className="grid gap-4">
                {filteredMaterials.map(material => (
                  <Card key={material.id} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0">
                            {getFileIcon(material.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="font-semibold text-lg truncate">{material.title}</h3>
                              <Badge className={getTypeColor(material.type)}>
                                {material.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{material.course}</p>
                            <p className="text-sm text-foreground/70 mb-3">{material.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{new Date(material.uploadDate).toLocaleDateString('pt-BR')}</span>
                              </div>
                              <div>Tamanho: {material.size}</div>
                              <div className="flex items-center space-x-1">
                                <Download className="h-3 w-3" />
                                <span>{material.downloads.toLocaleString()} downloads</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2 flex-shrink-0 ml-4">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            Visualizar
                          </Button>
                          <Button size="sm" className="bg-gradient-primary">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredMaterials.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">📁</div>
                  <h3 className="text-xl font-semibold mb-2">Nenhum material encontrado</h3>
                  <p className="text-foreground/70 mb-4">
                    Tente ajustar os filtros ou pesquisar por outros termos.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedType('all');
                    }}
                    className="bg-gradient-primary"
                  >
                    Ver Todos os Materiais
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="recent" className="space-y-4">
              {materials
                .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
                .slice(0, 5)
                .map(material => (
                  <Card key={material.id} className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {getFileIcon(material.type)}
                          <div>
                            <h3 className="font-semibold">{material.title}</h3>
                            <p className="text-sm text-muted-foreground">{material.course}</p>
                          </div>
                        </div>
                        <Button size="sm" className="bg-gradient-primary">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="popular" className="space-y-4">
              {materials
                .sort((a, b) => b.downloads - a.downloads)
                .slice(0, 5)
                .map(material => (
                  <Card key={material.id} className="bg-gradient-card border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          {getFileIcon(material.type)}
                          <div>
                            <h3 className="font-semibold">{material.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {material.downloads.toLocaleString()} downloads • {material.course}
                            </p>
                          </div>
                        </div>
                        <Button size="sm" className="bg-gradient-primary">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Materials;