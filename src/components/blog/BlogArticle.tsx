import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  content: string;
}

interface BlogArticleProps {
  post: BlogPost;
  onBack: () => void;
}

export function BlogArticle({ post, onBack }: BlogArticleProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 px-8 py-4 border-b">
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Button>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-8 py-12">
        {/* Hero Image */}
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
          <ImageWithFallback
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title and Meta */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{post.description}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Published on January 2, 2025</span>
            <span>•</span>
            <span>IEEE SB NITP</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            {post.content}
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Features</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Applications</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Future Implications</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>

        {/* Tags */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Technology</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Innovation</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Science</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">IEEE</span>
          </div>
        </div>
      </article>
    </div>
  );
}