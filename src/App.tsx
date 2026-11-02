import { useState } from 'react'

const skills = [
  { name: 'Python', level: 'Основной язык', icon: 'Py' },
  { name: 'Django', level: 'Backend framework', icon: 'Dj' },
  { name: 'Django REST Framework', level: 'REST API', icon: 'DRF' },
  { name: 'PostgreSQL', level: 'Базы данных', icon: 'DB' },
  { name: 'Docker & Compose', level: 'Контейнеризация', icon: 'Dc' },
  { name: 'AWS', level: 'Облачное развертывание', icon: 'AWS' },
  { name: 'JWT & allauth', level: 'Аутентификация', icon: 'JWT' },
  { name: 'GitHub, Linux, Postman', level: 'Инструменты', icon: 'Git' },
]

const technologies = ['Django REST Framework', 'PostgreSQL', 'AWS', 'Docker', 'Django-Modeltranslation']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">AT</span><span>ADAHAN<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню">☰</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>Обо мне</a>
          <a href="#skills" onClick={closeMenu}>Навыки</a>
          <a href="#projects" onClick={closeMenu}>Проекты</a>
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Связаться <span>↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> ОТКРЫТ К НОВЫМ ВОЗМОЖНОСТЯМ</div>
            <h1>Привет, я<br /><span>Адахан Тиллабаев.</span></h1>
            <h2>Backend-разработчик</h2>
            <p className="hero-text">Создаю серверную часть веб-приложений, разрабатываю API и работаю с базами данных. Мой основной стек — Python, Django и PostgreSQL.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Смотреть проекты <span>↗</span></a>
              <a className="button button-ghost" href="mailto:adahanofficial@gmail.com">Написать мне</a>
            </div>
            <div className="hero-meta"><span>📍 Бишкек, Кыргызстан</span><span>✉ adahanofficial@gmail.com</span></div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="code-card">
              <div className="code-top"><span></span><span></span><span></span><small>developer.py</small></div>
              <div className="code-lines">
                <p><i>01</i><b className="purple">class</b> <b className="yellow">Developer</b>:</p>
                <p><i>02</i>&nbsp;&nbsp;name = <em>"Adahan"</em></p>
                <p><i>03</i>&nbsp;&nbsp;role = <em>"Backend Developer"</em></p>
                <p><i>04</i>&nbsp;&nbsp;stack = [</p>
                <p><i>05</i>&nbsp;&nbsp;&nbsp;&nbsp;<em>"Python"</em>, <em>"Django"</em>,</p>
                <p><i>06</i>&nbsp;&nbsp;&nbsp;&nbsp;<em>"PostgreSQL"</em></p>
                <p><i>07</i>&nbsp;&nbsp;]</p>
                <p><i>08</i>&nbsp;&nbsp;<b className="purple">def</b> <b className="blue">build</b>(self):</p>
                <p><i>09</i>&nbsp;&nbsp;&nbsp;&nbsp;<b className="purple">return</b> <em>"Great things"</em></p>
                <p><i>10</i><span className="cursor">▍</span></p>
              </div>
              <div className="code-footer"><span className="pulse"></span> Available for opportunities <span>Python 3</span></div>
            </div>
            <div className="floating-tag tag-python">⌘ Python</div>
            <div className="floating-tag tag-django">✦ Django REST</div>
            <div className="hero-glow"></div>
          </div>
          <a className="scroll-hint" href="#about"><span></span> ЛИСТАЙТЕ ВНИЗ</a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-label">01 / ОБО МНЕ</div>
          <div className="about-grid">
            <h2>Интересуюсь технологиями.<br /><span>Создаю решения.</span></h2>
            <div className="about-copy">
              <p>Я целеустремлённый и быстро обучающийся студент, увлечённый технологиями и программированием. Специализируюсь на разработке веб-приложений с использованием Django и имею базовые знания алгоритмов.</p>
              <p>Сейчас готовлюсь к олимпиадам по информатике и ищу возможности для профессионального роста в сфере информационных технологий.</p>
              <div className="stats">
                <div><strong>Python</strong><span>Мой основной стек</span></div>
                <div><strong>Backend</strong><span>Моя специализация</span></div>
                <div><strong>2024—25</strong><span>Учебный проект</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-label">02 / ТЕХНОЛОГИИ</div>
          <div className="section-heading"><h2>Инструменты, с которыми<br /><span>я работаю.</span></h2><p>Технологии и инструменты, которые использую при разработке backend-приложений.</p></div>
          <div className="skill-grid">
            {skills.map((skill) => <article className="skill-card" key={skill.name}><div className="skill-icon">{skill.icon}</div><div><h3>{skill.name}</h3><p>{skill.level}</p></div><span className="skill-arrow">↗</span></article>)}
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-label">03 / ОПЫТ И ПРОЕКТЫ</div>
          <div className="section-heading"><h2>Практика — лучший<br /><span>способ расти.</span></h2><p>Учебный проект, в котором я применил backend-технологии на практике.</p></div>
          <article className="project-card">
            <div className="project-top"><span className="project-type">BACKEND PROJECT</span><span className="project-date">22.09.2024 — 05.10.2025</span></div>
            <div className="project-content">
              <div><div className="project-number">01</div><h3>Booking Platform</h3><p className="project-subtitle">Система онлайн-бронирования</p></div>
              <div className="project-description">
                <p>Разработана система бронирования с тремя ролями пользователей: владелец, клиент и администратор. Настроены уровни доступа и разрешения для управления отзывами и бронированиями.</p>
                <ul>
                  <li>Реализация ролевой модели пользователей и разграничения доступа через DRF Permissions.</li>
                  <li>Добавление многоязычной поддержки с Django-Modeltranslation.</li>
                  <li>Подготовка к развертыванию: Docker, сценарий деплоя и AWS.</li>
                </ul>
                <div className="tech-list">{technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
            </div>
            <div className="project-bottom"><span>Motion Web Academy · Учебный проект</span><span className="project-symbol">↗</span></div>
          </article>
        </section>

        <section className="education section-wrap">
          <div className="section-label">04 / ОБРАЗОВАНИЕ И ЯЗЫКИ</div>
          <div className="education-grid">
            <div><h2>Образование</h2><div className="timeline"><span className="timeline-dot"></span><div><small>07.2024 — 05.2025</small><h3>Motion Web</h3><p>Backend-разработчик</p><span className="muted">Обучение backend-разработке</span></div></div></div>
            <div><h2>Языки</h2><div className="language-list"><div><span>Кыргызский</span><b>Родной</b></div><div><span>Русский</span><b>Родной</b></div><div><span>Английский</span><b>B1</b></div></div></div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-box">
            <div className="section-label">05 / КОНТАКТЫ</div>
            <h2>Есть идея?<br /><span>Давайте обсудим.</span></h2>
            <p>Открыт к профессиональному общению, новым проектам и возможностям для развития.</p>
            <a className="button button-primary" href="mailto:adahanofficial@gmail.com">Написать на почту <span>↗</span></a>
            <div className="contact-details"><a href="tel:+996773571201">+996 773 571 201</a><a href="mailto:adahanofficial@gmail.com">adahanofficial@gmail.com</a><span>Бишкек, Кыргызстан</span></div>
          </div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">AT</span><span>ADAHAN<span className="brand-dot">.</span></span></a><span>© 2026 Адахан Тиллабаев. Создано с React.</span><a href="#home">Наверх ↑</a></footer>
    </div>
  )
}

export default App
