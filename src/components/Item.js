import React,{ useState }  from 'react';

// масив загадок и возможных ответов на них
const Item = () => {
  const riddles = [
    {
      id: 1,
      description: 'Без рук, без ног, а поет',
      option1: 'Магнитофон',
      option2: 'Рация',
      option3: 'Океан',
      option4: 'Светлячёк',
      correct: 1
    },
    {
      id: 2,
      description: 'Не ветер, а летит.',
      option1: 'Сторож',
      option2: 'Самолет',
      option3: 'Волк',
      option4: 'Птица',
      correct: 2
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
      description: 'Думает как голова, железный но не нож, электрический, но не чайник.',
      option1: 'Телевизор',
      option2: 'Компьютер',
      option3: 'Робот',
      option4: 'Операционная система',
      correct: 2
    },
    {
      id: 5,
      description: 'На зеленой хрупкой ножке вырос шарик у дорожки',
      option1: 'Дерево',
      option2: 'Трава',
      option3: 'Одуванчик', 
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
