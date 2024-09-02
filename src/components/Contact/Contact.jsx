import React from 'react';
import css from './Contact.module.css';

const Contact = () => {
  return (
    <div className={css.contactsPage}>
      <div className="container">
        <h1 className={css.title}>Контакты</h1>

        <div className={css.contactInfo}>
          <div className={css.infoSection}>
            <h2>Наш адрес</h2>
            <p>ул. Музыкальная, 123</p>
            <p>Киев, 01001</p>
            <p>Украина</p>
          </div>

          <div className={css.infoSection}>
            <h2>Свяжитесь с нами</h2>
            <p>Телефон: +380 44 123 4567</p>
            <p>Email: info@guitarshop.com</p>
          </div>

          <div className={css.infoSection}>
            <h2>Часы работы</h2>
            <p>Пн-Пт: 9:00 - 18:00</p>
            <p>Сб: 10:00 - 16:00</p>
            <p>Вс: Выходной</p>
          </div>
        </div>

        <div className={css.contactForm}>
          <h2>Отправить сообщение</h2>
          <form>
            <div className={css.formGroup}>
              <label htmlFor="name">Имя:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="message">Сообщение:</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit" className={css.submitButton}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
