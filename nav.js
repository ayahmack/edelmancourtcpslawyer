// nav.js — shared navigation injected on every page
document.addEventListener('DOMContentLoaded', function () {

  const topbar = `
  <div class="topbar">
    <span>DCFS Investigation? You Have Rights. Call Now.</span>
    <a href="tel:8668114255">(866) 811-4255 — Free Consultation</a>
  </div>`;

  const nav = `
  <nav>
    <a href="/index.html" class="nav-logo">
      Edelman Court CPS Lawyer
      <span>ALL Trial Lawyers | CPS Defense</span>
    </a>
    <button class="nav-toggle" aria-label="Menu">&#9776;</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="/practice-areas/index.html">Practice Areas</a></li>
      <li><a href="/case-results/index.html">Client Reviews</a></li>
      <li><a href="/about/index.html">About</a></li>
      <li><a href="/meet-the-attorney/index.html">Attorney</a></li>
      <li><a href="/contact/index.html">Contact</a></li>
      <li><a href="tel:8668114255" class="nav-cta">(866) 811-4255</a></li>
    </ul>
  </nav>`;

  const footer = `
  <footer>
    <div class="footer-grid container">
      <div class="footer-brand">
        <div class="logo">ALL Trial Lawyers | CPS Defense</div>
        <p>Aggressive DCFS and juvenile dependency defense at Edelman Children's Court and throughout Los Angeles County. We protect parents, defend families, and fight for reunification.</p>
        <p style="margin-top:12px;"><a href="https://alltriallawyers.com" style="color:var(--gold);">alltriallawyers.com</a> &nbsp;·&nbsp; <a href="https://edelmancourtcpslawyer.com" style="color:var(--gold);">edelmancourtcpslawyer.com</a></p>
      </div>
      <div>
        <h4>Practice Areas</h4>
        <ul>
          <li><a href="/practice-areas/index.html">CPS Defense</a></li>
          <li><a href="/practice-areas/index.html#dcfs-defense">DCFS Defense</a></li>
          <li><a href="/practice-areas/index.html#juvenile-dependency">Juvenile Dependency</a></li>
          <li><a href="/practice-areas/index.html#detention-hearing">Detention Hearings</a></li>
          <li><a href="/practice-areas/index.html#false-allegations">False Allegations</a></li>
          <li><a href="/case-results/index.html">Case Results</a></li>
        </ul>
      </div>
      <div>
        <h4>Office Locations</h4>
        <ul>
          <li><span style="color:#8da3c0;">Orange (Main)</span><br><span style="color:#5d7291;font-size:13px;">333 City Blvd W, Suite 1742<br>Orange, CA 92868</span></li>
          <li style="margin-top:10px;"><span style="color:#8da3c0;">Riverside</span><br><span style="color:#5d7291;font-size:13px;">11801 Pierce St, Suite 200<br>Riverside, CA 92505</span></li>
          <li style="margin-top:10px;"><span style="color:#8da3c0;">Palm Desert</span><br><span style="color:#5d7291;font-size:13px;">77711 Flora Rd, Suite 309<br>Palm Desert, CA 92211</span></li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about/index.html">About the Firm</a></li>
          <li><a href="/meet-the-attorney/index.html">Meet the Attorney</a></li>
          <li><a href="/contact/index.html">Free Consultation</a></li>
          <li><a href="https://alltriallawyers.com" target="_blank" rel="noopener">Main Firm Site</a></li>
        </ul>
        <div style="margin-top:20px; padding:16px; background:rgba(201,168,76,.1); border:1px solid rgba(201,168,76,.25); border-radius:4px;">
          <div style="font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:.1em; color:var(--gold); margin-bottom:6px;">24/7 Emergency Line</div>
          <a href="tel:8668114255" style="color:#fff; font-size:1.1rem; font-weight:800;">(866) 811-4255</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom container">
      <p>© 2025 ALL Trial Lawyers | CPS Defense Lawyers &nbsp;·&nbsp; Abuershaid Law, APC &nbsp;·&nbsp; <a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Disclaimer</a></p>
      <p style="margin-top:8px;">This website is for informational purposes only and does not constitute legal advice. Use of this site does not create an attorney-client relationship. Past results do not guarantee future outcomes. &nbsp;<em>Attorney advertising.</em></p>
    </div>
  </footer>
  <a href="tel:8668114255" class="phone-float">📞 Call (866) 811-4255</a>`;

  // Inject
  const body = document.body;
  body.insertAdjacentHTML('afterbegin', nav);
  body.insertAdjacentHTML('afterbegin', topbar);
  body.insertAdjacentHTML('beforeend', footer);

  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // Active link highlight
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') && currentPath.includes(a.getAttribute('href').replace('/index.html',''))) {
      a.style.color = 'var(--gold)';
    }
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
});
