import React from "react";
import { Image } from "react-bootstrap";
import "./feedback.scss";

export default function Feedback() {
  return (
    <div className="feedback">
      <h3>Відгуки слухачів курсів</h3>
      <div className="feedback-content">
        <div className="left content">
          <div className="img-content">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
              alt="img"
            />
            <h4>Ім’я користувача</h4>
            <p>Посада</p>
          </div>
          <div className="quota">
            <q>
              Bibendum amet aliquam volutpat sagittis ligula adipiscing ut vitae
              lectus fames vel faucibus. Arcu sit tellus faucibus imperdiet ut
              vitae lectus fames. Posuere proin ultrices est amet dis. Auctor
              tristique dui nec faucibus morbi risus.
            </q>
          </div>
        </div>
        <div className="middle content">
          <div className="img-content">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
              alt="img"
            />
            <div>
              <h4>Ім’я користувача</h4>
              <p>Посада</p>
            </div>
          </div>
          <div className="quota-middle">
            <q>
              Bibendum amet aliquam volutpat sagittis ligula adipiscing ut vitae
              lectus fames vel faucibus. Arcu sit tellus faucibus imperdiet ut
              vitae lectus fames. Posuere proin ultrices est amet dis. Auctor
              tristique dui nec faucibus morbi risus.
            </q>
          </div>
        </div>
        <div className="right content">
          <div className="img-content">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/movna-28240.appspot.com/o/education%2Fimage%2045.png?alt=media&token=f4ce7753-f4fc-409c-9562-e416beeb8be7"
              alt="img"
            />
            <h4>Ім’я користувача</h4>
            <p>Посада</p>
          </div>
          <div className="quota">
            <q>
              Bibendum amet aliquam volutpat sagittis ligula adipiscing ut vitae
              lectus fames vel faucibus. Arcu sit tellus faucibus imperdiet ut
              vitae lectus fames. Posuere proin ultrices est amet dis. Auctor
              tristique dui nec faucibus morbi risus.
            </q>
          </div>
        </div>
      </div>
    </div>
  );
}
