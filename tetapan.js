/* ==========================================================
   TETAPAN
   Hanya fail ini perlu diubah selepas Google Apps Script siap.
   ========================================================== */

/* 1. Tampal URL Web App daripada Google Apps Script di sini.
      Contoh: https://script.google.com/macros/s/AKfycb....../exec   */
const URL_APPS_SCRIPT = "https://script.google.com/macros/s/AKfycbxcgdcMVlAhVoOjrcj-bHuEA0P5mVHD3eaJg5p46TmKEiNIg-V2GxFYsv7agmJDWqo/exec";

/* 2. PIN untuk membuka papan analisis guru (analisis.html).
      Tukar kepada nombor pilihan cikgu.                          */
const PIN_GURU = "2503";

/* 3. Senarai kelas dan nama murid.
      Tambah kelas baharu mengikut format yang sama.              */
const KELAS = {
  "5 CEMERLANG":[
    "AMIRUL HAKIMI BIN MOHD SHAHRIL",
    "MUHAMAD ALIF FARISH BIN MOHD FAZLI",
    "MUHAMMAD AMIERUL ZAFRAN BIN HARUN",
    "MUHAMMAD ASHRAF MIKHAIL BIN ABDULLAH",
    "MUHAMMAD DANIEL FITRI BIN MOHD FAIZUL",
    "MUHAMMAD IFFAT MIFZAL BIN MUHAMMAD IZZAT",
    "MUHAMMAD ISKANDAR DZULKARNAIN BIN MOHD ROZAIDI",
    "NABILAH BINTI SARDI",
    "NUR AFIZA ALYSHA BINTI ABDUL QAYYUM",
    "NUR AIN QALESYA BINTI ABDUL RAHMAN",
    "NUR ALYA NABIHAH BINTI MOHAMAD SAHIL",
    "NUR AN NISA NABILA BINTI AHMAD ZAMZURI",
    "NUR HAJRATUL INSYIRAH BINTI RAZIS",
    "NUR HANIM IDAYU BINTI SHAMSUL",
    "NUR HUSNA MADIHAH BINTI HASRUL",
    "NURHIDAYAH BINTI ZAINUDDIN",
    "NURUL ATHIRAH BINTI ABDULLAH",
    "NURUL FARAHANA BINTI W R AHMAR",
    "PUTERI NUR SYUHADAH BINTI MOHD HANAFFIAH",
    "PUTRI ALIAH MAISARAH BINTI NORHISAM",
    "PUTRI IMANATASYA BINTI ABDULLAH",
    "PUTRI NURUL SYIFA SUHAIMI BINTI ABDUL HAFIZ",
    "RABIATUL ADAWIAH BINTI MASNISHAM",
    "SITI AISYAH BINTI ASMUNI",
    "SITI NUR KARMILA IZZATI BINTI OMARZIN",
    "SYED ABDUL RAHMAN BIN SYED MUHAMAD ZAHIR"
  ]
};
