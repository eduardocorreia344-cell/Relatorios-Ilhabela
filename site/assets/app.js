(function () {
  const D = window.IB_DATA;
  const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  const brl0 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  const int = new Intl.NumberFormat('pt-BR');
  const dec2 = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const C = { blue: css('--blue'), bad: css('--bad'), good: css('--good'), mute: css('--mute-bar'), muted: css('--muted'), text: css('--text') };
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
  const b = (t) => el('b', null, t);
  const money = (v) => (v === null || v === undefined ? '—' : brl.format(v));
  const n = (v) => (v === null || v === undefined ? '—' : int.format(v));
  const pctTxt = (v) => dec2.format(v) + '%';
  const delta = (cur, prev) => (prev ? Math.round(((cur - prev) / prev) * 100) : null);
  const signed = (d) => (d === null ? '' : (d > 0 ? '+' : d < 0 ? '−' : '') + Math.abs(d) + '%');

  const M = D.midia.cur, MP = D.midia.prev;
  const pl = D.pipeline;
  const stage = (e) => pl.find((r) => r.etapa === e) || { abertos: 0, parados_15d: 0, mediana_dias: 0 };

  // topo
  $('period').textContent = `Mídia de ${D._meta.periodo} (Meta Ads), comparada com ${D._meta.anterior} · CRM retratado em ${D._meta.retrato_crm} (Clint) · base antiga sem atualização desde ${D._meta.corte_base_antiga} fora da conta`;
  const visAg = D.funil.find((r) => r.etapa === 'Visita agendada').leads;
  $('takeaway').append('Semana sem visita: ', b(n(visAg)), ' visitas agendadas, com ', b(n(stage('Qualificado').abertos)),
    ' qualificados abertos. Das 5 ações de 20/10, só a de não mexer na mídia foi cumprida. A mídia segue na faixa, mas piorando: CPL de ',
    b(money(M.cpl)), ' e CTR de ', b(pctTxt(M.ctr)), ' (era ', pctTxt(MP.ctr), ').');

  // KPIs
  const tiles = [
    ['Investimento · semana', money(M.investimento), `${money(MP.investimento)} antes · ${signed(delta(M.investimento, MP.investimento))}`, ''],
    ['Leads (Meta)', n(M.leads), `${n(MP.leads)} antes`, ''],
    ['Custo por lead', money(M.cpl), `${money(MP.cpl)} antes · topo da faixa R$ 30–60`, 'warn'],
    ['CTR', pctTxt(M.ctr), `${pctTxt(MP.ctr)} antes · ${signed(delta(M.ctr, MP.ctr))}`, 'bad'],
    ['Visitas agendadas', n(visAg), 'Na semana', 'bad'],
    ['Pós-visita parados', '11', '6 visitas realizadas, 4 propostas, 1 visitou', 'bad'],
  ];
  tiles.forEach(([l, v, note, cls]) => {
    const t = el('div', 'kpi' + (cls ? ' ' + cls : ''));
    t.append(el('span', 'l', l), el('span', 'v', v), el('span', 'n', note));
    $('kpis').append(t);
  });

  function table(id, cols, rows, rowCls) {
    const t = $(id); t.replaceChildren();
    const hr = el('tr');
    cols.forEach((c) => hr.append(el('th', c.r ? 'r' : '', c.h)));
    const thead = el('thead'); thead.append(hr);
    const tb = el('tbody');
    rows.forEach((r) => {
      const tr = el('tr', rowCls ? rowCls(r) : '');
      cols.forEach((c) => {
        const td = el('td', [c.r ? 'r' : '', c.cls ? c.cls(r) : ''].join(' ').trim());
        const v = c.f(r);
        if (v instanceof Node) td.append(v); else td.textContent = v;
        tr.append(td);
      });
      tb.append(tr);
    });
    t.append(thead, tb);
  }

  // plano anterior
  const ok = D.plano_anterior.filter((r) => r.nivel === 'good').length;
  $('plano-placar').textContent = `${ok} de ${D.plano_anterior.length} ações cumpridas`;
  table('tb-plano', [
    { h: 'Ação de 20/10', f: (r) => r.acao, cls: () => 'wrap' },
    { h: 'O que aconteceu até 02/11', f: (r) => r.resultado, cls: () => 'wrap' },
    { h: 'Status', r: 1, f: (r) => el('span', 'pill ' + r.nivel, r.status) },
  ], D.plano_anterior, (r) => (r.nivel === 'bad' ? 'bad' : r.nivel === 'good' ? 'good' : ''));

  function bar(container, label, side, segs, value) {
    const wrap = el('div', 'bar');
    const lb = el('div', 'lb'); const a = el('span', null, label); lb.append(a, el('span', null, side || ''));
    const tr = el('div', 'track');
    segs.filter((g) => g[0] > 0 || segs.length === 1).forEach(([w, c]) => { const g = el('div', 'seg'); g.style.width = Math.max(w, 0.8) + '%'; g.style.background = c; tr.append(g); });
    tr.append(el('span', 'val', value));
    wrap.append(lb, tr); container.append(wrap);
    return a;
  }
  const flag = (a) => a.append(el('span', 'flag', 'GARGALO'));

  // fases de CPL
  (function () {
    const max = Math.max(...D.fases.map((r) => r.cpl));
    D.fases.forEach((r) => bar($('ch-fases'), r.fase, `${n(r.leads)} leads · ${money(r.investimento)}`, [[(r.cpl / max) * 85, r.cpl > 40 ? C.bad : C.good]], money(r.cpl)));
  })();

  // diário (14 dias)
  const tip = $('tip');
  function showTip(ev, head, lines) {
    tip.replaceChildren(el('div', 'h', head), ...lines.map((s) => el('div', null, s)));
    tip.hidden = false;
    const w = tip.offsetWidth, h = tip.offsetHeight;
    let x = ev.clientX + 14, y = ev.clientY - h - 10;
    if (x + w > window.innerWidth - 8) x = ev.clientX - w - 14;
    if (y < 8) y = ev.clientY + 16;
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
  }
  const hideTip = () => { tip.hidden = true; };
  const NS = 'http://www.w3.org/2000/svg';
  const s = (tag, attrs, text) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (text !== undefined) e.textContent = text; return e; };
  function drawDiario() {
    const box = $('ch-diario'); box.replaceChildren();
    const rows = D.diario;
    const W = Math.max(300, box.clientWidth), H = 240, m = { t: 22, r: 6, b: 34, l: 40 };
    const maxV = Math.max(...rows.map((r) => r.investimento)) * 1.15;
    const y = (v) => H - m.b - (v / maxV) * (H - m.t - m.b);
    const step = (W - m.l - m.r) / rows.length, bw = step * 0.66;
    const ddmm = (d) => d.slice(8, 10) + '/' + d.slice(5, 7);
    const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': 'Investimento e leads por dia' });
    [25, 50, 75].filter((v) => v < maxV).forEach((v) => {
      svg.append(s('line', { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v), stroke: C.muted, 'stroke-opacity': 0.15 }));
      svg.append(s('text', { x: m.l - 6, y: y(v) + 3.5, 'text-anchor': 'end', fill: C.muted, 'font-size': 10 }, brl0.format(v)));
    });
    rows.forEach((r, i) => {
      const x = m.l + step * i + (step - bw) / 2, cx = x + bw / 2;
      svg.append(s('rect', { x, width: bw, y: y(r.investimento), height: y(0) - y(r.investimento), rx: 3, fill: r.semana === 'cur' ? C.blue : C.mute }));
      svg.append(s('text', { x: cx, y: y(r.investimento) - 5, 'text-anchor': 'middle', fill: r.leads ? C.text : C.muted, 'font-size': 11, 'font-weight': 700 }, String(r.leads)));
      if (i % 2 === 0 || W > 560) svg.append(s('text', { x: cx, y: H - m.b + 15, 'text-anchor': 'middle', fill: C.muted, 'font-size': 9.5 }, ddmm(r.dia)));
      const hit = s('rect', { x: m.l + step * i, width: step, y: m.t, height: H - m.t - m.b, fill: 'transparent' });
      hit.addEventListener('mousemove', (ev) => showTip(ev, ddmm(r.dia) + (r.semana === 'cur' ? ' · semana atual' : ' · semana anterior'), ['Investimento ' + money(r.investimento), n(r.leads) + (r.leads === 1 ? ' lead' : ' leads')]));
      hit.addEventListener('mouseleave', hideTip);
      svg.append(hit);
    });
    const half = m.l + step * 7;
    svg.append(s('line', { x1: half, x2: half, y1: m.t - 6, y2: y(0), stroke: C.muted, 'stroke-opacity': 0.35, 'stroke-dasharray': '3 3' }));
    svg.append(s('text', { x: half - 6, y: H - 4, 'text-anchor': 'end', fill: C.muted, 'font-size': 10 }, 'anterior'));
    svg.append(s('text', { x: half + 6, y: H - 4, fill: C.blue, 'font-size': 10, 'font-weight': 700 }, 'semana atual'));
    svg.append(s('line', { x1: m.l, x2: W - m.r, y1: y(0), y2: y(0), stroke: C.muted, 'stroke-opacity': 0.5 }));
    box.append(svg);
  }

  // anúncios
  const cpl = (o) => (o.leads ? o.investimento / o.leads : null);
  table('tb-anuncios', [
    { h: 'Anúncio', f: (r) => r.anuncio },
    { h: 'Invest.', r: 1, f: (r) => money(r.cur.investimento) },
    { h: 'Leads', r: 1, f: (r) => n(r.cur.leads) },
    { h: 'CPL', r: 1, f: (r) => money(cpl(r.cur)) },
    { h: 'CTR', r: 1, f: (r) => pctTxt(r.cur.ctr) },
    { h: 'Antes: invest.', r: 1, f: (r) => money(r.prev.investimento), cls: () => 'cmp' },
    { h: 'Antes: leads', r: 1, f: (r) => n(r.prev.leads), cls: () => 'cmp' },
    { h: 'Antes: CTR', r: 1, f: (r) => pctTxt(r.prev.ctr), cls: () => 'cmp' },
  ], D.anuncios, (r) => (r.cur.leads === 0 ? 'bad' : cpl(r.cur) < 40 ? 'good' : ''));

  // funil da semana
  $('funil-nota').textContent = 'Todos do formulário Meta: ' + Object.entries(D.funil_origem).map(([k, v]) => `${v} do ${k}`).join(' e ') + '. Todos com a Fernanda. Leads com até 7 dias: cedo para cobrar qualificação.';
  (function () {
    const max = D.funil[0].leads || 1;
    D.funil.forEach((r) => bar($('ch-funil'), r.etapa, '', [[(r.leads / max) * 85, r.leads === 0 ? C.bad : C.blue]], n(r.leads)));
  })();

  // qualificados de 20/10
  (function () {
    const max = Math.max(...D.qualificados_20_10.map((r) => r.n)) || 1;
    D.qualificados_20_10.forEach((r) => {
      const c = r.destino === 'Visita agendada' ? C.bad : r.destino === 'Visita realizada' ? C.good : r.destino.startsWith('Seguem') ? css('--warn') : C.mute;
      bar($('ch-qualif'), r.destino, r.nota, [[(r.n / max) * 85, c]], n(r.n));
    });
  })();

  // pipeline
  (function () {
    const max = Math.max(...pl.map((r) => r.abertos)) || 1;
    pl.forEach((r) => {
      const side = (r.parados_15d ? n(r.parados_15d) + (r.parados_15d === 1 ? ' parado' : ' parados') + ' >15d · ' : '') + 'mediana ' + n(r.mediana_dias) + ' dias' + (r.etapa === 'Qualificado' ? ' (relógio reiniciado)' : '');
      const a = bar($('ch-pipeline'), r.etapa, side, [[(r.parados_15d / max) * 85, C.bad], [((r.abertos - r.parados_15d) / max) * 85, C.mute]], n(r.abertos));
      if (r.etapa === 'Qualificado') flag(a);
    });
    bar($('ch-pipeline'), 'Visita Agendada', '', [[0, C.bad]], '0');
    const t = $('pipeline-extra');
    const tot = pl.reduce((a, r) => a + r.abertos, 0);
    const sp = (label, v) => { const x = el('span'); x.append(label + ' ', b(v)); return x; };
    t.append(sp('Agendamento', n(tot)), sp('Reativação', n(D.reativacao_abertos)), sp('sem corretor na Reativação', n(D.reativacao_sem_corretor)), sp('Pós Visita após a regra', '0'));
  })();

  // corretores
  table('tb-corretores', [
    { h: 'Corretor', f: (r) => r.corretor },
    { h: 'Leads novos desde 20/10', r: 1, f: (r) => n(r.leads_novos_desde_20_10) },
    { h: 'Mov. na semana', r: 1, f: (r) => n(r.movimentacoes_semana) },
    { h: 'Abertos', r: 1, f: (r) => n(r.abertos) },
    { h: 'Qualificados', r: 1, f: (r) => n(r.qualificados) },
    { h: 'Em D4', r: 1, f: (r) => n(r.d4) },
    { h: 'Pós-visita parados', r: 1, f: (r) => n(r.pos_visita_parados), cls: (r) => (r.pos_visita_parados >= 5 ? 'bad' : '') },
  ], D.corretores, () => 'bad');

  // base antiga
  (function () {
    const E = D.exclusao;
    $('base-nota').textContent = `Contato com a tag base-migrada e negócio sem atualização desde ${D._meta.corte_base_antiga}.`;
    const rows = [['Negócios no Clint', E.total, C.mute], ['Da base antiga', E.base_antiga, C.mute], ['Excluídos pela regra', E.excluidos, C.bad], ['Considerados', E.considerados, C.good]];
    rows.forEach(([l, v, c]) => bar($('ch-base'), l, '', [[(v / E.total) * 85, c]], n(v)));
    table('tb-quentes', [
      { h: 'Etapa', f: (r) => r.etapa },
      { h: 'Corretor', f: (r) => r.corretor },
      { h: 'Negócios', r: 1, f: (r) => n(r.negocios) },
      { h: 'Dias parado', r: 1, f: (r) => r.dias },
    ], E.quentes, (r) => (/Proposta|Visita Realizada/.test(r.etapa) ? 'bad' : ''));
  })();

  // ações
  (function () {
    const TAG = { urgente: 'urgente', nao_mexer: 'não mexer' };
    D.acoes.slice().sort((a, c) => a.ordem - c.ordem).forEach((r) => {
      const a = el('div', 'act ' + r.tipo);
      const h = el('h4', null, r.titulo);
      if (TAG[r.tipo]) h.append(el('span', 'tag', TAG[r.tipo]));
      a.append(el('div', 'num', r.tipo === 'nao_mexer' ? '✋' : String(r.ordem)), h, el('p', null, r.porque), el('p', 'meta', 'Quem: ' + r.quem + ' · Reavaliar: ' + r.reavaliar));
      $('acoes').append(a);
    });
  })();

  $('seguidores').textContent = money(D.seguidores_primor);

  drawDiario();
  let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(drawDiario, 150); });
})();
