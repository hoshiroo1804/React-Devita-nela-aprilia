import React from "react";

const article = {
  title: {
    id: "Buat Akun",
    en: "Create Account"
  },
  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
  }
};

function ArticleComponent() {
  return (
    <div>
      <center>
        <img className="img-responsive" src="src/gambar/Bootstrap_logopng.png" alt="" width="50" height="40" style={{ marginTop: '5%' }} />
      </center>
      <center>
        <div style={{ paddingTop: '20px' }}></div>
      </center>
      <h3>{article.title.en}</h3>
      <p>{article.description.en}</p>
    </div>
  );
}

export default ArticleComponent;
