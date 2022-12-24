import React from "react";

export default function CommunityMessage({ messages, handleClickMessage }) {
  return (
    <div className="community-message">
      <h2>Повідомляйте нам, якщо ви зіткнетеся з образливим контентом</h2>
      <div className="community-message-content">
        <div className="community-message-content-left">
          <p>
            Якщо ви помітили контент, який, на вашу думку, порушує умови нашої
            політики (профілі, публікації, повідомлення, коментарі або на
            будь-якій іншій сторінці сайту), повідомте нам про це. Такі
            повідомлення поряд з автоматичними засобами захисту допомагають нам
            виявляти та запобігати випадкам образливої поведінки.{" "}
          </p>
          <p>
            Закликаємо вас використовувати інструменти для повідомлення про
            порушення з усією відповідальністю та виключно за призначенням.
          </p>
        </div>
        <div className="community-message-content-right">
          {messages.map((message, index) => (
            <div
              key={message?.id}
              className={`paragraph-content ${+index % 2 !== 0 ? "bg" : ""}`}
              onClick={() => handleClickMessage(message, index)}
            >
              <p>{message?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
