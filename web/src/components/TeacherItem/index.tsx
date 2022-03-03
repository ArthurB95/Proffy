import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars.githubusercontent.com/u/55153181?v=4"
          alt="Arthur Bicalho"
        />
        <div>
          <strong>Arthur Bicalho</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        <br /> <br />
        Totam, omnis, necessitatibus dolore praesentium cumque, in ad fugiat
        dolorem natus delectus nobis accusantium minima eum explicabo molestias
        laboriosam. Dignissimos ad voluptatum culpa corrupti vel possimus, nisi
        cupiditate maiores error illum ipsa nam consectetur provident
        necessitatibus dolorum repellat? Optio nam obcaecati quisquam.
      </p>

      <footer>
        <p>
          Preço/Hora
          <p />
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
