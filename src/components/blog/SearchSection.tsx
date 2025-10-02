import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

// Blog posts data for search functionality
const blogPosts = [
  {
    id: 1,
    title: "CRISPR-Cas9",
    description: "Revolutionary gene editing technology transforming medicine and biology",
    keywords: ["gene", "editing", "CRISPR", "medicine", "biology", "DNA", "revolutionary", "technology"]
  },
  {
    id: 2,
    title: "AI Chips: A Step Forward to Transforming Computing World",
    description: "Next-generation AI processors revolutionizing computational capabilities",
    keywords: ["AI", "chips", "computing", "processors", "artificial intelligence", "technology", "computational"]
  },
  {
    id: 3,
    title: "Wireless Electricity",
    description: "The future of power transmission without cables",
    keywords: ["wireless", "electricity", "power", "transmission", "cables", "energy", "future"]
  },
  {
    id: 4,
    title: "Qubits: Heart of A Quantum Computer",
    description: "Understanding the fundamental building blocks of quantum computing",
    keywords: ["qubits", "quantum", "computer", "computing", "technology", "physics", "fundamental"]
  },
  {
    id: 5,
    title: "Euthanasia Coaster",
    description: "Engineering design meets ethical philosophy in this thought-provoking concept",
    keywords: ["euthanasia", "coaster", "engineering", "design", "ethics", "philosophy", "concept"]
  },
  {
    id: 6,
    title: "Neural Implant",
    description: "Brain-computer interfaces bridging the gap between mind and machine",
    keywords: ["neural", "implant", "brain", "computer", "interface", "technology", "biomedical"]
  },
  {
    id: 7,
    title: "James Webb Space Telescope",
    description: "Unveiling the mysteries of the cosmos with unprecedented clarity",
    keywords: ["James Webb", "telescope", "space", "cosmos", "astronomy", "telescope", "universe"]
  },
  {
    id: 8,
    title: "Virtual Reality",
    description: "Immersive technologies reshaping human interaction with digital worlds",
    keywords: ["virtual", "reality", "VR", "immersive", "technology", "digital", "interaction"]
  },
  {
    id: 9,
    title: "Switched Reluctance Motors",
    description: "Efficient and robust motor technology for modern applications",
    keywords: ["motor", "reluctance", "switched", "efficiency", "technology", "electrical", "engineering"]
  }
];

interface SearchSectionProps {
  onSearch?: (query: string) => void;
}

export function SearchSection({ onSearch }: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof blogPosts>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const filtered = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.keywords.some(keyword => 
          keyword.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
    }
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: typeof blogPosts[0]) => {
    setSearchQuery(suggestion.title);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(suggestion.title);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full px-8 py-6 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-2xl" ref={searchRef}>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search articles, technologies, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 border-2 border-[#0781C2]/20 rounded-xl px-4 py-3 pr-10 focus:border-[#0781C2] focus:ring-2 focus:ring-[#0781C2]/20 transition-all duration-300 shadow-md"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <Button
              onClick={handleSearch}
              className="bg-[#0781C2] hover:bg-[#0A5782] text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Search Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto">
              <div className="p-2">
                <div className="text-xs text-gray-500 px-3 py-2 border-b border-gray-100">
                  Suggested Articles ({suggestions.length})
                </div>
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-3 py-3 hover:bg-[#89FFF1]/20 rounded-lg transition-colors group"
                  >
                    <div className="font-medium text-gray-800 group-hover:text-[#0781C2] transition-colors">
                      {suggestion.title}
                    </div>
                    <div className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {suggestion.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No results message */}
          {showSuggestions && suggestions.length === 0 && searchQuery.trim().length > 1 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50">
              <div className="p-4 text-center text-gray-500">
                No articles found for "{searchQuery}"
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}