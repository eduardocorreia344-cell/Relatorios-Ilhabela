(function () {
  const D = window.IB_DATA;
  const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  const brl0 = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  const int = new Intl.NumberFormat('pt-BR');
  const pct = new Intl.NumberFormat('pt-BR', { style: 'percent', maximumFractionDigits: 0 });
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const C = { blue: css('--blue'), bad: css('--bad'), good: css('--good'), mute: css('--mute-bar'), muted: css('--muted'), text: css('--text'), line: css('--line') };
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };
  const money = (v) => (v === null || v === undefined ? '—' : brl.format(v));
  const n = (v) => (v === null || v === undefined ? '—' : int.format(v));

  const kpi = Object.fromEntries(D.midia_kpis.map((r) => [r.metrica, r.valor]));
  const funil = D.funil.slice().sort((a, b) => a.ordem - b.ordem);
  const F = Object.fromEntries(funil.map((r) => [r.etapa, r.leads]));
  const qualAg = D.pipeline.find((r) => r.funil === 'Agendamento' && r.etapa === 'Qualificado');

  // topo
  $('period').textContent = `Mídia de ${D._meta.periodo_midia} (Meta Ads) · CRM retratado em ${D._meta.retrato_crm} (Clint) · base antiga sem atualização desde ${D._meta.corte_base_antiga} fora da conta`;
  const take = $('takeaway');
  const b = (t) => { const x = el('b', null, t); return x; };
  take.append('O gargalo é comercial. Só ', b(n(F['Visita agendada'])), ' dos ', b(n(F['Qualificado'])),
    ' leads novos qualificados agendaram visita, e hoje há ', b(n(qualAg.abertos)), ' qualificados abertos, ',
    b(n(qualAg.parados_15d)), ' deles parados há mais de 15 dias. A mídia está na faixa: CPL de ', b(money(kpi.cpl)), '.');

  // KPIs
  const tiles = [
    ['Investimento · 30 dias', money(kpi.investimento), 'Campanha de leads Ilha Bela', ''],
    ['Leads (Meta)', n(kpi.leads), 'Formulário nativo', ''],
    ['Custo por lead', money(kpi.cpl), 'Dentro da faixa R$ 30–60', 'good'],
    ['Qualificados', n(F['Qualificado']), 'Leads novos que chegaram a Qualificado', ''],
    ['Visitas agendadas', n(F['Visita agendada']), 'Gargalo do funil', 'bad'],
    ['Vendas', n(F['Venda']), 'Dos leads do período', ''],
  ];
  tiles.forEach(([l, v, note, cls]) => {
    const t = el('div', 'kpi' + (cls ? ' ' + cls : ''));
    t.append(el('span', 'l', l), el('span', 'v', v), el('span', 'n', note));
    $('kpis').append(t);
  });

  // tooltip
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

  function drawSemanal() {
    const box = $('ch-semanal'); box.replaceChildren();
    const rows = D.semanal;
    const W = Math.max(300, box.clientWidth), H = 250, m = { t: 24, r: 6, b: 46, l: 6 };
    const maxV = Math.max(60, ...rows.map((r) => r.cpl)) * 1.08;
    const y = (v) => H - m.b - (v / maxV) * (H - m.t - m.b);
    const step = (W - m.l - m.r) / rows.length, bw = Math.min(36, step * 0.6);
    const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': 'CPL por semana' });
    svg.append(s('rect', { x: m.l, width: W - m.l - m.r, y: y(60), height: y(30) - y(60), fill: C.blue, opacity: 0.08 }));
    [30, 60].forEach((v) => svg.append(s('line', { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v), stroke: C.blue, 'stroke-opacity': 0.45, 'stroke-dasharray': '4 4' })));
    svg.append(s('text', { x: W - m.r, y: y(60) - 5, 'text-anchor': 'end', fill: C.muted, 'font-size': 11 }, 'faixa R$ 30–60'));
    rows.forEach((r, i) => {
      const cx = m.l + step * i + step / 2;
      const color = r.cpl > 60 ? C.bad : C.blue;
      svg.append(s('rect', { x: cx - bw / 2, width: bw, y: y(r.cpl), height: y(0) - y(r.cpl), rx: 5, fill: color }));
      svg.append(s('text', { x: cx, y: y(r.cpl) - 6, 'text-anchor': 'middle', fill: C.text, 'font-size': 12, 'font-weight': 700 }, brl0.format(r.cpl)));
      svg.append(s('text', { x: cx, y: H - m.b + 17, 'text-anchor': 'middle', fill: C.muted, 'font-size': 10.5 }, step < 90 ? 'sem. ' + r.semana.slice(0, 5) : r.semana));
      svg.append(s('text', { x: cx, y: H - m.b + 33, 'text-anchor': 'middle', fill: C.text, 'font-size': 11 }, n(r.leads) + ' leads'));
      const hit = s('rect', { x: cx - step / 2, width: step, y: m.t, height: H - m.t - m.b, fill: 'transparent' });
      hit.addEventListener('mousemove', (ev) => showTip(ev, r.semana, ['CPL ' + money(r.cpl), n(r.leads) + ' leads', 'Investimento ' + money(r.investimento)]));
      hit.addEventListener('mouseleave', hideTip);
      svg.append(hit);
    });
    svg.append(s('line', { x1: m.l, x2: W - m.r, y1: y(0), y2: y(0), stroke: C.muted, 'stroke-opacity': 0.5 }));
    box.append(svg);
  }

  function drawDiario() {
    const box = $('ch-diario'); box.replaceChildren();
    const rows = D.diario;
    const W = Math.max(300, box.clientWidth), H = 250, m = { t: 30, r: 8, b: 26, l: 40 };
    const maxV = Math.max(...rows.map((r) => r.investimento)) * 1.1;
    const y = (v) => H - m.b - (v / maxV) * (H - m.t - m.b);
    const step = (W - m.l - m.r) / rows.length, bw = step * 0.72;
    const ddmm = (d) => d.slice(8, 10) + '/' + d.slice(5, 7);
    const svg = s('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': 'Investimento por dia' });
    [25, 50, 75].filter((v) => v < maxV).forEach((v) => {
      svg.append(s('line', { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v), stroke: C.muted, 'stroke-opacity': 0.15 }));
      svg.append(s('text', { x: m.l - 6, y: y(v) + 3.5, 'text-anchor': 'end', fill: C.muted, 'font-size': 10 }, brl0.format(v)));
    });
    rows.forEach((r, i) => {
      const x = m.l + step * i + (step - bw) / 2, cx = x + bw / 2;
      if (r.investimento > 0) svg.append(s('rect', { x, width: bw, y: y(r.investimento), height: y(0) - y(r.investimento), rx: 3, fill: C.blue }));
      else {
        svg.append(s('line', { x1: cx, x2: cx, y1: m.t + 6, y2: y(0), stroke: C.bad, 'stroke-dasharray': '3 3' }));
        svg.append(s('circle', { cx, cy: y(0), r: 3.5, fill: C.bad }));
        svg.append(s('text', { x: cx, y: m.t - 2, 'text-anchor': cx > W * 0.65 ? 'end' : 'middle', fill: C.bad, 'font-size': 11, 'font-weight': 700 }, ddmm(r.dia) + ' sem veiculação'));
      }
      if (i % (W < 440 ? 10 : 7) === 0) svg.append(s('text', { x: cx, y: H - m.b + 16, 'text-anchor': 'middle', fill: C.muted, 'font-size': 10 }, ddmm(r.dia)));
      const hit = s('rect', { x: m.l + step * i, width: step, y: m.t, height: H - m.t - m.b, fill: 'transparent' });
      hit.addEventListener('mousemove', (ev) => showTip(ev, ddmm(r.dia), ['Investimento ' + money(r.investimento), n(r.leads) + (r.leads === 1 ? ' lead' : ' leads')]));
      hit.addEventListener('mouseleave', hideTip);
      svg.append(hit);
    });
    svg.append(s('line', { x1: m.l, x2: W - m.r, y1: y(0), y2: y(0), stroke: C.muted, 'stroke-opacity': 0.5 }));
    box.append(svg);
  }

  function table(id, cols, rows, rowCls) {
    const t = $(id); t.replaceChildren();
    const thead = el('thead'), hr = el('tr');
    cols.forEach((c) => { const th = el('th', c.r ? 'r' : '', c.h); hr.append(th); });
    thead.append(hr);
    const tb = el('tbody');
    rows.forEach((r) => {
      const tr = el('tr', rowCls ? rowCls(r) : '');
      cols.forEach((c) => { const td = el('td', [c.r ? 'r' : '', c.cls ? c.cls(r) : ''].join(' ').trim(), c.f(r)); tr.append(td); });
      tb.append(tr);
    });
    t.append(thead, tb);
  }

  // anúncios
  const taxa = (r) => (r.leads_crm ? r.qualificados / r.leads_crm : null);
  const withLeads = D.anuncios.filter((r) => r.leads_crm > 0);
  const worst = withLeads.reduce((a, r) => (taxa(r) < taxa(a) ? r : a), withLeads[0]);
  const best = withLeads.reduce((a, r) => (taxa(r) > taxa(a) ? r : a), withLeads[0]);
  const adCls = (r) => (r === worst ? 'bad' : r === best ? 'good' : '');
  table('tb-anuncios', [
    { h: 'Anúncio', f: (r) => r.anuncio },
    { h: 'Invest.', r: 1, f: (r) => money(r.investimento) },
    { h: 'Leads Meta', r: 1, f: (r) => n(r.leads_meta) },
    { h: 'CPL', r: 1, f: (r) => money(r.cpl) },
    { h: 'Leads CRM', r: 1, f: (r) => n(r.leads_crm) },
    { h: 'Qualif.', r: 1, f: (r) => n(r.qualificados) },
    { h: 'Qualificação', r: 1, f: (r) => (taxa(r) === null ? '—' : pct.format(taxa(r))), cls: adCls },
    { h: 'Visitas realiz.', r: 1, f: (r) => n(r.visitas_realizadas) },
    { h: 'Perdidos', r: 1, f: (r) => n(r.perdidos) },
    { h: 'R$/qualif.', r: 1, f: (r) => money(r.custo_qualificado) },
  ], D.anuncios, adCls);
  $('pos14').append('Desde 14/10, só os vídeos da Patrícia e o "01" estão no ar: ', b(money(kpi.investimento_pos_14_10)), ', ',
    b(n(kpi.leads_pos_14_10)), ' leads, CPL de ', b(money(kpi.cpl_pos_14_10)), '. Como a configuração tem menos de 7 dias, não mexer até 27/10.');

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

  // funil
  (function () {
    const box = $('ch-funil'); const max = funil[0].leads || 1;
    funil.forEach((r, i) => {
      const gargalo = r.etapa === 'Visita agendada';
      if (i > 0) {
        const prev = funil[i - 1].leads, c = prev ? r.leads / prev : null;
        box.append(el('div', 'conv' + (gargalo || c === 0 ? ' bad' : ''), '↓ ' + (c === null ? '—' : pct.format(c)) + ' da etapa anterior' + (gargalo ? ' · aqui o funil quebra' : '')));
      }
      const color = gargalo || r.leads === 0 ? C.bad : i < 3 ? C.blue : C.mute;
      const a = bar(box, r.etapa, '', [[(r.leads / max) * 88, color]], n(r.leads));
      if (gargalo) flag(a);
    });
  })();

  // pipeline
  (function () {
    const box = $('ch-pipeline');
    const rows = D.pipeline.filter((r) => r.funil === 'Agendamento');
    const max = Math.max(...rows.map((r) => r.abertos)) || 1;
    rows.forEach((r) => {
      const side = (r.parados_15d ? n(r.parados_15d) + (r.parados_15d === 1 ? ' parado' : ' parados') + ' >15d · ' : '') + 'mediana ' + n(r.mediana_dias) + ' dias';
      const a = bar(box, r.etapa, side, [[(r.parados_15d / max) * 85, C.bad], [((r.abertos - r.parados_15d) / max) * 85, C.mute]], n(r.abertos));
      if (r.etapa === 'Qualificado') flag(a);
    });
    const tot = {};
    D.pipeline.forEach((r) => { tot[r.funil] = (tot[r.funil] || 0) + r.abertos; });
    const t = $('pipeline-totais');
    t.append(el('span', null, 'Abertos por funil:'));
    Object.entries(tot).forEach(([f, v]) => { const sp = el('span'); sp.append(f + ' ', b(n(v))); t.append(sp); });
  })();

  // corretores
  const totLeads = D.corretores.reduce((a, r) => a + r.leads_novos, 0);
  const corrBad = (r) => (r.qualificados >= 5 && r.visitas_agendadas / r.qualificados < 0.25 ? 'bad' : '');
  table('tb-corretores', [
    { h: 'Corretor', f: (r) => r.corretor },
    { h: 'Leads novos', r: 1, f: (r) => n(r.leads_novos) },
    { h: 'Parcela', r: 1, f: (r) => (totLeads ? pct.format(r.leads_novos / totLeads) : '—') },
    { h: 'Qualif.', r: 1, f: (r) => n(r.qualificados) },
    { h: 'Visita ag.', r: 1, f: (r) => n(r.visitas_agendadas), cls: corrBad },
    { h: 'Realiz.', r: 1, f: (r) => n(r.visitas_realizadas) },
    { h: 'Abertos hoje', r: 1, f: (r) => n(r.abertos_hoje) },
    { h: 'Qualif.+ hoje', r: 1, f: (r) => n(r.qualificado_mais_hoje) },
    { h: 'Parados >7d', r: 1, f: (r) => n(r.parados_7d) },
  ], D.corretores, corrBad);

  // perdas
  (function () {
    const box = $('ch-perdas'); const max = Math.max(...D.perdas.map((r) => r.perdas)) || 1;
    D.perdas.forEach((r, i) => bar(box, r.motivo, '', [[(r.perdas / max) * 85, /concorrente|outra empresa/i.test(r.motivo) ? C.bad : i === 0 ? C.blue : C.mute]], n(r.perdas)));
  })();

  // base antiga
  (function () {
    const res = D.exclusao.filter((r) => r.grupo === 'resumo');
    const box = $('ch-base'); const max = Math.max(...res.map((r) => r.negocios)) || 1;
    res.forEach((r) => bar(box, r.item, '', [[(r.negocios / max) * 85, /Excluídos/.test(r.item) ? C.bad : /Considerados/.test(r.item) ? C.good : C.mute]], n(r.negocios)));
    table('tb-quentes', [
      { h: 'Etapa', f: (r) => r.item },
      { h: 'Corretor', f: (r) => r.corretor || '—' },
      { h: 'Negócios', r: 1, f: (r) => n(r.negocios) },
      { h: 'Dias sem atualização', r: 1, f: (r) => r.dias_sem_update || '—' },
    ], D.exclusao.filter((r) => r.grupo === 'quentes'), (r) => (/Proposta|Visita/.test(r.item) ? 'bad' : ''));
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

  $('seguidores').textContent = money(kpi.seguidores_primor_fora_escopo);

  const redraw = () => { drawSemanal(); drawDiario(); };
  redraw();
  let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(redraw, 150); });
})();
