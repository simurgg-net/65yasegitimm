// Görsel verileri assets.js dosyasından alınır.
const IMG = window.DIGITAL_ADIM_ASSETS;
const I=(k,w,s)=>`<img src="data:${IMG[k][0]};base64,${IMG[k][1]}" alt="" style="width:${w}px;${s||""}">`;
const V=(p,x)=>`<svg class="i" viewBox="0 0 24 24" ${x||""}>${p}</svg>`;
const ic={home:V('<path d="M12 3 2 12h3v8h5v-6h4v6h5v-8h3z"/>','fill="currentColor"'),search:V('<circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/>','fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"'),list:V('<rect x="2" y="4" width="7" height="4.5" rx="1"/><rect x="11" y="4" width="11" height="4.5" rx="1"/><rect x="2" y="10" width="7" height="4.5" rx="1"/><rect x="11" y="10" width="11" height="4.5" rx="1"/><rect x="2" y="16" width="7" height="4.5" rx="1"/><rect x="11" y="16" width="11" height="4.5" rx="1"/>','fill="currentColor"'),user:V('<circle cx="12" cy="8" r="5"/><path d="M3 22c0-5 4-8 9-8s9 3 9 8z"/>','fill="currentColor"'),
star:V('<path d="m12 1.5 3.2 7 7.6.8-5.7 5.2 1.6 7.5L12 18l-6.7 4 1.6-7.5L1.2 9.3l7.6-.8z"/>','fill="#ffb800" style="width:44px;height:44px"'),starO:V('<path d="m12 2.5 2.9 6.4 7 .7-5.2 4.7 1.5 6.9L12 17.6l-6.2 3.6 1.5-6.9L2.1 9.6l7-.7z"/>','fill="none" stroke="#9aa0ab" stroke-width="1.6" stroke-linejoin="round" style="width:34px;height:34px"'),
chat:V('<path fill="#2f7de1" d="M3 3h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H10l-6 5v-5H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>','style="width:44px;height:44px"'),
warn:V('<path fill="#f5a300" d="M12 2 1 21h22z"/><path stroke="#262b33" stroke-width="2.4" stroke-linecap="round" d="M12 9v5m0 3v.5"/>','style="width:34px;height:34px"'),back:V('<path d="M20 12H5m6-7-7 7 7 7"/>','fill="none" stroke="#9aa0ab" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="width:32px;height:32px"'),
info:V('<circle cx="12" cy="12" r="11" fill="#b8bec9"/><path stroke="#17181c" stroke-width="2.6" stroke-linecap="round" d="M12 11v6m0-9.5v.5"/>','style="width:34px;height:34px"'),x:V('<path d="m5 5 14 14M19 5 5 19"/>','fill="none" stroke="#c8cdd6" stroke-width="2.6" stroke-linecap="round" style="width:22px;height:22px"'),menu:V('<path d="M3 6h18M3 12h18M3 18h18"/>','fill="none" stroke="#c8cdd6" stroke-width="2.2" stroke-linecap="round"'),chev:V('<path d="m9 5 7 7-7 7"/>','fill="none" stroke="#4da3ff" stroke-width="3" stroke-linecap="round" style="width:16px;height:16px"'),
lens:V('<circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/>','fill="none" stroke="#9aa0ab" stroke-width="2.6" stroke-linecap="round" style="width:40px;height:40px"'),ok:V('<circle cx="12" cy="12" r="11" fill="#2fa36b"/><path d="m6.5 12.5 3.5 3.5 7-8" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>','style="width:70px;height:70px"')};
// Kullanıcının eğitime başlamadan önce göreceği beş ana aşama.
const ST=["Hazırlık","Giriş","Hizmeti bulma","Hizmeti inceleme","Güvenli çıkış"];
/*
 * DİJİTAL ADIM – EĞİTİM AKIŞI
 * S dizisindeki her kayıt bir eğitim adımıdır:
 * [aşama numarası, gösterilen ekran, tıklanacak hedef, ekran durumu,
 *  başlık, açıklama, kullanıcı ipucu, örnek metin, ek bilgi]
 */
const S=[
[0,"home","egovapp",0,"e-Devlet uygulamasını açın","Telefonda e-Devlet işlemleri için kırmızı e-Devlet uygulamasını kullanırız.","Ekrandaki kırmızı “e-Devlet” simgesine dokunun."],
[1,"login","tc",0,"TC Kimlik No kutusuna yazın","Kutuya dokunup kimlik numarasını yazacağız. Bu denemede aşağıdaki örnek numarayı kullanın.","“T.C. Kimlik No” kutusuna dokunun ve örnek numarayı yazın.","12345678910","Gerçek hayatta bu kutuya kendi TC kimlik numaranızı yazarsınız. Bu denemede gerçek numara yazmıyoruz."],
[1,"login","pwd",1,"Şifre kutusuna yazın","İkinci kutuya e-Devlet şifresi yazılır. Yazarken noktalar görünür, bu normaldir. Şifrenizi yanınızdaki biri görmesin diye böyledir.","“e-Devlet Şifresi” kutusuna dokunun ve örnek şifreyi yazın.","12345","Gerçek hayatta kendi e-Devlet şifrenizi yazarsınız ve kimseyle paylaşmazsınız."],
[1,"login","enter",2,"Giriş Yap düğmesine basın","İki kutu da dolu. Şimdi mavi düğmeye basarız.","Mavi “Giriş Yap” düğmesine dokunun."],
[2,"dash","tSearch",0,"Alttaki Arama sekmesine dokunun","Giriş yaptık. Hizmeti arama bölümünden bulacağız.","En altta büyüteç işaretli “Arama” sekmesine dokunun."],
[2,"search","sbox",0,"Hizmet Ara kutusuna yazın","Aradığımız hizmetin adını bu kutuya kendimiz yazarız.","“Hizmet Ara” kutusuna dokunun ve örnek yazıyı yazın.","trafik cezası sorgulama","Yazdıkça altta ilgili hizmetler listelenir."],
[2,"search","plate",1,"Doğru hizmeti seçin","Listede birkaç hizmet çıktı. Bizim işimiz aracımıza yazılan trafik cezası.","“Araç Plakasına Yazılan Ceza Sorgulama” satırına dokunun.",null,"Diğer hizmetler başka işler içindir: vergi, sürücü belgesi, ödenmiş cezalar gibi. Adı “Araç Plakasına Yazılan” olanı seçin."],
[3,"svc","info",0,"Açıklama kutusunu okuyun","Hizmet sayfası açıldı. En üstteki kutu, bu hizmetin ne işe yaradığını anlatır.","Açıklama kutusuna dokunun.",null,"Bu kutu ne diyor? Bu hizmetle, adınıza kayıtlı aracın plakasına son bir yıl içinde yazılan trafik cezalarına bakabilirsiniz. Yani sadece bakıyoruz. Hiçbir şey ödenmez, hiçbir şey değişmez."],
[3,"svc","warn",0,"Sonuç kutusunu okuyun","Sarı işaretli “Uyarı” kutusu sorgunun sonucunu söyler.","Sarı işaretli “Uyarı” kutusuna dokunun.",null,"Bu kutu ne diyor? “Ceza bulunamadı” yazıyorsa, son bir yılda aracınıza yazılmış ceza yok demektir. Bu iyi bir haberdir. “Uyarı” yazması sizi korkutmasın."],
[4,"svc","close",0,"Hizmeti kapatın","İşimiz bitti. Sağ üstteki “Hizmeti Kapat” düğmesiyle sayfayı kapatırız.","Sağ üstteki “Hizmeti Kapat” düğmesine dokunun."],
[4,"dash","tProf",0,"Profilim sekmesine dokunun","Çıkış düğmesi Profilim bölümünde durur.","En altta sağdaki “Profilim” sekmesine dokunun."],
[4,"prof","power",0,"Çıkış simgesine dokunun","Profilim ekranının sağ üstünde çıkış simgesi var. Daire içinde dikey çizgi gibi görünür.","Sağ üstteki çıkış simgesine dokunun.",null,"Neden çıkış yapıyoruz? Çıkış yapmazsanız telefonu eline alan biri hesabınıza girebilir. İşiniz bitince hep çıkış yapın."],
[4,"profd","exit",0,"“Çıkış Yap” ile onaylayın","Uygulama “emin misiniz?” diye sorar. Bu normaldir, sadece kontrol eder.","Sağ taraftaki “ÇIKIŞ YAP” yazısına dokunun."],
[4,"end",null,0,"Tebrikler, tamamladınız!","Açmaktan çıkışa kadar tüm adımları yaptınız. İsterseniz baştan tekrar edebilirsiniz.","Dilediğiniz kadar tekrar edebilirsiniz."]];
// Yanlış yere dokunulduğunda kullanıcıya gösterilecek kısa açıklamalar.
const W={"":"Orada dokunulacak bir düğme yok, o yüzden bir şey olmadı.",phone:"Telefon görüşmesi içindir.",msg:"Mesajlaşma içindir, e-Devlet ile ilgisi yok.",chrome:"İnternet tarayıcısı da işe yarar, ama bu derste e-Devlet uygulamasını kullanıyoruz.",cam:"Fotoğraf çekmek içindir.",sign:"Bu da geçerli bir giriş yöntemidir, ama biz şifreyle gireceğiz.",onay:"Başka bir giriş yoludur, biz şifreyle gireceğiz.",kare:"Başka bir giriş yoludur, biz şifreyle gireceğiz.",forgot:"Şifreyi unutanlar içindir.",yardim:"Yardım bölümüdür, ileride bakabilirsiniz.",hava:"Hızlı erişim kısayoludur, şu an gerekmiyor.",eczane:"Hızlı erişim kısayoludur, şu an gerekmiyor.",acil:"Hızlı erişim kısayoludur, şu an gerekmiyor.",fav:"Sık kullanılanlar listesidir, şimdilik bakmayacağız.",mesajlarim:"Gelen mesajlarınız burada durur, şimdilik bakmayacağız.",atam:"Bu bir tanıtım kutusudur.",duyuru:"Duyuru kartıdır, şu an gerekmiyor.",feat:"Bu da aynı hizmete götürürdü. Ama biz aramayı öğrenelim, başka hizmetler için de işe yarar.",tHome:"Zaten ana sayfadayız.",tServ:"Tüm hizmetlerin listesidir. Biz aramayı kullanacağız.",tSearch:"Arama sekmesi şu an gerekmiyor.",vergi:"Vergi borcu içindir, bizim işimiz trafik cezası.",kgm:"Karayolları’nın ayrı bir hizmetidir, biz aracımıza yazılan cezaya bakacağız.",lic:"Sürücü belgesi ve kişiye yazılan cezalar içindir. Biz araç plakasına bakıyoruz.",odeme:"Ödenmiş cezalara bakar. Biz yazılmış cezaya bakıyoruz.",tuzel:"Şirketler içindir, biz kendi aracımıza bakıyoruz.",sgk:"SGK içindir, bizim işimiz trafik cezası.",hat:"Hat sorgulama içindir.",dava:"Dava dosyaları içindir.",sicil:"Adli sicil içindir.",back:"Geri oku bir önceki ekrana döndürürdü. Hizmeti düzgün kapatmak için “Hizmeti Kapat”ı kullanırız.",tc:"Bu kutu şu an değil, sırası gelince yazacağız.",pwd:"Bu kutu şu an değil, sırası gelince yazacağız.",phelp:"Yardım içindir.",edit:"Bilgilerinizi değiştirmek içindir, hiçbir şey değişmedi.",kimlik:"Kimlik ve adres bilgileri içindir.",sifre:"Şifre değiştirmek içindir. Biz şimdi çıkış yapacağız.",iki:"Giriş güvenliği ayarlarıdır.",gecmis:"Kullanım geçmişini gösterir.",cancel:"İptal, çıkıştan vazgeçmek içindir. Biz çıkış yapacağız."};
// Arayüzde tekrar kullanılan mesajlar ve yardımcı fonksiyonlar.
const WO=["Çok güzel denediniz, denemek öğrenmenin parçasıdır. 🌿","Hiç sorun yok, hiçbir şey bozulmadı. 🌿","Gayet iyi gidiyorsunuz, acele etmeyin. 🌿"];
const OK=["Başardınız!","Harika, tam isabet!","Aferin, çok güzel yaptınız!"];
let n=0,d=false;const $=i=>document.getElementById(i),ph=$("ph");
const b=(k,l,c,h)=>`<button class="t ${c}" data-k="${k}" data-l="${l}">${h||l}</button>`;
const N=s=>s.toLocaleLowerCase("tr").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ı/g,"i").replace(/\s+/g," ").trim();
const tabs=a=>`<div class="tabs">${[["tHome","Anasayfa",ic.home],["tSearch","Arama",ic.search],["tServ","Hizmetler",ic.list],["tProf","Profilim",ic.user]].map(x=>b(x[0],x[1]+" sekmesi",x[1]==a?"on":"",x[2]+"<br>"+x[1])).join("")}</div>`;
const R=(k,lg,t,o)=>b(k,t,"res",I(lg,56,"border-radius:10px;flex:none")+`<span><b>${t}</b><br><small>${o}</small></span>`);
// Arama sonuçlarında gösterilen örnek e-Devlet hizmetleri.
const EGM="Emniyet Genel Müdürlüğü",GIB="Gelir İdaresi Başkanlığı";
window.searchQuery = "";
const SERVICE_ITEMS = [
  ["plate","egm","Araç Plakasına Yazılan Ceza Sorgulama",EGM,"trafik cezası plaka araç plakası araca yazılan ceza"],
  ["vergi","gib","Vergi Borcu Sorgulama ve Ödeme",GIB,"vergi borcu ödeme"],
  ["kgm","kgm","Trafik İdari Para Cezası Sorgulama","Karayolları Genel Müdürlüğü","trafik cezası idari para cezası karayolları"],
  ["lic","egm","Sürücü Belgesi ve Şahıslara Yazılan Ceza Sorgulama",EGM,"ehliyet sürücü şahıs cezası"],
  ["odeme","gib","Trafik Para Cezası Ödemeleri Sorgulama",GIB,"ödenmiş ceza ödeme"],
  ["tuzel","egm","Araç Plakasına Yazılan Ceza Sorgulama (Tüzel Kişi)",EGM,"şirket tüzel kişi kurumsal plaka"],
  ["sgk","sgk","SGK Tescil ve Hizmet Dökümü / İşyeri Ünvan Listesi","Sosyal Güvenlik Kurumu"],
  ["hat","btk","Mobil Hat Sorgulama","Bilgi Teknolojileri ve İletişim Kurumu"],
  ["dava","adl","Dava Dosyası Sorgulama","Adalet Bakanlığı"],
  ["sicil","sicil","Adli Sicil Kaydı Sorgulama","Adalet Bakanlığı"]
];
// Arama kutusundaki metni Türkçe karakterleri dikkate alarak normalize eder.
// Her kelime sonuç başlığında veya kurum/açıklama alanında aranır.
function searchResults(query) {
  const q = N(query || "");
  const terms = q.split(" ").filter(Boolean);
  const items = terms.length
    ? SERVICE_ITEMS.filter(x => {
        const haystack = N(`${x[2]} ${x[3]} ${x[4] || ""}`);
        return terms.every(term => haystack.includes(term));
      })
    : SERVICE_ITEMS.slice(0, 6);
  return items.length
    ? items.map(x => R(x[0], x[1], x[2], x[3])).join("")
    : `<p class="empty-results">Aramanızla eşleşen hizmet bulunamadı. Yazımınızı kontrol edip tekrar deneyin.</p>`;
}

const F=(k,l,p,v,ty,ac,pre)=>`<div class="t fld ${pre||""}" data-k="${k}" data-l="${l}">${pre?'':''}<input id="in_${k}" type="${ty}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${p}" value="${v}" ${ac?"":"readonly tabindex=-1"}></div>`;
// Eğitim telefonunun o anki ekranını üretir. Gerçek bir e-Devlet bağlantısı yoktur.
function screen(s,f){const T=S[n][2],tc=f>=1||(d&&T==="tc"),pw=f>=2||(d&&T==="pwd"),ty=f||d,a1=T==="tc"&&!d,a2=T==="pwd"&&!d,a3=T==="sbox"&&!d;
 const H={
 home:()=>`<div style="background:#000;min-height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:16px"><div style="width:90px">${b("egovapp","e-Devlet uygulaması simgesi","ap",I("app",62,"border-radius:16px")+"e-Devlet")}</div><div class="q" style="background:#1c1c1e;border-radius:26px;padding:10px">${b("phone","Telefon simgesi","ap",I("phone",62))}${b("msg","Mesajlar simgesi","ap",I("msg",62))}${b("chrome","Chrome simgesi","ap",I("chrome",62))}${b("cam","Kamera simgesi","ap",I("cam",62))}</div></div>`,
 login:()=>`<div class="pad" style="text-align:center"><div style="display:flex;justify-content:space-between;align-items:center">${I("siber",150)}${ic.menu}</div><div style="margin:10px 0">${I("lg2",250)}</div>${F("tc","T.C. Kimlik No kutusu","T.C. Kimlik No",tc?"12345678910":"","text",a1)}${F("pwd","e-Devlet Şifresi kutusu","e-Devlet Şifresi",pw?"12345":"","password",a2)}<div style="text-align:right">${b("forgot","Şifremi Unuttum","lnk sm","<u><b>Şifremi Unuttum</b></u>")}</div>${b("enter","Giriş Yap","btn")}${b("sign","Mobil İmza ile Giriş Yap","lnk")}<hr class="hr"><div class="q">${b("onay","Mobil Onay","qk",I("onay",56)+"<br>Mobil Onay")}${b("kare","Karekod Okut","qk",I("kare",56)+"<br>Karekod Okut")}${b("yardim","Yardım","qk",I("yrd",56)+"<br>YARDIM")}</div><hr class="hr"><div class="ph">HIZLI ERİŞİM</div><div class="q">${b("hava","Hava Durumu","qk",I("hava",56)+"<br>Hava Durumu")}${b("eczane","Nöbetçi Eczane Sorgulama","qk",I("ecz",56)+"<br>Nöbetçi Eczane Sorgulama")}${b("acil","Acil Toplanma Alanları","qk",I("acil",56)+"<br>Acil Toplanma Alanları")}</div></div>`,
 dash:()=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 14px">${I("logo",190)}${ic.info}</div><div class="pad" style="padding-top:0"><div class="q">${b("fav","Favori Hizmetlerim","","<span class='rw'>"+ic.star+"<b>Favori Hizmetlerim</b></span>")}${b("mesajlarim","Mesajlarım","","<span class='rw'>"+ic.chat+"<b>Mesajlarım</b></span>")}</div>${b("atam","ATAM","","<span class='rw'>"+I("atam",58,"border-radius:50%")+"<span><b>ATAM</b><br><small class='ph'>Atatürk Araştırma Merkezi İnternet sitesini ziyaret edin.</small></span></span>")}<h3>Duyurular</h3>${b("duyuru","Duyuru kartı","",I("banner",290,"display:block;border-radius:6px")+"<small>Digital@UNGA 2026’da Türkiye, dijital devlet alanında uluslararası bir başarıya imza attı.</small><div style='text-align:right;color:#4da3ff;font-weight:700'>Detaylı Bilgi "+ic.chev+"</div>")}<div style="display:flex;justify-content:space-between;align-items:center"><h3>Öne Çıkan Hizmetler</h3><span style="color:#4da3ff;font-weight:700">Tümü ${ic.chev}</span></div>${R("feat","egm","Araç Plakasına Yazılan Ceza Sorgulama",EGM)}</div>${tabs("Anasayfa")}`,
 search:()=>`<div class="pad"><h3 style="margin:4px 0 12px">Arama</h3><div class="t sb fld" data-k="sbox" data-l="Hizmet Ara kutusu"><span class="rw">${ic.lens}<input id="in_sbox" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Hizmet Ara" value="${window.searchQuery || ""}" ${a3?"":"readonly tabindex=-1"} style="border-bottom:3px solid ${a3?"#3d8bfd":"#9aa0ab"}"></span></div><div id="searchResults" aria-live="polite">${searchResults(window.searchQuery || "")}</div></div>${tabs("Arama")}`,
 svc:()=>`<div style="display:flex;align-items:center;gap:12px;padding:12px 14px">${b("back","Geri oku","lnk sm",ic.back)}<b style="flex:1;font-size:20px">Araç Plakasına Yazılan…</b>${ic.starO}</div><div style="text-align:right;padding:0 14px 12px;border-bottom:1px solid #3a4049">${b("close","Hizmeti Kapat","sm","<b>Hizmeti Kapat</b>")}</div><div class="pad">${b("info","Açıklama kutusu","","Bu hizmeti kullanarak, adınıza tescilli araç plakasına son bir yıl içerisinde yazılan trafik cezalarını sorgulayabilirsiniz.")}${b("warn","Uyarı kutusu","","<span class='rw'>"+ic.warn+"<b style='color:#f5b324;font-size:22px'>Uyarı</b></span>Son bir yıl içerisinde adınıza kayıtlı araç plakasına yazılan herhangi bir ceza bulunamadı.")}</div>`,
 prof:()=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 14px"><h3 style="margin:0;font-size:26px">Profilim</h3><span style="display:flex;gap:10px">${b("phelp","Yardım simgesi","ap",I("help",40))}${b("power","Çıkış simgesi","ap",I("pow",40))}</span></div><div class="pad" style="padding-top:0"><div class="card2"><div style="font-size:22px;font-weight:700;margin:8px 0 22px">DENEME</div><div class="kv"><span class="ph">Telefon No</span><span>05000000000</span></div><div class="gr">SMS ve Kimlik Kartı ile doğrulandı.</div><div class="kv"><span class="ph">E-Posta</span><span>deneme123@gmail.com</span></div><div class="gr">Doğrulanmış E-posta adresi</div><p class="ph" style="font-size:15px">Bilgilendirme e-postaları doğrulanmış eposta adresinize gönderilecektir.</p><div style="text-align:right">${b("edit","Bilgilerimi Düzenle","btn sm","<b>BİLGİLERİMİ DÜZENLE</b>")}</div></div><div class="g2">${b("kimlik","Kimlik ve Adres Bilgileri","tile",I("idc",52)+"<b>Kimlik ve<br>Adres Bilgileri</b>")}${b("sifre","Şifre Değiştir","tile",I("lock",46)+"<b>Şifre Değiştir</b>")}${b("iki","İki Aşamalı Giriş İşlemleri","tile",I("shd",46)+"<b>İki Aşamalı<br>Giriş İşlemleri</b>")}${b("gecmis","Kullanım Geçmişi","tile",I("hist",52)+"<b>Kullanım<br>Geçmişi</b>")}</div></div>${tabs("Profilim")}`,
 end:()=>`<div class="pad" style="text-align:center;padding-top:60px">${ic.ok}<h3>Güvenle çıkış yaptınız</h3></div>`};
 H.profd=H.prof;return H[s]()}
// Adım tamamlandığında kısa bir başarı sesi ve titreşim verir.
function chime(){try{const a=new(window.AudioContext||window.webkitAudioContext)();[660,880].forEach((f,i)=>{const o=a.createOscillator(),g=a.createGain(),t=a.currentTime+i*.16;o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.2,t+.03);g.gain.exponentialRampToValueAtTime(.0001,t+.4);o.connect(g);g.connect(a.destination);o.start(t);o.stop(t+.45)});navigator.vibrate&&navigator.vibrate(60)}catch(e){}}
function done(){d=true;render();chime();$("fb").scrollIntoView({block:"nearest",behavior:"smooth"})}
// Aktif adımın metnini, telefon ekranını ve ilerleme çubuğunu yeniler.
function render(){const s=S[n];$("stg").textContent=`Adım ${s[0]+1} / 5`;
 $("steps").innerHTML=ST.map((t,i)=>`<div class="${i<s[0]?"ok":i==s[0]?"on":""}">${i<s[0]?"✓ ":(i+1)+". "}${t}</div>`).join("");
 $("ti").textContent=s[4];$("tx").textContent=s[5];$("hi").textContent="👆 "+s[6];
 $("ex").innerHTML=s[7]&&!d?`Yazacağınız örnek: <b>${s[7]}</b>`:"";$("ex").style.display=s[7]&&!d?"block":"none";
 $("xt").innerHTML=s[8]?`<b>Bunu bilmek iyi olur</b><br>${s[8]}`:"";$("xt").style.display=s[8]?"block":"none";
 $("scr").innerHTML=screen(s[1],s[3]);const ov=$("ov");$("hl").style.display="none";
 ov.style.display=s[1]=="profd"?"block":"none";ov.innerHTML=s[1]=="profd"?`<div class="dim"></div><div class="dlgb"><p>Çıkış yapmak istediğinizden emin misiniz?</p><div style="text-align:right">${b("cancel","İPTAL","lnk sm","<b>İPTAL</b>")}${b("exit","ÇIKIŞ YAP","lnk sm","<b>ÇIKIŞ YAP</b>")}</div></div>`:"";
 const last=n==S.length-1||S[n+1][0]!=s[0];
 $("fb").innerHTML=(n===S.length-1)?`<div class="completion-card"><div class="completion-icon">🏆</div><h3>Eğitimi başarıyla tamamladınız!</h3><p>e-Devlet üzerinden trafik cezası sorgulama adımlarını baştan sona tamamladınız.</p><button class="nx" id="againNow" type="button">Baştan tekrar et</button></div>`:d?`<div class="good"><svg class="pop" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#fff"/><path d="m6.5 12.5 3.5 3.5 7-8" stroke="#0b7a6b" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg><div>${OK[n%3]} Hazır olduğunuzda “Sonraki adım”a basın.${last?`<br><b>“${ST[s[0]]}” aşamasını tamamladınız!</b>`:""}</div></div>`:"";
 const tg=ph.querySelector(`[data-k="${s[2]}"]`);if(tg)tg.classList.add(d?"won":"soft");
 if(s[7]&&!d)setTimeout(()=>{const i=$("in_"+s[2]);i&&i.focus({preventScroll:true})},60);
 $("next").disabled=!d;$("next").textContent=n==S.length-1?"Baştan başla ↻":"Sonraki adım →";$("prev").disabled=n==0;
 $("nxt").textContent=`Şu an: ${ST[s[0]]} • Adım ${n+1} / ${S.length}`;}
// Ekrandaki hedefin üzerine yönlendirme balonunu konumlandırır.
function place(){const t=ph.querySelector(`[data-k="${S[n][2]}"]`),h=$("hl");if(!t||d){h.style.display="none";return}
 const P=ph.getBoundingClientRect(),r=t.getBoundingClientRect();h.style.display="block";const w=h.offsetWidth,hh=h.offsetHeight,up=r.top-P.top>hh+44;
 h.className=up?"up":"dn";h.style.top=(up?r.top-P.top-hh-12:Math.min(r.bottom-P.top+12,P.height-hh-8))+"px";
 h.style.left=Math.max(6,Math.min(r.left-P.left+r.width/2-w/2,P.width-w-6))+"px";h.style.setProperty("--ax",Math.max(14,Math.min(r.left-P.left+r.width/2-parseFloat(h.style.left),w-14))+"px")}
function show(){const t=ph.querySelector(`[data-k="${S[n][2]}"]`);if(!t||d)return;$("hl").innerHTML="Buraya dokunun";t.scrollIntoView({block:"center",behavior:"auto"});t.classList.add("hint");place()}
$("scr").addEventListener("scroll",()=>{if($("hl").style.display=="block")place()});
ph.addEventListener("click",e=>{if(!e.target.closest("#scr,#ov"))return;const s=S[n],t=e.target.closest(".t")||{dataset:{k:"",l:"ekranın boş bir yeri"}};if(d)return;
 if(t.dataset.k===s[2]){if(s[7]){const i=$("in_"+s[2]);i&&i.focus()}else done();return}
 const l=t.dataset.l||t.textContent.trim();$("dm").innerHTML=`<b>${WO[(n+(t.dataset.k||"").length)%3]}</b><br><br>Dokunduğunuz yer: <b>${l}</b>. ${W[t.dataset.k]||"Şu an ihtiyacımız olan yer burası değil."}<br><br>Birlikte tekrar bakalım: <b>${s[6]}</b><br><br><small>İsterseniz “Bana yerini göster” diyebilirsiniz.</small>`;$("dlg").showModal()});
ph.addEventListener("input",e=>{
 const s=S[n];
 if(d || e.target.id!=="in_"+s[2]) return;
 const v=e.target.value;
 if(s[2]==="sbox") {
   window.searchQuery=v;
   const results=$("searchResults");
   if(results) results.innerHTML=searchResults(v);
   if (N(v).includes(N(s[7]))) {
     // Bu deneme ekranında ayrı bir “Hizmeti Ara” düğmesi bulunmaz.
     // Arama metni tamamlanınca bu adım biter; sonraki adımda sonuç seçilir.
     done();
   } else {
     $("fb").innerHTML=v.trim()
       ? `<div class="tip-live">Yazdıkça sonuçlar daralıyor. “${s[7]}” yazdığınızda sonuç seçme adımına geçeceğiz.</div>`
       : "";
   }
   return;
 }
 if(!s[7]) return;
 const ok=v.trim()===s[7];
 if(ok){e.target.blur();done();return}
 $("fb").innerHTML=`<div class="warnb">${v.length>=s[7].length?"Örneği kontrol edin; bir rakam farklı olabilir.":"Güzel gidiyorsunuz, yazmaya devam edin."} (${v.length} / ${s[7].length})</div>`;
});
$("dok").onclick=()=>$("dlg").close();$("dshow").onclick=()=>{$("dlg").close();show()};
$("help").onclick=show;
$("next").onclick=()=>{stopAudio();if(n==S.length-1)n=0;else n++;d=n==S.length-1;if(S[n][2]==="sbox")window.searchQuery="";render()};
$("prev").onclick=()=>{stopAudio();if(n>0){n--;d=false;if(S[n][2]==="sbox")window.searchQuery="";render()}};
$("restart").onclick=()=>{stopAudio();n=0;d=false;window.searchQuery="";render()};
/* -------------------------------------------------------------------------
   SESLİ ANLATIM
   - Önce sounds/adim-XX.mp3 dosyası varsa onu çalar.
   - Kayıt dosyası eklenmemişse tarayıcının Türkçe seslendirmesine geçer.
   - Böylece ses özelliği, kullanıcının ayrıca kayıt hazırlamasını beklemez.
   ------------------------------------------------------------------------- */
let activeAudio = null;
let usingSpeech = false;
let speechPaused = false;

const audioForStep = () => `sounds/adim-${String(n + 1).padStart(2, "0")}.mp3`;

function updateAudioButtons(playing = false, paused = false) {
  $("listen").textContent = playing ? "▶ Baştan oynat" : "▶ Sesi dinle";
  $("pauseAudio").disabled = !playing;
  $("stopAudio").disabled = !playing;
  $("pauseAudio").textContent = paused ? "▶ Devam et" : "⏸ Duraklat";
}

function stopAudio() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  usingSpeech = false;
  speechPaused = false;
  updateAudioButtons(false, false);
}

function speakCurrentStep() {
  if (!("speechSynthesis" in window)) {
    $("fb").innerHTML = '<div class="warnb">Bu tarayıcı sesli okumayı desteklemiyor. Chrome veya Edge ile deneyebilirsiniz.</div>';
    return;
  }

  const step = S[n];
  const spokenText = [step[4], step[5], step[6], step[7] ? `Yazılacak örnek: ${step[7]}` : "", step[8] || ""]
    .filter(Boolean)
    .join(". ");
  const utterance = new SpeechSynthesisUtterance(spokenText);
  utterance.lang = "tr-TR";
  utterance.rate = 0.92;
  utterance.pitch = 1;
  utterance.onend = () => {
    usingSpeech = false;
    speechPaused = false;
    updateAudioButtons(false, false);
  };
  utterance.onerror = () => {
    usingSpeech = false;
    speechPaused = false;
    updateAudioButtons(false, false);
    $("fb").innerHTML = '<div class="warnb">Sesli anlatım başlatılamadı. Tarayıcının ses ayarlarını kontrol edin.</div>';
  };

  usingSpeech = true;
  speechPaused = false;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
  updateAudioButtons(true, false);
}

function playAudioFileOrSpeech() {
  let fallbackStarted = false;
  const useSpeechFallback = () => {
    if (fallbackStarted) return;
    fallbackStarted = true;
    activeAudio = null;
    speakCurrentStep();
  };

  const audio = new Audio(audioForStep());
  activeAudio = audio;
  audio.preload = "auto";
  audio.addEventListener("ended", () => {
    activeAudio = null;
    updateAudioButtons(false, false);
  }, { once: true });
  audio.addEventListener("error", () => {
    // MP3 henüz eklenmemişse otomatik olarak tarayıcı seslendirmesini kullan.
    useSpeechFallback();
  }, { once: true });
  audio.play().then(() => updateAudioButtons(true, false)).catch(() => {
    useSpeechFallback();
  });
}

$("listen").onclick = () => {
  stopAudio();
  playAudioFileOrSpeech();
};

$("pauseAudio").onclick = () => {
  if (usingSpeech) {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      speechPaused = false;
      updateAudioButtons(true, false);
    } else {
      window.speechSynthesis.pause();
      speechPaused = true;
      updateAudioButtons(true, true);
    }
    return;
  }
  if (!activeAudio) return;
  if (activeAudio.paused) {
    activeAudio.play().then(() => updateAudioButtons(true, false));
  } else {
    activeAudio.pause();
    updateAudioButtons(true, true);
  }
};

$("stopAudio").onclick = stopAudio;

// Son ekrandaki tekrar başlat düğmesi tüm ilerlemeyi güvenli biçimde sıfırlar.
$("fb").addEventListener("click", event => {
  if (event.target && event.target.id === "againNow") {
    stopAudio();
    n = 0;
    d = false;
    window.searchQuery = "";
    render();
  }
});
// Başlangıç bilgilendirme ekranından eğitim akışına geçiş.
const startTrainingButton = $("startTraining");
if (startTrainingButton) {
  startTrainingButton.addEventListener("click", () => {
    $("welcomeScreen").hidden = true;
    $("welcomeScreen").style.display = "none";
  });
}

render();
