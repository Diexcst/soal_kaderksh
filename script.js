/* ===== BANK SOAL BAWAAN =====
   Format: {k:"Kategori", q:"Soal", o:["A","B","C","D"], a:indeksJawabanBenar(0-3), e:"Pembahasan"}
   Tambah soal baru lewat menu "Bank Soal" atau tambahkan di array ini. */
const BASE = [
    { k: "Dasar Posyandu", q: "Pada sistem 5 meja posyandu, kegiatan pencatatan hasil penimbangan ke dalam KMS dilakukan di meja ...", o: ["Meja 1", "Meja 2", "Meja 3", "Meja 5"], a: 2, e: "Meja 1 pendaftaran, meja 2 penimbangan, meja 3 pencatatan (hasil timbang dicatat di KMS), meja 4 penyuluhan, meja 5 pelayanan kesehatan oleh tenaga kesehatan." },
    { k: "Dasar Posyandu", q: "Kegiatan penimbangan balita di posyandu idealnya dilakukan ...", o: ["Setiap hari", "Setiap minggu", "Setiap bulan", "Setiap tahun"], a: 2, e: "Penimbangan rutin dilakukan setiap bulan agar pertumbuhan balita dapat dipantau berkelanjutan dan gangguan tumbuh terdeteksi dini." },
    { k: "Dasar Posyandu", q: "Peran utama kader posyandu di masyarakat adalah ...", o: ["Mengobati penyakit warga", "Menjadi penggerak dan pendamping kesehatan masyarakat", "Meresepkan obat", "Menetapkan diagnosis"], a: 1, e: "Kader adalah warga yang dilatih untuk menggerakkan, memberi penyuluhan, mencatat, dan merujuk. Diagnosis dan pengobatan adalah kewenangan tenaga kesehatan." },
    { k: "Gizi & Tumbuh Kembang", q: "Berapa lama pemberian ASI eksklusif dianjurkan?", o: ["Sampai 3 bulan", "Sampai 6 bulan", "Sampai 12 bulan", "Sampai 24 bulan"], a: 1, e: "ASI eksklusif adalah pemberian ASI saja tanpa makanan atau minuman lain selama 6 bulan pertama. ASI tetap dilanjutkan hingga 2 tahun atau lebih bersama MPASI." },
    { k: "Gizi & Tumbuh Kembang", q: "MPASI mulai diberikan pada bayi usia ...", o: ["2 bulan", "4 bulan", "6 bulan", "9 bulan"], a: 2, e: "Mulai usia 6 bulan kebutuhan gizi bayi tidak lagi tercukupi ASI saja, sehingga perlu MPASI, termasuk sumber protein hewani seperti telur, ikan, atau daging." },
    { k: "Gizi & Tumbuh Kembang", q: "Periode 1000 Hari Pertama Kehidupan (HPK) dihitung sejak ...", o: ["Lahir sampai usia 3 tahun", "Konsepsi sampai anak berusia 2 tahun", "Lahir sampai usia 1000 hari sekolah", "Usia 6 bulan sampai 5 tahun"], a: 1, e: "1000 HPK terdiri dari sekitar 270 hari masa kehamilan dan 730 hari pertama setelah lahir (hingga usia 2 tahun). Ini periode emas pencegahan stunting." },
    { k: "Gizi & Tumbuh Kembang", q: "Stunting adalah kondisi gagal tumbuh yang terutama disebabkan oleh ...", o: ["Kekurangan gizi kronis dan infeksi berulang", "Kelebihan berat badan", "Kurang tidur sesaat", "Kelainan genetik semata"], a: 0, e: "Stunting adalah tinggi badan menurut umur yang sangat pendek (kurang dari -2 SD standar WHO) akibat kurang gizi kronis, infeksi berulang, dan pengasuhan atau sanitasi yang kurang baik." },
    { k: "Gizi & Tumbuh Kembang", q: "Cara pengukuran panjang/tinggi badan yang benar untuk anak usia di bawah 2 tahun adalah ...", o: ["Berdiri tegak", "Berbaring (diukur panjang badan)", "Duduk", "Digendong lalu ditebak"], a: 1, e: "Anak di bawah 2 tahun diukur dalam posisi berbaring (panjang badan). Anak 2 tahun ke atas diukur berdiri (tinggi badan)." },
    { k: "Gizi & Tumbuh Kembang", q: "Pada KMS, berat badan anak dinyatakan tidak naik (T) bila ...", o: ["Titik berat badan berada di pita hijau", "Garis pertumbuhan mendatar atau menurun", "Garis pertumbuhan naik mengikuti pita", "Anak terlihat aktif"], a: 1, e: "Anak dikatakan tidak naik bila garis pertumbuhannya mendatar, menurun, atau berpindah ke pita warna di bawahnya. Perlu ditelusuri penyebab dan diberi konseling gizi." },
    { k: "Gizi & Tumbuh Kembang", q: "Kader menemukan balita dengan tanda gizi buruk (sangat kurus, edema). Tindakan yang tepat adalah ...", o: ["Memberi jamu penambah nafsu makan", "Menunggu sampai bulan depan", "Merujuk segera ke puskesmas", "Menyarankan makan lebih banyak saja"], a: 2, e: "Balita dengan tanda gizi buruk perlu penanganan tenaga kesehatan. Kader bertugas mengenali tanda bahaya dan merujuk segera, lalu mendampingi keluarga." },
    { k: "Imunisasi & Vitamin A", q: "Kapsul vitamin A biru (100.000 IU) diberikan pada ...", o: ["Bayi 6-11 bulan", "Balita 12-59 bulan", "Ibu hamil", "Remaja putri"], a: 0, e: "Kapsul biru 100.000 IU untuk bayi 6-11 bulan, kapsul merah 200.000 IU untuk balita 12-59 bulan. Pemberian serentak setiap Februari dan Agustus." },
    { k: "Imunisasi & Vitamin A", q: "Imunisasi Hepatitis B pertama (HB-0) sebaiknya diberikan ...", o: ["Usia 1 bulan", "Dalam 24 jam setelah lahir", "Usia 6 bulan", "Saat masuk sekolah"], a: 1, e: "HB-0 diberikan sedini mungkin, idealnya dalam 24 jam setelah lahir, untuk mencegah penularan hepatitis B dari ibu ke bayi." },
    { k: "Imunisasi & Vitamin A", q: "Imunisasi campak-rubela dosis pertama pada jadwal imunisasi dasar diberikan pada usia ...", o: ["Baru lahir", "2 bulan", "9 bulan", "5 tahun"], a: 2, e: "Campak-rubela pertama diberikan pada usia 9 bulan, dengan dosis lanjutan pada usia 18 bulan dan kelas 1 SD." },
    { k: "Kesehatan Ibu Hamil", q: "Ibu hamil dianjurkan minum tablet tambah darah (TTD) minimal ...", o: ["10 tablet", "30 tablet", "90 tablet", "200 tablet"], a: 2, e: "TTD diminum minimal 90 tablet selama kehamilan, satu tablet per hari, untuk mencegah anemia dan risiko bayi berat lahir rendah." },
    { k: "Kesehatan Ibu Hamil", q: "Pemeriksaan kehamilan (ANC) minimal dilakukan berapa kali selama kehamilan?", o: ["2 kali", "4 kali", "6 kali", "12 kali"], a: 2, e: "Pedoman Kemenkes menganjurkan minimal 6 kali kunjungan, termasuk 2 kali pemeriksaan USG oleh dokter, pada trimester 1 dan 3." },
    { k: "Kesehatan Ibu Hamil", q: "Lingkar lengan atas (LiLA) ibu hamil berapa yang menandakan risiko Kurang Energi Kronis (KEK)?", o: ["Kurang dari 23,5 cm", "24 cm", "25 cm", "Lebih dari 30 cm"], a: 0, e: "LiLA kurang dari 23,5 cm menandakan risiko KEK sehingga ibu perlu dirujuk dan mendapat tambahan asupan gizi." },
    { k: "Kesehatan Ibu Hamil", q: "Manakah yang termasuk tanda bahaya pada kehamilan?", o: ["Mual ringan pagi hari", "Perdarahan dari jalan lahir", "Nafsu makan meningkat", "Sering mengantuk"], a: 1, e: "Tanda bahaya: perdarahan, kejang, sakit kepala hebat, demam tinggi, ketuban pecah dini, dan gerak janin berkurang. Ibu harus segera dibawa ke fasilitas kesehatan." },
    { k: "Penyakit & PHBS", q: "Tata laksana dasar diare pada balita adalah pemberian ...", o: ["Antibiotik dari warung", "Oralit dan zinc", "Puasa makan", "Teh pahit"], a: 1, e: "Anak diare diberi oralit untuk mencegah dehidrasi dan zinc selama 10 hari berturut-turut, ASI/makanan tetap diteruskan, serta dirujuk bila ada tanda bahaya." },
    { k: "Penyakit & PHBS", q: "Berapa langkah cuci tangan pakai sabun yang dianjurkan?", o: ["2 langkah", "4 langkah", "6 langkah", "10 langkah"], a: 2, e: "Cuci tangan pakai sabun dengan air mengalir mengikuti 6 langkah, sekitar 20-30 detik, dilakukan pada waktu penting seperti sebelum makan dan setelah BAB." },
    { k: "Komunikasi & Pencatatan", q: "Sikap kader yang tepat saat memberi konseling kepada ibu balita adalah ...", o: ["Menggurui dan menyalahkan", "Mendengarkan aktif dan memberi saran sesuai kondisi ibu", "Memotong cerita ibu", "Menghindari pertanyaan"], a: 1, e: "Konseling efektif memakai mendengarkan aktif, bahasa sederhana, empati, dan saran yang realistis agar ibu mau dan mampu menerapkannya." }
];

/* ===== HELPER & STATE ===== */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function ld(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d } catch (e) { return d } }
function sv(k, v) { try { localStorage.setItem(k, JSON.stringify(v)) } catch (e) { } }
const shuf = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]] } return a };
const VIEWS = ["home", "load", "quiz", "res", "perf"];
let S = { v: "home", cat: "Semua", n: 20, m: "ujian", t0: 0, lim: 0, qs: [], i: 0, res: null }, P = ld("kader_prof", { n: "", p: "" }), TI;
const lk = q => S.m === "latihan" && q.pick !== null;
const oc = (q, i) => lk(q) ? (q.op[i].c ? "ok2" : (q.pick === i ? "no2" : "")) : (q.pick === i ? "sel" : "");

function show(v) {
    S.v = v; VIEWS.forEach(x => { $("#v-" + x).hidden = x !== v });
    document.querySelectorAll("#nav button").forEach(b => b.classList.toggle("on", b.dataset.v === (v === "perf" ? "perf" : "home")));
    window.scrollTo(0, 0);
}

/* ===== SUSUN SOAL ===== */
async function getQs() {
    const all = [...new Set(BASE.map(x => x.k))], cats = S.cat === "Semua" ? all : [S.cat];
    const ok = x => x && x.q && Array.isArray(x.o) && x.o.length === 4 && new Set(x.o).size === 4 && Number.isInteger(x.a) && x.a >= 0 && x.a < 4 && x.e;
    let ai = [];
    try {
        const sm = await claude.use("sample");
        if (sm) {
            const nb = Math.ceil(S.n / 10);
            const jobs = Array.from({ length: nb }, (_, b) => {
                const n = Math.min(10, S.n - b * 10), fo = shuf(cats).slice(0, 3).join(", ");
                return sm.json(`Kamu penyusun soal uji kompetensi kader posyandu di Indonesia. Susun ${n} soal pilihan ganda BARU dan bervariasi (kode variasi ${Math.random().toString(36).slice(2, 8)}), fokus kategori: ${fo}. Kategori yang boleh dipakai: ${all.join("; ")}. Ketentuan: mengacu pedoman Kemenkes RI dan buku KIA yang berlaku; hanya fakta yang pasti benar; satu jawaban benar; 4 pilihan yang masuk akal dan tidak tumpang tindih; sebagian soal berupa kasus singkat di posyandu; pembahasan 1-2 kalimat. Balas HANYA JSON array tanpa teks lain: [{"k":"kategori","q":"soal","o":["A","B","C","D"],"a":0,"e":"pembahasan"}] dengan a = indeks jawaban benar (0-3).`, { cache: false }).catch(() => []);
            });
            (await Promise.all(jobs)).forEach(r => { if (Array.isArray(r)) r.forEach(x => { if (ok(x)) { x.k = S.cat === "Semua" ? (all.includes(x.k) ? x.k : all[0]) : S.cat; x.ai = 1; ai.push(x) } }) });
        }
    } catch (e) { }
    const seen = new Set(), out = [];
    const add = x => { const t = x.q.toLowerCase().slice(0, 50); if (!seen.has(t)) { seen.add(t); out.push(x) } };
    ai.forEach(add);
    shuf(BASE.filter(x => cats.includes(x.k))).forEach(x => { if (out.length < S.n) add(x) });
    return shuf(out).slice(0, S.n);
}

/* ===== TIMER ===== */
function tm() {
    const s = S.lim ? Math.max(0, S.lim - Math.floor((Date.now() - S.t0) / 1000)) : Math.floor((Date.now() - S.t0) / 1000);
    return (S.lim ? "⏱ sisa " : "⏱ ") + String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}
function startTimer() {
    clearInterval(TI);
    TI = setInterval(() => {
        if (S.v !== "quiz") { clearInterval(TI); return }
        $("#tm").textContent = tm();
        if (S.lim && Date.now() - S.t0 >= S.lim * 1000) { alert("Waktu habis. Jawaban dikumpulkan otomatis."); fin() }
    }, 1000);
}

/* ===== MULAI ===== */
async function start() {
    S.cat = $("#c").value; S.n = +$("#n").value; S.m = $("#m").value;
    P = { n: $("#pn").value.trim(), p: $("#pp").value.trim() }; sv("kader_prof", P);
    show("load");
    const p = await getQs();
    if (!p.length) { show("home"); return }
    S.qs = p.map(x => ({ ...x, op: shuf(x.o.map((t, i) => ({ t, c: i === x.a }))), pick: null }));
    S.i = 0; S.t0 = Date.now(); S.lim = S.m === "ujian" ? S.qs.length * 60 : 0;
    show("quiz"); startTimer(); renderQuiz();
}

/* ===== KUIS ===== */
function renderQuiz() {
    const q = S.qs[S.i], tot = S.qs.length, done = S.qs.filter(x => x.pick !== null).length, last = S.i === tot - 1;
    $("#qi").textContent = S.i + 1; $("#qt").textContent = tot; $("#qk").textContent = q.k; $("#tm").textContent = tm();
    $("#qbar").style.width = done / tot * 100 + "%";
    $("#qq").textContent = q.q;
    const nv = $("#nvg"); nv.innerHTML = "";
    S.qs.forEach((x, n) => { const b = document.createElement("button"); b.textContent = n + 1; b.className = (n === S.i ? "cur " : "") + (x.pick !== null ? "dn" : ""); b.onclick = () => { S.i = n; renderQuiz() }; nv.appendChild(b) });
    const qo = $("#qo"); qo.innerHTML = "";
    q.op.forEach((o, i) => { const b = document.createElement("button"); b.className = "opt " + oc(q, i); b.disabled = lk(q); b.innerHTML = "<b>" + "ABCD"[i] + ".</b> " + esc(o.t); b.onclick = () => { q.pick = i; renderQuiz() }; qo.appendChild(b) });
    const ex = $("#qe"); ex.hidden = !lk(q);
    if (lk(q)) ex.textContent = (q.op[q.pick].c ? "✅ Benar. " : "❌ Kurang tepat. ") + (q.e || "");
    $("#prev").disabled = !S.i;
    $("#next").hidden = last; $("#finish").hidden = !last; $("#finish").disabled = done < tot;
    $("#qh").textContent = last && done < tot ? "Masih " + (tot - done) + " soal belum dijawab." : "";
}
function fin() {
    clearInterval(TI);
    const per = {}; let c = 0;
    S.qs.forEach(q => { const ok = q.pick !== null && q.op[q.pick].c; if (ok) c++; per[q.k] = per[q.k] || [0, 0]; per[q.k][1]++; if (ok) per[q.k][0]++ });
    S.res = { t: Date.now(), m: S.m, dur: Math.floor((Date.now() - S.t0) / 1000), n: P.n, p: P.p, cat: S.cat, tot: S.qs.length, c, per, sk: Math.round(c / S.qs.length * 100) };
    const h = ld("kader_hist", []); h.push(S.res); sv("kader_hist", h.slice(-60));
    renderRes(); show("res");
}

/* ===== HASIL ===== */
function lvl(s) { return s >= 80 ? ["Sangat kompeten · LULUS", "ok"] : s >= 70 ? ["Kompeten · LULUS", "ok"] : ["Belum kompeten (batas lulus 70)", "no"] }
function renderRes() {
    const r = S.res, l = lvl(r.sk);
    $("#rn").textContent = (r.n || "Peserta") + (r.p ? " · " + r.p : "");
    $("#rm").textContent = new Date(r.t).toLocaleString("id-ID") + " · durasi " + Math.floor(r.dur / 60) + "m " + r.dur % 60 + "d · " + (r.m === "latihan" ? "Latihan belajar" : "Ujian simulasi");
    $("#rs").textContent = r.sk;
    const t = $("#rl"); t.textContent = l[0]; t.className = "tag " + l[1];
    $("#rc").textContent = r.c + " benar dari " + r.tot + " soal · " + r.cat;
    $("#rcat").innerHTML = Object.entries(r.per).map(([k, v]) => `<div>${esc(k)} <b style="float:right">${v[0]}/${v[1]}</b><div class="bar"><i style="width:${v[0] / v[1] * 100}%"></i></div></div>`).join("");
    $("#rnote").textContent = S.qs.filter(x => x.ai).length + " dari " + S.qs.length + " soal disusun otomatis pada sesi ini. Cocokkan pembahasan dengan modul resmi pelatihan kader.";
    $("#rrev").innerHTML = S.qs.map((q, n) => {
        const ok = q.pick !== null && q.op[q.pick].c, cr = q.op.findIndex(o => o.c);
        return `<div class="card rv ${ok ? "ok" : "no"}"><div class="mu">${n + 1}. <span class="tag ${ok ? "ok" : "no"}">${ok ? "Benar" : "Salah"}</span><span class="tag">${esc(q.k)}</span></div>
    <p style="margin:8px 0"><b>${esc(q.q)}</b></p>
    <div>Jawabanmu: ${q.pick === null ? "(tidak dijawab)" : "ABCD"[q.pick] + ". " + esc(q.op[q.pick].t)}</div>
    ${ok ? "" : `<div>Jawaban benar: <b>${"ABCD"[cr]}. ${esc(q.op[cr].t)}</b></div>`}
    <div class="ex">💡 ${esc(q.e || "Belum ada pembahasan.")}</div></div>`
    }).join("");
}

/* ===== PERFORMA ===== */
function renderPerf() {
    const h = ld("kader_hist", []);
    $("#p-empty").hidden = !!h.length; $("#p-data").hidden = !h.length;
    if (!h.length) return;
    $("#p1").textContent = h.length;
    $("#p2").textContent = Math.round(h.reduce((a, x) => a + x.sk, 0) / h.length);
    $("#p3").textContent = Math.max(...h.map(x => x.sk));
    $("#pbars").innerHTML = h.slice(-10).map(x => `<div style="height:${Math.max(x.sk, 3)}%"><span>${x.sk}</span></div>`).join("");
    const agg = {}; h.forEach(x => Object.entries(x.per).forEach(([k, v]) => { agg[k] = agg[k] || [0, 0]; agg[k][0] += v[0]; agg[k][1] += v[1] }));
    $("#pcat").innerHTML = Object.entries(agg).map(([k, v]) => [k, Math.round(v[0] / v[1] * 100), v]).sort((a, b) => a[1] - b[1])
        .map(r => `<div>${esc(r[0])} <b style="float:right">${r[1]}%</b><div class="bar"><i style="width:${r[1]}%"></i></div><div class="mu" style="margin-top:-8px;margin-bottom:8px">${r[2][0]} benar dari ${r[2][1]} soal</div></div>`).join("");
    $("#phist").innerHTML = h.slice(-10).reverse().map(x => `<tr><td>${new Date(x.t).toLocaleDateString("id-ID")}</td><td>${x.m === "latihan" ? "Latihan" : "Ujian"}</td><td>${esc(x.cat)}</td><td><b>${x.sk}</b> ${x.sk >= 70 ? "✓" : ""}</td></tr>`).join("");
}

/* ===== INISIALISASI ===== */
function init() {
    $("#c").innerHTML = ["Semua", ...new Set(BASE.map(x => x.k))].map(c => `<option>${esc(c)}</option>`).join("");
    $("#pn").value = P.n; $("#pp").value = P.p;
    document.querySelectorAll("#nav button").forEach(b => b.onclick = () => { if (b.dataset.v === "perf") renderPerf(); show(b.dataset.v) });
    $("#btn-start").onclick = start;
    $("#prev").onclick = () => { S.i--; renderQuiz() };
    $("#next").onclick = () => { S.i++; renderQuiz() };
    $("#finish").onclick = fin;
    $("#r-again").onclick = () => show("home");
    $("#r-perf").onclick = () => { renderPerf(); show("perf") };
    $("#r-print").onclick = () => window.print();
    $("#p-go").onclick = () => show("home");
    $("#p-reset").onclick = () => { if (confirm("Hapus semua riwayat nilai?")) { sv("kader_hist", []); renderPerf() } };
    show("home");
}
init();