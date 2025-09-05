import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, BookOpen } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  category: string;
  image?: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const levelColors = {
    'Iniciante': 'bg-accent/20 text-accent-foreground border-accent/30',
    'Intermediário': 'bg-primary/20 text-primary-foreground border-primary/30',
    'Avançado': 'bg-destructive/20 text-destructive-foreground border-destructive/30'
  };

  return (
    <Card className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2">
      <CardHeader className="p-0">
        <div className="relative h-48 bg-gradient-primary rounded-t-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <BookOpen className="h-16 w-16 text-white/80" />
          </div>
          <Badge 
            className={`absolute top-3 left-3 ${levelColors[course.level]}`}
          >
            {course.level}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{course.category}</p>
        </div>
        
        <p className="text-sm text-foreground/70 line-clamp-3">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-3 w-3" />
            <span>{course.students} alunos</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 fill-current text-yellow-400" />
            <span>{course.rating}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 space-y-3">
        <Link to={`/cursos/${course.id}`} className="w-full">
          <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
            Ver Detalhes
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;