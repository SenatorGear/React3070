import React,{ useState }  from 'react';

// масив загадок и возможных ответов на них
const Item = () => {
  const riddles = [
    {
      id: 1,
      description: 'Зимой — звезда, весной — вода.',
      option1: 'Снежинка',
      option2: 'Камета',
      option3: 'Солнце',
      option4: 'Светлячёк',
      correct: 1
    },
    {
      id: 2,
      description: 'Не лает, не кусает, а в дом не пускает.',
      option1: 'Сторож',
      option2: 'Безопасник',
      option3: 'Волк',
      option4: 'Замок',
      correct: 4
    },
    {
      id: 3,
      description: 'Всех я вовремя бужу, хоть часов не завожу.',
      option1: 'Сосед',
      option2: 'Солнце',
      option3: 'Петух',
      option4: 'Рассвет',
      correct: 3
    },
    {
      id: 4,
      description: 'На какой вопрос вы никогда не сможете ответить «да»?',
      option1: 'Ты существуешь?',
      option2: 'Ты спишь?',
      option3: 'Ты человек?',
      option4: 'Ты сдесь?',
      correct: 2
    },
    {
      id: 5,
      description: 'Что растёт вниз, а не вверх?',
      option1: 'Дерево',
      option2: 'Трава',
      option3: 'Корни', 
      option4: 'Гриб',
      correct: 3
    }
  ];
  const [userAnswers, setUserAnswers] = useState({});

  const handleAnswerSelection = (riddleId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [riddleId]: answer,
    }));
  };
  //проверка ответов(сравнивание correct с выбором пользователя по id)
  return (
    <div>
      {riddles.map((riddle) => {
        const userAnswer = userAnswers[riddle.id];
        const isCorrect = userAnswer === riddle.correct;
        const feedback = isCorrect ? 'Правильный ответ!' : 'Вы ответили неправильно';

        //рендеринг страници
        return (
          <div key={riddle.id} className="riddle-container">
            <h3 className="riddle-description">{riddle.description} </h3>
            <ol className="answer-options"  >
              <li>
                <button className="answer-button"
                onClick={() => handleAnswerSelection(riddle.id, 1)}>
                  {riddle.option1}
                </button>
              </li>
              <li>
                <button className="answer-button"
                onClick={() => handleAnswerSelection(riddle.id, 2)}>
                  {riddle.option2}
                </button>
              </li>
              <li>
                <button className="answer-button"
                onClick={() => handleAnswerSelection(riddle.id, 3)}>
                  {riddle.option3}
                </button>
              </li>
              <li>
                <button className="answer-button"
                onClick={() => handleAnswerSelection(riddle.id, 4)}>
                  {riddle.option4}
                </button>
              </li>
            </ol>
            {userAnswer && <p className="feedback">{feedback}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Item;