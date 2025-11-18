import { useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const quotes = [
  {
    text: "Счастье — это не что-то готовое. Оно происходит из ваших собственных действий.",
    author: "Далай Лама"
  },
  {
    text: "Жизнь — это то, что происходит с вами, пока вы строите другие планы.",
    author: "Джон Леннон"
  },
  {
    text: "Не важно, как медленно ты идёшь, главное — что ты не останавливаешься.",
    author: "Конфуций"
  },
  {
    text: "Успех — это способность идти от неудачи к неудаче, не теряя энтузиазма.",
    author: "Уинстон Черчилль"
  },
  {
    text: "Единственный способ делать великую работу — любить то, что вы делаете.",
    author: "Стив Джобс"
  },
  {
    text: "Мы становимся тем, о чём думаем.",
    author: "Эрл Найтингейл"
  },
  {
    text: "Начинайте с того места, где вы сейчас находитесь, используйте то, что у вас есть, делайте то, что можете.",
    author: "Артур Эш"
  },
  {
    text: "Лучшее время посадить дерево было 20 лет назад. Второе лучшее время — сегодня.",
    author: "Китайская пословица"
  }
];

const Quotes = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (index: number) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-everyday-cream via-everyday-beige to-everyday-warmGray py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-everyday-softBlack mb-4">
            Галерея мудрости
          </h1>
          <p className="text-lg text-everyday-darkBrown">
            Вдохновляющие цитаты великих людей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/80 backdrop-blur-sm border-everyday-brown/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-everyday-green to-everyday-darkGreen opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <button
                onClick={() => toggleFavorite(index)}
                className="absolute top-4 right-4 text-everyday-brown hover:text-everyday-darkBrown transition-colors"
              >
                <Icon 
                  name={favorites.includes(index) ? "Heart" : "Heart"} 
                  size={24}
                  className={favorites.includes(index) ? "fill-red-500 text-red-500" : ""}
                />
              </button>

              <div className="mb-8">
                <Icon 
                  name="Quote" 
                  size={32} 
                  className="text-everyday-green/40 mb-4"
                />
                <p className="text-lg font-serif text-everyday-softBlack leading-relaxed">
                  {quote.text}
                </p>
              </div>

              <div className="border-t border-everyday-brown/10 pt-4">
                <p className="text-sm font-sans font-medium text-everyday-darkBrown">
                  — {quote.author}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {favorites.length > 0 && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-everyday-brown/20">
              <Icon name="Heart" size={20} className="text-red-500 fill-red-500" />
              <span className="text-everyday-darkBrown font-medium">
                Избранных цитат: {favorites.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quotes;
