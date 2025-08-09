// gejalaData.js (Revisi untuk mencerminkan nilai gejalaMapping yang baru)
const gejalaData = [
  {
    kode: "G01",
    gejala: "Kesulitan untuk berdiri tegak atau berjalan",
    subGejala: [
      "Kebas dan kesemutan",
      "Kejang otot pada punggung bagian bawah",
      "Terjadi kekakuan dan sulit menggerakkan atau meluruskan punggung",
      "Tidak"
    ]
  },
  {
    kode: "G02",
    gejala: "Gangguan sistem eksresi",
    subGejala: [
      "Gangguan berkemih (Buang Air Kecil)",
      "Rasa sakit atau nyeri saat beraktivitas",
      "Gangguan Buang Air Besar",
      "Tidak"
    ]
  },
  {
    kode: "G03",
    gejala: "Rasa nyeri menusuk pada punggung bagian bawah",
    subGejala: [
      "Rasa nyeri saat sedang beristirahat",
      "Rasa nyeri seperti tertusuk atau terbakar",
      "Rasa nyeri saat batuk, membungkuk, dan beraktivitas",
      "Rasa nyeri menjalar ke bokong, pinggul, dan kaki",
      "Tidak"
    ]
  },
  {
    kode: "G04",
    gejala: "Kehilangan keseimbangan secara tiba tiba",
    subGejala: [
      "Kehilangan konsentrasi",
      "Mati rasa pada sisi yang sakit",
      "Kelemahan di satu sisi tubuh",
      "Sempoyongan",
      "Lingkungan sekitar seperti berputar",
      "Tidak"
    ]
  },
  {
    kode: "G05",
    gejala: "Gangguan telinga bagian dalam",
    subGejala: [
      "Kehilangan pendengaran pada satu bagian telinga",
      "Kehilangan pendengaran pada kedua bagian telinga",
      "Telinga terasa berdenging",
      "Tidak"
    ]
  },
  {
    kode: "G06",
    gejala: "Mual dan muntah",
    subGejala: [
      "Mual ringan (sesekali)",
      "Mual sedang (beberapa kali dalam sehari)",
      "Mual berat (terus menerus dan muntah)",
      "Tidak"
    ]
  },
  {
    kode: "G07",
    gejala: "Pusing Berputar",
    subGejala: [
      "Pusing ringan saat berdiri atau bangun",
      "Pusing sedang disertai kehilangan keseimbangan",
      "Pusing berat disertai muntah atau jatuh",
      "Tidak"
    ]
  },
  {
    kode: "G08",
    gejala: "Nyeri kepala secara tiba tiba",
    subGejala: [
      "Nyeri kepala cluster (rasa sakit menusuk dan membakar disekitar atau di belakang salah satu mata)",
      "Nyeri kepala tegang (pada bagian belakang kepala, bagian pelipis dan dahi)",
      "Nyeri kepala migrain (hanya pada salah satu bagian kepala)",
      "Nyeri kepala disertai demam",
      "Nyeri kepala terus menerus setelah pukulan di kepala",
      "Nyeri kepala secara tiba-tiba seperti dipukul",
      "Tidak"
    ]
  },
  {
    kode: "G09",
    gejala: "Gangguan penglihatan secara tiba tiba",
    subGejala: [
      "Tidak ada penglihatan samping atau penglihatan di atas garis tengah",
      "Penglihatan ganda yang tidak hilang saat sudah mengedipkan mata",
      "Penglihatan kabur",
      "Kehilangan penglihatan (salah satu sisi atau kedua sisi)",
      "Tidak"
    ]
  },
  {
    kode: "G10",
    gejala: "Kelumpuhan salah satu sisi wajah secara tiba tiba",
    subGejala: [
      "Lidah menyimpang ke satu sisi",
      "Salah satu sisi wajah terkulai",
      "Keluar air liur dari salah satu sisi mulut",
      "Penderita sulit tersenyum dengan simetris",
      "Tidak dapat mengerutkan dahi",
      "Tidak"
    ]
  },
  {
    kode: "G11",
    gejala: "Kesulitan berbicara secara tiba tiba",
    subGejala: [
      "Kesulitan dalam mengulang kalimat sederhana",
      "Ucapan terdengar cedal/aneh/kacau",
      "Tidak"
    ]
  },
  {
    kode: "G12",
    gejala: "Kelemahan lengan dan kaki secara tiba tiba",
    subGejala: [
      "Kehilangan koordinasi salah satu sisi lengan atau kaki",
      "Salah satu sisi lengan atau kaki mati rasa",
      "Kelemahan pada salah satu lengan dan kaki",
      "Kelemahan salah satu sisi tubuh",
      "Tidak"
    ]
  },
  {
    kode: "G13",
    gejala: "Perubahan kondisi fisik dan psikis",
    subGejala: [
      "Perubahan psikis ringan (mudah marah/sedih)",
      "Perubahan fisik (mata berkedip, otot berkedut)",
      "Perubahan ekstrem seperti halusinasi dan gemetar hebat",
      "Tidak"
    ]
  },
  {
    kode: "G14",
    gejala: "Bengong",
    subGejala: [
      "Melamun sesaat tanpa respon",
      "Bengong berulang lebih dari 10 detik",
      "Bengong dan kehilangan kontak total dengan sekitar",
      "Tidak"
    ]
  },
  {
    kode: "G15",
    gejala: "Kesemutan pada tangan dan kaki",
    subGejala: [
      "Kesemutan sesekali saat duduk lama",
      "Kesemutan terjadi setiap hari dalam waktu singkat",
      "Kesemutan menetap selama beberapa jam atau sepanjang hari",
      "Kesemutan disertai mati rasa atau tidak ada sensasi saat disentuh",
      "Tidak"
    ]
  },
  {
    kode: "G16",
    gejala: "Sensasi terbakar di tangan/kaki",
    subGejala: [
      "Rasa panas muncul hanya sesekali setelah aktivitas",
      "Sensasi terbakar terasa hampir setiap malam",
      "Sensasi terbakar terasa terus-menerus di telapak tangan/kaki",
      "Sensasi disertai dengan nyeri menusuk atau seperti disiram air panas",
      "Tidak"
    ]
  },
  {
    kode: "G17",
    gejala: "Penurunan refleks atau kekakuan otot",
    subGejala: [
      "Refleks tubuh menurun (reaksi tubuh lambat saat disentuh/ditarik)",
      "Kekakuan otot saat bangun tidur, hilang saat sudah bergerak",
      "Kekakuan menetap, sulit bergerak saat beraktivitas",
      "Tidak bisa meluruskan lengan/kaki secara normal karena kaku",
      "Tidak"
    ]
  },
  {
    kode: "G18",
    gejala: "Demam",
    subGejala: [
      "Demam ringan (suhu < 38℃)",
      "Demam sedang (suhu 38,1℃ - 40℃)",
      "Demam tinggi (suhu > 40℃)",
      "Tidak"
    ]
  },
  {
    kode: "G19",
    gejala: "Kejang kejang",
    subGejala: [
      "Kejang-kejang ringan (absence)",
      "Kejang tonik atau klonik sedang",
      "Kejang-kejang tonik klonik berat",
      "Tidak"
    ]
  },
  {
    kode: "G20",
    gejala: "Nyeri memburuk saat bangun tidur atau duduk lama",
    subGejala: [
      "Nyeri terasa kaku saat bangun pagi, membaik setelah bergerak",
      "Nyeri muncul setelah duduk lama",
      "Nyeri konstan meskipun tidak beraktivitas",
      "Nyeri sangat mengganggu aktivitas harian seperti bekerja atau belajar",
      "Tidak"
    ]
  },
  {
    kode: "G21",
    gejala: "Kesulitan membungkuk atau mengangkat beban",
    subGejala: [
      "Tidak nyaman saat membungkuk atau mengangkat barang ringan",
      "Nyeri ringan saat membungkuk",
      "Nyeri meningkat saat mengangkat beban sedang",
      "Tidak bisa membungkuk sama sekali karena nyeri punggung",
      "Tidak"
    ]
  },
  {
    kode: "G22",
    gejala: "Kehilangan kesadaran sesaat",
    subGejala: [
      "Kehilangan kesadaran sesaat (<10 detik)",
      "Kehilangan kesadaran 10–60 detik",
      "Hilang kesadaran lebih dari 1 menit",
      "Tidak"
    ]
  },
  {
    kode: "G23",
    gejala: "Perubahan perilaku sebelum kejang",
    subGejala: [
      "Perubahan perilaku ringan sebelum kejang (gelisah)",
      "Perubahan perilaku sedang (berteriak/tidak fokus)",
      "Perubahan perilaku berat (panik/menangis/tidak sadar)",
      "Tidak"
    ]
  },
  {
    kode: "G24",
    gejala: "Gerakan mata tidak terkontrol (nystagmus)",
    subGejala: [
      "Gerakan mata tak terkendali sesekali",
      "Gerakan mata berulang selama beberapa detik",
      "Gerakan mata terus menerus dan menyebabkan pusing",
      "Tidak"
    ]
  }
];

export default gejalaData;
  