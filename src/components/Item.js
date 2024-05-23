import React, { useState } from 'react';

const Item = () => {
  const [riddles, setRiddles] = useState([
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
  ]);
  const [userAnswers, setUserAnswers] = useState({});
  const [newRiddleData, setNewRiddleData] = useState({
    description: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correct: 1
  });

  const handleAnswerSelection = (riddleId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [riddleId]: answer,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRiddleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addRiddle = () => {
    const newRiddle = {
      id: riddles.length + 1,
      description: newRiddleData.description,
      option1: newRiddleData.option1,
      option2: newRiddleData.option2,
      option3: newRiddleData.option3,
      option4: newRiddleData.option4,
      correct: parseInt(newRiddleData.correct)
    };
    setRiddles((prevRiddles) => [...prevRiddles, newRiddle]);
    // Очищаем данные формы после добавления новой загадки
    setNewRiddleData({
      description: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correct: ''
    });
  };

  return (
    <div>
      {/* Форма для ввода новой загадки */}
      <input type="text" name="description" value={newRiddleData.description} onChange={handleInputChange} placeholder="Описание загадки" />
      <input type="text" name="option1" value={newRiddleData.option1} onChange={handleInputChange} placeholder="Вариант ответа 1" />
      <input type="text" name="option2" value={newRiddleData.option2} onChange={handleInputChange} placeholder="Вариант ответа 2" />
      <input type="text" name="option3" value={newRiddleData.option3} onChange={handleInputChange} placeholder="Вариант ответа 3" />
      <input type="text" name="option4" value={newRiddleData.option4} onChange={handleInputChange} placeholder="Вариант ответа 4" />
      <input type="number" name="correct" min="1" max="4" value={newRiddleData.correct} onChange={handleInputChange} placeholder="Номер правильного ответа" />
      <button onClick={addRiddle}>Добавить новую загадку</button>

      {/* Отображение загадок */}
      {riddles.map((riddle) => {
        const userAnswer = userAnswers[riddle.id];
        const isCorrect = userAnswer === riddle.correct;
        const feedback = isCorrect ? 'Правильный ответ!' : 'Вы ответили неправильно';

        return (
          <div key={riddle.id} className="riddle-container">
            <h3 className="riddle-description">{riddle.description} </h3>
            <ol className="answer-options">
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 1)}>
                  {riddle.option1}
                </button>
              </li>
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 2)}>
                  {riddle.option2}
                </button>
              </li>
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 3)}>
                  {riddle.option3}
                </button>
              </li>
              <li>
                <button className="answer-button" onClick={() => handleAnswerSelection(riddle.id, 4)}>
                  {riddle.option4}
                </button>
              </li>
              {/* Остальные варианты ответов... */}
            </ol>
            {userAnswer && <p className="feedback">{feedback}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Item;
