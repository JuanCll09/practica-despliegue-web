export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Bitácora Cloud, inicio"><span className="brand-mark">B</span> bitácora<span>cloud</span></a>
        <nav aria-label="Navegación principal"><a href="#proyecto">Proyecto</a><a href="#pasos">Despliegue</a><a className="nav-cta" href="#contacto">Explorar</a></nav>
      </header>
      <main id="inicio">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="pulse" /> MI PRIMER PROYECTO EN LA NUBE</p>
            <h1>Del código<br />al <em>mundo real.</em></h1>
            <p className="intro">Esta página nació en mi computadora y ahora se prepara para vivir en un servidor. Un paso a la vez, aprendiendo cómo funciona la web detrás de cada clic.</p>
            <a className="button" href="#proyecto">Conoce el proyecto <span>↘</span></a>
            <div className="hero-note"><span className="note-icon">✳</span><span>Una práctica de despliegue web<br /><strong>Hecha desde cero · 2026</strong></span></div>
          </div>
          <div className="visual" aria-label="Ilustración de una página conectándose a un servidor">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="planet"><span>☁</span></div>
            <div className="web-card"><div className="card-top"><i /><i /><i /><span>mi-sitio-web</span></div><div className="card-body"><div className="mini-sidebar" /><div className="mini-content"><b /><b /><b /><div className="mini-box" /></div></div></div>
            <div className="server-tag"><span className="server-dot" /> servidor listo</div>
            <div className="floating-code">&lt;hello, cloud /&gt;</div>
            <div className="visual-caption">01 / APRENDER HACIENDO</div>
          </div>
        </section>
        <section className="project" id="proyecto">
          <div className="section-label">EL PROYECTO <span>01 — 03</span></div>
          <div className="project-grid"><h2>Pequeño sitio.<br /><em>Gran comienzo.</em></h2><div><p>Para esta práctica estoy construyendo una página con Next.js. Después la publicaré en GitHub y la serviré desde una máquina virtual Linux usando Nginx.</p><p className="muted">Next.js permite organizar la página en componentes y ejecutarla en un servidor Node.js.</p></div></div>
          <div className="features"><article><span>01</span><h3>Diseñada aquí</h3><p>Los archivos viven primero en mi computadora.</p></article><article><span>02</span><h3>Compartida en GitHub</h3><p>El código queda guardado y versionado.</p></article><article><span>03</span><h3>Servida con Nginx</h3><p>Un servidor web entrega la página por internet.</p></article></div>
        </section>
        <section className="steps" id="pasos"><div className="section-label">RUTA DE DESPLIEGUE <span>02 — 03</span></div><h2>Cada paso<br />cuenta.</h2><div className="step-list"><div><span>01</span><p>Crear y revisar el sitio en local</p><b>✓</b></div><div><span>02</span><p>Subir el proyecto a GitHub</p><b>02</b></div><div><span>03</span><p>Crear una máquina virtual en AWS</p><b>03</b></div><div><span>04</span><p>Instalar y configurar Nginx</p><b>04</b></div><div><span>05</span><p>Publicar y comprobar la página</p><b>05</b></div></div></section>
        <section className="closing" id="contacto"><div className="closing-mark">✳</div><p>EL PRIMER DESPLIEGUE</p><h2>Todo gran proyecto<br />empieza con un <em>hola.</em></h2><a href="#inicio">Volver al inicio ↑</a></section>
      </main>
      <footer><a className="brand" href="#inicio"><span className="brand-mark">B</span> bitácora<span>cloud</span></a><p>Mi práctica de despliegue web · 2026</p><span>Construida desde cero, con curiosidad.</span></footer>
    </>
  );
}
